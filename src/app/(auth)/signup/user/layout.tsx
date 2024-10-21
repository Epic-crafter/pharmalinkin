import { RegistrationProvider } from '@/lib/contexts/user-register-context'
import React from 'react'

const layout = ({children}:any) => {
  return (
    <RegistrationProvider>{children}</RegistrationProvider>
  )
}

export default layout