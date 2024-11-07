import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo";
import { Job } from "@/models/job-post";
import { getToken } from "next-auth/jwt";

// GET request handler for fetching jobs posted by the logged-in user
export async function GET(req: NextRequest) {
  try {
    // Get token from request
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // Validate the token
    if (!token) {
      return NextResponse.json(
        { message: "Invalid User! Please login again.", status: false },
        { status: 401 }
      );
    }

    // Connect to the database
    await connectToDatabase();

    // Fetch jobs that the user has posted using the user ID from the token
    const jobs = await Job.find({ createdBy: token.id }).populate("company");

    // If no jobs are found, return a message
    if (!jobs || jobs.length === 0) {
      return NextResponse.json(
        { success: false, message: "No jobs found for this user." },
        { status: 404 }
      );
    }

    // Return the jobs posted by the user
    return NextResponse.json({ success: true, jobs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return NextResponse.json(
      { success: false, error: "Server error", message: error },
      { status: 500 }
    );
  }
}
