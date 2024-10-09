// pages/index.js
import { Button } from "../../../../../components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-white shadow">
        <div className="flex items-center space-x-4">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-8" // Replace with your logo
          />
          <nav className="hidden md:flex space-x-4">
            <Link href="/plans" className="text-gray-700 hover:text-blue-600">Plans and Pricing</Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
            <Link href="/post-job" className="text-gray-700 hover:text-blue-600">Post Internship/Job</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hidden md:flex text-gray-700">A</button>
          <button className="text-gray-700">Help</button>
        </div>
      </header>

      {/* Banner */}
      <div className="p-4 bg-blue-50 text-center">
        <span className="block text-gray-700">
          Post unlimited listings and get access to features like boosted visibility...
        </span>
        <a href="#" className="text-blue-600 underline">View Premium Plans</a>
      </div>

      {/* Tabs */}
      <div className="p-4">
        <div className="flex space-x-4">
          <button className="text-blue-600 border-b-2 border-blue-600">Internships</button>
          <button className="text-gray-600">Jobs</button>
        </div>
      </div>

      {/* Internship Table */}
      <div className="overflow-x-auto p-4">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead>
            <tr>
              <th className="p-2 text-left">Profile</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Total Views</th>
              <th className="p-2 text-left">Action</th>
              <th className="p-2 text-left">Upgrade</th>
              <th className="p-2 text-left">Share on LinkedIn</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr>
              <td className="p-2">ReactJS Development</td>
              <td className="p-2 text-blue-600">Under review</td>
              <td className="p-2">2804</td>
              <td className="p-2"><Button variant="outline">View Applications</Button></td>
              <td className="p-2 text-yellow-600">Upgrade</td>
              <td className="p-2">
                <Button variant="link">LinkedIn</Button>
              </td>
            </tr>
            {/* Row 2 */}
            <tr>
              <td className="p-2">Backend Development</td>
              <td className="p-2 text-red-600">Applications on hold</td>
              <td className="p-2">2804</td>
              <td className="p-2"><Button variant="outline">View Applications</Button></td>
              <td className="p-2 text-yellow-600">Upgrade</td>
              <td className="p-2">
                <Button variant="link">LinkedIn</Button>
              </td>
            </tr>
            {/* Row 3 */}
            <tr>
              <td className="p-2">ReactJS Development</td>
              <td className="p-2 text-gray-600">Closed</td>
              <td className="p-2">2859</td>
              <td className="p-2"><Button variant="outline">View Applications</Button></td>
              <td className="p-2 text-yellow-600">Upgrade</td>
              <td className="p-2">
                <Button variant="link">LinkedIn</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Help Button */}
      <div className="fixed bottom-4 right-4">
        <Button variant="outline">Need help?</Button>
      </div>
    </div>
  );
}
