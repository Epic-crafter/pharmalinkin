"use client";
import { useState } from "react";

export default function OTPVerification() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleVerifyOTP = async () => {
    setLoading(true);
    setMessage("");

    try {
      // Simulate API call for OTP verification
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay

      if (otp === "123456") { // Simulated correct OTP
        setMessage("Your OTP has been successfully verified!");
      } else {
        setMessage("Invalid OTP. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred while verifying OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Main Card */}
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center">
        {/* Logo */}
        <h1 className="text-blue-600 text-xl font-semibold mb-6">Pharmalinkin</h1>

        {/* Key Icon */}
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
              d="M15.75 8.25h3.75M12 6.75V3.75M12 6.75V8.25M12 6.75V15m0 3m0 0v3m0-3H9.75m3 0h3m-3-6m0 0v-6.75M12 3m9 9h-3m0 0v3m0-3h-3.75m0 0H6.75"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold mb-2">OTP Verification</h2>

        {/* Instructions */}
        <p className="text-gray-600 text-sm mb-6">
          Please enter the OTP sent to your registered phone number to verify your account.
        </p>

        {/* OTP Input */}
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          maxLength={6}
          placeholder="Enter OTP"
          className="border border-gray-300 rounded-lg px-4 py-2 w-full text-center mb-4"
        />

        {/* Verify Button */}
        <button
          onClick={handleVerifyOTP}
          disabled={loading}
          className={`bg-blue-600 text-white px-4 py-2 rounded-lg w-full transition ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>

        {/* Status Message */}
        {message && (
          <p className={`mt-4 text-sm font-medium ${message.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}

        {/* Note */}
        <p className="text-gray-400 text-xs mt-6">
          If you did not receive the OTP, please contact support or request a new OTP.
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
