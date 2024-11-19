"use client";
import React, { useState } from "react";

const layout = ({ children }: any) => {
 
  return (
    <div className="flex h-screen">
     
      {children}
  
    </div>
  );
};

export default layout;
