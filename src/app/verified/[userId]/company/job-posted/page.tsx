import React from 'react'
import ApplicationsList from './components/AppList'
import Filters from './components/Filters'
import Sidebar from './components/Sidebar'

const page = () => {
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