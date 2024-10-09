// import Dashboard from '@/app/(new)/[userId]/company/components/page'
import React from 'react'
import Link from "next/link";
import {Button} from '../../../../../components/ui/button'
const page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-semibold">InternShala</h1>
        <nav className="space-x-4">
          <Button variant="link">Plans and Pricing</Button>
          <Button variant="link">Dashboard</Button>
          <Button variant="link">Post Internship/Job</Button>
        </nav>
      </div>
    </header>

      {/* Banner */}
      <div className="bg-blue-50 p-4 rounded-md text-center shadow-md mx-6 mt-4">
      <p className="text-gray-700">
        Post unlimited listings and get access to features like boosted visibility, applicant contact numbers, etc., with <br></br>Internshala Premium.{" "}
        <Link href="/premium-plans" className="text-blue-600 underline">
          View Premium Plans now
        </Link>
      </p>
    </div>

      {/* Tabs */}
      <div className="p-4 flex justify-center">
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

      <div className="flex justify-between ml-8 items-center mt-4">
      <p>Showing 1 of 1</p>
      <div className="space-x-2 mr-8">
        <Button variant="default">Previous</Button>
        <Button variant="default">Next</Button>
      </div>
    </div>


      {/* Footer Help Button */}
      <div className="fixed bottom-4 right-4">
        <Button variant="outline">Need help?</Button>
      </div>
    </div>
  )
}

export default page