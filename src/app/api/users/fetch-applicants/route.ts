import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo";
import { JobApplication } from "@/models/application";

export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();

    // Get jobId from query parameters
    const { searchParams } = new URL(req.url);
    const jobId = searchParams.get("jobId");

    if (!jobId) {
      return NextResponse.json(
        { message: "Job ID is required", success: false },
        { status: 400 }
      );
    }

    // Find job applications related to the jobId and populate applicant details
    const jobApplications = await JobApplication.find({ job: jobId })
      .populate("applicant", "name email")
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
