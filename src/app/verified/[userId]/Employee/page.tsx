"use client";
import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import InternshipsList from "./components/InternshipsList";

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

  const handleSelectInternship = (internship:any) => setSelectedInternship(internship);
  const closeModal = () => setSelectedInternship(null);

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
          page:1
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
    <div style={{ backgroundColor: "#f8f8f8" }}>
      <div className="lg:w-3/4 lg:mx-auto pt-4">
        <h2 className="pt-6 m-auto text-center font-bold text-xl" style={{ color: "#008bdc" }}>
          {loading ? "Loading..." : `${internships.length} Total Jobs`}
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <h3 className="text-center mt-1 mb-6 text-sm">Latest Jobs in India</h3>
        
        <div className="block lg:hidden mb-4">
          <button className="text-lg font-semibold text-center px-4" onClick={() => setShowFilters(true)}>
            {showFilters ? "" : "Filters"}
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 mx-auto">
          <div className={`lg:w-2/3 w-full p-2 mx-auto ${showFilters ? "hidden lg:block" : "block"}`}>
            <InternshipsList internships={internships} onSelect={handleSelectInternship} />
          </div>

          <div className={`lg:w-1/3 lg:block p-2 ${showFilters ? "block" : "block"}`}>
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
