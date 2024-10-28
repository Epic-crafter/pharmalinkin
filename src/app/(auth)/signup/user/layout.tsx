import { RegistrationProvider } from '@/lib/contexts/user-register-context'
import React from 'react'

const layout = ({children}:any) => {
  return (
    <RegistrationProvider><div className='flex justify-center h-screen items-center'>{children}</div></RegistrationProvider>
  )
}

export default layout