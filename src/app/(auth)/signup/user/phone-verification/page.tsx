"use client";
import { useState } from "react";

export default function VerifyNumber() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSendSMS = async () => {
    setLoading(true);
    setMessage("");
    setShowOTPInput(true);

    try {
      // Simulate API call for sending SMS
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
      setMessage("An OTP has been sent to your phone number.");
    } catch (error) {
      setMessage("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSendCall = async () => {
    setLoading(true);
    setMessage("");
    setShowOTPInput(false);

    try {
      // Simulate API call for sending Call
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
      setMessage("You will receive a call shortly with the verification code.");
    } catch (error) {
      setMessage("Failed to send call. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = () => {
    if (otp === "123456") { // Simulating a valid OTP
      setMessage("Your phone number has been successfully verified!");
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

        {/* Phone Icon */}
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
              d="M3.75 7.5l16.5-5.25m0 0L21.75 6.75m0-4.5v14.25M3.75 7.5L2.25 16.5m0 0l14.25 3.75m0 0L21.75 6.75M2.25 16.5V3.75"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold mb-2">Verify your phone number</h2>

        {/* Instructions */}
        <p className="text-gray-600 text-sm mb-6">
          Please verify your phone number to continue using your Pharmalinkin account.
        </p>

        {/* SMS Verification Button */}
        <button
          onClick={handleSendSMS}
          disabled={loading}
          className={`bg-blue-600 text-white px-4 py-2 rounded-lg w-full mb-4 transition ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
          }`}
        >
          {loading ? "Sending SMS..." : "Verify via SMS"}
        </button>

        {/* Call Verification Button */}
        <button
          onClick={handleSendCall}
          disabled={loading}
          className={`bg-green-600 text-white px-4 py-2 rounded-lg w-full transition ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"
          }`}
        >
          {loading ? "Sending Call..." : "Verify via Call"}
        </button>

        {/* OTP Input Section */}
        {showOTPInput && (
          <div className="mt-6">
            <p className="text-gray-600 text-sm mb-4">Enter the OTP sent to your phone:</p>
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
          If you did not request this, you can ignore this and your number won't be verified.
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
