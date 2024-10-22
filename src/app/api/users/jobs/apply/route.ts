import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo";
import { Job } from "@/models/job-post";
import { JobApplication } from "@/models/application";
import { User } from "@/models/user";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();

    const { jobId, applicantId, resumeUrl, coverLetter } = await req.json();

    // Check if the job exists
    const job = await Job.findById(jobId);
    if (!job) {
      return NextResponse.json(
        { message: "Job not found", success: false },
        { status: 404 }
      );
    }

    // Check if the applicant exists
    const applicant = await User.findById(applicantId);
    if (!applicant) {
      return NextResponse.json(
        { message: "Applicant not found", success: false },
        { status: 404 }
      );
    }

    // Check if the applicant has already applied
    const alreadyApplied = await JobApplication.findOne({
      job: jobId,
      applicant: applicantId,
    });
    if (alreadyApplied) {
      return NextResponse.json(
        { message: "You have already applied for this job", success: false },
        { status: 400 }
      );
    }

    // Create a new job application
    const jobApplication = new JobApplication({
      applicant: applicantId,
      job: jobId,
      resumeUrl,
      coverLetter,
    });
    await jobApplication.save();

    // Add the applicant to the job's applicants array
    job.applicants.push(applicantId);
    await job.save();

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        data: jobApplication,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error applying for job:", error);
    return NextResponse.json(
      {
        message: "Failed to apply for the job.",
        success: false,
        error,
      },
      { status: 500 }
    );
  }
}
