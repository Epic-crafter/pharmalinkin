import mongoose, { Schema } from "mongoose";

// Job Application Schema
const jobApplicationSchema = new Schema(
  {
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    aplicantProfile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
      required: true,
    },
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    resumeUrl: {
      type: String,
      required: true,
    },
    coverLetter: {
      type: String,
    },
    status: {
      type: String,
      enum: [
        "PENDING",
        "REVIEWED",
        "INTERVIEW_SCHEDULED",
        "OFFERED",
        "REJECTED",
      ],
      default: "PENDING",
    },
    appliedDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const JobApplication = mongoose.models.JobApplication || mongoose.model("JobApplication", jobApplicationSchema);

export { JobApplication };
