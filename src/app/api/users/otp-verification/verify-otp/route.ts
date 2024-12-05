import { NextResponse } from "next/server";
import { emailVerification } from "@/models/email-otp-verify";

export async function POST(req: Request){
    try {
        // extract OTP recieved from frontend -
        const { otp } = await req.json();
         //Seacrh in database for same OTP and delete it -  
        const validOtp = await emailVerification.findOneAndDelete({ otp });    

    if (validOtp) {
        // will be executed if otp was present in databse, verification successfull - 
       return NextResponse.json({ message: 'OTP verified successfully' },{status:200});
    } else {
        // OTP was not found in database, verification failed.
        return NextResponse.json({ message: 'Invalid or expired OTP' },{status:400});
    }
    } catch (error) {
        console.log(error);
        return NextResponse.json({message:"Internal server error"},{status:500})
    }

} 