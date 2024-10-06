import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function JobTable() {
  const jobs = [
    {
      profile: "ReactJS Development",
      status: "Under review",
      views: 2804,
      applications: 20,
      upgrade: true,
      linkedin: true,
    },
    {
      profile: "Backend Development",
      status: "Applications on hold",
      views: 2859,
      applications: 134,
      upgrade: false,
      linkedin: false,
    },
    {
      profile: "ReactJS Development",
      status: "Closed",
      views: 2859,
      applications: 134,
      upgrade: true,
      linkedin: false,
    },
  ];

  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="text-left">Profile</th>
          <th>Status</th>
          <th>Total Views</th>
          <th>Action</th>
          <th>Upgrade to Premium</th>
          <th>Share on LinkedIn</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job, index) => (
          <tr key={index} className="border-t border-gray-200">
            <td>{job.profile}</td>
            <td>
              <Badge variant="outline">{job.status}</Badge>
            </td>
            <td>{job.views}</td>
            <td>
              <Button variant="default">View Applications ({job.applications})</Button>
            </td>
            <td>
              {job.upgrade && (
                <Button variant="secondary">
                  Upgrade
                </Button>
              )}
            </td>
            <td>
              {job.linkedin && (
                <Button variant="link">
                  <img src="/path/to/linkedin-icon.svg" alt="LinkedIn" />
                </Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
