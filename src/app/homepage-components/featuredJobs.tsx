"use client";
import React, { useState } from "react";
import revolut from "../../assets/revolut.png"
import dropbox from "../../assets/dropbox.png"
import pitch from "../../assets/pilch.png"
import blinklist from "../../assets/blinklist.png"
import classpass from "../../assets/classpass.png"
import canva from "../../assets/canva.png"
import godaddy from "../../assets/strategy.png"
import twitter from "../../assets/analyst.png"
import Image from "next/image";
import next from "../../assets/next.png"
import { FaArrowRight, FaCircle } from "react-icons/fa";
const jobs = [
  {
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    tags: ["Marketing", "Design"],
    type: "Full Time",
    img: revolut,
    desc: "Revolut is looking for Email Marketing to help team ma ..."
  },
  {
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, US",
    tags: ["Design", "Business"],
    type: "Full Time",
    img: dropbox,
    desc: "Dropbox is looking for Brand Designer to help the team t ..."
  },
  {
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    tags: ["Marketing"],
    type: "Full Time",
    img: pitch,
    desc: "Pitch is looking for Customer Manager to join marketing t ..."
  },
  {
    title: "Visual Designer",
    company: "Blinkist",
    location: "Granada, Spain",
    tags: ["Design"],
    type: "Full Time",
    img: blinklist,
    desc: "Blinkist is looking for Visual Designer to help team desi ..."

  },
  {
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    tags: ["Marketing", "Design"],
    type: "Full Time",
    img: classpass,
    desc: "ClassPass is looking for Product Designer to help us..."

  },
  {
    title: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    tags: ["Design", "Business"],
    type: "Full Time",
    img: canva,
    desc: "Canva is looking for Lead Engineer to help develop n ..."

  },
  {
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    tags: ["Business", "Strategy"],
    type: "Full Time",
    img: godaddy,
    desc: "GoDaddy is looking for Brand Strategist to join the team..."

  },
  {
    title: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    tags: ["Technology"],
    type: "Full Time",
    img: twitter,
    desc: "Twitter is looking for Data Analyst to help team desi ..."

  },
];

const FeaturedJobs = () => {


  return (
    <div className="container mx-auto lg:px-32 px-12 py-12 lg:mx-0 mx-auto">
      <div className="flex items-center justify-between mb-6 pb-4">

      <h2 className="text-3xl font-bold">
        Featured <span className="text-blue-500">Jobs</span>
      </h2>
      <p className="flex items-center gap-2 fonr-semibold text-blue-700 cursor-pointer">Show all jobs <FaArrowRight /> </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {jobs.map((job, index): any => (
          <div
            key={index}
            className="border border-gray-200 p-4 transition-transform hover:scale-105 duration-200 ease-in-out"
          >
            {/* Job Title */}
            <div className="flex justify-between items-center mb-3">
              <Image src={job.img} alt="" className="w-10 h-10" />
              <span className="text-xs  text-blue-700 border border-1 border-blue-700 px-2 py-1 ">
                {job.type}
              </span>

            </div>
            <h3 className="text-sm font-bold text-gray-800">{job.title}</h3>

            {/* Company and Location */}
            <div className="text-sm  text-gray-600 mb-4 mt-2 flex gap-2 items-center" style={{fontSize:"13px"}}>
              <p>{job.company}</p>
               <FaCircle  style={{fontSize:"5px"}}/> 
               <p>{job.location}</p>
            </div>
            {/* Description */}
            <span className=" text-gray-400 " style={{ fontSize: '13px' }}>{job.desc}</span>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {job.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-gray-300 text-gray-700 font-semibold px-3 py-1 rounded-full "
                >
                  {tag}
                </span>
              ))}
            </div>


          </div>
        ))}
      </div>
      {/* Show All Jobs Button */}
      <div className="flex justify-end mt-6">
        {/* <button
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show All Jobs"}
        </button> */}
      </div>
    </div>
  );
};

export default FeaturedJobs;
