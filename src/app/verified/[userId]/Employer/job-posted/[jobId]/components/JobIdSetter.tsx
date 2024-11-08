"use client"
import { useJobContext } from "@/lib/contexts/jobId-context";
import { useEffect } from "react";

const JobSetter = ({ jobId }: { jobId: string }) => {
    const { setJobId } = useJobContext();
  
    useEffect(() => {
      setJobId(jobId);
    }, [jobId, setJobId]);
  
    return null; 
  };