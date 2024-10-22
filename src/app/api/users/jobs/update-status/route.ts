import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo";
import { JobApplication } from "@/models/application";

export async function PATCH(req: NextRequest) {
  try {
    await connectToDatabase();

    // Parse request body to get applicationId and new status
    const { applicationId, status } = await req.json();

    if (!applicationId || !status) {
      return NextResponse.json(
        { message: "Application ID and status are required", success: false },
        { status: 400 }
      );
    }

    // Validate the status (optional: depends on your use case)
    const validStatuses = [
      "PENDING",
      "REVIEWED",
      "INTERVIEW_SCHEDULED",
      "OFFERED",
      "REJECTED",
    ];
    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        { message: "Invalid status value", success: false },
        { status: 400 }
      );
    }

    // Find the application by ID and update its status
    const updatedApplication = await JobApplication.findByIdAndUpdate(
      applicationId,
      { status }, // Update the status field
      { new: true } // Return the updated document
    );

    if (!updatedApplication) {
      return NextResponse.json(
        { message: "Job application not found", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Status updated successfully",
        updatedApplication,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating application status:", error);
    return NextResponse.json(
      {
        message: "Failed to update application status.",
        success: false,
        error,
      },
      { status: 500 }
    );
  }
}
