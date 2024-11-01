import { connectToDatabase } from "@/lib/mongo";
import { Profile } from "@/models/user-profile";
import { User } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone = "",
      bio = "",
      location = "",
      mostRecentJobTitle = "",
      socialLinks = {},
      skills = [],
      experience = [],
      education = [],
      preferredJobTitle = "",
      preferredLocation = "",
      openForRemote = false,
    } = await req.json();

    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // Validate the token
    if (!token) {
      return NextResponse.json(
        { message: "Invalid User! Please login again.", status: false },
        { status: 401 }
      );
    }
    if (!firstName || !lastName || !email) {
      return NextResponse.json({
        message: "Missing required fields",
        status: false,
      });
    }

    await connectToDatabase();

    // Check if the associated user exists
    const user = await User.findById(token.id);
    if (!user) {
      return NextResponse.json({
        message: "User not found",
        status: false,
      });
    }

    // Check if a profile for the user already exists
    const existingProfile = await Profile.findOne({ user: token.id });
    if (existingProfile) {
      return NextResponse.json({
        message: "Profile already exists for this user",
        status: false,
      });
    }

    const newProfile = new Profile({
      user: token.id,
      firstName,
      lastName,
      email,
      phone,
      bio,
      location,
      mostRecentJobTitle,
      socialLinks,
      skills,
      experience,
      education,
      preferredJobTitle,
      preferredLocation,
      openForRemote,
    });

    await newProfile.save();

    return NextResponse.json({
      profile: newProfile,
      message: "Profile created successfully",
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
