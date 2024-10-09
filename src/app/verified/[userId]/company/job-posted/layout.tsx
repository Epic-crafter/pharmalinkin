import React from "react";
import ApplicationsList from "./components/AppList";
import Filters from "./components/Filters";
import Header from "../dashboard/Header";
import Sidebar from "./components/Sidebar";

const layout = ({ children }: any) => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-grow p-6 bg-gray-100">{children}</main>
    </div>
  );
};

export default layout;
