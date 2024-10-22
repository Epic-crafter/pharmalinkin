// import Dashboard from '@/app/(new)/[userId]/company/components/page'
import React from 'react'
import Dashboard from './dashboard/page';
import SignUp from './sign-up/index'
const page = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      <Dashboard/>
      {/* <Job/> */}
      {/* <Shortlist/> */}
      <SignUp/>

    </div>
  )
}

export default page