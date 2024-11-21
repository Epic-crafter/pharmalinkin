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
  const menuItems = [
    {
      name: "Applications received",
      count: 98,
      path: `/verified/${userId}/${userRole}/job-posted/${jobId}`,
    },
    {
      name: "Shortlisted",
      count: 4,
      path: `/verified/${userId}/${userRole}/job-posted/${jobId}/shortlisted`,
    },
    {
      name: "Hired",
      count: 1,
      path: `/verified/${userId}/${userRole}/job-posted/${jobId}/hired`,
    },
    {
      name: "Not interested",
      count: 4,
      path: `/verified/${userId}/${userRole}/job-posted/${jobId}/not-interested `,
    },
    {
      name: "Interviews",
      count: 0,
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
