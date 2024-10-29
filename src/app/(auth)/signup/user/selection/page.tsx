"use client";
import { useState } from "react";
import Link from "next/link";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Epilogue } from "next/font/google";

const epilogue = Epilogue({ subsets: ["latin"], weight: "400" });

const JoinPage = () => {
  const [isStudent, setIsStudent] = useState(false);
  const [isExperienced, setIsExperienced] = useState(false);
  const [isStudentButtonPressed, setIsStudentButtonPressed] = useState(false);
  const [isExperiencedButtonPressed, setIsExperiencedButtonPressed] = useState(false);
  const router = useRouter();

  const handleStudentCheckboxChange = () => {
    setIsStudent(true);
    setIsExperienced(false);
  };

  const handleExperiencedCheckboxChange = () => {
    setIsExperienced(true);
    setIsStudent(false);
  };

  const handleStudentMouseDown = () => {
    setIsStudentButtonPressed(true);
  };

  const handleStudentMouseUp = () => {
    setIsStudentButtonPressed(false);
  };

  const handleExperiencedMouseDown = () => {
    setIsExperiencedButtonPressed(true);
  };

  const handleExperiencedMouseUp = () => {
    setIsExperiencedButtonPressed(false);
  };

  const getButtonText = () => {
    if (isStudent) return "Apply as Student";
    if (isExperienced) return "Join as Experienced";
    return "Create Account";
  };

  const handleCreateAccount = () => {
    if (isStudent) {
      router.push("/signup/user/step4");
    } else if (isExperienced) {
      router.push("/signup/user/step3");
    }
  };

  const isButtonDisabled = !isStudent && !isExperienced;

  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen ${epilogue.className} p-4`}
    >
      <h1 className="text-3xl font-medium mb-6 text-center">
        Join as a Student or Experienced
      </h1>

      {/* Card selection section centered in mobile view */}
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-6 items-center">
        <div
          onClick={handleStudentCheckboxChange}
          onMouseDown={handleStudentMouseDown}
          onMouseUp={handleStudentMouseUp}
          onMouseLeave={handleStudentMouseUp}
          className={`p-8 w-64 rounded-lg flex flex-col transition-transform duration-300 cursor-pointer ${
            isStudent
              ? "border-2 border-primary bg-[#00000005]"
              : "border-2 border-gray-300 bg-white text-gray-800"
          } ${isStudentButtonPressed ? "scale-95" : ""} hover:border-2 hover:border-primary hover:bg-secondary/90 relative`}
        >
          <div>
            <FaGraduationCap size="1.5em" />
          </div>
          <div className="text-xl font-semibold mt-8 text-start">
            I am a Student
          </div>
          <div
            className={`w-6 h-6 border border-gray-300 rounded-full absolute top-3 right-3 flex justify-center items-center ${
              isStudent ? "bg-primary border-none" : "bg-white"
            }`}
          >
            <div className="w-3 h-3 border border-white rounded-full"></div>
          </div>
        </div>

        <div
          onClick={handleExperiencedCheckboxChange}
          onMouseDown={handleExperiencedMouseDown}
          onMouseUp={handleExperiencedMouseUp}
          onMouseLeave={handleExperiencedMouseUp}
          className={`p-8 w-64 rounded-lg flex flex-col transition-transform duration-300 cursor-pointer ${
            isExperienced
              ? "border-2 border-[--primary-color] bg-[#00000005]"
              : "border-2 border-gray-300 bg-white text-gray-800"
          } ${isExperiencedButtonPressed ? "scale-95" : ""} hover:border-2 hover:border-[--primary-color] hover:bg-[#00000005] relative`}
        >
          <div>
            <FaBriefcase size="1.5em" />
          </div>
          <div className="text-xl font-semibold mt-8 text-start">
            I am Experienced
          </div>
          <div
            className={`w-6 h-6 border border-gray-300 rounded-full absolute top-3 right-3 flex justify-center items-center ${
              isExperienced ? "bg-primary border-none" : "bg-white"
            }`}
          >
            <div className="w-3 h-3 border border-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Create Account Button */}
      <Button
        disabled={isButtonDisabled}
        onClick={handleCreateAccount}
        className="w-full max-w-xs px-6 py-2 font-semibold rounded-lg mt-6"
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
  );
};

export default JoinPage;
