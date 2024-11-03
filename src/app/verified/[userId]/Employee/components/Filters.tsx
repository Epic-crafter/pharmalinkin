"use client"
import { X } from "lucide-react";
import { FaFilter } from "react-icons/fa";

export default function Filters({
  showFilters,
  setShowFilters,
  setProfileFilter,
  setLocationFilter,
  setCountryFilter,
  setCategoryFilter,
  setJobTypeFilter,
  setCompanyFilter,
  setExperienceFilter,
  setSalaryRange,
  salaryRange
}: any) {
  
  const toggleFilter = (filterArray:any, setFilter:any, value:any) => {
    setFilter((prevFilters:any) => 
      prevFilters.includes(value) 
        ? prevFilters.filter((item:any) => item !== value) 
        : [...prevFilters, value]
    );
  };

  return (
    <div className=" bg-white shadow rounded p-4 block lg:sticky lg:top-2">
      <div className="flex lg:justify-center justify-between">
        <h2 className="text-lg font-semibold mb-4 lg:text-center flex items-center">
          <FaFilter className="text-blue-500 text-sm" /> Filters
        </h2>
        {showFilters && (
          <span className="text-black font-bold lg:hidden" onClick={() => setShowFilters(false)}>
            <X />
          </span>
        )}
      </div>

      {/* Profile Filter */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Profile</label>
        <input
          type="text"
          placeholder="e.g. Marketing"
          className="border p-2.5 w-full rounded text-sm"
          onChange={(e) => setProfileFilter(e.target.value)}
        />
      </div>

      {/* Location Filter */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Location</label>
        <input
          type="text"
          placeholder="e.g. Delhi"
          className="border p-2.5 w-full rounded text-sm"
          onChange={(e) => setLocationFilter(e.target.value)}
        />
      </div>

      {/* Country Filter */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Country</label>
        <input
          type="text"
          placeholder="e.g. India"
          className="border p-2.5 w-full rounded text-sm"
          onChange={(e) => setCountryFilter(e.target.value)}
        />
      </div>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Category</label>
        <input
          type="text"
          placeholder="e.g. Design"
          className="border p-2.5 w-full rounded text-sm"
          onChange={(e) => setCategoryFilter(e.target.value)}
        />
      </div>

      {/* Salary Range Slider */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Salary Range (₹)</label>
        <input
          type="range"
          min="0"
          max="1500000"
          value={salaryRange[1]}
          onChange={(e) => setSalaryRange([0, parseInt(e.target.value)])}
          className="w-full"
        />
        <p className="text-xs mt-2">₹0 - ₹{salaryRange[1]}</p>
      </div>

      {/* Job Type Filter */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Job Type</label>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            className="mr-2"
            onChange={() => toggleFilter(["FULL_TIME"], setJobTypeFilter, "FULL_TIME")}
          />
          <label className="text-sm">Full Time</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            onChange={() => toggleFilter(["PART_TIME"], setJobTypeFilter, "PART_TIME")}
          />
          <label className="text-sm">Part Time</label>
        </div>
      </div>

      {/* Company Filter */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Company Name</label>
        <input
          type="text"
          placeholder="company name"
          className="border p-2.5 w-full rounded text-sm"
          onChange={(e) => setCompanyFilter(e.target.value)}
        />
      </div>

      {/* Experience Level Filter */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Experience Level</label>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            className="mr-2"
            onChange={() => toggleFilter(["ENTRY_LEVEL"], setExperienceFilter, "ENTRY_LEVEL")}
          />
          <label className="text-sm">Entry Level</label>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            className="mr-2"
            onChange={() => toggleFilter(["MID_LEVEL"], setExperienceFilter, "MID_LEVEL")}
          />
          <label className="text-sm">Mid Level</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            onChange={() => toggleFilter(["SENIOR_LEVEL"], setExperienceFilter, "SENIOR_LEVEL")}
          />
          <label className="text-sm">Senior Level</label>
        </div>
      </div>
    </div>
  );
}
