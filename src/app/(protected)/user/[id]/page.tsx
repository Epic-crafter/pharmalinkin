import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import DashboardHistory from './components/appHistory/DashboardHistory'
import { Navbar } from './components/appHistory/navbar'
import DashboardProfile from './components/profile/dashboardProfile'
import DashboardLogin from './components/profileLogin/dashboardLogin'
const page = () => {
  return (
    <div className="flex gap-5 max-md:flex-col">
      <Sidebar/>
      {/* <DashboardHistory/> */}
      {/* <DashboardProfile/> */}
      <DashboardLogin/>
    </div>
  )
}

export default page