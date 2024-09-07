"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import LoginImage from "@/images/LoginElement.jpg";
import { Epilogue } from "next/font/google";
import Image from "next/image";
import { TbEyeClosed, TbEyeCheck } from "react-icons/tb";
import Link from "next/link";

const epilogue = Epilogue({ subsets: ["latin"], weight: "400" });

export default function SignUp() {
  const [isWorking, setIsWorking] = useState(false);
  const [selected, setSelected] = useState("jobSeeker");
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleContinue = () => {
    setShowSecondForm(true);
  };

  return (
    <div
      className={`flex flex-row min-w-screen min-h-screen justify-start items-center ${epilogue.className}`}
    >
      <div className="min-h-screen w-[40%] relative">
        <Image src={LoginImage} fill={true} objectFit="cover" alt="Login pic" />
      </div>
      <div className="flex flex-col min-h-screen w-[60%] justify-center items-center py-6">
        <div className="w-[50%]">
          <div className="w-full flex flex-row justify-center items-center m-4">
            <div className="w-64 flex flex-row">
              <div
                className={`w-[50%] py-2 text-center font-medium transition-colors text-[--primary-color] bg-purple-100`}
              >
                Job Seeker
              </div>
              <Link
                href={"/signup/company"}
                className={`w-[50%] py-2 text-center font-medium transition-colors`}
              >
                Company
              </Link>
            </div>
          </div>
          {!showSecondForm ? (
            <>
              <h1 className="text-3xl font-bold mb-6">
                Welcome to Pharmalinkin
              </h1>

              <div className="flex flex-row">
                <p className="mb-4 text-lg">Are you currently working?</p>
                <div className="flex items-center mb-4 mx-8">
                  <Checkbox
                    id="yes"
                    checked={isWorking}
                    onCheckedChange={(value) => setIsWorking(!!value)} // Explicitly convert `value` to boolean
                  />
                  <label htmlFor="yes" className="ml-2 text-sm">
                    Yes
                  </label>
                </div>
              </div>

              <label
                htmlFor="currentCompany"
                className={`block text-sm font-medium ${
                  isWorking ? "text-gray-700" : "text-gray-400"
                }`}
              >
                Current Company
              </label>
              <Input
                id="currentCompany"
                type="text"
                placeholder="Enter your current company name if working"
                className={`mt-1 mb-4 rounded-none border-gray-300 placeholder:text-gray-400 ${
                  isWorking ? "cursor-text" : "cursor-not-allowed bg-gray-100"
                }`}
                disabled={!isWorking}
              />

              {/* Designation Input */}
              <label
                htmlFor="designation"
                className={`block text-sm font-medium ${
                  isWorking ? "text-gray-700" : "text-gray-400"
                }`}
              >
                Designation
              </label>
              <Input
                id="designation"
                type="text"
                placeholder="Provide your current job title or designation"
                className={`mt-1 mb-4 rounded-none border-gray-300 placeholder:text-gray-400  ${
                  isWorking ? "cursor-text" : "cursor-not-allowed bg-gray-100"
                }`}
                disabled={!isWorking}
              />

              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Location
              </label>
              <div className="flex space-x-4 mb-4">
                <Input
                  id="city"
                  type="text"
                  placeholder="City"
                  className="w-1/2 rounded-none border-gray-300 placeholder:text-gray-400"
                />
                <Input
                  id="state"
                  type="text"
                  placeholder="State"
                  className="w-1/2 rounded-none border-gray-300 placeholder:text-gray-400"
                />
              </div>

              <Button
                type="button"
                onClick={handleContinue}
                className="w-full py-2 bg-[--primary-color] rounded-none text-white hover:bg-[#4e49ee]"
              >
                Continue
              </Button>

              <p className=" text-sm text-gray-500 mt-6">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-[--primary-color] hover:underline"
                >
                  Log In
                </a>
              </p>

              <p className="text-xs text-gray-500 mt-4">
                By clicking 'Continue', you acknowledge that you have read and
                accept the
                <span className="text-[--primary-color]">
                  {" "}
                  Terms of Service
                </span>{" "}
                and the
                <span className="text-[--primary-color]"> Privacy Policy.</span>
              </p>
            </>
          ) : (
            <>
              <h1 className="text-3xl text-center font-bold mb-6">
                Join us Today
              </h1>

              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your Full Name"
                className="mb-4 rounded-none border-gray-300 placeholder:text-gray-400"
              />

              <label
                htmlFor="mobileNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <Input
                id="mobileNumber"
                type="text"
                placeholder="Enter your Mobile Number"
                className="mb-4 rounded-none border-gray-300 placeholder:text-gray-400"
              />

              <label
                htmlFor="alternateMobile"
                className="block text-sm font-medium text-gray-700"
              >
                Alternate Mobile Number
              </label>
              <Input
                id="alternateMobile"
                type="text"
                placeholder="Enter Alternate Mobile Number"
                className="mb-4 rounded-none border-gray-300 placeholder:text-gray-400"
              />

              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative mb-4 w-full">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"} // Toggle between text and password
                  placeholder="Enter your password"
                  className="rounded-none border-gray-300 placeholder:text-gray-400 pr-10" // Add padding to the right for the icon
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <TbEyeClosed size={20} className="text-gray-400" />
                  ) : (
                    <TbEyeCheck size={20} className="text-gray-400" />
                  )}
                </div>
              </div>

              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div className="relative mb-4 w-full">
                <Input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"} // Toggle between text and password
                  placeholder="Confirm your password"
                  className="rounded-none border-gray-300 placeholder:text-gray-400 pr-10" // Add padding to the right for the icon
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <TbEyeClosed size={20} className="text-gray-400" />
                  ) : (
                    <TbEyeCheck size={20} className="text-gray-400" />
                  )}
                </div>
              </div>
              {/* Google reCAPTCHA and Terms Confirmation */}
              <div className="flex items-start mb-4">
                <Checkbox id="termsConfirm" className="border-gray-300" />
                <label
                  htmlFor="termsConfirm"
                  className="ml-2 text-sm text-gray-400"
                >
                  I confirm that I have read and accept the terms and conditions
                  and privacy policy.
                </label>
              </div>

              <Button
                type="submit"
                className="w-full py-2 bg-[--primary-color] text-white rounded-none hover:bg-[#4e49ee]"
              >
                Register
              </Button>

              <p className="text-center text-sm text-gray-500 mt-6">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-[--primary-color] hover:underline"
                >
                  Log In
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
