"use client";
import { useState } from "react";

export default function EmailVerification() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [otp, setOtp] = useState("");

  const handleVerifyEmail = async () => {
    setLoading(true);
    setMessage("");
    setShowOTPInput(false);

    try {
      // Simulate API call for email verification
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
      setMessage("A verification link has been sent to your email.");
    } catch (error) {
      setMessage("Failed to send verification link. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSendOTP = async () => {
    setLoading(true);
    setMessage("");
    setShowOTPInput(true);

    try {
      // Simulate API call for sending OTP
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
      setMessage("An OTP has been sent to your registered email.");
    } catch (error) {
      setMessage("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = () => {
    if (otp === "123456") { // Simulating a valid OTP
      setMessage("Your email has been successfully verified!");
    } else {
      setMessage("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Main Card */}
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
        {/* Logo */}
        <h1 className="text-blue-600 text-xl font-semibold mb-6">Pharmalinkin</h1>

        {/* Email Icon */}
        <div className="flex justify-center items-center bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-blue-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 8.25v9a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25v-9m19.5 0L12 15l-9.75-6.75m19.5 0L12 12m0 0L2.25 8.25"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold mb-2">Verify your email address</h2>

        {/* Instructions */}
        <p className="text-gray-600 text-sm mb-6">
          In order to start using your Pharmalinkin account, you need to confirm
          your email address.
        </p>

        {/* Email Verification Button */}
        <button
          onClick={handleVerifyEmail}
          disabled={loading}
          className={`bg-blue-600 text-white px-4 py-2 rounded-lg w-full mb-4 transition ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
        >
          {loading ? "Sending..." : "Verify via Email"}
        </button>

        {/* OTP Verification Button */}
        <button
          onClick={handleSendOTP}
          disabled={loading}
          className={`bg-green-600 text-white px-4 py-2 rounded-lg w-full transition ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"
          }`}
        >
          {loading ? "Sending OTP..." : "Verify via OTP"}
        </button>

        {/* OTP Input Section */}
        {showOTPInput && (
          <div className="mt-6">
            <p className="text-gray-600 text-sm mb-4">Enter the OTP sent to your email:</p>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              placeholder="Enter OTP"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full text-center mb-4"
            />
            <button
              onClick={handleVerifyOTP}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700"
            >
              Verify OTP
            </button>
          </div>
        )}

        {/* Status Message */}
        {message && (
          <p className={`mt-4 text-sm font-medium ${message.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}

        {/* Note */}
        <p className="text-gray-400 text-xs mt-6">
          If you did not sign up for this account, you can ignore this email and
          the account will be deleted.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm mb-4">
          Get the latest Pharmalinkin App for your phone
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
              alt="Download on the App Store"
              className="h-10 cursor-pointer"
            />
          </a>
          <a href="https://play.google.com/store/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get it on Google Play"
              className="h-10 cursor-pointer"
            />
          </a>
        </div>
        <p className="text-gray-400 text-xs mt-4">© Pharmalinkin 2023</p>
      </div>
    </div>
  );
}
