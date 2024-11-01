import { connectToDatabase } from "@/lib/mongo";
import { Profile } from "@/models/user-profile";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (req: NextRequest, res: NextResponse) => {
  try {
    const {
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
    } = await req.json();
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // Validate the token
    if (!token) {
      return NextResponse.json(
        { message: "Invalid User! Please login again.", status: false },
        { status: 401 }
      );
    }

    await connectToDatabase();

    // Check if the profile exists for the given user ID
    const profile = await Profile.findOne({ user: token.id });
    if (!profile) {
      return NextResponse.json({
        message: "Profile not found",
        status: false,
      });
    }

    // Update fields if they are provided
    if (firstName !== undefined) profile.firstName = firstName;
    if (lastName !== undefined) profile.lastName = lastName;
    if (email !== undefined) profile.email = email;
    if (phone !== undefined) profile.phone = phone;
    if (bio !== undefined) profile.bio = bio;
    if (location !== undefined) profile.location = location;
    if (mostRecentJobTitle !== undefined)
      profile.mostRecentJobTitle = mostRecentJobTitle;
    if (socialLinks !== undefined) profile.socialLinks = socialLinks;
    if (skills !== undefined) profile.skills = skills;
    if (experience !== undefined) profile.experience = experience;
    if (education !== undefined) profile.education = education;
    if (preferredJobTitle !== undefined)
      profile.preferredJobTitle = preferredJobTitle;
    if (preferredLocation !== undefined)
      profile.preferredLocation = preferredLocation;
    if (openForRemote !== undefined) profile.openForRemote = openForRemote;

    // Save the updated profile
    await profile.save();

    return NextResponse.json({
      profile,
      message: "Profile updated successfully",
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
