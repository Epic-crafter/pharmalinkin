import Header from '@/app/(new)/[userId]/company/dashboard/Header'
import React from 'react'

const layout = ({children}:any) => {
  return (
    <div>
       <Header />
        {children}
        
    </div>
  )
}

export default layout