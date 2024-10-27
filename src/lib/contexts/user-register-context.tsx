"use client"
import React, { createContext, useContext, useState } from 'react';

// Create the context
const RegistrationContext = createContext<any>(undefined);

// Create a provider component
export const RegistrationProvider = ({ children }:any) => {
  const [registrationData, setRegistrationData] = useState({
    email: '',
    phone: '',
    password: '',
    firstName: '',
    lastName: '',
    location: '',
    mostRecentJobTitle: '',
    collegeName: '',
    collegeStartDate: '',
    collegeEndDate: '',
    degree: '',
    fieldOfStudy: '',
    preferredJobTitle: '',
    preferredLocation: '',
    openForRemote: false,
  });

  const updateRegistrationData = (field:any, value:any) => {
    setRegistrationData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <RegistrationContext.Provider value={{ registrationData, updateRegistrationData }}>
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistrationContext = () => useContext(RegistrationContext);
