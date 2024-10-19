import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["Admin", "Employee", "Employer"],
    required: true,
  },
  lastActive: { type: Date, required: true, default: Date.now },
  status: {
    type: String,
    default: "inactive",
    enum: ["active", "inactive"],
    required: true,
  },
  profilePicture: {
    type: String,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKKOdmJz8Z2pDtYgFgR2u9spABvNNPKYYtGw&s",
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
  },
  companyProfile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CompanyProfile',
  },
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export { User };
