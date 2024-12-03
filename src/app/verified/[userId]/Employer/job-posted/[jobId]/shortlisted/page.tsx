"use client";
import Sidebar from "../components/Sidebar";
import ApplicationList from "../AppList";
import Filters from "../components/Filters";
import { useEffect, useState } from "react";
import { useJobContext } from "@/lib/contexts/jobId-context";

export default function Page() {
  const [status,setStatus]=useState("SHORTLISTED");
  const { jobId } = useJobContext();
  console.log("JOB ID1------", jobId);
  const [applicants, setApplicants] = useState<any>([]);
  const fetchApplicants = async () => {
    try {

      const response = await fetch(`/api/company/fetch-applicants?jobId=${jobId}&status=${status}`);
      const data = await response.json();
      if (data.success) {
        setApplicants(data.applicants);
        console.log("Applicants List-------", data.applicants)
      } else {
        console.error("Error fetching applicants:", data.message);
      }
    } catch (error) {
      console.error("Failed to fetch applicants:", error);
    }
  };

  useEffect(() => {
    if (jobId) {
      fetchApplicants();
      
    }
  }, [jobId]);
  return (
    <div className="min-h-screen flex bg-gray-100">

      {/* Main content area */}
      <main className="flex-grow p-6">
        <div className="flex space-x-6">
          <div className="flex-grow">
            <ApplicationList applicants={applicants} setApplicants={setApplicants} status={status} setStatus={setStatus} />
          </div>

          <div className="w-64">
            <Filters />
          </div>
        </div>
      </main>
    </div>
  );
}

