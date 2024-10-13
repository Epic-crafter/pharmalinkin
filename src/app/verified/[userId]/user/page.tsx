"use client";

import { useState } from "react";
import Filters from "./components/Filters";
import InternshipsList from "./components/InternshipsList";

const filters = [
  { label: "Profile", placeholder: "e.g. Marketing" },
  { label: "Location", placeholder: "e.g. Delhi" },
];

const internships = [
  {
    title: "Content Creator",
    company: "Swiggy",
    location: "Work From Home",
    duration: "4 - 8 Weeks",
    stipend: "₹ 12,000/month",
    postedDate: "3 weeks ago",
    hiringStatus: "",
    joboffer: "Part time",
    companyLogo: "https://internshala-uploads.internshala.com/logo%2F639c57d0634231671190480.png.webp",
  },
  {
    title: "Human Resources (HR)",
    company: "TheHummingMinds",
    location: "Gurgaon",
    duration: "6 Months",
    stipend: "₹ 12,000/month",
    postedDate: "3 weeks ago",
    hiringStatus: "Actively hiring",
    joboffer: "",
    companyLogo: "https://internshala-uploads.internshala.com/logo%2F159eynqvcak-73530.png.webp",
  },
  {
    title: "Content Creator",
    company: "Swiggy",
    location: "Work From Home",
    duration: "4 - 8 Weeks",
    stipend: "₹ 12,000/month",
    postedDate: "3 weeks ago",
    hiringStatus: "Actively hiring",
    joboffer: "Internship with job offer",
    companyLogo: "https://internshala-uploads.internshala.com/logo%2F639c57d0634231671190480.png.webp",
  },
  {
    title: "Human Resources (HR)",
    company: "TheHummingMinds",
    location: "Gurgaon",
    duration: "6 Months",
    stipend: "₹ 12,000/month",
    postedDate: "3 weeks ago",
    hiringStatus: "Actively hiring",
    joboffer: "Internship with job offer",
    companyLogo: "https://internshala-uploads.internshala.com/logo%2F159eynqvcak-73530.png.webp",
  },
  {
    title: "Content Creator",
    company: "Swiggy",
    location: "Work From Home",
    duration: "4 - 8 Weeks",
    stipend: "₹ 12,000/month",
    postedDate: "3 weeks ago",
    hiringStatus: "Actively hiring",
    joboffer: "",
    companyLogo: "https://internshala-uploads.internshala.com/logo%2F639c57d0634231671190480.png.webp",
  },
  {
    title: "Human Resources (HR)",
    company: "TheHummingMinds",
    location: "Gurgaon",
    duration: "6 Months",
    stipend: "₹ 12,000/month",
    postedDate: "3 weeks ago",
    hiringStatus: "Actively hiring",
    joboffer: "Part time",
    companyLogo: "https://internshala-uploads.internshala.com/logo%2F159eynqvcak-73530.png.webp",
  },
  {
    title: "Content Creator",
    company: "Swiggy",
    location: "Work From Home",
    duration: "4 - 8 Weeks",
    stipend: "₹ 12,000/month",
    postedDate: "3 weeks ago",
    hiringStatus: "Actively hiring",
    joboffer: "Internship with job offer",
    companyLogo: "https://internshala-uploads.internshala.com/logo%2F639c57d0634231671190480.png.webp",
  },
  {
    title: "Human Resources (HR)",
    company: "TheHummingMinds",
    location: "Gurgaon",
    duration: "6 Months",
    stipend: "₹ 12,000/month",
    postedDate: "3 weeks ago",
    hiringStatus: "",
    joboffer: "Part time",
    companyLogo: "https://internshala-uploads.internshala.com/logo%2F159eynqvcak-73530.png.webp",
  },

];

export default function page() {
  const [showFilters, setShowFilters] = useState(false); // Track the state of the filters visibility

  
  return (
    <div style={{ backgroundColor: "#f8f8f8" }} >
      <div className="lg:w-3/4 lg:mx-auto pt-4">


        <h2 className="pt-6 m-auto text-center font-bold text-xl" style={{ color: "#008bdc" }}>10443 Total Jobs</h2>
        <h3 className=" text-center mt-1 mb-6 text-sm">Latest Summer Jobs in India</h3>
        <div className="block lg:hidden mb-4  ">

          <button className="text-lg font-semibold  text-center px-4" onClick={() => setShowFilters(true)}>{showFilters ? '' : 'Filters'} </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 mx-auto ">
          {/* InternshipsList component with dynamic width on large screens */}
          <div className={`lg:w-2/3 w-full p-2 mx-auto ${showFilters ? 'hidden lg:block' : 'block'}`}>
            <InternshipsList internships={internships} />
          </div>

          {/* Filters component, toggled on small screens */}
          <div
            className={`lg:w-1/3  lg:block p-2 ${showFilters ? 'block' : 'block'}`}
          >
            <Filters filters={filters} showFilters={showFilters} setShowFilters={setShowFilters} />
          </div>
        </div>
      </div>
    </div>
  );
}
