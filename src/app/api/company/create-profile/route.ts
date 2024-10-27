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
    const { user, companyName, industry, location } = body;
    if (!user || !companyName || !industry || !location) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newProfile = await CompanyProfile.create(body);

    return NextResponse.json(newProfile, { status: 201 });
  } catch (error) {
    console.log(error);
    
    return NextResponse.json({ error: 'Error creating company profile' }, { status: 500 });
  }
}
