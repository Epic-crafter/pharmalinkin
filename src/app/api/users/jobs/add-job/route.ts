import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo";
import { Job } from "@/models/job-post";

// POST request handler for creating a new job post
export async function POST(req: NextRequest) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Parse the request body
    const {
      title,
      description,
      requirements,
      location,
      country,
      jobType,
      salary,
      salaryCurrency,
      companyName,
      companyWebsite,
      experienceLevel,
      applicationDeadline,
      category,
      skillsRequired,
      createdBy,
    } = await req.json(); // Properly parse the JSON body

    // Validate if all required fields are present before creating the Job document
    if (
      !title ||
      !description ||
      !requirements ||
      !location ||
      !country ||
      !category ||
      !createdBy
    ) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create a new Job document
    const job = new Job({
      title,
      description,
      requirements,
      location,
      country,
      jobType,
      salary,
      salaryCurrency,
      companyName,
      companyWebsite,
      experienceLevel,
      applicationDeadline,
      category,
      skillsRequired,
      createdBy,
    });

    // Save the job to the database
    await job.save();

    // Send a response back to the client
    return NextResponse.json({ success: true, job }, { status: 201 });
  } catch (error) {
    console.error("Error creating job:", error);
    return NextResponse.json(
      { success: false, error: "Server error", message: error },
      { status: 500 }
    );
  }
}
