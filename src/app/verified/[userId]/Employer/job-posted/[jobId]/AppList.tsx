"use client";
import { useState } from "react";
import { FaCircle, FaExclamationTriangle, FaGithub, FaLink, FaRegCalendarAlt, FaRegClipboard, FaRegClock, FaRegCommentAlt, FaRegFile, FaSortUp, FaUserCheck } from "react-icons/fa";
import { FiInfo } from "react-icons/fi"

// Dummy data
const applications = [
  {
    id: 1,
    name: "Ravi Dubey",
    location: "Panipat (Open to relocate)",
    experience: "Machine Learning at AICTE LAB PIET KUK • Jul'23 - Sep'23 • 2 months (Internship)",
    education: "B.Tech, Computer Science & Engineering (2021 - 2025)",
    institute: "PANIPAT INSTITUTE OF ENGINEERING AND TECHNOLOGY",
    portfolio: "https://portfolio-link.com",
    skills: ["CSS", "Flutter", "HTML", "Java", "Python"],
    coverLetter:
      "You should hire me because I bring a combination of skills, experience, and a strong sense of responsibility. I am passionate about solving problems using technology and have a keen sense of when to deliver work in demanding environments.",
    availability: "Yes, I am available to join immediately.",
    match: "Very Good match"
  },
  {
    id: 2,
    name: "Neha",
    location: "Mumbai",
    experience: "Frontend Developer Intern at XYZ Corp • Jun'23 - Aug'23 • 3 months (Internship)",
    education: "B.Sc. in Information Technology (2020 - 2024)",
    institute: "UNIVERSITY OF MUMBAI",
    portfolio: "https://portfolio-neha.com",
    skills: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "Node.js"],
    coverLetter:
      "I have experience building responsive web applications using modern front-end technologies. I am eager to contribute and grow in a dynamic team, and I can bring a blend of creativity and technical expertise.",
    availability: "I can start from November 2024.",
    match: "Good match"

  },
  {
    id: 3,
    name: "Rahul",
    location: "Delhi",
    experience: "Mobile App Developer Intern at ABC Tech • May'23 - Jul'23 • 2 months (Internship)",
    education: "B.Tech, Information Technology (2021 - 2025)",
    institute: "INDIAN INSTITUTE OF TECHNOLOGY, DELHI",
    portfolio: "https://rahul-app-dev.com",
    skills: ["Kotlin", "Swift", "React Native", "CSS", "HTML"],
    coverLetter:
      "With hands-on experience in mobile app development, I have built and deployed several applications on both Android and iOS platforms. I am excited to bring my skills and learning mindset to your team.",
    availability: "Available to start immediately.",
    match: "Very Good match"

  },
];

export default function ApplicationsList() {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [selectedApplications, setSelectedApplications] = useState<any>([]);

  // Toggle dropdown for action buttons
  const toggleDropdown = (id:any) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  // Handle checkbox selection for each application
  const toggleApplicationSelection = (id:any) => {
    if (selectedApplications.includes(id)) {
      setSelectedApplications(selectedApplications.filter((appId:any) => appId !== id));
    } else {
      setSelectedApplications([...selectedApplications, id]);
    }
  };

  // Handle select all applications
  const selectAll = () => {
    if (selectedApplications.length === applications.length) {
      setSelectedApplications([]); // Unselect all if already selected
    } else {
      setSelectedApplications(applications.map((app) => app.id)); // Select all
    }
  };

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
          Showing {applications.length} results out of {applications.length} applications
        </div>

        {/* Select All checkbox */}
        <div className="flex items-center text-sm ">
          <input
            type="checkbox"
            className="mr-2"
            checked={selectedApplications.length === applications.length}
            onChange={selectAll}
          />
          <label className="">Select All</label>
        </div>
      </div>
      {/* second part */}
      <div className="mt-2 text-sm  p-6">
        {applications.map((app) => (
          <div key={app.id} className="border border-gray-200 shadow-sm  rounded-xl mb-4 space-y-4">
            <div className={`${app.match === "Very Good match" && " bg-gradient-to-r from-green-300 via-blue-100  to-white"} w-full text-xs rounded-t-xl flex lg:justify-between flex-col-1 items-start border-b border-gray-200  p-4 font-semibold `}>
              <div className={` flex gap-4 items-center `}>
                <button className={`${app.match === "Very Good match" ? "bg-teal-500" : "bg-primary"} text-white flex px-2 py-1 gap-2 rounded-full items-center `}><FaRegClock /> {app.match} </button>
                <p className="text-primary">Know more</p>
              </div>
              <div className=" text-gray-500">Applied 9 days ago</div>

            </div>
            <div className="flex items-start justify-start p-4 ">
              {/* Candidate Info with Checkbox */}
              <input
                type="checkbox"
                className="mr-4 mt-2"
                checked={selectedApplications.includes(app.id)}
                onChange={() => toggleApplicationSelection(app.id)}
              />
              {/* All Information */}
              <div className="space-y-6 ">
                <div className="flex justify-between items-start pb-4">
                  <div className="flex items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">{app.name}</h3>
                      <p className=" text-sm flex items-center font-medium">{app.location} &nbsp; <FaCircle style={{ fontSize: "5px" }} /> &nbsp; Total work experience : 1 year 5 months&nbsp;<FiInfo className="text-primary  " /></p>
                    </div>
                  </div>
                </div>

                {/* Experience Section */}
                <div className=" grid  lg:grid-cols-[1fr_3fr] grid-cols-1">
                  <p className="">EXPERIENCE </p>
                  <p className="text-sm font-semibold">{app.experience}</p>
                </div>
                {/* Education Section */}
                <div className=" grid  lg:grid-cols-[1fr_3fr] grid-cols-1">
                  <p className="">EDUCATION</p>
                  <p className="text-sm font-semibold">{app.education} <br />
                    {app.institute}</p>
                </div>
                {/* Portfolio */}
                <div className=" grid  lg:grid-cols-[1fr_3fr] grid-cols-1">
                  <p className="">PORTFOLIO / WORK SAMPLES</p>
                  <p className="flex gap-4">

                    <a href={app.portfolio} className="text-blue-500 ">
                      <FaGithub />
                    </a>
                    <a href={app.portfolio} className="text-blue-500">
                      <FaLink />
                    </a>

                  </p>

                </div>
                {/* Skills */}
                <div className=" grid  lg:grid-cols-[1fr_3fr] grid-cols-1">

                  <p className="">SKILL(S)</p>
                  <p className="text-sm">{app.skills.join(", ")}</p>
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

                {/* Action Buttons */}
                <div className="flex justify-between items-center text-sm font-semibold ">
                  <div className="mt-4 flex gap-4 items-center">
                    <p className="text-primary ">
                      View full application
                    </p>
                    <p className="text-primary flex gap-1 items-center">
                      <FaRegFile /> Add notes
                    </p>
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



