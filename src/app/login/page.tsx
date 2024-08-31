"use client";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Login: React.FC = () => {
  return (
    <div className="flex min-h-screen min-w-screen justify-center items-center">
      <Card className="flex flex-col items-center justify-between min-h-[70vh] w-fit rounded-2xl py-12 px-8">
        {" "}
        {/* Adjusted padding */}
        <CardContent className="w-full flex flex-col justify-center items-center">
          <h1 className="text-2xl font-semibold mb-6">Log in to JobHuntly</h1>

          <form className="w-full max-w-sm">
            <div className="mb-4">
              <Input
                type="email"
                placeholder="Username or Email"
                className="min-w-80 text-sm"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full py-2 bg-[--primary-color] text-white rounded-lg hover:bg-[#4e49ee]"
            >
              Continue
            </Button>
          </form>

          <div className="flex items-center justify-center my-6 w-full max-w-sm">
            <div className="flex items-center w-full">
              <hr className="flex-grow border-gray-300" />
              {/* Flex-grow ensures it fills available space */}
              <span className="mx-4 text-gray-500">or</span>
              <hr className="flex-grow border-gray-300" />{" "}
              {/* Flex-grow ensures it fills available space */}
            </div>
          </div>

          <Button
            onClick={() => alert("Sign in with Google")}
            className="w-full max-w-sm py-2 flex flex-row items-center justify-center bg-[#4285f4] text-white rounded-lg"
          >
            <div className="bg-white p-1 mx-2 rounded-lg">
              <FcGoogle size="1.5em" />
            </div>
            <p>Continue with Google</p>
          </Button>
        </CardContent>
        <CardContent className="w-full flex flex-col justify-center items-center">
          <div className="flex items-center justify-center my-6 w-full max-w-sm">
            <div className="flex items-center w-full">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 text-gray-500 text-sm">
                Don't have a JobHuntly account?{" "}
              </span>
              <hr className="flex-grow border-gray-300" />
            </div>
          </div>
          <Link
            href="/signup"
            className="w-48 py-1 flex justify-center items-center bg-white border-2 border-[--primary-color] text-[--primary-color] rounded-lg hover:bg-gray-100"
          >
            Sign Up
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
