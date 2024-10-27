"use client"
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
import { EMPLOYEE, EMPLOYER } from "@/lib/constants";
import { useRouter } from "next/navigation";

const epilogue = Epilogue({ subsets: ["latin"], weight: "400" });

export default function SignUp() {
  const [isWorking, setIsWorking] = useState(false);
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState(""); // Add email state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter() 

  // Handle form submission
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Validate password confirmation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email, 
          password,
          role: EMPLOYER, 
        }),
      });

      const result = await response.json();

      if (result.status) {
        console.log(result);
        router.push(`/signup/company/create-profile/${result.user._id}`)
        setSuccess("User registered successfully!");

      } else {
        setError(result.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Internal server error.");
    } finally {
      setLoading(false);
    }
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
          <h1 className="text-3xl text-center font-bold mb-6">
            Join us Today
          </h1>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}

          {/* Form to handle user registration */}
          <form onSubmit={handleRegister}>
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
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />

            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="mb-4 rounded-none border-gray-300 placeholder:text-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
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
                className="rounded-none border-gray-300 placeholder:text-gray-400 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                className="rounded-none border-gray-300 placeholder:text-gray-400 pr-10"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full py-2 "
              disabled={loading}
            >
              {loading ? "Registering..." : "Register"}
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-[--primary-color] hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
