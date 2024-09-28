import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="flex gap-5 max-md:flex-col">
      <Sidebar />
      <main className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
        <Header />
        <div className="mt-[-1020px]"> {/* Adjust the negative margin as needed */}
          <MainContent />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
