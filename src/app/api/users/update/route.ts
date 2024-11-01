import { connectToDatabase } from "@/lib/mongo";
import { User } from "@/models/user";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const PATCH = async (req: NextRequest, res: NextResponse) => {
  try {
    const { name, password, profilePicture } = await req.json();

    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // Validate the token
    if (!token) {
      return NextResponse.json(
        { message: "Invalid User! Please login again.", status: false },
        { status: 401 }
      );
    }

    await connectToDatabase();

    const existingUser = await User.findById(token.id);
    if (!existingUser) {
      return NextResponse.json({
        message: "User not found",
        status: false,
      });
    }

    // Update fields only if they are provided
    if (name) existingUser.name = name;
    if (profilePicture) existingUser.profilePicture = profilePicture;

    // If a new password is provided, hash it
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      existingUser.password = hashedPassword;
    }

    await existingUser.save();

    return NextResponse.json({
      user: existingUser,
      message: "User updated successfully",
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
