"use client";
import { useEffect, useState } from "react";
import { FaCircle, FaExclamationTriangle, FaGithub, FaLink, FaLinkedin, FaRegCalendarAlt, FaRegClipboard, FaRegClock, FaRegCommentAlt, FaRegFile, FaSortUp, FaTwitter, FaUserCheck } from "react-icons/fa";
import { FiInfo } from "react-icons/fi"
import { useJobContext } from "@/lib/contexts/jobId-context";


export default function ApplicationsList() {
  const status = "";
  const { jobId } = useJobContext();
  console.log("JOB ID1------", jobId);
  const [applicants, setApplicants] = useState<any>([]);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [selectedApplications, setSelectedApplications] = useState<any>([]);

  // Toggle dropdown for action buttons
  const toggleDropdown = (id: any) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  // Handle checkbox selection for each application
  const toggleApplicationSelection = (id: any) => {
    if (selectedApplications.includes(id)) {
      setSelectedApplications(selectedApplications.filter((appId: any) => appId !== id));
    } else {
      setSelectedApplications([...selectedApplications, id]);
    }
  };

  // Handle select all applications
  const selectAll = () => {
    if (selectedApplications.length === applicants.length) {
      setSelectedApplications([]);
    } else {
      setSelectedApplications(applicants.map((app: any, index: any) => app.id));
    }
  };
  const fetchApplicants = async () => {
    try {

      const response = await fetch(`/api/company/fetch-applicants?jobId=${jobId}&status=${status}`);
      const data = await response.json();
      if (data.success) {
        setApplicants(data.applicants);
        console.log("Applicants List-------", data.applicants)
      } else {
        console.error("Error fetching applicants:", data.message);
      }
    } catch (error) {
      console.error("Failed to fetch applicants:", error);
    }
  };

  useEffect(() => {
    if (jobId) {
      fetchApplicants();
    }
  }, [jobId]);

  return (
    <div className="text-gray-600 border-r border-gray-200">
      {/* <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Applications for Backend Development internship</h1>
        </div> */}
      {/* First part */}
      <div className="border-b-2 shadow-sm p-6">
        <div className="bg-red-50 shadow-red-300 text-sm text-gray-800 px-4 py-2 rounded-lg mb-4 flex items-start border border-red-200 border-1 shadow gap-2">
          <FaExclamationTriangle className="text-red-500 text-xl" />
          <div className=" flex justify-between">
            <p><span className="text-red-600">87 new applications are hidden! </span> Upgrade to Premium now to view all and get 10x more applications.</p>
            <button className="bg-blue-500 text-white  rounded-lg text-sm w-[120px]">Upgrade now</button>
          </div>

        </div>
        <div className="font-semibold  mb-4 py-2">
          Showing {applicants.length} results out of {applicants.length} applications
        </div>

        {/* Select All checkbox */}
        <div className="flex items-center text-sm ">
          <input
            type="checkbox"
            className="mr-2"
            checked={selectedApplications.length === applicants.length}
            onChange={selectAll}
          />
          <label className="">Select All</label>
        </div>
      </div>
      {/* second part */}
      <div className="mt-2 text-sm  p-6">
        {applicants.map((app: any, index: any) => (
          <div key={app?._id} className="border border-gray-200 shadow-sm  rounded-xl mb-4 space-y-4">
            <div className={` w-full text-xs rounded-t-xl flex lg:justify-between flex-col-1 items-start border-b border-gray-200  p-4 font-semibold `}>
              <div className={` flex gap-4 items-center `}>
                <button className={`bg-red-200 border-2 text-red-500 border-red-400 flex px-2 py-1 gap-2 rounded-lg items-center `}><FaRegClock /> {app?.status} </button>
                <p className="text-primary">Know more</p>
              </div>
              <div className=" text-gray-500">Applied on {app?.appliedDate}</div>

            </div>
            <div className="flex items-start justify-start p-4 ">
              {/* Candidate Info with Checkbox */}
              <input
                type="checkbox"
                className="mr-4 mt-2"
                checked={selectedApplications.includes(app?.id)}
                onChange={() => toggleApplicationSelection(app?.id)}
              />
              {/* All Information */}
              <div className="space-y-6 ">
                <div className="flex justify-between items-start pb-4">
                  <div className="flex items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">{app?.aplicantProfile.firstName} {app?.aplicantProfile.lastName}</h3>
                      <p >{app?.aplicantProfile.location} </p>
                      <p >{app?.aplicantProfile.bio} </p>
                      {/* <p className=" text-sm flex items-center font-medium">Total work experience : &nbsp;<FiInfo className="text-primary  " /></p> */}
                    </div>
                  </div>
                </div>

                {/* Experience Section */}
                <div className=" grid  lg:grid-cols-[1fr_3fr] grid-cols-1">
                  <p className="">EXPERIENCE </p>
                  <p className="text-sm font-semibold">{app?.aplicantProfile.experience}</p>
                </div>
                {/* Education Section */}
                <div className=" grid  lg:grid-cols-[1fr_3fr] grid-cols-1">
                  <p className="">EDUCATION</p>
                  <p className="text-sm font-semibold">{app?.aplicantProfile.education}</p>
                </div>
                {/* Portfolio */}
                <div className=" grid  lg:grid-cols-[1fr_3fr] grid-cols-1">
                  <p className="">PORTFOLIO / WORK SAMPLES</p>
                  <p className="flex gap-4">
                    <a href={app?.resumeUrl} className="text-blue-500 ">
                      <FaLink />
                    </a>

                  </p>

                </div>
                {/* Skills */}
                <div className=" grid  lg:grid-cols-[1fr_3fr] grid-cols-1">

                  <p className="">SKILL(S)</p>
                  <p className="text-sm">{app?.aplicantProfile.skills.join(", ")}</p>
                </div>
                {/* Cover Letter */}
                <div className="grid  lg:grid-cols-[1fr_3fr] grid-cols-1 items-start">
                  <p className="flex items-center gap-1"><span>COVER LETTER </span><span><FiInfo className="text-gray-500 text-xs " /></span> </p>
                  <p className="text-sm"> {app.coverLetter}</p>
                </div>
                {/* Availability */}
                <div className=" grid  lg:grid-cols-[1fr_3fr] grid-cols-1">
                  <p className="flex items-center gap-1"><span>AVAILABILITY </span><span><FiInfo className="text-gray-500 text-xs" /></span> </p>
                  <p className="text-sm">{app.availability}</p>
                </div>
                {/* Previous Job Position */}
                <div className=" grid  lg:grid-cols-[1fr_3fr] grid-cols-1">
                  <p className="flex items-center gap-1"><span>PREVIOUS JOB POSITION </span> </p>
                  <p className="text-sm">{app.aplicantProfile.mostRecentJobTitle}</p>
                </div>
                {/* Preferred Jobs */}
                <div className=" grid  lg:grid-cols-[1fr_3fr] grid-cols-1">
                  <p className="flex items-center gap-1"><span>PREFERRED JOB </span><span><FiInfo className="text-gray-500 text-xs" /></span> </p>
                  <p className="text-sm">{app.aplicantProfile.preferredJobTitle}, {app.aplicantProfile.preferredLocation}</p>
                </div>
                {/* social links */}
                <div className=" grid  lg:grid-cols-[1fr_3fr] grid-cols-1">
                  <p className="">SOCIAL LINKS</p>
                  <p className="flex gap-4">

                    <a href={app.aplicantProfile.socialLinks.github} className="text-blue-500 ">
                      <FaGithub />
                    </a>

                    <a href={app.aplicantProfile.socialLinks.linkedin} className="text-blue-500">
                      <FaLinkedin />
                    </a>
                    <a href={app.aplicantProfile.socialLinks.twitter} className="text-blue-500">
                      <FaTwitter />
                    </a>
                  </p>

                </div>
                {/* email */}
                <div className=" grid  lg:grid-cols-[1fr_3fr] grid-cols-1">
                  <p className="flex items-center gap-1"><span>EMAIL</span> </p>
                  <a href={app?.applicant.email}>{app?.applicant.email}</a>
                </div>
                {/* Phone no. */}
                <div className=" grid  lg:grid-cols-[1fr_3fr] grid-cols-1">
                  <p className="flex items-center gap-1"><span>PHONE</span> </p>
                  <a href={`tel:${app?.aplicantProfile.phone}}`}>{app?.aplicantProfile.phone}</a>
                </div>
                {/* Action Buttons */}
                <div className="flex justify-between items-center text-sm font-semibold ">
                  <div className="mt-4 flex gap-4 items-center">
                    <p className="text-primary ">
                      View full application
                    </p>
                    {/* <p className="text-primary flex gap-1 items-center">
                      <FaRegFile /> Add notes
                    </p> */}
                  </div>
                  {/* not interesed and next step buttons */}
                  <div className="flex items-center gap-2 ">
                    <button className="bg-red-100 text-red-500  rounded-md py-2 px-4">Not Interested</button>
                    {/* Dropdown Button */}
                    <button
                      onClick={() => toggleDropdown(app.id)}
                      className="bg-gray-100 py-2 px-4 bg-primary text-white rounded-md flex items-center gap-2"
                    >
                      <p> Next steps </p><FaSortUp className="mt-2" />
                    </button>
                    <div className="relative " style={{ marginTop: "-450px" }}>
                      {openDropdownId === app.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                          <ul className="p-2 space-y-2">
                            <li
                              className="hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-2"
                              onClick={() => setOpenDropdownId(null)}
                            >
                              <FaRegClipboard />
                              Send assignment
                            </li>
                            <li
                              className="hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-2"
                              onClick={() => setOpenDropdownId(null)}
                            >
                              <FaRegCalendarAlt />
                              Schedule interview
                            </li>
                            <li
                              className="hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-2"
                              onClick={() => setOpenDropdownId(null)}
                            >
                              <FaRegCommentAlt />
                              Start chat
                            </li>
                            <li
                              className="hover:bg-gray-200 p-2 cursor-pointer flex items-center gap-2"
                              onClick={() => setOpenDropdownId(null)}
                            >
                              <FaUserCheck />
                              Hire
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


