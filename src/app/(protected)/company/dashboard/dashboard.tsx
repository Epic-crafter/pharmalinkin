import React from 'react';
import Header from './header'; 
import Image from 'next/image';
import divider from '../../../../assets/Divider.png'
import { cn } from "@/lib/utils";
import DataRange from './dataRange'
import StatisticsCardList from './statsCard';
import JobStatistics from './job-stats/jobStats';
import JobDashboard from './job-open/job-dash';
import JobUpdates from './job-update/updates';
const DashboardHistory: React.FC = () => {
  return (
    <div className="w-full">
      <main className="flex flex-col w-full">
        <Header />
        <div
      className={cn(
        "w-[1192px] flex flex-col items-start justify-start gap-10 max-w-full text-left text-base text-color-white font-body-normal-regular mq800:gap-5",
        
      )}
    >
        <Image
        className="self-stretch relative max-w-full overflow-hidden max-h-2 mt-[-2px] bg-zinc-200"
        loading="lazy"
        alt="divider"
        src={divider}
      />      
      </div>  
      <DataRange/>
      <StatisticsCardList/>
      <div className="flex flex-wrap gap-8">
  <JobStatistics />
  <JobDashboard />
  <JobUpdates/>
</div>

      </main>
    </div>
  );
};

export default DashboardHistory;
