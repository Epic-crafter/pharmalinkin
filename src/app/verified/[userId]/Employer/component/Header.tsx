"use client";
import { Button } from "@/components/ui/button";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import { useUser } from "@/lib/contexts/user";
import { SidePannel } from "./Sidebar";
export default function Header() {
  const { userId } = useUser();

  return (
    <header className="bg-white fixed z-50 h-20 top-0 w-full border-b border-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center"><SidePannel />
      <h1 className="text-lg font-semibold ml-2">Pharmalinkin</h1></div>
        <nav className="space-x-4 lg:flex hidden items-center">
          <Button variant="link">
            <Link href={`/verified/${userId}/Employer/dashboard`}>
              Dashboard
            </Link>{" "}
          </Button>
          <Button variant="link">
            <Link href={`/verified/${userId}/Employer/dashboard/post-job`}>
              Post Internship/Job
            </Link>
          </Button>
          <Button variant="link" className="text-lg">
            <Link href="">
              {" "}
              <FaRegUserCircle />
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
