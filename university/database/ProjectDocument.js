const mongoose = require('mongoose');

const projectDocumentSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true, index: true },
  milestoneId: mongoose.Schema.Types.ObjectId,
  commitmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'ProjectCommitment' },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  documentType: {
    type: String,
    enum: ['Proposal', 'Prototype', 'Commitment Proof', 'Testing Report', 'Field Report', 'Site Visit Report', 'Implementation Evidence', 'Final Report', 'Other'],
    required: true
  },
  url: { type: String, required: true },
  filename: { type: String, required: true },
  mimetype: String,
  uploadedAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.models.ProjectDocument || mongoose.model('ProjectDocument', projectDocumentSchema);
