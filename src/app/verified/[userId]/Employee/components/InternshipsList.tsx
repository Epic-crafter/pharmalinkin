"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaCalendar, FaCircle, FaHome, FaRegClock, FaMoneyBill, FaExternalLinkAlt, FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";

const InternshipsList = ({ internships, onSelect }: any) => {
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter()
  const handleCopyUrl = (jobId: string) => {
    const jobUrl = `${window.location.origin}/Employee/jobs/${jobId}`;
    navigator.clipboard
      .writeText(jobUrl)
      .then(() => {
        setMessage("Job URL copied to clipboard!"); 
        setTimeout(() => setMessage(null), 5000); 
      })
      .catch((err) => {
        console.error("Failed to copy URL:", err);
        setMessage("Failed to copy URL. Please try again.");
        setTimeout(() => setMessage(null), 5000);
      });
  };

  return (
    <div className="space-y-5">
       {/* Success message */}
       {message && (
        <div className="top-24 p-2 text-sm text-green-500 bg-green-100 border border-green-500 rounded text-center">
          {message}
        </div>
      )}
      {/* Display Internships */}
      {internships.map((internship: any, idx: any) => (
        <Card onClick={() => router.push(`Employee/jobs/${internship._id}`)} key={idx} className="p-4 bg-white rounded shadow flex border-none justify-between cursor-pointer">
          <div>
            {/* title, companyname and status */}
            <div className="flex justify-between items-center mb-6 text-sm">
              <div>
                {/* title */}
                <h3 className="text-lg font-bold text-gray-600">{internship.title}</h3>
                {/* companyname and status */}
                <div className="flex gap-3">
                  <p className="text-md text-gray-600">{internship.companyName}</p>
                  {internship.status && (
                    <Badge className="text-xs font-medium">{internship.status}</Badge>
                  )}
                </div>
              </div>
            </div>

            {/* Location, Duration and Stipend */}
            <div className="flex gap-4 text-xs mb-3 lg:flex-row sm:flex-row flex-col">
              {internship.location === "Work From Home" ? (
                <p className="text-gray-600 flex gap-2 items-center"><FaHome className="text-gray-400" />{internship.location}</p>
              ) : (
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <img src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flocation.84937215.png&w=32&q=75" alt="" className="h-3" />
                  {internship.location}
                </p>
              )}
              <div className="flex gap-4 text-xs">
                {internship.salary && (
                  <p className="text-gray-600 flex gap-2 items-center"><FaMoneyBill className="text-gray-400" />{internship.salary}</p>
                )}
              </div>
            </div>
            <div className="flex gap-4 text-blue-400">
              <Badge className="text-xs font-medium text-blue-400 bg-blue-50 flex gap-2"><FaRegClock />{internship.postedDate}</Badge>
              <FaExternalLinkAlt onClick={(e) => {
                  e.stopPropagation();
                  handleCopyUrl(internship._id);
                }}/>
                <a href={internship?.company.socialLinks.facebook}>
              <FaFacebookSquare />{" "}
            </a>
            <a href={internship?.company.socialLinks.linkedin}>
              <FaLinkedin />
            </a>
            <a href={internship?.company.socialLinks.twitter}>
              <FaTwitterSquare />
            </a>
            </div>
          </div>
          {/* Company logo */}
          <img
            src={internship.companyLogo || 'https://internshala.com/static/images/search/placeholder_logo.svg'}
            alt=""
            className="w-10 h-10 mr-4"
          />
        </Card>
      ))}
    </div>
  );
}

export default InternshipsList;
