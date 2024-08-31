"use client"

import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox"
 
export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6">
      <h1 className="text-2xl font-bold mb-6">Sign up to hire talent</h1>

      <div
        onClick={() => alert("Sign in with Google")}
        className="w-fit max-w-sm py-2 flex flex-row items-center justify-center bg-[#4285f4] text-white rounded-lg p-2 cursor-pointer"
      >
        <div className="bg-white p-1 mr-2 rounded-lg">
          <FcGoogle size="1.5em" />
        </div>
        <p>Continue with Google</p>
      </div>

      <div className="flex items-center justify-center my-6 w-full max-w-sm">
        <div className="flex items-center w-full">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>
      </div>

      <div className="w-full max-w-lg"> 
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <Input id="firstName" type="text" className="mt-1" />
          </div>

          <div className="flex-1">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <Input id="lastName" type="text" className="mt-1" />
          </div>
        </div>

        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Work Email Address
        </label>
        <Input id="email" type="email" className="mt-1 mb-4" />

        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <Input id="password" type="password" className="mt-1 mb-4" />

        <div className="flex items-start mb-4">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
            Yes, I understand and agree to the JobHuntly Terms of Service, including the User Agreement and Privacy Policy.
          </label>
        </div>

        <Button type="submit" className="w-full py-2 bg-[--primary-color] text-white rounded-lg hover:bg-[#4e49ee]">
          Create my account
        </Button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account? <a href="/login" className="text-[--primary-color] hover:underline">Log In</a>
        </p>
      </div>
    </div>
  );
}