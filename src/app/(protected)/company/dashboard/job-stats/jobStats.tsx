import React from 'react';
import WeeklyChart from './Chart';
import StatCard from './statCard';
import {Button} from '../../../../../components/ui/Button'
interface JobStatisticsProps {
  weekRange: string;
  jobViews: number;
  jobViewsChange: number;
  jobsApplied: number;
  jobsAppliedChange: number;
}

const JobStatistics: React.FC<JobStatisticsProps> = ({
  weekRange,
  jobViews,
  jobViewsChange,
  jobsApplied,
  jobsAppliedChange
}) => {
  return (
    <section className="flex overflow-hidden flex-col pb-6 bg-white border border-solid border-zinc-200 max-w-[728px]">
      <header className="flex flex-col items-center pt-6 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-center max-md:max-w-full">
          <div className="flex flex-col self-stretch my-auto">
            <h1 className="text-xl font-semibold leading-tight text-slate-800">
              Job statistics
            </h1>
            <p className="mt-1 text-sm leading-relaxed text-slate-500">
              Showing Jobstatistic {weekRange}
            </p>
          </div>
          <nav className="flex items-start self-stretch p-1 my-auto text-base font-semibold leading-relaxed  whitespace-nowrap bg-violet-300">
            <Button className="gap-2.5 self-stretch px-3 py-2 text-indigo-600 bg-white">Week</Button>
            <Button className="gap-2.5 self-stretch px-3 py-2 bg-violet-300">Month</Button>
            <Button className="gap-2.5 self-stretch px-3 py-2 bg-violet-300">Year</Button>
          </nav>
        </div>
        <nav className="flex flex-wrap gap-10 items-start pl-6 mt-4 w-full text-base font-semibold leading-relaxed bg-white shadow-sm text-slate-500 max-md:pl-5">
          <div className="flex flex-col whitespace-nowrap text-slate-800 w-[74px]">
            <div className="self-center">Overview</div>
            <div className="flex mt-2 w-full bg-indigo-600 rounded-none fill-indigo-600 min-h-[4px]" />
          </div>
          <Button>Jobs View</Button>
          <Button>Jobs Applied</Button>
        </nav>
      </header>
      <main className="self-center mt-12 w-full max-w-[680px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <WeeklyChart />
          <aside className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-1.5 max-md:mt-7">
              <StatCard
                title="Job Views"
                value={jobViews}
                change={jobViewsChange}
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c758d0235cc49447e5ca8bfa577725e8392a97af0031e7479ce04491feb40e87?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b"
                iconBgColor="bg-amber-400"
              />
              <StatCard
                title="Job Applied"
                value={jobsApplied}
                change={jobsAppliedChange}
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f766bba109dc5e011de809544659ba46960346ee14fbc9172c5d484e8d2aa851?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b"
                iconBgColor="bg-violet-500"
              />
            </div>
          </aside>
        </div>
      </main>
    </section>
  );
};

export default JobStatistics;