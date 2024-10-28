"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Textarea from "@/components/ui/textarea";
import { FaClipboard, FaUser, FaUserAltSlash, FaUserCircle } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";

const jobTypes = ["FULL_TIME", "PART_TIME", "CONTRACT", "FREELANCE", "INTERNSHIP", "TEMPORARY"];
const experienceLevels = ["ENTRY_LEVEL", "MID_LEVEL", "SENIOR_LEVEL", "EXECUTIVE"];
const statuses = ["ACTIVE", "INACTIVE", "FILLED", "CLOSED"];
const industries = ["IT", "Finance", "Healthcare", "Education", "Construction"];

export default function JobForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirements: "",
    location: "",
    country: "",
    jobType: "FULL_TIME",
    salary: "",
    salaryCurrency: "INR",
    companyName: "",
    companyWebsite: "",
    experienceLevel: "ENTRY_LEVEL",
    postedDate: new Date(),
    applicationDeadline: "",
    status: "ACTIVE",
    category: "",
    skillsRequired: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add submit logic here (e.g., API call)
  };

  return (
    <div className="lg:w-[70%] w-[80%] mx-auto text-gray-700 shadow-xl rounded-lg p-4 my-2 shadow-gray-400 ">


      <form onSubmit={handleSubmit} className="space-y-4 bg-white ">
        <div className="p-4">

          <h2 className="text-2xl font-semibold flex items-center gap-2"><FiFileText className="mt-[-4px]" /> Job Posting Form</h2>
          <p className="ml-8 text-sm">Fill in the details below to post your job and attract the right candidates</p>
        </div>
        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">
          <label className="block mb-1">Job Title</label>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 bg-transparent rounded-md"
          />
        </div>

        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">
          <label className="block mb-1">Description</label>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">
          <label className="block  mb-1">Requirements</label>
          <Textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:p-4">
          <div >
            <label className="block  mb-1">Location</label>
            <Input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md bg-transparent"
            />
          </div>

          <div>
            <label className="block mb-1">Country</label>
            <Input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md bg-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:p-4">
          <div>
            <label className="block  mb-1">Job Type</label>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md text-xs bg-transparent"
            >
              {jobTypes.map((type) => (
                <option key={type} value={type} className="bg-blue-400">
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1">Experience Level</label>
            <select
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md text-xs bg-transparent"
            >
              {experienceLevels.map((level) => (
                <option key={level} value={level} className="bg-blue-400">
                  {level}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="lg:p-4">
          <label className="block mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md bg-transparent text-sm"
          >
            {industries.map((industry) => (
              <option key={industry} value={industry} className="bg-blue-400">
                {industry}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:p-4">
          <div>
            <label className="block mb-1">Salary</label>
            <Input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-transparent"
            />
          </div>

          <div className="">
            <label className="block mb-1">Application Deadline</label>
            <Input
              type="date"
              name="applicationDeadline"
              value={formData.applicationDeadline}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md bg-transparent"
            />
          </div>
        </div>

        <div className="lg:p-4">
          <label className="block mb-1">Company Name</label>
          <Input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md bg-transparent"
          />
        </div>
        <div className="flex items-end justify-end gap-4 lg:p-4">

          <Button type="submit" className="py-3 mt-4 bg-transparent text-primary rounded-md hover:border hover:border-primary hover:bg-transparent">
            Clear All
          </Button>
          <Button type="submit" className="py-3 mt-4 bg-primary text-white rounded-md hover:bg-blue-700">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}