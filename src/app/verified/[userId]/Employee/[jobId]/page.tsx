"use client";

import { Badge } from "@/components/ui/badge";
import React, { useEffect, useState } from "react";
import {
  FaCalendar,
  FaCircle,
  FaHome,
  FaRegClock,
  FaMoneyBill,
  FaUserFriends,
  FaHourglass,
  FaCalendarCheck,
  FaIdCard,
  FaUserCheck,
} from "react-icons/fa";

const page = ({params}: any) => {
    console.log(params);
    
  // Disable background scroll when modal is open
  const [job,setJob]=useState<any>()
  useEffect(() => {
   
  }, []);

  return (
    <div className=" flex items-center justify-center py-8 lg:py-16">
      <div className="bg-white w-12/12 md:w-2/3 lg:w-[60%] rounded-lg lg:shadow-lg p-6 max-h-full overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-start mb-5">
          {/* Title and Company */}
          <div>
            <h2 className="text-2xl text-gray-700 font-bold">{job?.title}</h2>
            <div className="flex gap-2 items-center mt-1">
              <p className="text-sm text-gray-500">{job?.company}</p>
              {job?.hiringStatus && (
                <Badge className="text-xs font-medium text-blue-400 border-blue-400 bg-transparent">
                  {job?.hiringStatus}
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="space-y-6">
          {/* Job Details */}
          <div>
            {/* Location */}
            <div className="flex items-center gap-2 mb-3">
              {job?.location === "Work From Home" ? (
                <>
                  <FaHome className="text-gray-400" />
                  <span className="text-gray-600">{job?.location}</span>
                </>
              ) : (
                <>
                  <img
                    src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flocation.84937215.png&w=32&q=75" // Ensure this image exists in the public folder
                    alt="Location Icon"
                    className="h-4 w-4"
                  />
                  <span className="text-gray-600">{job?.location}</span>
                </>
              )}
            </div>

            {/* Duration, Stipend, Apply By */}
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center gap-1">
                <FaCalendar className="text-gray-400" />
                <span>{job?.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaMoneyBill className="text-gray-400" />
                <span>{job?.stipend}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaHourglass className="text-gray-400" />
                <span>{job?.applyby}</span>
              </div>
            </div>

            {/* Posted Date, Job Offer, Applicants */}
            <div className="flex flex-wrap gap-4 text-gray-500 mt-2">
              <div className="flex items-center gap-1">
                <FaRegClock className="text-gray-400" />
                <span>{job?.postedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCircle className="text-gray-400 w-2 h-2" />
                <span>{job?.joboffer}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaCircle className="text-gray-400 w-2 h-2" />
                <FaUserFriends className="text-gray-400" />
                <span>181 applicants</span>
              </div>
            </div>
          </div>

          <hr className="border-gray-300" />

          {/* Key Responsibilities */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Key Responsibilities
            </h3>
            <p className="text-gray-600 mb-3">
              Selected intern&apos;s day-to-day responsibilities include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {job?.responsibilities?.map((responsibility: any, index: any) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>

          {/* Skills Required */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Skill(s) Required
            </h3>
            <div className="flex flex-wrap gap-3">
              {job?.skills?.map((skill: any, index: any) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="  rounded">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Additional Information
            </h3>
            <p className="text-gray-600 mb-3">{job?.additionalInfo}</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Should have good English communication skills.</li>
              <li>
                Should know about B2B marketing and be proficient in MS Office
                and Google Sheets.
              </li>
              <li>
                Should be self-driven, hardworking, and passionate about growth
                with strong attention to detail.
              </li>
            </ul>
            <p className=" text-gray-600 py-3">
              Those who complete these tasks will not only contribute to
              building a better society but also receive recognition for their
              efforts. Completing all tasks will earn you a Certificate of
              Completion of Internship. Achieve three tasks successfully, and
              you&apos;ll receive our prestigious Changemaker Award Certificate.
            </p>
          </div>

          {/* Perks */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Perks</h3>
            <div className="flex flex-wrap gap-2">
              {job?.perks?.map((perk: any, index: any) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {perk}
                </span>
              ))}
            </div>
          </div>

          {/* About Company */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              About {job?.company}
            </h3>
            <p className="text-gray-600">{job?.aboutCompany}</p>
          </div>
          {/* Activity on Internshala */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Activity on Internshala
            </h3>
            <div className="flex flex-wrap gap-4 text-gray-500 mt-2 ">
              <p className="flex items-center gap-1">
                <FaCalendarCheck /> Hiring since May 2020
              </p>
              <p className="flex items-center gap-1">
                <FaIdCard /> 537 opportunities posted
              </p>
              <p className="flex items-center gap-1">
                <FaUserCheck /> 60990 candidates hired
              </p>
            </div>
          </div>
          <hr className="border-gray-300" />

          {/* Apply Button */}
          <div className="flex justify-left mt-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
