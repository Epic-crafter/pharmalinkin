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

  const toggleFilter = (filterArray: any, setFilter: any, value: any) => {
    setFilter((prevFilters: any) =>
      prevFilters.includes(value)
        ? prevFilters.filter((item: any) => item !== value)
        : [...prevFilters, value]
    );
  };

  return (
    <div className=" bg-white shadow rounded p-4 block lg:sticky lg:top-2 space-y-4">
      <div className="flex lg:justify-center justify-between">
        <h2 className="text-lg font-semibold lg:text-center flex items-center ">
          <FaFilter className="text-blue-500 text-sm mr-1 mb-1" /> Filters
        </h2>
        {showFilters && (
          <span className="text-black font-bold lg:hidden" onClick={() => setShowFilters(false)}>
            <X />
          </span>
        )}
      </div>

      {/* Profile Filter */}
      <div className="">
        <label className="block text-sm font-semibold">Profile</label>

        <input
          type="text"
          placeholder="e.g. Marketing"
          className="border p-1 w-full rounded text-xs"
          onChange={(e) => setProfileFilter(e.target.value)}
        />
      </div>

      {/* Location Filter */}
      <div className="">
        <label className="block text-sm font-semibold ">Location</label>
        <input
          type="text"
          placeholder="e.g. Delhi"
          className="border p-1 w-full rounded text-xs"
          onChange={(e) => setLocationFilter(e.target.value)}
        />
      </div>

      {/* Country Filter */}
      {/* <div className="">
        <label className="block text-sm font-semibold ">Country</label>
        <input
          type="text"
          placeholder="e.g. India"
          className="border p-1 w-full rounded text-xs"
          onChange={(e) => setCountryFilter(e.target.value)}
        />
      </div> */}

      {/* Category Filter */}
      <div className="">
        <label className="block text-sm font-semibold">Category</label>
        <input
          type="text"
          placeholder="e.g. Design"
          className="border p-1 w-full rounded text-xs"
          onChange={(e) => setCategoryFilter(e.target.value)}
        />
      </div>

      {/* Salary Range Slider */}
      <div className="">
        <label className="block text-sm font-semibold ">Salary Range (₹)</label>
        <input
          type="range"
          min="0"
          max="1500000"
          value={salaryRange[1]}
          onChange={(e) => setSalaryRange([0, parseInt(e.target.value)])}
          className="w-full"
        />
        <p className="text-xs ">₹ 0 - ₹ {salaryRange[1]}</p>
      </div>

      {/* Job Type Filter */}
      <div className="">
        <label className="block text-sm font-semibold mb-1">Job Type</label>
        <div className="flex items-center ">
          <input
            type="checkbox"
            className="mr-2 "
            onChange={() => toggleFilter(["FULL_TIME"], setJobTypeFilter, "FULL_TIME")}
          />
          <label className="text-xs">Full Time</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            onChange={() => toggleFilter(["PART_TIME"], setJobTypeFilter, "PART_TIME")}
          />
          <label className="text-xs">Part Time</label>
        </div>
      </div>

      {/* Company Filter */}
      {/* <div className="">
        <label className="block text-sm font-semibold">Company Name</label>
        <input
          type="text"
          placeholder="Company Name"
          className="border p-1 w-full rounded text-xs"
          onChange={(e) => setCompanyFilter(e.target.value)}
        />
      </div> */}

      {/* Experience Level Filter */}
      <div className="">
        <label className="block text-sm font-semibold mb-1">Experience Level</label>
        <div className="flex items-center ">
          <input
            type="checkbox"
            className="mr-2"
            onChange={() => toggleFilter(["ENTRY_LEVEL"], setExperienceFilter, "ENTRY_LEVEL")}
          />
          <label className="text-xs">Entry Level</label>
        </div>
        <div className="flex items-center ">
          <input
            type="checkbox"
            className="mr-2"
            onChange={() => toggleFilter(["MID_LEVEL"], setExperienceFilter, "MID_LEVEL")}
          />
          <label className="text-xs">Mid Level</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            onChange={() => toggleFilter(["SENIOR_LEVEL"], setExperienceFilter, "SENIOR_LEVEL")}
          />
          <label className="text-xs">Senior Level</label>
        </div>
      </div>
    </div>
  );
}
