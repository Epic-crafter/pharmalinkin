import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  bio: {
    type: String,
    default: '',
  },
  location: {
    type: String,
    default: '',
  },
  socialLinks: {
    linkedin: { type: String, default: '' },
    github: { type: String, default: '' },
    twitter: { type: String, default: '' },
  },
  skills: {
    type: [String],
    default: [],
  },
  experience: [
    {
      company: { type: String, required: true },
      position: { type: String, required: true },
      startDate: { type: Date, required: true },
      endDate: { type: Date },
      description: { type: String },
    },
  ],
  education: [
    {
      institution: { type: String, required: true },
      degree: { type: String, required: true },
      fieldOfStudy: { type: String, required: true },
      startDate: { type: Date, required: true },
      endDate: { type: Date },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Profile = mongoose.models.Profile || mongoose.model('Profile', ProfileSchema);

export { Profile };
