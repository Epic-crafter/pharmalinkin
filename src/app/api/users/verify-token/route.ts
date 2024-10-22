import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const GET = async (req: any, res: any) => {
  
  try { 
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });    
    if (token) {
      // Token is valid
      return NextResponse.json({ valid: true, user: token });
    } else {
      // Token is invalid
      return NextResponse.json({ valid: false });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ valid: false });
  }
};
