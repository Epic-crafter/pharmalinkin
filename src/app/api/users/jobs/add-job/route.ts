import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo";
import { Job } from "@/models/job-post";
import { CompanyProfile } from "@/models/company-profile"; // Import company profile model
import { getToken } from "next-auth/jwt";

// POST request handler for creating a new job post
export async function POST(req: NextRequest) {
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

    // Fetch company profile using the user id from token
    const companyProfile = await CompanyProfile.findOne({ user: token.id });

    // If company profile does not exist, return an error
    if (!companyProfile) {
      return NextResponse.json(
        { success: false, message: "No company profile found for this user." },
        { status: 404 }
      );
    }

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
      experienceLevel,
      applicationDeadline,
      category,
      skillsRequired,
    } = await req.json();

    // Validate if all required fields are present before creating the Job document
    if (
      !title ||
      !description ||
      !requirements ||
      !location ||
      !country ||
      !category
    ) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create a new Job document with companyName and companyWebsite from the company profile
    const job = new Job({
      title,
      description,
      requirements,
      location,
      country,
      jobType,
      salary,
      salaryCurrency,
      companyName: companyProfile.companyName, // Set company name from company profile
      companyWebsite: companyProfile.website,  // Set company website from company profile
      experienceLevel,
      applicationDeadline,
      category,
      skillsRequired,
      createdBy: token.id,
      company:companyProfile.id
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
