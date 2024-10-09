// import Dashboard from '@/app/(new)/[userId]/company/components/page'
import React from 'react'
import Link from "next/link";
import {Button} from '../../../../components/ui/button'
import Dashboard from './dashboard/page';
import Job from './job-posted/pages/index'
const page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Dashboard/>
    </div>
  )
}

export default page