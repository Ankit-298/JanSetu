const mongoose = require('mongoose');

const workflowRecordSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true, index: true },
  milestoneId: mongoose.Schema.Types.ObjectId,
  type: {
    type: String,
    enum: ['prototype', 'small_scale_test', 'field_test', 'site_visit', 'implementation'],
    required: true,
    index: true
  },
  version: String,
  description: String,
  featuresCompleted: [String],
  demoLink: String,
  files: [{ url: String, filename: String, mimetype: String, uploadedAt: Date }],
  location: String,
  coordinates: { lat: Number, lng: Number },
  startDate: Date,
  endDate: Date,
  participants: [String],
  usersOrWorkers: Number,
  objective: String,
  testCases: [{ name: String, passed: Boolean, notes: String }],
  passed: Number,
  failed: Number,
  successRate: Number,
  equipmentUsed: [String],
  observations: String,
  issues: String,
  performanceMetrics: mongoose.Schema.Types.Mixed,
  report: { url: String, filename: String, mimetype: String },
  purpose: String,
  submittedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  reviewComments: String,
  status: {
    type: String,
    enum: ['Draft', 'Submitted', 'Needs Revision', 'Approved', 'Scheduled', 'Completed', 'Report Submitted', 'Verified', 'Started'],
    default: 'Draft'
  },
  submittedAt: Date,
  reviewedAt: Date,
  completedAt: Date
}, { timestamps: true });

workflowRecordSchema.index({ projectId: 1, type: 1, createdAt: -1 });

module.exports = mongoose.models.ProjectWorkflowRecord || mongoose.model('ProjectWorkflowRecord', workflowRecordSchema);
