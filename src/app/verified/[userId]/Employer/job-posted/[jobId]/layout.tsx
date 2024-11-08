import React from "react";
import Sidebar from "./components/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";


const layout = ({ children,jobId }: any) => {
  return (
    <div className="h-[calc(100vh-80px)] flex">
      <Sidebar />
      <ScrollArea className="h-full">{children}</ScrollArea>
    </div>
  );
};

export default layout;
