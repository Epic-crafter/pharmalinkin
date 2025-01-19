import mongoose from "mongoose";

const { Schema } = mongoose;

// Job Schema
export const jobSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    requirements: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    jobcategory:{
         type:String,
         enum:[],
         required:true,
         default:"Full Stack",
    },
    jobType: {
      type: String,
      required:true,
      enum: [
        "FULL_TIME",
        "PART_TIME",
        "CONTRACT",
        "FREELANCE",
        "INTERNSHIP",
        "TEMPORARY",
      ],
      default: "FULL_TIME",
    },
    salary: {
      type: Number,
    },
    salaryCurrency: {
      type: String,
      default: "INR",
    },
    companyName: {
      type: String,
      required: true,
    },
    companyWebsite: {
      type: String,
    },
    experienceLevel: {
      type: String,
      enum: ["ENTRY_LEVEL", "MID_LEVEL", "SENIOR_LEVEL", "EXECUTIVE"],
      default: "ENTRY_LEVEL",
    },
    applicationDeadline: {
      type: Date,
      required: true,
    },
    imageurl:{
      type:String,
    },
    category: {
      type: String,
      required: true,
    },
    address:{  
      type:String,
    },
    contactperson:{
      type:String,
    },
    mobile:{
      type:String,
    },
    email:{
      type:String,
    },
    coverimageurl:{
      type:String,
    },
    postalcode :{
      type:String,
    },
    salaryoffer:{
      type:Number,
    },
    qualification:{
      type:String,
    },
    experience:{
      type:String,
    },
    videourl:{
      type:String,
      required:true,
    },
    fileurl:{
      type:String,
    },
    closingdate:{
      type:Date,
      default:Date.now,
    },
    postedDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE", "FILLED", "CLOSED"],
      default: "ACTIVE",
    },
    skillsRequired: {
      type: [String],
      default: [],
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      // required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CompanyProfile",
      required: true,
    },
    applicants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "JobApplication",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);

export { Job };
