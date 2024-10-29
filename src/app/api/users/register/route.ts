import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo"; // Adjust the path as needed
import { User } from "@/models/user"; // Adjust the path as needed
import bcrypt from 'bcrypt';
import { Profile } from "@/models/user-profile";

export async function POST(req: NextRequest) {
  try {
    // Connect to the database
    await connectToDatabase();

    // Parse the request body
    const {
      email,
      phone,
      password,
      firstName,
      lastName,
      location,
      mostRecentJobTitle,
      collegeName,
      collegeStartDate,
      collegeEndDate,
      degree,
      fieldOfStudy,
      preferredJobTitle,
      preferredLocation,
      openForRemote,
      role = "Employee", // Default role if not provided
    } = await req.json();

    // Validate required fields
    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "User already exists" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      email,
      password: hashedPassword,
      role,
      status: "inactive", // Default status
    });

    // Save the user to the database
    await user.save();

    // Create the profile
    const profile = new Profile({
      user: user._id,
      firstName,
      lastName,
      email,
      phone,
      location,
      mostRecentJobTitle,
      collegeName,
      collegeStartDate,
      collegeEndDate,
      degree,
      fieldOfStudy,
      preferredJobTitle,
      preferredLocation,
      openForRemote,
    });

    // Save the profile to the database
    await profile.save();

    // Send a success response
    return NextResponse.json(
      { success: true, message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      { success: false, message: "Server error", error: error },
      { status: 500 }
    );
  }
}
