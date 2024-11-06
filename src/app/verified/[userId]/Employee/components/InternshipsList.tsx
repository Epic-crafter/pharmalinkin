"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaCalendar, FaCircle, FaHome, FaRegClock, FaMoneyBill } from "react-icons/fa";
import { useRouter } from "next/navigation";

const InternshipsList = ({ internships, onSelect }: any) => {
  const router = useRouter()
  return (
    <div className="space-y-5">
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
                    <Badge className="text-xs font-medium text-blue-400 border-blue-400 bg-transparent">{internship.status}</Badge>
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
            <div className="flex gap-4">
              <Badge className="text-xs font-medium text-blue-400 bg-blue-50 flex gap-2"><FaRegClock />{internship.postedDate}</Badge>
              {internship.joboffer &&
                <Badge className="text-xs font-medium text-gray-400 bg-transparent flex items-center gap-2"><FaCircle className="text-gray-400 w-2" />{internship.joboffer}</Badge>
              }
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
