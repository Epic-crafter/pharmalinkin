import { connectToDatabase } from "@/lib/mongo";
import { Profile } from "@/models/user-profile";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json({
        message: "User ID is required",
        status: false,
      });
    }
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return NextResponse.json({
        message: "Invalid User ID format",
        status: false,
      });
    }

    await connectToDatabase();

    // Fetch the profile by userId
    const profile = await Profile.findOne({
      user: userId,
    }).populate("user");

    if (!profile) {
      return NextResponse.json({
        message: "Profile not found",
        status: false,
      });
    }

    return NextResponse.json({
      profile,
      message: "Profile fetched successfully",
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
