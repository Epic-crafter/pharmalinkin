"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../../../../../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const Page = () => {
  const [jobs, setJobs] = useState<any>([]);

  const [error, setError] = useState('');
const router = useRouter();
  // Function to fetch jobs posted by the user
  const fetchJobs = async () => {
    try {
      const res = await fetch("/api/company/get-jobs");
      const data = await res.json();
     
      if (data.success) {
        setJobs(data.jobs);
        console.log("DATA-------", data.jobs);

      } else {
        setError(data.message || "Failed to fetch jobs.");
      }
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setError("An error occurred while fetching jobs.");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-4">
      <Card className="bg-primary/10 border-primary border-2 p-4 rounded-md lg:w-[70%] text-center shadow-md mx-auto">
        <p className="text-gray-700">
          Post unlimited listings and get access to features like boosted
          visibility, applicant contact numbers, etc., with <br />
          Premium.{" "}
          <Link href="/premium-plans" className="text-blue-600 underline">
            View Premium Plans now
          </Link>
        </p>
      </Card>

      {/* Tabs */}
      <div className="p-4 flex justify-center">
        <div className="flex space-x-4">
          <Button>Internships</Button>
          <Button variant="ghost">Jobs</Button>
        </div>
      </div>

      {/* Internship Table */}
      <div className="overflow-x-auto lg:w-[90%] mx-auto p-4">
        {error && <p className="text-red-600 text-center">{error}</p>}
        <Table className="min-w-full bg-white rounded-lg shadow-lg ">
          <TableHeader className="text-center">
            <TableRow className="text-center">
              <TableHead className="p-2 text-center">Profile</TableHead>
              <TableHead className="p-2 text-center">Status</TableHead>
              <TableHead className="p-2 text-center">Total Views</TableHead>
              <TableHead className="p-2 text-center">Action</TableHead>
              <TableHead className="p-2 text-center">Upgrade</TableHead>
              <TableHead className="p-2 text-center">Share on LinkedIn</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-center">
            {jobs.map((job:any,index:any) => (
              <TableRow key={job?._id}>
                <TableCell className="p-2">{job?.title}</TableCell>
                <TableCell className="p-2 text-green-600">{job?.status}</TableCell>
                <TableCell className="p-2">{job?.totalViews}</TableCell>
                <TableCell className="p-2">
                  <Button size="sm" variant="outline" onClick={()=>router.push(`job-posted/${job?._id}`)}>View Applicants</Button>
                </TableCell>
                <TableCell className="p-2 text-yellow-600">Upgrade</TableCell>
                <TableCell className="p-2">
                  <Button variant="link">LinkedIn</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between ml-8 items-center mt-4">
        <p>Showing {jobs.length} of {jobs.length}</p>
        <div className="space-x-2 mr-8">
          <Button variant="default">Previous</Button>
          <Button variant="default">Next</Button>
        </div>
      </div>

      {/* Footer Help Button */}
      <div className="fixed bottom-4 right-4">
        <Button variant="outline">Need help?</Button>
      </div>
    </div>
  );
};

export default Page;
