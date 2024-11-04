import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo";
import { Job } from "@/models/job-post";

export async function GET(req: NextRequest) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Extract jobId from query parameters
    const { searchParams } = new URL(req.url);
    const jobId = searchParams.get("jobId");

    if (!jobId) {
      return NextResponse.json(
        { success: false, message: "Job ID is required" },
        { status: 400 }
      );
    }

    // Fetch job details by ID, populate relevant fields
    const job = await Job.findById(jobId)
      .populate('createdBy', 'name')
      .populate({
        path: 'company',
        model: 'CompanyProfile',
        select: 'companyName industry socialLinks logo location website',
      });

    // Check if the job exists
    if (!job) {
      return NextResponse.json(
        { success: false, message: "Job not found" },
        { status: 404 }
      );
    }

    // Send job details back to the client
    return NextResponse.json({ success: true, job }, { status: 200 });
  } catch (error) {
    console.error("Error fetching job details:", error);
    return NextResponse.json(
      { success: false, message: "Server error", error: error },
      { status: 500 }
    );
  }
}
