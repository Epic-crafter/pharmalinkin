"use client";
import { useState } from "react";
import Link from "next/link";
import { ImOffice } from "react-icons/im";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import LoginImage from "@/images/LoginElement.jpg";
import { Epilogue } from "next/font/google";

const epilogue = Epilogue({ subsets: ["latin"], weight: "400" });

const JoinPage = () => {
  const [isUser, setIsUser] = useState(false);
  const [isCompanyManager, setIsCompanyManager] = useState(false);
  const [isUserButtonPressed, setIsUserButtonPressed] = useState(false);
  const [isCompanyButtonPressed, setIsCompanyButtonPressed] = useState(false);
  const router = useRouter();

  const handleUserCheckboxChange = () => {
    setIsUser(true);
    setIsCompanyManager(false);
  };

  const handleCompanyCheckboxChange = () => {
    setIsCompanyManager(true);
    setIsUser(false);
  };

  const handleUserMouseDown = () => {
    setIsUserButtonPressed(true);
  };

  const handleUserMouseUp = () => {
    setIsUserButtonPressed(false);
  };

  const handleCompanyMouseDown = () => {
    setIsCompanyButtonPressed(true);
  };

  const handleCompanyMouseUp = () => {
    setIsCompanyButtonPressed(false);
  };

  const getButtonText = () => {
    if (isUser) return "Apply as User";
    if (isCompanyManager) return "Join as Company";
    return "Create Account";
  };

  const handleCreateAccount = () => {
    if (isUser) {
      router.push("/signup/user");
    } else if (isCompanyManager) {
      router.push("/signup/company");
    }
  };

  const isButtonDisabled = !isUser && !isCompanyManager;

  return (
    <div
      className={`flex flex-col lg:flex-row min-w-screen min-h-screen justify-start items-center ${epilogue.className}`}
    >
      {/* Image section hidden on smaller screens */}
      <div className="hidden lg:block lg:min-h-screen lg:w-[40%] relative">
        <Image src={LoginImage} fill={true} objectFit="cover" alt="Login pic" />
      </div>

      {/* Main content section */}
      <div className="flex flex-col min-h-screen lg:w-[60%] w-full justify-center items-center p-4 md:p-8">
        <h1 className="text-3xl font-medium mb-6 text-center lg:text-left">
          Join as a User or Company
        </h1>

        {/* Card selection section centered in mobile view */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-6 items-center">
          <Card
            onClick={handleUserCheckboxChange}
            onMouseDown={handleUserMouseDown}
            onMouseUp={handleUserMouseUp}
            onMouseLeave={handleUserMouseUp}
            className={`p-8 w-64 rounded-lg flex flex-col transition-transform duration-300 cursor-pointer ${
              isUser
                ? "border-2 border-primary bg-[#00000005]"
                : "border-2 border-gray-300 bg-white text-gray-800"
            } ${isUserButtonPressed ? "scale-95" : ""} hover:border-2 hover:border-primary hover:bg-secondary/90 relative`}
          >
            <div>
              <FaUser size="1.5em" />
            </div>
            <div className="text-xl font-semibold mt-8 text-start">
              I&apos;m a user, looking for work
            </div>
            <div
              className={`w-6 h-6 border border-gray-300 rounded-full absolute top-3 right-3 flex justify-center items-center ${
                isUser ? "bg-primary border-none" : "bg-white"
              }`}
            >
              <div className="w-3 h-3 border border-white rounded-full"></div>
            </div>
          </Card>

          <Card
            onClick={handleCompanyCheckboxChange}
            onMouseDown={handleCompanyMouseDown}
            onMouseUp={handleCompanyMouseUp}
            onMouseLeave={handleCompanyMouseUp}
            className={`p-8 w-64 rounded-lg flex flex-col transition-transform duration-300 cursor-pointer ${
              isCompanyManager
                ? "border-2 border-[--primary-color] bg-[#00000005]"
                : "border-2 border-gray-300 bg-white text-gray-800"
            } ${isCompanyButtonPressed ? "scale-95" : ""} hover:border-2 hover:border-[--primary-color] hover:bg-[#00000005] relative`}
          >
            <div>
              <ImOffice size="1.5em" />
            </div>
            <div className="text-xl font-semibold mt-8 text-start">
              I am a Company Manager, hiring
            </div>
            <div
              className={`w-6 h-6 border border-gray-300 rounded-full absolute top-3 right-3 flex justify-center items-center ${
                isCompanyManager ? "bg-[--primary-color] border-none" : "bg-white"
              }`}
            >
              <div className="w-3 h-3 border border-white rounded-full"></div>
            </div>
          </Card>
        </div>

        {/* Create Account Button */}
        <Button
          disabled={isButtonDisabled}
          onClick={handleCreateAccount}
          className="w-full max-w-xs px-6 py-2 font-semibold rounded-lg md:mt-6"
        >
          {getButtonText()}
        </Button>

        {/* Link to login */}
        <div className="mt-6 text-center">
          <p>
            Already have an account?{" "}
            <Link
              href="/login/"
              className="text-[--primary-color] hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
