import mongoose from "mongoose";

export const emailVerificationSchema = new mongoose.Schema({
  
  email: {
    type: String,
  },
  phoneNumber:{
    type:String,
  },
  otp: {
    type: Number,
    
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const emailVerification =
  mongoose.models.emailVerificationSchema || mongoose.model("emailVerificationSchema", emailVerificationSchema);

export { emailVerification };
