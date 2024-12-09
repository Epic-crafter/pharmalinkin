// components/ApplicationList.tsx
"use client";

const ApplicationList = () => {
  const applications = [
    {
      name: "Sagar Gupta",
      location: "Greater Noida, Allahabad",
      experience: "Information Technology at CISCO - 2 months",
      education: "B.Tech, Information Technology, IIIT Allahabad (2021 - 2025), CGPA: 8.39/10",
      appliedDate: "27 days ago",
    },
  ];

  return (
    <div className="p-6 bg-white border rounded-lg shadow-sm">
      <h1 className="text-xl font-semibold mb-4">
        Applications for Backend Development internship
      </h1>

      <p className="text-gray-600 mb-4">
        To ensure your hiring experience is smooth, we recommend you:
        <ul className="list-disc list-inside">
          <li>Always interview the applicants before finalizing.</li>
          <li>Extend a formal offer letter after interviews.</li>
        </ul>
      </p>

      <div className="space-y-6">
        {applications.map((application, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg flex flex-col space-y-2 bg-gray-50"
          >
            <div className="flex justify-between">
              <span className="text-lg font-semibold">{application.name}</span>
              <span className="text-sm text-gray-500">{application.appliedDate}</span>
            </div>
            <p className="text-sm text-gray-600">{application.location}</p>
            <p className="text-sm text-gray-600">{application.experience}</p>
            <p className="text-sm text-gray-600">{application.education}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationList;
