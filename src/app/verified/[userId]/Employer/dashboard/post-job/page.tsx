"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FiFileText } from "react-icons/fi";
import Textarea from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FaFolder, FaPlus } from "react-icons/fa";
const jobTypes = [
  { name: "Full Time", value: "FULL_TIME" },
  { name: "Part Time", value: "PART_TIME" },
  { name: "Contract", value: "CONTRACT" },
  { name: "Freelance", value: "FREELANCE" },
  { name: "Internship", value: "INTERNSHIP" },
  { name: "Temporary", value: "TEMPORARY" },
];

const experienceLevels = [
  { name: "Entry Level", value: "ENTRY_LEVEL" },
  { name: "Mid Level", value: "MID_LEVEL" },
  { name: "Senior Level", value: "SENIOR_LEVEL" },
  { name: "Executive", value: "EXECUTIVE" },
];

const industries = [
  { name: "IT", value: "IT" },
  { name: "Finance", value: "FINANCE" },
  { name: "Healthcare", value: "HEALTHCARE" },
  { name: "Education", value: "EDUCATION" },
  { name: "Construction", value: "CONSTRUCTION" },
];

export default function JobForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    coverImage: "",
    postalCode: "",
    requirements: "",
    location: "Mumbai",
    country: "",
    jobType: "",
    salary: "",
    gallery:"",
    file:"",
    address:"",
    video:"",
    contact:"",
    mobile:"",
    email:"",
    contact2:"",
    mobile2:"",
    email2:"",
    qualification:"",
    salaryCurrency: "INR",
    companyName: "",
    companyWebsite: "",
    experienceLevel: "",
    postedDate: new Date(),
    applicationDeadline: "",
    status: "ACTIVE",
    category: "",
    skillsRequired: [],
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users/jobs/add-job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Success to post");
      }
      if (result.error) {
        alert(result.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="lg:w-[70%] w-[80%] mx-auto text-gray-700 shadow-xl rounded-lg p-4 my-2 shadow-gray-400 ">
      <form onSubmit={handleSubmit} className="space-y-1 bg-white ">
        <div className="p-4 text-center ">
          <h1 className="text-2xl font-bold text-primary">
            Create a  Job Posting
          </h1>
          <p className="text-sm">
            Describe your company and vacancy
          </p>
        </div>
        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">
          <Label className="block">Job Title : </Label>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="w-full p-2 border bg-transparent rounded-md"
          />
        </div>

        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">
          <Label className="block">Job Description : </Label>
          <Textarea
            name="description"
            placeholder="Enter your paragraph"
            value={formData.description}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">
          <Label className="block text-gray-700">Cover Image : </Label>
          <div className="relative  items-center space-y-2">
            {/* Hidden file input */}
            <Input
              type="file"
              id="fileInput"
              className="hidden"
              value={formData.coverImage}
              onChange={(e) => {
                const fileName = e.target.files[0]?.name || "No file chosen";
                document.getElementById("fileName").textContent = fileName;
              }}
            />
            {/* Custom file input display */}
            <div className="flex items-center rounded-md shadow-sm focus-within:ring focus-within:ring-blue-200 focus-within:border-blue-500">

              <label
                htmlFor="fileInput" id="fileName"
                className="flex items-center font-semibold px-4 py-2 text-sm text-gray-700 bg-gray-400 hover:bg-gray-300 cursor-pointer rounded-md"
              >
                <FaFolder className="mr-2" /> Browse
              </label>
            </div>
            <p className="text-sm text-primary mt-1">Recommended size: 1400x600px</p>
          </div>
        </div>


        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">

          <Label htmlFor="category">Job Category : </Label>
          <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select job category" />
            </SelectTrigger>
            <SelectContent id={"category"}>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                {industries.map((data) => (
                  <SelectItem key={data.value} value={data.value}>{data.value}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

        </div>
        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">
          <Label htmlFor="jobtitle">Job Type : </Label>
          <Select value={formData.jobType} onValueChange={(value) => setFormData({ ...formData, jobType: value })}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select job type" />
            </SelectTrigger>
            <SelectContent id={"jobtitle"}>
              <SelectGroup>
                <SelectLabel>Jobs</SelectLabel>
                {jobTypes.map((data) => (
                  <SelectItem key={data.value} value={data.value}>{data.name}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">
          <Label className="block ">Job Location : </Label>
          <div className="space-y-2">
            {/* Checkbox for Same as Job Address */}
            <div className="flex items-center">
              <Input
                type="checkbox"
                id="same-as-job-address"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="same-as-job-address" className="ml-2 text-sm text-gray-700">
                Same as Job Address
              </label>
            </div>

            {/* Dropdown for Select Location */}

            <div>
              <Select value={formData.location} >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent id={"location"}>
                  <SelectGroup>
                    <SelectLabel>Location</SelectLabel>

                    <SelectItem value="Mumbai">Mumbai</SelectItem>
                    <SelectItem value="Delhi">Delhi</SelectItem>
                    <SelectItem value="Bangalore">Bangalore</SelectItem>
                    <SelectItem value="Kolkata">Kolkata</SelectItem>


                  </SelectGroup>
                </SelectContent>
              </Select>

            </div>


            {/* Add New Location */}

            <div>
              <p className="flex gap-2 items-center text-primary text-sm font-semibold"><FaPlus /> Add new location</p>
            </div>
          </div>
        </div>

        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">
          <Label className="block  ">Postal Code :</Label>
          <Input
            type="number"
            name="postal code"
            placeholder="e.g. 400084"
            value={formData.postalCode}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md bg-transparent"
          />
        </div>
        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">
          <Label className="block ">Salary Offer :</Label>
          <Input
            type="number"
            name="salary"
            placeholder="e.g. ₹10,000"
            value={formData.salary}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md bg-transparent"
          />
        </div>
        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">
          <Label className="block  ">Closing Date :</Label>
          <Input
            type="text"
            name="closing date"
            placeholder="Closing Date"
            value={formData.applicationDeadline}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md bg-transparent"
          />
        </div>
        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">
          <Label className="block ">Qualification :</Label>
          <Input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md bg-transparent"
          />
        </div>

        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">

          <Label htmlFor="experienceLevels">Experience : </Label>
          <Select value={formData.experienceLevel} onValueChange={(value) => setFormData({ ...formData, experienceLevel: value })}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent id={"experienceLevels"}>
              <SelectGroup>
                <SelectLabel>Experience Level</SelectLabel>
                {experienceLevels.map((data) => (
                  <SelectItem key={data.value} value={data.value}>{data.name}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>



        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">
          <Label className="block">Gallery : </Label>
          <div className="relative  items-center space-y-2">
            {/* Hidden file input */}
            <Input
              type="file"
              id="fileInputGallery"
              className="hidden"
              value={formData.gallery}
              onChange={(e) => {
                const fileName = e.target.files[0]?.name || "No file chosen";
                document.getElementById("fileInputGallery2").textContent = fileName;
              }}
            />
            {/* Custom file input display */}
            <div className="flex items-center rounded-md shadow-sm focus-within:ring focus-within:ring-blue-200 focus-within:border-blue-500">

              <label
                htmlFor="fileInputGallery" id="fileInputGallery2"
                className="flex items-center font-semibold px-4 py-2 text-sm text-gray-700 bg-gray-400 hover:bg-gray-300 cursor-pointer rounded-md"
              >
                <FaFolder className="mr-2" /> Browse
              </label>
            </div>
            <p className="text-sm text-primary ">Recommended size: 1400x600px</p>
          </div>
        </div>




        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">
          <Label className="block">Address :</Label>
          <div className="space-y-2">

          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md bg-transparent"
            />
          <p className="text-xs text-gray-500">Enter Street , Region , Locality ,Country. eg : 1600 Chestnut street, Philadelphia, PA, USA.</p>
            </div>

        </div>




        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">
          <Label className="block ">Video :</Label>
          <Input
            type="text"
            name="video"
            placeholder="Enter Youtube or Venmo Link"
            value={formData.video}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md bg-transparent"
          />
        </div>


        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">
          <Label className="block">File :</Label>
          <div className="relative  items-center space-y-2">
            {/* Hidden file input */}
            <Input
              type="file"
              id="fileInput2"
              className="hidden"
              value={formData.file}
              onChange={(e) => {
                const fileName = e.target.files[0]?.name || "No file chosen";
                document.getElementById("fileInputtt").textContent = fileName;
              }}
            />
            {/* Custom file input display */}
            <div className="flex items-center rounded-md shadow-sm focus-within:ring focus-within:ring-blue-200 focus-within:border-blue-500">

              <label
                htmlFor="fileInput2" id="fileInputtt"
                className="flex items-center font-semibold px-4 py-2 text-sm text-gray-700 bg-gray-400 hover:bg-gray-300 cursor-pointer rounded-md"
              >
                <FaFolder className="mr-2" /> Browse
              </label>
            </div>
            <div className="text-xs text-gray-500">

          <p>Maximum upload file size : 2GB </p>
            <p>Allowed File : .pdf, .doc, .docx</p>
            </div>
          </div>
        </div>


        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">
          <Label className="block">Contact Person :</Label>
          <Input
            type="number"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md bg-transparent"
          />
        </div>

        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">
          <Label className="block">Mobile :</Label>
          <Input
            type="number"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md bg-transparent"
          />
        </div>
        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">
          <Label className="block">Email :</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md bg-transparent"
          />
        </div>


        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">
          <Label className="block">Contact Person 2 :</Label>
          <Input
            type="number"
            name="number2"
            value={formData.contact2}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md bg-transparent"
          />
        </div>

        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">
          <Label className="block">Mobile :</Label>
          <Input
            type="number"
            name="mobile2"
            value={formData.mobile2}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md bg-transparent"
          />
        </div>


        <div className="lg:grid grid-cols-[1fr_2fr] lg:p-4">
          <Label className="block">Email :</Label>
          <Input
            type="email"
            name="email2"
            value={formData.email2}
            onChange={handleInputChange}
            required
            className="w-full p-2 border rounded-md bg-transparent"
          />
        </div>

        <div className="flex items-end justify-end gap-4 lg:p-4">
          <Button
            type="submit"
            className="py-3 mt-4 bg-transparent text-primary rounded-md hover:border hover:border-primary hover:bg-transparent"
          >
            Clear All
          </Button>
          <Button
            type="submit"
            className="py-3 mt-4 bg-primary text-white rounded-md hover:bg-blue-700"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
