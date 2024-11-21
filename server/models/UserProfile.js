const mongoose = require('mongoose');

const UserProfileSchema = new mongoose.Schema({
  ageGroup: { type: String, required: true },
  healthConditions: { type: [String], default: [] },
  deficiencies: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
});

const UserProfile = mongoose.model('UserProfile', UserProfileSchema);

module.exports = UserProfile;
