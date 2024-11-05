"use client";

import { Badge } from "@/components/ui/badge";
import { Dialog } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
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
  FaRegHourglass,
  FaRegMoneyBillAlt,
  FaRegUser,
  FaExternalLinkAlt, 
  FaFacebook,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaRupeeSign
} from "react-icons/fa";

const page = ({params}: any) => {
  const router = useRouter();
  console.log(params);
  const { jobId } = params; 
  const {userId} = params;
  console.log("JOB ID-----", jobId);
  const [job, setJob] = useState<any>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  useEffect(() => {
    const fetchJobDetails = async () => {
      const response = await fetch(`/api/users/jobs/get-by-id?jobId=${jobId}`);
      const data = await response.json();
      setJob(data.job);
      console.log("JOB DETAILS------", data.job); // Log data.job directly here
    };

    fetchJobDetails();
  }, [jobId]);

  const applyJob = () => {
    setIsDialogOpen(true); // Open the dialog on button click
  };

  const handleDialogConfirm = () => {
    setIsDialogOpen(false); // Close the dialog before redirecting
    router.push(`/verified/${userId}/Employee`); // Redirect to the desired route
  };

  const handleDialogCancel = () => {
    setIsDialogOpen(false); // Close the dialog when "Cancel" is clicked
  };

  return (
    <div className=" flex items-center justify-center py-8 lg:py-16">
      <div className="bg-white w-12/12 md:w-[80%] lg:w-[70%] rounded-lg lg:shadow-lg p-6 max-h-full overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-start mb-5 text-gray-500">
          {/* Title and Company */}
          <div className="space-y-2">
            <h2 className="text-2xl text-gray-700 font-bold">{job?.title}</h2>
            <div className="flex gap-2 items-center">
              <p className="text-md font-bold ">{job?.company?.companyName}</p>
              <div className="text-sm text-blue-400 cursor-pointer">

              <a href={job?.company.website}><FaExternalLinkAlt  /></a>
              </div>
              {job?.status && (
                <Badge className="text-xs font-medium text-blue-400 border-blue-400 bg-transparent">
                  {job?.status}
                </Badge>
              )}
            </div>
            

          </div>
          <div><img src={job?.company.logo} alt="logo"/></div>
        </div>

        {/* Modal Body */}
        <div className="space-y-6">
          {/* Job Details */}
          <div className="space-y-6">
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

            {/* Stipend, Deadline */}
            <div className="flex flex-wrap gap-12 text-gray-500">
              
              <div className="flex flex-col  gap-1 text-sm">
                <span className="flex gap-1 items-center"><FaRegMoneyBillAlt className="text-gray-400" /> Salary</span>
                
                <span className="text-gray-800 flex">{job?.salaryCurrency==="INR" && <FaRupeeSign className="text-gray-600" />} {job?.salary}</span>
              </div>
              <div className="flex flex-col  gap-1 text-sm">
                <span className="flex gap-1 items-center"><FaRegHourglass className="text-gray-400" /> Apply by</span>
                
                <span className="text-gray-800">{job?.applicationDeadline}</span>
              </div>
            </div>

            {/* Posted Date, Job Offer, Applicants */}
            <div className="flex flex-wrap gap-12 text-gray-500 mt-2">
              <div className="flex items-center gap-1 bg-gray-200 rounded-lg text-xs p-1">
                <FaRegClock className="text-gray-400" />
                <span>Posted {job?.postedDate}</span>
              </div>
             
              {job?.applicants &&
              <div className="flex items-center gap-2">
                {/* <FaCircle className="text-gray-400 w-2 h-2" /> */}
                <FaRegUser className="text-gray-400" />
                <span>{job?.applicants.length} applicants</span>
              </div>
             } 
            </div>
          </div>

          <hr className="border-gray-300" />

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Description
            </h3>
            <p className="text-gray-600 mb-3">
              {job?.description}
            </p>
          </div>

          {/* Skills Required */}
          {job?.skillsRequired.length > 0 &&
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Skill(s) Required
            </h3>
            <div className="flex flex-wrap gap-3">
              {job?.skillsRequired?.map((skill: any, index: any) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
 }

          {/* Requirements */}
          <div className="">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Requirements
            </h3> 
            <p className=" text-gray-600 py-3">
              {job?.requirements}
            </p>
          </div> 
{/* Social links */}
          <div className="flex text-gray-500 text-xl gap-4">
            
         <a href={job?.company.socialLinks.facebook}><FaFacebookSquare/> </a>
         <a href={job?.company.socialLinks.linkedin}><FaLinkedin/></a>
         <a href={job?.company.socialLinks.twitter}><FaTwitterSquare/></a>

          </div>

          <hr className="border-gray-300" />

          {/* Apply Button */}
          <div className="flex justify-left mt-4">
            <button onClick={()=>setIsDialogOpen(true)} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
              Apply Now
            </button>
          </div>
        </div>
      </div>
      {isDialogOpen && 
      
      <Dialog >
        <div className="fixed bg-white p-6 rounded-lg shadow-lg max-w-sm w-full absolute z-index-1 top-0">
          <h3 className="text-lg font-semibold mb-2">Confirm Application</h3>
          <p className="text-gray-600 mb-4">Are you sure you want to apply for this job?</p>
          <div className="flex justify-end space-x-3">
            <button
              onClick={handleDialogCancel}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleDialogConfirm}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Yes, Apply
            </button>
          </div>
        </div>
      </Dialog>
}
    </div>
  );
};

export default page;
