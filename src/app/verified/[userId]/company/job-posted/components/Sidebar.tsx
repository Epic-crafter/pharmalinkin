"use client"; // Marking this component as a Client Component

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importing the useRouter hook
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Sidebar = () => {
  const router = useRouter();
  const [selected, setSelected] = useState("Applications received");

  const menuItems = [
    {
      name: "Applications received",
      count: 98,
      path: "/verified/123/company/job-posted/",
    },
    {
      name: "Shortlisted",
      count: 4,
      path: "/verified/123/company/job-posted/shortlisted",
    },
    { name: "Hired", count: 1, path: "/verified/123/company/job-posted/hired" },
    {
      name: "Not interested",
      count: 4,
      path: "/verified/123/company/job-posted/not-interested",
    },
    {
      name: "Assignments",
      count: 0,
      path: "/verified/123/company/job-posted/assignments",
    },
    {
      name: "Interviews",
      count: 0,
      path: "/verified/123/company/job-posted/interviews",
    },
    {
      name: "Chat messages",
      count: 0,
      path: "/verified/123/company/job-posted/chat-messages",
    },
  ];

  // Explicitly define types for path and name
  const handleNavigation = (path: string, name: string) => {
    setSelected(name);
    router.push(path); // Navigate to the specified path
  };

  return (
    <aside className="w-64 p-4 bg-white border-r">
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
             {item.count?<Badge variant={selected === item.name ? "secondary" : "outline"}>
                {item.count}
              </Badge>:null}
            </div>
          </Button>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
