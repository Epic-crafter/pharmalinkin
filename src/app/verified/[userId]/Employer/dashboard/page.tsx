import React from "react";
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
import { dummyData } from "./components/dummy-data";
import { Card } from "@/components/ui/card";
const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-4">
      <Card className="bg-primary/10 border-primary border-2 p-4 rounded-md lg:w-[70%] text-center shadow-md mx-auto ">
        <p className="text-gray-700">
          Post unlimited listings and get access to features like boosted
          visibility, applicant contact numbers, etc., with <br></br>
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
        <Table className="min-w-full bg-white rounded-lg shadow-lg">
          <TableHeader>
            <TableRow>
              <TableHead className="p-2 text-left">Profile</TableHead>
              <TableHead className="p-2 text-left">Status</TableHead>
              <TableHead className="p-2 text-left">Total Views</TableHead>
              <TableHead className="p-2 text-left">Action</TableHead>
              <TableHead className="p-2 text-left">Upgrade</TableHead>
              <TableHead className="p-2 text-left">Share on LinkedIn</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          {dummyData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="p-2">{item.profile}</TableCell>
              <TableCell className={`p-2 ${item.statusColor}`}>{item.status}</TableCell>
              <TableCell className="p-2">{item.totalViews}</TableCell>
              <TableCell className="p-2">
                <Button size="sm" variant="outline">{item.actionLabel}</Button>
              </TableCell>
              <TableCell className="p-2 text-yellow-600">{item.upgradeLabel}</TableCell>
              <TableCell className="p-2">
                <Button variant="link">{item.shareLabel}</Button>
              </TableCell>
            </TableRow>
          ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between ml-8 items-center mt-4">
        <p>Showing 1 of 1</p>
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

export default page;
