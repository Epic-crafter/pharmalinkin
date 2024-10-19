import mongoose from 'mongoose';

const CompanyProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  companyName: {
    type: String,
    required: true,
    trim: true,
  },
  industry: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  website: {
    type: String,
  },
  about: {
    type: String,
    default: '',
  },
  foundedYear: {
    type: Number,
  },
  companySize: {
    type: String,
    enum: ['1-10', '11-50', '51-200', '201-500', '501-1000', '1001-5000', '5000+'],
  },
  socialLinks: {
    linkedin: { type: String, default: '' },
    facebook: { type: String, default: '' },
    twitter: { type: String, default: '' },
  },
  logo: {
    type: String,
    default: 'https://example.com/default-logo.png',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CompanyProfile = mongoose.models.CompanyProfile || mongoose.model('CompanyProfile', CompanyProfileSchema);

export { CompanyProfile };
