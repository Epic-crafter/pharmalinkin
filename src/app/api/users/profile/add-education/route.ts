import { connectToDatabase } from "@/lib/mongo";
import { Profile } from "@/models/user-profile";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { userId, institution, degree, fieldOfStudy, startDate, endDate } = await req.json();

    // Validate input
    if (!userId || !institution || !degree || !fieldOfStudy || !startDate) {
      return NextResponse.json({
        message: "All required fields must be provided",
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

    // Find the user profile
    const profile = await Profile.findOne({ user: userId });

    if (!profile) {
      return NextResponse.json({
        message: "Profile not found",
        status: false,
      });
    }

    const newEducation = {
      uniqueId: new mongoose.Types.ObjectId(),
      institution,
      degree,
      fieldOfStudy,
      startDate: new Date(startDate),
      endDate: endDate ? new Date(endDate) : undefined,
    };

    profile.education.push(newEducation);
    await profile.save();

    return NextResponse.json({
      message: "Education added successfully",
      status: true,
      education: newEducation,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Internal server error",
      status: false,
    });
  }
};
