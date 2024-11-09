// context/JobContext.tsx
"use client";
import React, { createContext, useContext, ReactNode } from "react";

type JobContextType = {
  jobId: string | null;
  setJobId: (id: string) => void;
};

const JobContext = createContext<JobContextType | undefined>(undefined);

export const useJobContext = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJobContext must be used within a JobProvider");
  }
  return context;
};

type JobProviderProps = {
  children: ReactNode;
};

export const JobProvider = ({ children }: JobProviderProps) => {
  const [jobId, setJobId] = React.useState<string | null>(null);

  return (
    <JobContext.Provider value={{ jobId, setJobId }}>
      {children}
    </JobContext.Provider>
  );
};
