import React from 'react';
import JobOpenCard from './open-card';
import ApplicantsSummaryCard from './applicSumm';

const JobDashboard: React.FC = () => {
  return (
    <main className="flex flex-col mr-16 max-w-[352px]">
      <JobOpenCard jobsOpened={12} />
      <ApplicantsSummaryCard />
    </main>
  );
};

export default JobDashboard;