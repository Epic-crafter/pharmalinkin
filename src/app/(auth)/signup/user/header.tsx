"use client";
import { Button } from "@/components/ui/button";
import { FaEllipsisV } from "react-icons/fa";
import logo from "../../../../assets/logo.jpg";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const router = useRouter();

  return (
    <header className="flex items-center space-x-4 justify-between lg:px-20 px-8 py-4 font-bold">
      {/* Header-left */}
      <div className="flex items-center space-x-3 font-bold cursor-pointer" onClick={() => router.push("/")}>
        <Image className="h-10 w-10 rounded-full" src={logo} alt="Logo" />
        <h1 className="text-xl">Pharmalinkin</h1>
      </div>

      {/* Header-right */}
      <div className="flex items-center justify-between gap-2">
        {/* Nav links (visible only on large screens) */}
        <nav className="space-x-4 text-black font-semibold hidden lg:block">
          
          <span className="cursor-pointer" onClick={() => router.push("/")}>Home</span>
        </nav>


        {/* Ellipsis button for smaller screens */}
        <FaEllipsisV
          className="lg:hidden cursor-pointer"
          onClick={() => setIsNavVisible(!isNavVisible)}
        />
      </div>

      {/* Mobile Nav (visible only when isNavVisible is true) */}
      {isNavVisible && (
        <nav className="fixed top-4 right-12 h-screen w-1/3 bg-white shadow-lg flex flex-col space-y-4 p-8 lg:hidden">
          <span className="cursor-pointer" onClick={() => router.push("/")}>Home</span>
        </nav>
      )}
    </header>
  );
}
