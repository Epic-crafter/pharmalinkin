"use client"
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from "react-icons/fc";

const Login: React.FC = () => {
  return (
    <div className='flex min-h-screen min-w-screen justify-center items-center'>
    <div className="flex flex-col items-center justify-between border border-gray-300 min-h-[70vh] w-fit rounded-2xl py-12 px-24">
      
      <div className='w-full flex flex-col justify-center items-center'>
      <h1 className="text-2xl font-semibold mb-6">Log in to JobHuntly</h1>
      
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <input
            type="email"
            placeholder="Username or Email"
            className="min-w-80 px-4 py-2 border text-sm rounded-lg focus:outline-none focus:ring-[1px] focus:ring-gray-300"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-[#4640DE] text-white rounded-lg hover:bg-blue-700"
        >
          Continue
        </button>
      </form>

      <div className="flex items-center justify-center my-6 w-full max-w-sm">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-4 text-gray-500">or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <button
        onClick={() => alert('Sign in with Google')}
        className="w-full max-w-sm py-2 flex flex-row items-center justify-center bg-[#4285f4] text-white rounded-lg"
      >
        <div className='bg-white p-1 mx-2 rounded-lg'>
        <FcGoogle size="1.5em"/>
        </div>
        <p>Continue with Google</p>
      </button>
      </div>
      <div className='w-full flex flex-col justify-center items-center'>
      <div className="flex items-center justify-center my-6 w-full max-w-sm">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-4 text-gray-500 text-sm">
          Don't have an JobHuntly account?{' '}</span>
        <hr className="flex-grow border-gray-300" />
      </div>
        <Link
          href="/signup"
          className="w-48 py-1 flex justify-center items-center bg-white border border-2 border-[#4640DE] text-[#4640DE] rounded-lg hover:bg-gray-100"
        >
            Sign Up
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Login;
