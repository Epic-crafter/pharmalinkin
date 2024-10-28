import { RegistrationProvider } from '@/lib/contexts/user-register-context'
import React from 'react'
import Header from './header'
const layout = ({children}:any) => {
  return (
    <>
     <Header/>
     <RegistrationProvider><div className='flex justify-center h-screen items-center'>{children}</div></RegistrationProvider> 
    </>
   
  )
}

export default layout