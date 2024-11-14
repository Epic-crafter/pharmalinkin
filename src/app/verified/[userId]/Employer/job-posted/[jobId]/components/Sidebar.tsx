"use client"; // Marking this component as a Client Component

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Importing the useRouter hook
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useUser } from "@/lib/contexts/user";
import { useJobContext } from "@/lib/contexts/jobId-context";

const Sidebar = () => {
  const router = useRouter();
  const [selected, setSelected] = useState("Applications received");
  const { userId, userRole } = useUser();
  const { jobId } = useJobContext();
  // const menuItems = [
  //   {
  //     name: "Applications received",
  //     count: 98,
  //     path: `/verified/${userId}/${userRole}/job-posted/${jobId}`,
  //   },
  //   {
  //     name: "Shortlisted",
  //     count: 4,
  //     path: `/verified/${userId}/${userRole}/job-posted/${jobId}/shortlisted`,
  //   },
  //   {
  //     name: "Hired",
  //     count: 1,
  //     path: `/verified/${userId}/${userRole}/job-posted/${jobId}/hired`,
  //   },
  //   {
  //     name: "Not interested",
  //     count: 4,
  //     path: `/verified/${userId}/${userRole}/job-posted/${jobId}/not-interested `,
  //   },
  //   {
  //     name: "Interviews",
  //     count: 0,
  //     path: `/verified/${userId}/${userRole}/job-posted/${jobId}/interviews`,
  //   }
  // ];
  const [applicantCounts, setApplicantCounts] = useState({
    "Applications received": 0,
    "Shortlisted": 0,
    "Hired": 0,
    "Not interested": 0,
    "Interviews": 0,
  });

  useEffect(() => {
    const fetchApplicantCounts = async () => {
      try {
        const response = await fetch(`/api/company/fetch-applicants?jobId=${jobId}`);
        const data = await response.json();
        if (data.success) {
          setApplicantCounts({
            "Applications received": data.applicants.status.PENDING || 0,
            "Shortlisted": data.applicants.status.REVIEWED || 0,
            "Hired": data.applicants.status.OFFERED || 0,
            "Not interested": data.applicants.status.REJECTED || 0,
            "Interviews": data.applicants.status.INTERVIEW_SCHEDULED || 0,
          });
        }
      } catch (error) {
        console.error("Error fetching applicant counts:", error);
      }
    };

    fetchApplicantCounts();
  }, [jobId]);

  const menuItems = [
    {
      name: "Applications received",
      count: applicantCounts["Applications received"],
      path: `/verified/${userId}/${userRole}/job-posted/${jobId}`,
    },
    {
      name: "Shortlisted",
      count: applicantCounts.Shortlisted,
      path: `/verified/${userId}/${userRole}/job-posted/${jobId}/shortlisted`,
    },
    {
      name: "Hired",
      count: applicantCounts.Hired,
      path: `/verified/${userId}/${userRole}/job-posted/${jobId}/hired`,
    },
    {
      name: "Not interested",
      count: applicantCounts["Not interested"],
      path: `/verified/${userId}/${userRole}/job-posted/${jobId}/not-interested`,
    },
    {
      name: "Interviews",
      count: applicantCounts.Interviews,
      path: `/verified/${userId}/${userRole}/job-posted/${jobId}/interviews`,
    }
  ];
  // Explicitly define types for path and name
  const handleNavigation = (path: string, name: string) => {
    setSelected(name);
    router.push(path); // Navigate to the specified path
  };

  return (
    <aside className="w-64 p-4 h-[calc(100vh-80px)] bg-white border-r">
      <h2 className="text-xl font-semibold mb-4">Applications</h2>
      <ul className="space-y-1">
        {menuItems.map((item) => (
          <Button
            key={item.name}
            className={`p-2 rounded-lg cursor-pointer w-full justify-start`}
            variant={selected === item.name ? "default" : "ghost"}
            onClick={() => handleNavigation(item.path, item.name)}
          >
            <div className="flex w-full justify-between">
              <span>{item.name}</span>
              {item.count ? (
                <Badge
                  variant={selected === item.name ? "secondary" : "outline"}
                >
                  {item.count}
                </Badge>
              ) : null}
            </div>
          </Button>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
