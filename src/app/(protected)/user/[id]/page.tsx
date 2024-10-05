import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import DashboardHistory from './components/appHistory/DashboardHistory'
import { Navbar } from './components/appHistory/navbar'
import DashboardProfile from './components/profile/dashboardProfile'
import DashboardLogin from './components/profileLogin/dashboardLogin'
import Resume from '../[id]/components/resume-page/resume'
import Form from '../[id]/components/form/form'
import Sidebarr from './../../company/sidebar/sidebar'
import Dashboard from '../../company/dashboard/dashboard'
const page = () => {
  return (
    <div className="flex gap-5 max-md:flex-col">
      {/* user */}

      {/* <Sidebar/> */}
      {/* <DashboardHistory/> */}
      {/* <DashboardProfile/> */}
      {/* <DashboardLogin/> */}
      {/* <Resume/> */}
      {/* <Form/> */}

      {/* company */}
      <Sidebar/>
      <Dashboard/>
    </div>
  )
}

export default page