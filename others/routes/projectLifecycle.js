const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/roleCheck');
const Project = require('../../university/database/Project');
const ProjectCommitment = require('../../university/database/ProjectCommitment');
const ProjectWorkflowRecord = require('../../university/database/ProjectWorkflowRecord');
const ProjectDocument = require('../../university/database/ProjectDocument');
const Proposal = require('../models/Proposal');
const Challenge = require('../models/Challenge');
const IndustryProfile = require('../models/IndustryProfile');
const User = require('../models/User');
const Notification = require('../models/Notification');
const { createNotification, logActivity } = require('../services/notificationService');

const isId = value => mongoose.Types.ObjectId.isValid(String(value || ''));
const idEquals = (a, b) => a && b && String(a) === String(b);

async function getProject(projectId) {
  if (!isId(projectId)) return null;
  return Project.findById(projectId);
}

async function getIndustryForUser(user) {
  if (!user) return null;
  if (user.industryPartnerId && isId(user.industryPartnerId)) return IndustryProfile.findById(user.industryPartnerId);
  const identity = user.organization || user.institution;
  if (identity) return IndustryProfile.findOne({ $or: [{ name: new RegExp(`^${identity}$`, 'i') }, { companyName: new RegExp(`^${identity}$`, 'i') }] });
  return null;
}

async function canAccessProject(req, project, roles = []) {
  if (!project || !req.user) return false;
  if (req.user.role === 'admin') return true;
  if (roles.length && !roles.includes(req.user.role)) return false;

  if (req.user.role === 'industry_rep') {
    const industry = await getIndustryForUser(req.user);
    return Boolean(industry && (idEquals(project.assignedIndustry, industry._id) || idEquals(project.assignedIndustryDetails?.partnerId, industry._id)));
  }

  if (req.user.role === 'university_rep') {
    if (project.proposalId) {
      const proposal = await Proposal.findById(project.proposalId).select('submittedBy university').lean();
      if (proposal?.submittedBy && idEquals(proposal.submittedBy, req.user._id)) return true;
      if (proposal?.university && req.user.universityId && idEquals(proposal.university, req.user.universityId)) return true;
    }
    const userInstitution = String(req.user.institution || req.user.organization || '').trim().toLowerCase();
    const projectInstitution = String(project.mentor?.org || '').trim().toLowerCase();
    if (userInstitution && projectInstitution && (userInstitution === projectInstitution || userInstitution.includes(projectInstitution) || projectInstitution.includes(userInstitution))) return true;
    return Boolean(project.teamId && req.user.universityId && idEquals(project.teamId, req.user.teamId));
  }

  if (req.user.role === 'citizen') {
    const challenge = project.problemId ? await Challenge.findById(project.problemId).select('submittedBy').lean() : null;
    return Boolean(challenge?.submittedBy && idEquals(challenge.submittedBy, req.user._id));
  }
  return false;
}

function addLifecycleState(project, state, user, note) {
  if (project.lifecycleState === state) return;
  project.lifecycleState = state;
  project.lifecycleHistory = project.lifecycleHistory || [];
  project.lifecycleHistory.push({ state, changedAt: new Date(), changedBy: user?._id || null, note });
}

async function recordActivity(req, action, project, description, metadata = {}) {
  await logActivity({
    actor: req.user,
    action,
    target: { type: 'System', id: project._id, name: project.title },
    description,
    metadata: { projectId: project._id, ...metadata },
    req
  });
}

async function notifyProjectUsers(project, notification) {
  const recipients = new Set();
  if (project.problemId) {
    const challenge = await Challenge.findById(project.problemId).select('submittedBy').lean();
    if (challenge?.submittedBy) recipients.add(String(challenge.submittedBy));
  }
  if (project.proposalId) {
    const proposal = await Proposal.findById(project.proposalId).select('submittedBy').lean();
    if (proposal?.submittedBy) recipients.add(String(proposal.submittedBy));
  }
  if (project.assignedIndustry) {
    const industryUsers = await User.find({ role: 'industry_rep', industryPartnerId: project.assignedIndustry }).select('_id').lean();
    industryUsers.forEach(user => recipients.add(String(user._id)));
  }
  await Promise.all([...recipients].map(recipient => createNotification({ recipient, ...notification })));
}

