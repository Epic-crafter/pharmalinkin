import React from 'react'
import ApplicationsList from './AppList'
import Filters from './components/Filters'


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