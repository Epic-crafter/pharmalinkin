"use client";
import React from 'react'
import ApplicationsList from './AppList'
import Filters from './components/Filters'


const page = ({params}:any) => {
  const {jobId} = params;
  console.log("JOBID_________", jobId);
  return (
    <div className="flex space-x-4">
    <div className="flex-grow">
      <ApplicationsList />
    </div>
    <div>
      <Filters />
    </div>
  </div>
  )
}

export default page