async function refreshHealth(projectId) {
  const project = await Project.findById(projectId);
  if (!project) return null;
  const commitments = await ProjectCommitment.find({ projectId }).lean();
  const now = Date.now();
  const overdue = commitments.find(item => item.dueDate && new Date(item.dueDate).getTime() < now && !['Verified', 'Delivered'].includes(item.status));
  const pendingRequired = commitments.find(item => ['Committed', 'In Progress', 'Under University Verification'].includes(item.status));
  project.health = {
    status: overdue ? 'AT_RISK' : (pendingRequired && project.lifecycleState === 'IMPLEMENTATION' ? 'BLOCKED' : 'ON_TRACK'),
    reason: overdue ? `Commitment ${overdue.commitmentId} is overdue.` : (pendingRequired && project.lifecycleState === 'IMPLEMENTATION' ? `Commitment ${pendingRequired.commitmentId} is not verified.` : 'Commitments and workflow are progressing normally.'),
    calculatedAt: new Date()
  };
  await project.save();
  return project;
}

router.get('/projects/:projectId/lifecycle', protect, async (req, res, next) => {
  try {
    const project = await getProject(req.params.projectId);
    if (!(await canAccessProject(req, project))) return res.status(403).json({ success: false, error: 'Project access denied' });
    const [commitments, workflow, documents] = await Promise.all([
      ProjectCommitment.find({ projectId: project._id }).populate('verifiedBy', 'name role').sort({ createdAt: -1 }).lean(),
      ProjectWorkflowRecord.find({ projectId: project._id }).sort({ createdAt: -1 }).lean(),
      ProjectDocument.find({ projectId: project._id }).sort({ uploadedAt: -1 }).lean()
    ]);
    res.json({ success: true, project, commitments, workflow, documents });
  } catch (error) { next(error); }
});

router.post('/projects/:projectId/documents', protect, async (req, res, next) => {
  try {
    const project = await getProject(req.params.projectId);
    if (!(await canAccessProject(req, project))) return res.status(403).json({ success: false, error: 'Project access denied' });
    const { documentType, url, filename, mimetype, milestoneId, commitmentId } = req.body;
    if (!documentType || !url || !filename) return res.status(400).json({ success: false, error: 'documentType, url and filename are required' });
    const document = await ProjectDocument.create({ projectId: project._id, documentType, url, filename, mimetype, milestoneId, commitmentId, uploadedBy: req.user._id });
    await recordActivity(req, 'system_event', project, `Project document uploaded: ${filename}.`, { documentId: document._id, event: 'document_uploaded' });
    res.status(201).json({ success: true, document });
  } catch (error) { next(error); }
});

router.post('/industry/projects/:projectId/commitments', protect, authorize('industry_rep'), async (req, res, next) => {
  try {
    const project = await getProject(req.params.projectId);
    const industry = await getIndustryForUser(req.user);
    if (!(await canAccessProject(req, project, ['industry_rep'])) || !industry) return res.status(403).json({ success: false, error: 'Industry project access denied' });
    const { type, description, amount, quantity, dueDate, linkedMilestoneId } = req.body;
    if (!type || !description) return res.status(400).json({ success: false, error: 'type and description are required' });
    const commitment = await ProjectCommitment.create({ projectId: project._id, industryId: industry._id, type, description, amount, quantity, dueDate, linkedMilestoneId, createdBy: req.user._id });
    if (project.lifecycleState === 'APPROVED' || project.lifecycleState === 'INDUSTRY_MATCHED') addLifecycleState(project, 'IN_PROGRESS', req.user, 'Industry commitment added.');
    await project.save();
    await recordActivity(req, 'system_event', project, `Industry commitment ${commitment.commitmentId} added.`, { commitmentId: commitment._id, event: 'commitment_added' });
    res.status(201).json({ success: true, commitment, project });
  } catch (error) { next(error); }
});

