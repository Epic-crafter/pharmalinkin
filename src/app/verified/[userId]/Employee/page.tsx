"use client";
import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import InternshipsList from "./components/InternshipsList";
import Card from "./components/Card";
import Carousel from "./components/Carousel";

export default function Page() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Filter state variables
  const [profileFilter, setProfileFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState([]);
  const [companyFilter, setCompanyFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState([]);
  const [salaryRange, setSalaryRange] = useState([0, 9000000]); // Minimum and maximum salary range

  const handleSelectInternship = (internship: any) => setSelectedInternship(internship);

  // Fetch internships from the backend with filters
  const fetchInternships = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/users/jobs/fetch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobTitle: profileFilter,
          location: locationFilter,
          country: countryFilter,
          category: categoryFilter,
          jobType: jobTypeFilter,
          companyName: companyFilter,
          experienceLevel: experienceFilter,
          salaryRange: salaryRange.join('-'),
          page: 1
        }),
      });
      const data = await response.json();
      if (data.success) {
        setInternships(data.jobs);
      } else {
        setError(data.message || "Failed to fetch internships.");
      }
    } catch (error) {
      setError("Failed to fetch internships.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInternships();
  }, [profileFilter, locationFilter, countryFilter, categoryFilter, jobTypeFilter, companyFilter, experienceFilter, salaryRange]);

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <div className="lg:w-[95%] lg:mx-auto pt-2">
        <div className="block lg:hidden mb-4">
          <button className="text-lg font-semibold text-center px-4" onClick={() => setShowFilters(true)}>
            {showFilters ? "" : "Filters"}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-3 h-screen">
          {/* Left Section */}
          <div className="lg:w-1/4 p-2 space-y-2 lg:fixed top-18 left-4 h-screen hidden lg:block">
            <Card />
            <Carousel />
          </div>

          {/* Center Section */}
          <div className="lg:w-2/4 w-full p-2 mx-auto lg:ml-[25%] overflow-y-auto h-screen">
            <InternshipsList internships={internships} onSelect={handleSelectInternship} loading={loading} error={error} />
          </div>

          {/* Right Section */}
          <div className={`lg:w-1/4 p-2 lg:fixed top-18 right-4 h-screen ${showFilters ? "block" : "hidden lg:block"}`}>
            <Filters
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              setProfileFilter={setProfileFilter}
              setLocationFilter={setLocationFilter}
              setCountryFilter={setCountryFilter}
              setCategoryFilter={setCategoryFilter}
              setJobTypeFilter={setJobTypeFilter}
              setCompanyFilter={setCompanyFilter}
              setExperienceFilter={setExperienceFilter}
              setSalaryRange={setSalaryRange}
              salaryRange={salaryRange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


         