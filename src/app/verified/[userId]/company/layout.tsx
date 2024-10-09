import React from 'react'
import Header from './dashboard/Header'

const layout = ({children}:any) => {
  return (
    <div>
       <Header />
        {children}   
    </div>
  )
}

export default layout