"use client"
import React, { useState } from 'react';
import {  FaRegQuestionCircle } from 'react-icons/fa';

function Filters() {
  const [relevance, setRelevance] = useState<any>(50);

  return (
    <div className="pr-4 py-4 w-full lg:w-72 hidden lg:block">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      
      <div className="mb-4 text-sm ">
        <label className=" font-medium text-gray-700 flex items-center gap-1">Applicants&apos; locations <FaRegQuestionCircle className='text-xs'/></label>
        <input
          type="text"
          placeholder="e.g. Mumbai"
          className="mt-1 w-full p-2  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="mb-4 text-sm ">
        <label className="  font-medium text-gray-700 flex items-center gap-1">Skills  <FaRegQuestionCircle className='text-xs'/></label>
        <input
          type="text"
          placeholder="e.g. Java"
          className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="mb-4 text-sm ">
        <label className=" font-medium text-gray-700 flex items-center gap-1">Academic background  <FaRegQuestionCircle className='text-xs'/></label>
        <input
          type="text"
          placeholder="e.g. MBA & similar"
          className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="mb-4 text-sm ">
        <label className=" font-medium text-gray-700 flex gap-1 ">Relevance match <p className=' bg-gray-200 rounded-md ' style={{fontSize:"8px"}} >BETA</p></label>
        <input
          type="range"
          min="0"
          max="100"
          value={relevance}
          onChange={(e) => setRelevance(e.target.value)}
          className="mt-2 w-full"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>All applicants</span>
          <span>Good match</span>
          <span>Very good match</span>
        </div>
      </div>

      <div className="mb-4 text-sm ">
        <label className="  font-medium text-gray-700 flex items-center gap-1">Graduation year <FaRegQuestionCircle className='text-xs'/></label>
        <select
          className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:primary text-gray-500"
        >
          <option value="">e.g 2021</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>

      <div className="flex justify-end text-sm">
      <button className=" text-primary px-4 py-2 rounded-md hover:bg-blue-600">
          Clear All
        </button>
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Show results
        </button>
      </div>
    </div>
  );
}

export default Filters;
