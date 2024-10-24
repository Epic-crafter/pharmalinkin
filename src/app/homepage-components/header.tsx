"use client";
import { Button } from "@/components/ui/button";
import { FaEllipsisV, FaRegBell, FaTag } from "react-icons/fa";
import logo from "../../assets/logo.jpg"
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  return (
    // <header className="bg-white border-b border-gray-200 py-4">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <h1 className="text-lg font-semibold">Pharmalinkin</h1>
    //     <nav className="space-x-4 text-black font-semibold">
    //       <span >Find a Job</span>
    //       <span >Talents</span>
    //       <span >features</span>
    //       <span >About</span>
    //       <span >Login</span>
    //       <Button >SIgn Up</Button>


    //     </nav>
    //   </div>
    // </header>
    <header className="flex items-center space-x-4 justify-between lg:px-20 px-8 py-4 font-bold">
    {/* header-left */}
    <div className="flex items-center space-x-3 font-bold">
      <Image className="h-10 w-10 rounded-full" src={logo} alt="" />
      <h1 className="text-xl">Pharamalinkin</h1>
    </div>

    {/* header-right */}
    <div className="flex items-center justify-between gap-2">
      {/* Nav links (visible only on large screens) */}
      <nav className="space-x-4 text-black font-semibold hidden lg:block">
        <span>Find a Job</span>
        <span>Talents</span>
        <span>Features</span>
        <span>About</span>
        <span>Login</span>
      </nav>

      {/* Sign Up button */}
      <Button>Sign Up</Button>

      {/* Ellipsis button for smaller screens */}
      <FaEllipsisV
        className="lg:hidden cursor-pointer"
        onClick={() => setIsNavVisible(!isNavVisible)}
      />
    </div>

    {/* Mobile Nav (visible only when isNavVisible is true) */}
    {isNavVisible && (
      <nav className="fixed top-4 right-12 h-screen w-1/3 bg-white shadow-lg flex flex-col space-y-4 p-8 lg:hidden">
        <span>Find a Job</span>
        <span>Talents</span>
        <span>Features</span>
        <span>About</span>
        <span>Login</span>
      </nav>
    )}
  </header>
  );
}
