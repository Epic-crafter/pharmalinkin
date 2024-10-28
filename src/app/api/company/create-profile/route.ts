import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongo";
import { CompanyProfile } from "@/models/company-profile";
import { User } from "@/models/user";
import { getToken } from "next-auth/jwt";

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token)
      return NextResponse.json({
        message: "Invalid User!,Login again",
        status: false,
      });
    const {
      companyName,
      industry,
      location,
      website,
      about,
      foundedYear,
      companySize,
      socialLinks,
      logo,
    } = await req.json();

    await connectToDatabase();
    // Check if user exists
    const user = await User.findById(token.id);
    if (!user) {
      return NextResponse.json(
        { message: "User not found", success: false },
        { status: 404 }
      );
    }

    // Create new company profile
    const companyProfile = new CompanyProfile({
      user: token.id,
      companyName,
      industry,
      location,
      website,
      about,
      foundedYear,
      companySize,
      socialLinks,
      logo,
    });

    await companyProfile.save();

    return NextResponse.json(
      {
        success: true,
        message: "Company profile created successfully",
        data: companyProfile,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating company profile:", error);
    return NextResponse.json(
      {
        message: "Failed to create company profile.",
        success: false,
        error,
      },
      { status: 500 }
    );
  }
}