router.patch('/industry/projects/:projectId/commitments/:commitmentId', protect, authorize('industry_rep'), async (req, res, next) => {
  try {
    const project = await getProject(req.params.projectId);
    const industry = await getIndustryForUser(req.user);
    const commitment = await ProjectCommitment.findOne({ _id: req.params.commitmentId, projectId: req.params.projectId, industryId: industry?._id });
    if (!(await canAccessProject(req, project, ['industry_rep'])) || !commitment) return res.status(403).json({ success: false, error: 'Commitment access denied' });
    if (!['Committed', 'In Progress'].includes(commitment.status)) return res.status(409).json({ success: false, error: 'Only undelivered commitments can be edited' });
    ['type', 'description', 'amount', 'quantity', 'dueDate', 'linkedMilestoneId'].forEach(field => { if (req.body[field] !== undefined) commitment[field] = req.body[field]; });
    await commitment.save();
    await refreshHealth(project._id);
    res.json({ success: true, commitment });
  } catch (error) { next(error); }
});

router.post('/industry/projects/:projectId/commitments/:commitmentId/deliver', protect, authorize('industry_rep'), async (req, res, next) => {
  try {
    const project = await getProject(req.params.projectId);
    const industry = await getIndustryForUser(req.user);
    const commitment = await ProjectCommitment.findOne({ _id: req.params.commitmentId, projectId: req.params.projectId, industryId: industry?._id });
    if (!(await canAccessProject(req, project, ['industry_rep'])) || !commitment) return res.status(403).json({ success: false, error: 'Commitment access denied' });
    commitment.status = 'Under University Verification';
    commitment.deliveredAt = new Date();
    if (Array.isArray(req.body.proofDocuments)) commitment.proofDocuments = req.body.proofDocuments;
    await commitment.save();
    await recordActivity(req, 'system_event', project, `Commitment ${commitment.commitmentId} delivered for university verification.`, { commitmentId: commitment._id, event: 'commitment_delivered' });
    await notifyProjectUsers(project, { sender: req.user._id, type: 'milestone_completed', title: 'Industry commitment delivered', message: `${commitment.description} is ready for university verification.`, data: { projectId: project._id, url: `/university/projects/${project._id}` }, priority: 'high' });
    res.json({ success: true, commitment });
  } catch (error) { next(error); }
});

router.patch('/university/projects/:projectId/commitments/:commitmentId/verify', protect, authorize('university_rep', 'admin'), async (req, res, next) => {
  try {
    const project = await getProject(req.params.projectId);
    if (!(await canAccessProject(req, project, ['university_rep', 'admin']))) return res.status(403).json({ success: false, error: 'University project access denied' });
    const commitment = await ProjectCommitment.findOne({ _id: req.params.commitmentId, projectId: req.params.projectId });
    if (!commitment) return res.status(404).json({ success: false, error: 'Commitment not found' });
    if (commitment.status !== 'Under University Verification') return res.status(409).json({ success: false, error: 'Commitment is not awaiting verification' });
    const approved = req.body.status === 'Verified';
    commitment.status = approved ? 'Verified' : 'Rejected';
    commitment.verifiedAt = new Date();
    commitment.verifiedBy = req.user._id;
    commitment.verificationComment = req.body.verificationComment || '';
    await commitment.save();
    await refreshHealth(project._id);
    await recordActivity(req, 'system_event', project, `Commitment ${commitment.commitmentId} was ${commitment.status.toLowerCase()}.`, { commitmentId: commitment._id, event: approved ? 'commitment_verified' : 'commitment_rejected' });
    await notifyProjectUsers(project, {
      sender: req.user._id,
      type: approved ? 'milestone_completed' : 'system_alert',
      title: `Commitment ${commitment.status}`,
      message: `${commitment.description} was marked ${commitment.status.toLowerCase()} by the university.`,
      data: { projectId: project._id, commitmentId: commitment._id },
      priority: approved ? 'normal' : 'high'
    });
    res.json({ success: true, commitment });
  } catch (error) { next(error); }
});

