import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { JobProvider, useJobContext } from "@/context/JobContext";
import { JobProvider } from "@/lib/contexts/jobId-context";
import { useJobContext } from "@/lib/contexts/jobId-context";
import JobSetter from "./components/JobIdSetter";

type LayoutProps = {
  children: React.ReactNode;
  params: {
    jobId: string;
  };
};

const Layout = ({ children, params }: LayoutProps) => {
  const { jobId } = params;

  return (
    <JobProvider>
      <div className="h-[calc(100vh-80px)] flex">
        <Sidebar />
        <ScrollArea className="h-full">
          <JobSetter jobId={jobId} /> {/* Component to initialize jobId */}
          {children}
        </ScrollArea>
      </div>
    </JobProvider>
  );
};

export default Layout;