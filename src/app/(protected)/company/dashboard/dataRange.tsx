import React from 'react';
import Image from 'next/image';
import map from '../images/map.png'

interface StatisticReportProps {
  userName: string;
  startDate: string;
  endDate: string;
}

const StatisticReport: React.FC<StatisticReportProps> = ({ userName, startDate, endDate }) => {
  return (
    <header className="flex flex-wrap gap-10 justify-between items-center p-8 max-md:px-5">
      <div className="flex flex-col self-stretch my-auto min-w-[240px] max-md:max-w-full">
        <h1 className="text-2xl font-semibold leading-tight text-slate-800">
          Good morning, Maria
        </h1>
        <p className="mt-2 text-base font-medium leading-relaxed text-slate-500 max-md:max-w-full">
          Here is your job listings statistic report from Jul 19 - Jul 25.
        </p>
      </div>
      <div className="flex gap-7 justify-between items-center self-stretch px-4 py-3 my-auto text-base leading-relaxed bg-white border border-solid border-zinc-200 text-slate-800 w-[180px]">
      <div className="self-stretch my-auto">Jul 19-Jul 25</div>
      <Image loading="lazy" src={map} alt="" />
    </div>
    </header>
  );
};

export default StatisticReport;