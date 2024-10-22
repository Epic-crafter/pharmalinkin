"use client"
import { useState } from "react";
import { Input } from "../../../../../../components/ui/input";

export const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4">
      <Input
        type={showPassword ? "text" : "password"}
        placeholder="Password (6+ characters)"
        className="w-full p-2 border rounded-md"
      />
      <div
        className="text-sm mt-1 text-blue-600 hover:underline cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "Hide" : "Show"}
      </div>
    </div>
  );
};
