"use client";

import React, { useState } from "react";
import {
  FaCloudUploadAlt,
  FaEllipsisV,
  FaInfo,
  FaInfoCircle,
  FaRegBell,
  FaRegCheckCircle,
  FaRegEdit,
  FaRegFileAlt,
  FaTrash,
} from "react-icons/fa";
export default function Page() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <div className="flex">
        <div className="w-3/5 min-h-screen rounded-lg flex-grow">
          {/* Tabs */}
          <div className="bg-white rounded  border-t-2 border-l-2 border-gray-200  gap-8 p-4  ">
            <button className="text-blue-600 border-b-2 border-blue-600 pb-2 font-semibold">
              Manage Resume
            </button>
            <hr className="text-gray-100 w-[60%]" />
          </div>
          {/* Main Content */}
          <div className=" p-4 rounded-md shadow-md space-y-4">
            {/* Add resume */}

            <div className="bg-white space-y-8">
              <div className="bg-white p-2 m-2">
                <h2 className="text-lg font-semibold">Add CV / Resume</h2>
                <p className="text-gray-500">
                  This is CV / Resume document that you can update anytime
                </p>
              </div>
              <hr className="border-gray-300 mt-0" />

              {/* Update Resume Name Section */}
              <div className="flex justify-between items-start flex-col md:flex-row md:gap-4 sm:gap-2">
                {/* Left */}
                <div className="lg:w-1/5 p-2 m-2 md:w-2/5 sm:w-full space-y-2">
                  <h1 className="text-lg font-semibold ">Update Resume Name</h1>
                  <p className=" ">
                    Update your resume name to make sure it is safe
                  </p>
                </div>
                {/* <div className="flex items-center"> */}
                {/* Right */}
                <div className="lg:w-3/5 md:w-3/5 sm:w-full space-y-4">
                  <div className="space-y-1">
                    <div className="flex gap-2 p-2 m-2 items-center font-semibold ">
                      <p className="font-semibold ">jakegyllcv.pdf</p>
                      <FaRegCheckCircle className="text-green-600" />
                    </div>
                    <p className="text-gray-600 pl-2 m-2 text-sm">
                      Your CV / Resume is verified
                    </p>
                  </div>
                  <div className="space-y-1">
                    <div className=" ">
                      <p className="font-semibold pl-2 m-2">
                        Update CV / Resume Name
                      </p>
                    </div>
                    <input
                      type="text"
                      placeholder="jakegyll.pdf"
                      className="p-1 m-2 pl-2 border border-gray-300 rounded-md w-[70%]"
                    />
                  </div>

                  <button className=" px-4 py-2 p-2 m-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Update Name
                  </button>
                </div>
              </div>
              <hr className="text-gray-100 w-full" />

              {/* Upload Resume Section */}
              <div className="flex justify-between items-start flex-col md:flex-row md:gap-4 sm:gap-2">
                {/* Left */}
                <div className="lg:w-1/5 p-2 m-2 md:w-2/5 sm:w-full space-y-2">
                  <h1 className="text-lg font-semibold ">Upload your resume</h1>
                  <p className=" ">
                    Update your resume name to make sure it is safe
                  </p>
                </div>

                {/* Right */}
                <div className="lg:w-3/5 md:w-3/5 sm:w-full space-y-4">
                  <div>
                    <h2 className="font-semibold p-2 m-2">
                      Upload CV / Resume{" "}
                    </h2>
                  </div>
                  {/* <input type='file' className='hidden' /> */}
                  <div className="flex flex-col items-center border border-2 border-dashed border-gray-300 p-6 rounded-md lg:w-2/3 w-full xs:w-full">
                    <FaCloudUploadAlt
                      className="text-gray-400"
                      style={{ fontSize: "50px" }}
                    />
                    <p className="text-sm text-gray-500 ">
                      Browse files or Drop here{" "}
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                      Only PDF format available. Max file size 12 MB.
                    </p>
                  </div>
                  {/* buttons */}
                  <div className="lg:w-2/3 w-full flex justify-between">
                    <button className=" px-4 py-2 bg-blue-200 text-blue-700  rounded-md hover:bg-blue-300">
                      Cancel
                    </button>
                    <button className=" px-4 py-2 bg-blue-600 text-white  rounded-md hover:bg-blue-700">
                      Add CV/Resume
                    </button>
                  </div>
                </div>
              </div>
              <hr className="text-gray-100 w-full" />

              {/* Existing Resumes */}
              <div className="flex justify-between items-start flex-col md:flex-row py-2 md:gap-4 sm:gap-2">
                {/* Left */}

                <div className="lg:w-1/5 p-2 m-2 md:w-2/5 sm:w-full space-y-2">
                  <h1 className="text-lg font-semibold ">Your CV/Resume</h1>
                  <p className=" ">See your current resume uploaded.</p>
                </div>

                {/* Right */}
                <div className="lg:w-3/5 md:w-3/5 sm:w-full ">
                  <div className="grid lg:grid-cols-2 gap-4 grid-cols-1 ">
                    <ResumeItem title="Product Designer" size="1.5 MB" />
                    <ResumeItem title="Visual Designer" size="1.5 MB" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 px-16 mr-16 w-full flex justify-end">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                See Preview
              </button>
            </div>

            <div className="flex items-center gap-2 justify-end py-2 px-6">
              <p className=" text-red-500 ">Close Account</p>
              <FaInfoCircle className="text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function ResumeItem({ title, size }: any) {
  return (
    <div>
      <div className="flex justify-between items-center border border-gray-300 p-4 rounded-md ">
        <div className="flex items-center gap-4">
          <FaRegFileAlt
            className="text-blue-500 "
            style={{ fontSize: "40px" }}
          />
          <div>
            <h4 className="font-semibold text-gray-600">{title}</h4>
            <p className="text-xs text-gray-600">{size}</p>
          </div>
        </div>
        <FaEllipsisV style={{ fontSize: "20px" }} />
      </div>

      {/* <div className="mt-4 flex flex-col  relative w-[50%] ">
        <button className="px-1 py-1 bg-green-100 text-green-500 rounded-md  text-sm flex items-center justify-start gap-2">
          <FaRegEdit/>
          Edit Resume
        </button>
        <button className="px-1 py-1 bg-red-100 text-red-500 rounded-md text-sm flex items-center justify-start gap-2">
          <FaTrash/>
          Delete
        </button>
      </div> */}
    </div>
  );
}
