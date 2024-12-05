import  {emailVerification} from '@/models/email-otp-verify';
import { connectToDatabase } from "@/lib/mongo";
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import twilio from 'twilio';

//instantiate the nodemailer object with credentials - 
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS,  // Your email password or app password
    },
});

// instantiate the Twilio object with creds - 
const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID!, process.env.TWILIO_AUTH_TOKEN!);

const sendVerificationEmail = async (email: string, otp: string) => {
    
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Email Verification',
        text:`Your verification OTP is: ${otp}`
    };

    try {
        //make connection to mongodb - 
        await connectToDatabase();
        // send the mail to detined id - 
        await transporter.sendMail(mailOptions);
        // save the details in database for verification in future - 
        const otpValue = await emailVerification.create({email : email, otp : otp})
        console.log('Verification email sent successfully.');
    } catch (error) {
        console.error('Error sending verification email:', error);
        throw new Error('Failed to send verification email.');
    }
};

const sendVerificationSMS = async (phoneNumber: string, otp: string) => {
    try {
        // make connection to database - 
        await connectToDatabase();
        // send generated OTP by Twilio - 
        await twilioClient.messages.create({
            body: `Your verification code is: ${otp}`,
            from: process.env.TWILIO_PHONE_NUMBER!, // Your Twilio phone number
            to: phoneNumber,
        });
        // save the detail for verification use in future - 
        const otpValue = await emailVerification.create({phoneNumber : phoneNumber, otp : otp})
        // await otpValue.save();


        console.log('Verification SMS sent successfully.');
    } catch (error) {
        console.error('Error sending SMS:', error);
        throw new Error('Failed to send verification SMS.');
    }
};

export async function POST(req: Request) {
        // destructure email and phone number received from frontend - 
        const { email , phoneNumber} = await req.json();
        
        // if either or both are missing - 
        if (!email && !phoneNumber ) {
            return NextResponse.json({ error: 'Email or phone number are required.' },{status:400});
        }
        // generate a random OTP - 
        const otp = Math.floor(100000 + Math.random() * 900000).toString(); 

        try {
            // if emial is received -  
            email && await sendVerificationEmail(email, otp);
            // if phone number is received - 
            phoneNumber && await sendVerificationSMS(phoneNumber, otp);
            return NextResponse.json({ message: 'Otp sent on your mobile number ' },{status:200});
        } catch (error : any) {
            return NextResponse.json({ error: error.message },{status:500});
        }
    
}