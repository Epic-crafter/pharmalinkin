import React from 'react';
import Sidebar from '../../components/UserDashboard/Sidebar';
import Header from '../../components/UserDashboard/Header';
import StatCard from '../../components/UserDashboard/StatCard';
import JobsAppliedStatus from '../../components/UserDashboard/JobsAppliedStatus';
import UpcomingInterviews from '../../components/UserDashboard/UpcomingInterviews';
import RecentApplications from '../../components/UserDashboard/RecentApplications';

const Dashboard: React.FC = () => {
  return (
    <div className="flex gap-5 max-md:flex-col">
      <Sidebar />
      <main className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
        <Header />
        <section className="flex flex-wrap gap-6 items-start px-8 pb-8 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col font-semibold min-w-[240px] text-slate-800 w-[258px]">
            <StatCard title="Total Jobs Applied" value={45} />
            <StatCard title="Interviewed" value={18} />
          </div>
          <JobsAppliedStatus />
          <UpcomingInterviews />
        </section>
        <RecentApplications />
      </main>
    </div>
  );
};

export default Dashboard;