async function createWorkflow(req, res, type, roles) {
  const project = await getProject(req.params.projectId);
  if (!(await canAccessProject(req, project, roles))) return res.status(403).json({ success: false, error: 'Project access denied' });
  if (type === 'small_scale_test') {
    const approvedPrototype = await ProjectWorkflowRecord.findOne({ projectId: project._id, type: 'prototype', status: 'Approved' });
    if (!approvedPrototype) return res.status(409).json({ success: false, error: 'Prototype must be approved before small-scale testing.' });
  }
  if (type === 'field_test') {
    const approvedSmallScaleTest = await ProjectWorkflowRecord.findOne({ projectId: project._id, type: 'small_scale_test', status: 'Approved' });
    if (!approvedSmallScaleTest) return res.status(409).json({ success: false, error: 'Small-scale testing must be approved before field testing.' });
  }
  if (type === 'implementation') {
    const approvedFieldTest = await ProjectWorkflowRecord.findOne({ projectId: project._id, type: 'field_test', status: 'Approved' });
    if (!approvedFieldTest) return res.status(409).json({ success: false, error: 'Field testing must be approved before implementation.' });
  }
  const initialStatus = type === 'site_visit' ? 'Scheduled' : (type === 'implementation' ? 'Started' : 'Submitted');
  const record = await ProjectWorkflowRecord.create({ ...req.body, projectId: project._id, type, submittedBy: req.user._id, submittedAt: new Date(), status: initialStatus });
  const nextState = { prototype: 'PROTOTYPE', small_scale_test: 'SMALL_SCALE_TESTING', field_test: 'FIELD_TESTING', implementation: 'IMPLEMENTATION' }[type];
  if (nextState) addLifecycleState(project, nextState, req.user, `${type} submitted.`);
  await project.save();
  await recordActivity(req, 'system_event', project, `${type} record submitted.`, { workflowId: record._id, event: `${type}_submitted` });
  return res.status(201).json({ success: true, record, project });
}

router.post('/projects/:projectId/prototype', protect, authorize('university_rep'), (req, res, next) => createWorkflow(req, res, 'prototype', ['university_rep']).catch(next));
router.post('/projects/:projectId/tests/small-scale', protect, authorize('university_rep'), (req, res, next) => createWorkflow(req, res, 'small_scale_test', ['university_rep']).catch(next));
router.post('/projects/:projectId/field-tests', protect, authorize('university_rep', 'industry_rep'), (req, res, next) => createWorkflow(req, res, 'field_test', ['university_rep', 'industry_rep']).catch(next));
router.post('/projects/:projectId/site-visits', protect, authorize('university_rep', 'industry_rep'), (req, res, next) => createWorkflow(req, res, 'site_visit', ['university_rep', 'industry_rep']).catch(next));
router.post('/projects/:projectId/implementation', protect, authorize('university_rep', 'industry_rep'), (req, res, next) => createWorkflow(req, res, 'implementation', ['university_rep', 'industry_rep']).catch(next));

router.patch('/projects/:projectId/prototype/:recordId/review', protect, authorize('university_rep', 'admin'), async (req, res, next) => reviewWorkflow(req, res, 'prototype', ['university_rep', 'admin']).catch(next));
router.patch('/projects/:projectId/tests/:recordId/review', protect, authorize('university_rep', 'admin'), async (req, res, next) => reviewWorkflow(req, res, 'small_scale_test', ['university_rep', 'admin']).catch(next));
router.patch('/projects/:projectId/field-tests/:recordId/review', protect, authorize('university_rep', 'admin'), async (req, res, next) => reviewWorkflow(req, res, 'field_test', ['university_rep', 'admin']).catch(next));
router.patch('/projects/:projectId/site-visits/:recordId', protect, authorize('university_rep', 'industry_rep', 'admin'), async (req, res, next) => reviewWorkflow(req, res, 'site_visit', ['university_rep', 'industry_rep', 'admin']).catch(next));

