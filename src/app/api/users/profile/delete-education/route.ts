import { connectToDatabase } from "@/lib/mongo";
import { Profile } from "@/models/user-profile";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest) => {
  try {
    const { userId, educationId } = await req.json();

    // Validate input
    if (!userId || !educationId) {
      return NextResponse.json({
        message: "User ID and Education ID are required",
        status: false,
      });
    }

    if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(educationId)) {
      return NextResponse.json({
        message: "Invalid User ID or Education ID format",
        status: false,
      });
    }

    await connectToDatabase();

    // Find the user profile and remove the education entry by educationId
    const profile = await Profile.findOneAndUpdate(
      { user: userId },
      { $pull: { education: { uniqueId: educationId } } },
      { new: true }
    );

    if (!profile) {
      return NextResponse.json({
        message: "Profile or education entry not found",
        status: false,
      });
    }

    return NextResponse.json({
      message: "Education entry deleted successfully",
      status: true,
      profile,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Internal server error",
      status: false,
    });
  }
};
