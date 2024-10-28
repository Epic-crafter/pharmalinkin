"use client";
import React, { useState } from "react";
import { AppSidebar } from "./components/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const layout = ({ children }: any) => {
 
  return (
    <div className="flex h-screen">
       <SidebarProvider>
       <AppSidebar />
       <main>
       <SidebarTrigger className="lg:hidden block"/>
      {children}
       </main>
       </SidebarProvider>
    </div>
  );
};

export default layout;
