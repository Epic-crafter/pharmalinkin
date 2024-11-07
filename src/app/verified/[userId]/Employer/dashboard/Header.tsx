"use client"
import { Button } from "@/components/ui/button";
import Avatar from "../../../../../components/ui/avatar";
import { FaRegUserCircle } from "react-icons/fa";
import Link from 'next/link'
import { useUser } from "@/lib/contexts/user";
export default function Header() {

  const { userId } = useUser();

  return (
    <header className="bg-white fixed z-50 h-20 top-0 w-full border-b border-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-semibold">Pharmalinkin</h1>
        <nav className="space-x-4 flex items-center">

          <Button variant="link"><Link href={`/verified/${userId}/Employer/dashboard`} >Dashboard</Link> </Button>
          <Button variant="link">
            <Link href={`/verified/${userId}/Employer/dashboard/post-job`}>Post Internship/Job</Link>
          </Button>
          <Button variant="link" className="text-lg"><Link href=""> <FaRegUserCircle /></Link></Button>
        </nav>
      </div>
    </header>
  );
}
