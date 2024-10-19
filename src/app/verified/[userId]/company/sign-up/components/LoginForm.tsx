import { Input } from "../../../../../../components/ui/input";
import { Button } from "../../../../../../components/ui/button";
import { Checkbox } from "./Checkbox";
import { PasswordInput } from "./PassInput";
import Link from "next/link";

export const LoginForm = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Make the most of your professional life
      </h1>

      {/* Email Input */}
      <div className="mb-4">
        <Input
          type="email"
          placeholder="Email or phone number"
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* Password Input */}
      <PasswordInput />

      {/* Remember Me Checkbox */}
      <Checkbox />

      {/* Agree & Join Button */}
      <Button className="w-full bg-blue-600 text-white py-2 rounded-md mb-4">
        Agree & Join
      </Button>

      {/* Divider */}
      <div className="flex items-center mb-4">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="px-2 text-gray-500">or</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      {/* Continue with Google */}
      <Button className="w-full bg-white border border-gray-300 text-black py-2 rounded-md flex items-center justify-center mb-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
          alt="Google Icon"
          className="w-5 h-5 mr-2"
        />
        Continue with Google
      </Button>

      {/* Already on LinkedIn? */}
      <p className="text-center">
        Already on LinkedIn?{" "}
        <Link href="/signin">
          <a className="text-blue-600 hover:underline">Sign in</a>
        </Link>
      </p>

      {/* Footer */}
      <div className="text-center mt-6 text-sm text-gray-500">
        <Link href="/help">
          <a className="hover:underline">
            Looking to create a page for a business? Get help
          </a>
        </Link>
      </div>
    </div>
  );
};
