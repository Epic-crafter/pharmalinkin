// app/api/company-profile/route.ts
import { connectToDatabase } from '@/lib/mongo';
import { CompanyProfile } from '@/models/company-profile';
import { NextResponse } from 'next/server';


export async function POST(request: Request) {
  try {
    await connectToDatabase();

    // Parse the incoming request body
    const body = await request.json();

    // Ensure required fields are provided
    const { userId } = body;
    if (!userId) {
      return NextResponse.json({ error: 'UserId required' }, { status: 400 });
    }

    const Profile = await CompanyProfile.find({user:userId});

    return NextResponse.json(Profile, { status: 201 });
  } catch (error) {
    console.log(error);
    
    return NextResponse.json({ error: 'Error creating company profile' }, { status: 500 });
  }
}
