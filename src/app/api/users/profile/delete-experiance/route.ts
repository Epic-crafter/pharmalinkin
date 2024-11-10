import { connectToDatabase } from "@/lib/mongo";
import { Profile } from "@/models/user-profile";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest) => {
  try {
    const { userId, experienceId } = await req.json();

    // Validate input
    if (!userId || !experienceId) {
      return NextResponse.json({
        message: "User ID and Experience ID must be provided",
        status: false,
      });
    }

    if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(experienceId)) {
      return NextResponse.json({
        message: "Invalid ID format",
        status: false,
      });
    }

    await connectToDatabase();

    // Find the user profile and remove the experience entry
    const profile = await Profile.findOneAndUpdate(
      { user: userId },
      { $pull: { experience: { uniqueId: experienceId } } },
      { new: true }
    );

    if (!profile) {
      return NextResponse.json({
        message: "Profile not found",
        status: false,
      });
    }

    return NextResponse.json({
      message: "Experience entry deleted successfully",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Internal server error",
      status: false,
    });
  }
};
