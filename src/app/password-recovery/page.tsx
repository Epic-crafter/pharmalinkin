"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Bitmap from "@/images/Bitmap.jpg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Epilogue } from "next/font/google";

const epilogue = Epilogue({ subsets: ["latin"], weight: "400" });

const Login: React.FC = () => {
  const [otpPopup, setOtpPopup] = useState(false);
  const [step, setStep] = useState(1); // Tracks which step the user is on (1: input phone/email, 2: input OTP)
  const [contactInfo, setContactInfo] = useState(""); // Store the entered email/phone
  const [otp, setOtp] = useState(""); // Store the entered OTP

  const handleSendOtp = () => {
    if (contactInfo) {
      // Logic for sending OTP to the contactInfo
      alert(`OTP sent to ${contactInfo}`);
      setStep(2); // Proceed to the OTP input step
    } else {
      alert("Please enter a valid email or phone number.");
    }
  };

  const handleVerifyOtp = () => {
    if (otp) {
      // Logic for verifying OTP
      alert(`OTP ${otp} verified`);
      setOtpPopup(false); // Close the dialog after verification
    } else {
      alert("Please enter the OTP.");
    }
  };
  return (
    <div
      className={`flex flex-row min-w-screen min-h-screen justify-start items-center ${epilogue.className}`}
    >
      <div className="flex min-h-screen w-[40%] justify-center items-center">
        <div className="relative flex flex-col items-center justify-between min-w-[50%] rounded-2xl py-12 px-8">
          <div className="w-full flex flex-col justify-start items-start">
            <h1 className="text-3xl font-bold">Recovery Password.</h1>

            <form className="w-full max-w-sm">
              <p className="w-full text-sm my-8 text-gray-400">
                We will send a new password to your account from email, to help
                recover your account.
              </p>
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Email Address or Mobile Number"
                  className="w-full rounded-none border border-gray-300"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-none bg-[--primary-color] my-8 text-white hover:bg-[#4e49ee]"
              >
                Submit
              </Button>
            </form>

            <div className="flex items-center justify-center my-6 w-full max-w-sm">
              <div className="flex items-center w-full">
                <span className="mr-2 text-gray-400 text-md">
                  Remember Password?
                </span>
                <Link
                  href="/signup"
                  className="text-[--primary-color] hover:underline"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen w-[60%] relative">
        <Image src={Bitmap} fill={true} objectFit="cover" alt="Login pic" />
      </div>
    </div>
  );
};

export default Login;
