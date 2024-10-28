import { RegistrationProvider } from '@/lib/contexts/user-register-context'
import React from 'react'
import Header from './header'
const layout = ({children}:any) => {
  return (
    <div>
     <div className=' absolute top-0 w-full'><Header/></div>
     <RegistrationProvider><div className='flex justify-center h-screen items-center'>{children}</div></RegistrationProvider> 
    </div>
   
  )
}

export default layout