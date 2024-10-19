import bcrypt from "bcryptjs";
import { connectToDatabase } from "@/lib/mongo";
import { User } from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { name, email, password, role } = await req.json();
    if (!name || !email || !password) {
      return NextResponse.json({
        message: "Missing required fields",
        status: false,
      });
    }
    let nameArray = name.split(' ');
    await connectToDatabase();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({
        message: "User already exists",
        status: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await new User({
      name,
      email,
      password: hashedPassword,
      role: role,
      profilePicture:`https://ui-avatars.com/api/?name=${nameArray[0]}+${nameArray[1]}`
    });

    await newUser.save();
    return NextResponse.json({
      message: "User registered successfully",
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
