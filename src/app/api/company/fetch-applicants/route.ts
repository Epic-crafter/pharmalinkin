import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo";
import { JobApplication } from "@/models/application";
import { jobSchema } from "@/models/job-post";
import mongoose from "mongoose";
import { ProfileSchema } from "@/models/user-profile";

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();
    mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);
    mongoose.models.Job || mongoose.model("Job", jobSchema);

    const { searchParams } = new URL(req.url);
    const jobId = searchParams.get("jobId");
    const status = searchParams.get("status"); // New status parameter

    if (!jobId) {
      return NextResponse.json(
        { message: "Job ID is required", success: false },
        { status: 400 }
      );
    }

    // Build the query object based on jobId and optionally status
    const query: any = { job: jobId };
    if (status) {
      query.status = status; // Filter by status if provided
    }

    // Find job applications related to the jobId and populate applicant and job details
    const jobApplications = await JobApplication.find(query)
      .populate("applicant").populate("aplicantProfile")
      .populate("job", "title");

    if (!jobApplications.length) {
      return NextResponse.json(
        { message: "No applicants found for this job", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, applicants: jobApplications },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching applicants:", error);
    return NextResponse.json(
      { message: "Failed to fetch applicants.", success: false, error },
      { status: 500 }
    );
  }
}
