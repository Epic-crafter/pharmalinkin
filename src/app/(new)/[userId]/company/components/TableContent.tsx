// components/TableContent.tsx
type TableContentProps = {
    internships?: boolean;
    jobs?: boolean;
  };
  
  export function TableContent({ internships, jobs }: TableContentProps) {
    const data = internships
      ? [
          {
            profile: "ReactJS Development",
            status: "Under review",
            views: 2804,
            applications: 20,
            upgrade: true,
          },
          {
            profile: "Backend Development",
            status: "Applications on hold",
            views: 2859,
            applications: 134,
            upgrade: true,
          },
        ]
      : [
          {
            profile: "Full Stack Developer",
            status: "Closed",
            views: 3000,
            applications: 100,
            upgrade: false,
          },
        ];
  
    return (
      <table className="w-full bg-white border rounded shadow-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4">Profile</th>
            <th className="text-left p-4">Status</th>
            <th className="text-left p-4">Total Views</th>
            <th className="text-left p-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx} className="border-b">
              <td className="p-4">{item.profile}</td>
              <td className="p-4">{item.status}</td>
              <td className="p-4">{item.views}</td>
              <td className="p-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                  View Applications ({item.applications})
                </button>
                {item.upgrade && (
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded">
                    Upgrade
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  