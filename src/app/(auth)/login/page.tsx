"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import LoginImage from "@/images/LoginElement.jpg";
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
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    role: "user", // Default role (can be changed based on requirements)
  });

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

  // Adding types for event parameter
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Adding types for event parameter
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.status) {
        alert(result.message);
        // Redirect or perform further actions after success
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div
      className={`flex flex-row min-w-screen min-h-screen justify-start items-center ${epilogue.className}`}
    >
      <div className="min-h-screen w-[40%] relative">
        <Image src={LoginImage} fill={true} objectFit="cover" alt="Login pic" />
      </div>
      <div className="flex min-h-screen w-[60%] justify-center items-center">
        <div className="relative flex flex-col items-center justify-between min-w-[50%] rounded-2xl py-12 px-8">
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-6">Welcome back, Dude</h1>

            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
              <div className="mb-4">
                <Input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address or Mobile Number"
                  className="w-full rounded-none border border-gray-300"
                  required
                />
              </div>

              <div className="mb-4">
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full rounded-none border border-gray-300 outline-none"
                  required
                />
              </div>

              <div className="mb-4">
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full rounded-none border border-gray-300 outline-none"
                  required
                />
              </div>

              <div className="mb-4 flex items-center">
                <Checkbox id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe" className="text-sm">
                  Remember me
                </label>
              </div>

              <Button type="submit" className="w-full">
                Login
              </Button>

              <div className="flex items-center justify-center mt-4 w-full max-w-sm">
                <div className="flex items-center w-full">
                  <span className="mr-2 text-gray-400 text-md">
                    Forgot Password?
                  </span>
                  <Link
                    href="/password-recoveryx"
                    className="text-[--primary-color] hover:underline"
                  >
                    click
                  </Link>
                </div>
              </div>
            </form>

            <div className="flex items-center justify-center my-6 w-full max-w-sm">
              <hr className="flex-grow border-gray-300" />
              <span className="text-gray-400 mx-8">Or login with OTP</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <Dialog open={otpPopup} onOpenChange={setOtpPopup}>
              <DialogTrigger asChild>
                <Button className="w-full text-white rounded-none bg-[--primary-color]  hover:bg-[#4e49ee]">
                  Request OTP
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>OTP Verification</DialogTitle>
                  <DialogDescription>
                    {step === 1
                      ? "Enter your email address or mobile number to receive an OTP."
                      : `OTP sent to ${contactInfo}. Please enter the OTP below:`}
                  </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col space-y-4">
                  {step === 1 ? (
                    // Step 1: Input for email/phone number
                    <Input
                      type="text"
                      placeholder="Email or Mobile Number"
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      className="w-full"
                    />
                  ) : (
                    // Step 2: Input for OTP
                    <Input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full"
                    />
                  )}

                  {step === 1 ? (
                    // Step 1: Send OTP button
                    <Button
                      onClick={handleSendOtp}
                      className="bg-[--primary-color] text-white hover:bg-[#4e49ee]"
                    >
                      Send OTP
                    </Button>
                  ) : (
                    <div className="flex justify-between">
                      {/* Step 2: Resend and Verify buttons */}
                      <Button
                        variant="link"
                        onClick={() => alert("Resend OTP")}
                        className="text-[--primary-color] hover:underline"
                      >
                        Resend OTP
                      </Button>
                      <Button
                        onClick={handleVerifyOtp}
                        className="bg-[--primary-color] text-white hover:bg-[#4e49ee]"
                      >
                        Verify OTP
                      </Button>
                    </div>
                  )}
                </div>

                <DialogFooter>
                  <Button onClick={() => setOtpPopup(false)} variant="outline">
                    Close
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <div className="flex items-center justify-center my-6 w-full max-w-sm">
              <div className="flex items-center w-full">
                <span className="mr-2 text-gray-400 text-md">
                  Don't have an account?
                </span>
                <Link
                  href="/signup"
                  className="text-[--primary-color] hover:underline"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
