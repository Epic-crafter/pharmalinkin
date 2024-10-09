// components/Sidebar.tsx
"use client"; // Marking this component as a Client Component

import { useState } from "react";

const Sidebar = () => {
  const [selected, setSelected] = useState("Applications received");

  const menuItems = [
    { name: "Applications received", count: 98 },
    { name: "Shortlisted", count: 4 },
    { name: "Hired", count: 1 },
    { name: "Not interested", count: 4 },
    { name: "Assignments", count: 0 },
    { name: "Interviews", count: 0 },
    { name: "Chat messages", count: 0 },
  ];

  return (
    <aside className="w-64 p-4 bg-white border-r">
      <h2 className="text-xl font-semibold mb-4">Applications</h2>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`p-2 rounded-lg cursor-pointer ${
              selected === item.name
                ? "bg-blue-100 text-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => setSelected(item.name)}
          >
            <div className="flex justify-between">
              <span>{item.name}</span>
              <span className="bg-gray-200 text-sm px-2 py-1 rounded-full">
                {item.count}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
