const mongoose = require('mongoose');

const commitmentSchema = new mongoose.Schema({
  commitmentId: { type: String, unique: true, index: true },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true, index: true },
  industryId: { type: mongoose.Schema.Types.ObjectId, ref: 'IndustryProfile', required: true, index: true },
  type: {
    type: String,
    enum: ['Funding', 'Equipment', 'Technical Support', 'Mentorship', 'Software', 'Infrastructure', 'Field Support', 'Other'],
    required: true
  },
  description: { type: String, required: true, trim: true },
  amount: mongoose.Schema.Types.Mixed,
  quantity: mongoose.Schema.Types.Mixed,
  dueDate: Date,
  linkedMilestoneId: { type: mongoose.Schema.Types.ObjectId },
  status: {
    type: String,
    enum: ['Committed', 'In Progress', 'Delivered', 'Under University Verification', 'Verified', 'Rejected', 'Overdue'],
    default: 'Committed',
    index: true
  },
  proofDocuments: [{
    url: String,
    filename: String,
    mimetype: String,
    uploadedAt: { type: Date, default: Date.now }
  }],
  deliveredAt: Date,
  verifiedAt: Date,
  verifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  verificationComment: String,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

commitmentSchema.pre('validate', function(next) {
  if (!this.commitmentId) {
    this.commitmentId = `COM-${Date.now()}-${Math.floor(1000 + Math.random() * 9000)}`;
  }
  next();
});

module.exports = mongoose.models.ProjectCommitment || mongoose.model('ProjectCommitment', commitmentSchema);
