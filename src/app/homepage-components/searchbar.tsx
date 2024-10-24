"use client";
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [tags, setTags] = useState(["Web Design", "UI/UX Design"]);



  return (
    <div className=" bg-white mt-[-50px] rounded-lg shadow-lg lg:mx-36 mx-12 px-4 flex flex-row items-center justify-between  ">
      {/* Dropdown for categories */}
      <div className='flex items-center text-gray-400 pr-2 justify-between border-r border-gray-300'>
<FaSearch/>
      <select className="  text-sm md:w-auto w-full  md:mb-0">
        <option value="freelancer">Freelancer</option>
        <option value="agency">Agency</option>
        {/* Add more options as needed */}
      </select>
      </div>

      {/* Search Input */}
      <div className="flex-1 flex items-center text-gray-400  rounded-lg p-2 space-x-2">
        <FaSearch/>
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 text-sm focus:outline-none"
        />

        {/* Tags */}
        <div className="flex space-x-2 ">
          {tags.map((tag, index) => (
            <div key={index} className="bg-blue-100 text-blue-600 p-1 w-[60px]  rounded-lg flex items-center space-x-1">
              <span className="text-xs">{tag}</span>
              <button className="text-red-500 font-bold text-xs">x</button>
            </div>
          ))}
        </div>
      </div>

      {/* Search Button */}
      <button className="bg-teal-500 text-white rounded-lg p-2">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
