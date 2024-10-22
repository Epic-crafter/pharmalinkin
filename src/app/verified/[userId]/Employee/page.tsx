
"use client";

import { useState } from "react";
import Filters from "./components/Filters";
import InternshipsList from "./components/InternshipsList";
// import InternshipModal from "./components/InternshipModal"; // Import Modal Component
// import InternshipModal from "./InternshipDetails";
import InternshipDetails from "./InternshipDetails";

const filters = [
  { label: "Profile", placeholder: "e.g. Marketing" },
  { label: "Location", placeholder: "e.g. Delhi" },
];

const internships = [
  {
    title: "Digital Marketing",
    company: "Nexsales Solutions Private Limited",
    location: "Mumbai",
    duration: "3 Months",
    stipend: "₹ 12,000/month",
    postedDate: "3 weeks ago",
    hiringStatus: "Actively hiring",
    joboffer: "Internship with job offer",
    applyby:"Apply by 12 Oct' 24",
    companyLogo: "https://internshala.com/static/images/search/placeholder_logo.svg",
    responsibilities: [
      "Assisting in deploying email marketing campaigns",
      "Assisting in research projects for social media marketing content",
      "Developing marketing communication collateral",
      "Preparing weekly and monthly performance reports"
    ],
    skills: [
      "Digital Marketing",
      "Email Marketing",
      "Effective Communication",
      "English Proficiency (Spoken)",
      "MS-Excel"
    ],
    additionalInfo:
      "On successful conversion to a permanent employee, the candidate can expect a salary of Rs. 3,00,000 - 4,00,000/year.",
    perks: ["Certificate", "Letter of Recommendation", "5 days a week", "Job Offer"],
    aboutCompany:
      "We are a team of experienced professionals working as a part of Nexsales Corporation based in California, US. In India, we are based out of Mumbai and Nashik. We have been in this industry for the last 10 years and have provided services to logos like Symantec, Acadia, IBM, SAP, Plantronics, etc. In terms of marketing services, we provide lead generation, prospect nurturing, and appointment-setting services to our clients. We are also working towards a lot of marketing automation services involving machine learning."
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
    applyby:"Apply by 12 Oct' 24",
    companyLogo:
      "https://internshala-uploads.internshala.com/logo%2F639c57d0634231671190480.png.webp",
      responsibilities: [
        "Assisting in deploying email marketing campaigns",
        "Assisting in research projects for social media marketing content",
        "Developing marketing communication collateral",
        "Preparing weekly and monthly performance reports"
      ],
      skills: [
        "Digital Marketing",
        "Email Marketing",
        "Effective Communication",
        "English Proficiency (Spoken)",
        "MS-Excel"
      ],
      additionalInfo:
        "On successful conversion to a permanent employee, the candidate can expect a salary of Rs. 3,00,000 - 4,00,000/year.",
      perks: ["Certificate", "Letter of Recommendation", "5 days a week", "Job Offer"],
      aboutCompany:
        "We are a team of experienced professionals working as a part of Nexsales Corporation based in California, US. In India, we are based out of Mumbai and Nashik. We have been in this industry for the last 10 years and have provided services to logos like Symantec, Acadia, IBM, SAP, Plantronics, etc. In terms of marketing services, we provide lead generation, prospect nurturing, and appointment-setting services to our clients. We are also working towards a lot of marketing automation services involving machine learning."
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
    applyby:"Apply by 12 Oct' 24",
    companyLogo:
      "https://internshala-uploads.internshala.com/logo%2F159eynqvcak-73530.png.webp",
      responsibilities: [
        "Assisting in deploying email marketing campaigns",
        "Assisting in research projects for social media marketing content",
        "Developing marketing communication collateral",
        "Preparing weekly and monthly performance reports"
      ],
      skills: [
        "Digital Marketing",
        "Email Marketing",
        "Effective Communication",
        "English Proficiency (Spoken)",
        "MS-Excel"
      ],
      additionalInfo:
        "On successful conversion to a permanent employee, the candidate can expect a salary of Rs. 3,00,000 - 4,00,000/year.",
      perks: ["Certificate", "Letter of Recommendation", "5 days a week", "Job Offer"],
      aboutCompany:
        "We are a team of experienced professionals working as a part of Nexsales Corporation based in California, US. In India, we are based out of Mumbai and Nashik. We have been in this industry for the last 10 years and have provided services to logos like Symantec, Acadia, IBM, SAP, Plantronics, etc. In terms of marketing services, we provide lead generation, prospect nurturing, and appointment-setting services to our clients. We are also working towards a lot of marketing automation services involving machine learning."
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
    applyby:"Apply by 12 Oct' 24",
    companyLogo:
      "https://internshala-uploads.internshala.com/logo%2F639c57d0634231671190480.png.webp",
      responsibilities: [
        "Assisting in deploying email marketing campaigns",
        "Assisting in research projects for social media marketing content",
        "Developing marketing communication collateral",
        "Preparing weekly and monthly performance reports"
      ],
      skills: [
        "Digital Marketing",
        "Email Marketing",
        "Effective Communication",
        "English Proficiency (Spoken)",
        "MS-Excel"
      ],
      additionalInfo:
        "On successful conversion to a permanent employee, the candidate can expect a salary of Rs. 3,00,000 - 4,00,000/year.",
      perks: ["Certificate", "Letter of Recommendation", "5 days a week", "Job Offer"],
      aboutCompany:
        "We are a team of experienced professionals working as a part of Nexsales Corporation based in California, US. In India, we are based out of Mumbai and Nashik. We have been in this industry for the last 10 years and have provided services to logos like Symantec, Acadia, IBM, SAP, Plantronics, etc. In terms of marketing services, we provide lead generation, prospect nurturing, and appointment-setting services to our clients. We are also working towards a lot of marketing automation services involving machine learning."
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
    applyby:"Apply by 12 Oct' 24",
    companyLogo:
      "https://internshala-uploads.internshala.com/logo%2F159eynqvcak-73530.png.webp",
    responsibilities: [
      "Assisting in deploying email marketing campaigns",
      "Assisting in research projects for social media marketing content",
      "Developing marketing communication collateral",
      "Preparing weekly and monthly performance reports"
    ],
    skills: [
      "Digital Marketing",
      "Email Marketing",
      "Effective Communication",
      "English Proficiency (Spoken)",
      "MS-Excel"
    ],
    additionalInfo:
      "On successful conversion to a permanent employee, the candidate can expect a salary of Rs. 3,00,000 - 4,00,000/year.",
    perks: ["Certificate", "Letter of Recommendation", "5 days a week", "Job Offer"],
    aboutCompany:
      "We are a team of experienced professionals working as a part of Nexsales Corporation based in California, US. In India, we are based out of Mumbai and Nashik. We have been in this industry for the last 10 years and have provided services to logos like Symantec, Acadia, IBM, SAP, Plantronics, etc. In terms of marketing services, we provide lead generation, prospect nurturing, and appointment-setting services to our clients. We are also working towards a lot of marketing automation services involving machine learning."
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
    applyby:"Apply by 12 Oct' 24",
    companyLogo:
      "https://internshala-uploads.internshala.com/logo%2F639c57d0634231671190480.png.webp",
      responsibilities: [
        "Assisting in deploying email marketing campaigns",
        "Assisting in research projects for social media marketing content",
        "Developing marketing communication collateral",
        "Preparing weekly and monthly performance reports"
      ],
      skills: [
        "Digital Marketing",
        "Email Marketing",
        "Effective Communication",
        "English Proficiency (Spoken)",
        "MS-Excel"
      ],
      additionalInfo:
        "On successful conversion to a permanent employee, the candidate can expect a salary of Rs. 3,00,000 - 4,00,000/year.",
      perks: ["Certificate", "Letter of Recommendation", "5 days a week", "Job Offer"],
      aboutCompany:
        "We are a team of experienced professionals working as a part of Nexsales Corporation based in California, US. In India, we are based out of Mumbai and Nashik. We have been in this industry for the last 10 years and have provided services to logos like Symantec, Acadia, IBM, SAP, Plantronics, etc. In terms of marketing services, we provide lead generation, prospect nurturing, and appointment-setting services to our clients. We are also working towards a lot of marketing automation services involving machine learning."
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
    applyby:"Apply by 12 Oct' 24",
    companyLogo:
      "https://internshala-uploads.internshala.com/logo%2F159eynqvcak-73530.png.webp",
      responsibilities: [
        "Assisting in deploying email marketing campaigns",
        "Assisting in research projects for social media marketing content",
        "Developing marketing communication collateral",
        "Preparing weekly and monthly performance reports"
      ],
      skills: [
        "Digital Marketing",
        "Email Marketing",
        "Effective Communication",
        "English Proficiency (Spoken)",
        "MS-Excel"
      ],
      additionalInfo:
        "On successful conversion to a permanent employee, the candidate can expect a salary of Rs. 3,00,000 - 4,00,000/year.",
      perks: ["Certificate", "Letter of Recommendation", "5 days a week", "Job Offer"],
      aboutCompany:
        "We are a team of experienced professionals working as a part of Nexsales Corporation based in California, US. In India, we are based out of Mumbai and Nashik. We have been in this industry for the last 10 years and have provided services to logos like Symantec, Acadia, IBM, SAP, Plantronics, etc. In terms of marketing services, we provide lead generation, prospect nurturing, and appointment-setting services to our clients. We are also working towards a lot of marketing automation services involving machine learning."
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
    applyby:"Apply by 12 Oct' 24",
    companyLogo:
      "https://internshala-uploads.internshala.com/logo%2F639c57d0634231671190480.png.webp",
      responsibilities: [
        "Assisting in deploying email marketing campaigns",
        "Assisting in research projects for social media marketing content",
        "Developing marketing communication collateral",
        "Preparing weekly and monthly performance reports"
      ],
      skills: [
        "Digital Marketing",
        "Email Marketing",
        "Effective Communication",
        "English Proficiency (Spoken)",
        "MS-Excel"
      ],
      additionalInfo:
        "On successful conversion to a permanent employee, the candidate can expect a salary of Rs. 3,00,000 - 4,00,000/year.",
      perks: ["Certificate", "Letter of Recommendation", "5 days a week", "Job Offer"],
      aboutCompany:
        "We are a team of experienced professionals working as a part of Nexsales Corporation based in California, US. In India, we are based out of Mumbai and Nashik. We have been in this industry for the last 10 years and have provided services to logos like Symantec, Acadia, IBM, SAP, Plantronics, etc. In terms of marketing services, we provide lead generation, prospect nurturing, and appointment-setting services to our clients. We are also working towards a lot of marketing automation services involving machine learning."
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
    applyby:"Apply by 12 Oct' 24",
    companyLogo:
      "https://internshala-uploads.internshala.com/logo%2F159eynqvcak-73530.png.webp",
      responsibilities: [
        "Assisting in deploying email marketing campaigns",
        "Assisting in research projects for social media marketing content",
        "Developing marketing communication collateral",
        "Preparing weekly and monthly performance reports"
      ],
      skills: [
        "Digital Marketing",
        "Email Marketing",
        "Effective Communication",
        "English Proficiency (Spoken)",
        "MS-Excel"
      ],
      additionalInfo:
        "On successful conversion to a permanent employee, the candidate can expect a salary of Rs. 3,00,000 - 4,00,000/year.",
      perks: ["Certificate", "Letter of Recommendation", "5 days a week", "Job Offer"],
      aboutCompany:
        "We are a team of experienced professionals working as a part of Nexsales Corporation based in California, US. In India, we are based out of Mumbai and Nashik. We have been in this industry for the last 10 years and have provided services to logos like Symantec, Acadia, IBM, SAP, Plantronics, etc. In terms of marketing services, we provide lead generation, prospect nurturing, and appointment-setting services to our clients. We are also working towards a lot of marketing automation services involving machine learning."
  },
];

