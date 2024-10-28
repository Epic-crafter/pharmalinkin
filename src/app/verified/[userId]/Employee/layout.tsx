
import React from 'react'
// import Header from '../Employer/dashboard/Header'
import Header from './Header'
// import Header from '../company/dashboard/Header'
const layout = ({children}:any) => {
  return (
    <div>
       <Header />
        {children}   
    </div>
  )
}

export default layout