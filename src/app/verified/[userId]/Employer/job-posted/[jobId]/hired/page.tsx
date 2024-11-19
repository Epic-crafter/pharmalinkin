"use client"
import React, { useEffect, useState } from 'react'
import ApplicationList from '../AppList'
import { useJobContext } from '@/lib/contexts/jobId-context';

const Page = () => {
  const [status,setStatus]=useState("");
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
    <div><ApplicationList applicants={applicants} setApplicants={setApplicants} status={status} setStatus={setStatus} /></div>
  )
}

export default Page