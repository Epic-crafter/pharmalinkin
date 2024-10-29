import { RegistrationProvider } from '@/lib/contexts/user-register-context'
import React from 'react'
import Header from '../user/header'

const layout = ({children}:any) => {
  return (
    <RegistrationProvider>
      <div className=' absolute top-0 w-full'><Header/></div>
      {children}</RegistrationProvider>
  )
}

export default layout