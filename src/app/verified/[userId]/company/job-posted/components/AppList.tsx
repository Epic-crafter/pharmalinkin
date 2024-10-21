// components/ApplicationsList.js
import { Card } from '@/components/ui/card';
import React from 'react';

const applications = [
  {
    name: "Siddharth Kumar",
    location: "Dehradun (Open to relocate)",
    education: "B.Tech, Computer Science & Engineering (2020 - 2024)",
    university: "Graphic Era Hill University, Dehradun",
    skills: ["MongoDB", "Express.js", "CSS", "HTML", "+4 more"],
    appliedDate: "Applied 27 days ago",
  },
  // More applications can be added here
];

export default function ApplicationsList() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Applications for Backend Development internship</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Upgrade Now</button>
      </div>
      
      <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg mb-4">
        87 new applications are hidden! Upgrade to Premium now to view all and get 10X more applications.
      </div>

      <div className="shadow-sm rounded-lg p-4">
        {applications.map((applicant, index) => (
          <Card key={index} className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{applicant.name}</h2>
                <p>{applicant.location}</p>
                <p>{applicant.education}</p>
                <p>{applicant.skills.join(", ")}</p>
              </div>
              <div className="text-sm text-gray-500">{applicant.appliedDate}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