export default function page() {
  const [showFilters, setShowFilters] = useState(false); // Track the state of the filters visibility
  const [selectedInternship, setSelectedInternship] = useState(null); // Track selected internship

  // Function to handle selecting an internship
  const handleSelectInternship = (internship:any) => {
    setSelectedInternship(internship);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedInternship(null);
  };

  return (
    <div style={{ backgroundColor: "#f8f8f8" }}>
      <div className="lg:w-3/4 lg:mx-auto pt-4">
        <h2 className="pt-6 m-auto text-center font-bold text-xl" style={{ color: "#008bdc" }}>
          10443 Total Jobs
        </h2>
        <h3 className="text-center mt-1 mb-6 text-sm">Latest Summer Jobs in India</h3>

        <div className="block lg:hidden mb-4">
          <button
            className="text-lg font-semibold text-center px-4"
            onClick={() => setShowFilters(true)}
          >
            {showFilters ? "" : "Filters"}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 mx-auto">
          <div className={`lg:w-2/3 w-full p-2 mx-auto ${showFilters ? "hidden lg:block" : "block"}`}>
            <InternshipsList internships={internships} onSelect={handleSelectInternship} />
          </div>

          <div className={`lg:w-1/3 lg:block p-2 ${showFilters ? "block" : "block"}`}>
            <Filters filters={filters} showFilters={showFilters} setShowFilters={setShowFilters} />
          </div>
        </div>

        {/* Internship Modal */}
        {selectedInternship && (
          
          <InternshipDetails internship={selectedInternship}  onClose={closeModal} />
         
        )}
      </div>
    </div>
  );
}