async function reviewWorkflow(req, res, type, roles) {
  const project = await getProject(req.params.projectId);
  if (!(await canAccessProject(req, project, roles))) return res.status(403).json({ success: false, error: 'Project access denied' });
  const record = await ProjectWorkflowRecord.findOne({ _id: req.params.recordId, projectId: project._id, type });
  if (!record) return res.status(404).json({ success: false, error: 'Workflow record not found' });
  if (type === 'site_visit') {
    record.status = ['Completed', 'Report Submitted', 'Verified', 'Needs Revision'].includes(req.body.status) ? req.body.status : 'Scheduled';
  } else {
    record.status = req.body.status === 'Approved' ? 'Approved' : 'Needs Revision';
  }
  record.reviewComments = req.body.reviewComments || '';
  record.reviewedBy = req.user._id;
  record.reviewedAt = new Date();
  if (record.status === 'Completed') record.completedAt = new Date();
  await record.save();
  const nextState = type === 'prototype' && record.status === 'Approved' ? 'SMALL_SCALE_TESTING' : type === 'small_scale_test' && record.status === 'Approved' ? 'FIELD_TESTING' : null;
  if (nextState) addLifecycleState(project, nextState, req.user, `${type} approved.`);
  await project.save();
  await recordActivity(req, 'system_event', project, `${type} review marked ${record.status}.`, { workflowId: record._id, event: `${type}_reviewed` });
  await notifyProjectUsers(project, {
    sender: req.user._id,
    type: record.status === 'Approved' ? 'milestone_completed' : 'system_alert',
    title: `${type.replace(/_/g, ' ')} review updated`,
    message: `${type.replace(/_/g, ' ')} was marked ${record.status}.`,
    data: { projectId: project._id, workflowId: record._id },
    priority: record.status === 'Approved' ? 'high' : 'normal'
  });
  res.json({ success: true, record, project });
}

router.patch('/admin/projects/:projectId/verify-implementation', protect, authorize('admin'), async (req, res, next) => {
  try {
    const project = await getProject(req.params.projectId);
    if (!project) return res.status(404).json({ success: false, error: 'Project not found' });
    const implementation = await ProjectWorkflowRecord.findOne({ projectId: project._id, type: 'implementation' }).sort({ createdAt: -1 });
    if (!implementation) return res.status(404).json({ success: false, error: 'Implementation record not found' });
    implementation.status = req.body.status === 'Approved' ? 'Verified' : 'Needs Revision';
    implementation.reviewedBy = req.user._id;
    implementation.reviewComments = req.body.reviewComments || '';
    implementation.reviewedAt = new Date();
    await implementation.save();
    if (implementation.status === 'Verified') addLifecycleState(project, 'CITIZEN_VERIFICATION', req.user, 'Implementation verified by admin.');
    await project.save();
    await recordActivity(req, 'system_event', project, `Implementation ${implementation.status.toLowerCase()} by admin.`, { workflowId: implementation._id, event: 'admin_verified' });
    if (implementation.status === 'Verified') await notifyProjectUsers(project, { type: 'feedback_requested', title: 'Citizen verification required', message: 'Your reported problem has been addressed. Please verify the solution at the reported location and provide your feedback.', data: { projectId: project._id }, priority: 'high' });
    res.json({ success: true, project, implementation });
  } catch (error) { next(error); }
});

router.post('/projects/:projectId/citizen-verification', protect, authorize('citizen'), async (req, res, next) => {
  try {
    const project = await getProject(req.params.projectId);
    if (!(await canAccessProject(req, project, ['citizen']))) return res.status(403).json({ success: false, error: 'Citizen project access denied' });
    const resolved = req.body.outcome === 'Problem Resolved';
    addLifecycleState(project, resolved ? 'COMPLETED' : 'REOPENED', req.user, resolved ? 'Citizen verified the solution.' : 'Citizen reported that the problem still exists.');
    project.citizenFeedback = project.citizenFeedback || [];
    project.citizenFeedback.push({ rating: req.body.rating, comment: req.body.feedback || req.body.comment, submittedAt: new Date() });
    await project.save();
    if (project.problemId) {
      const challenge = await Challenge.findById(project.problemId);
      if (challenge) { challenge.status = resolved ? 'resolved' : 'in_progress'; await challenge.save(); }
    }
    await recordActivity(req, 'system_event', project, resolved ? 'Citizen verified the completed implementation.' : 'Citizen reopened the project because the problem still exists.', { event: resolved ? 'citizen_verified' : 'problem_reopened' });
    if (!resolved) {
      const admins = await User.find({ role: 'admin' }).select('_id').lean();
      await Promise.all(admins.map(admin => createNotification({ recipient: admin._id, sender: req.user._id, type: 'system_alert', title: 'Citizen reopened a project', message: `Citizen feedback requires renewed attention for ${project.title}.`, data: { projectId: project._id }, priority: 'urgent' })));
    }
    res.json({ success: true, project });
  } catch (error) { next(error); }
});

module.exports = router;
