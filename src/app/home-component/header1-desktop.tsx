import type { NextPage } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Use shadcn Button component
import TopMenu from "./top-menu";
import FrameComponent from "./frame-component"; // Make sure you have this imported
import frame from "../../assets/frame.png";

export type Header1DesktopType = {
  className?: string;
};

const Header1Desktop: NextPage<Header1DesktopType> = ({ className = "" }) => {
  return (
    <section className={`w-full h-screen flex flex-col ${className}`}>
      {/* Header Section */}
      <header className="w-full flex items-center justify-between py-4 px-8 bg-white shadow-sm sticky top-0 z-50">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-3">
          <Image className="w-8 h-8" alt="Logo" src={frame} loading="lazy" />
          <h1 className="text-xl font-semibold text-[#0a2472]">Pharmalinkin</h1>
        </div>

        {/* Navigation Links and Buttons */}
        <div className="flex items-center space-x-12">
          {/* Navigation Links */}
          <nav className="flex items-center space-x-8 text-gray-600">
            <TopMenu caption="Find a Job" />
            <TopMenu caption="Talents" />
            <TopMenu caption="Features" />
            <TopMenu caption="About" />
          </nav>

          {/* Buttons: Login and Sign Up */}
          <div className="flex items-center space-x-5">
  <Button className="bg-gradient-to-r from-[#0a2472] to-[#0056b3] text-white font-semibold px-5 py-3 rounded-md shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
    Login
  </Button>
  <Button className="bg-gradient-to-r from-[#0a2472] to-[#0056b3] text-white font-semibold px-5 py-3 rounded-md shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
    Sign Up
  </Button>
</div>

        </div>
      </header>

      {/* Frame Component */}
      <div className="flex-grow w-full">
        <FrameComponent />
      </div>
    </section>
  );
};

export default Header1Desktop;
