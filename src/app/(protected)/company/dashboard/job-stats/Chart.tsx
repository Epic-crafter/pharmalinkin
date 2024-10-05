import React from 'react';

interface DayData {
  day: string;
  jobViews: number;
  jobsApplied: number;
}

const weekData: DayData[] = [
  { day: 'Mon', jobViews: 115, jobsApplied: 117 },
  { day: 'Tue', jobViews: 26, jobsApplied: 132 },
  { day: 'Wed', jobViews: 110, jobsApplied: 48 },
  { day: 'Thu', jobViews: 54, jobsApplied: 168 },
  { day: 'Fri', jobViews: 132, jobsApplied: 64 },
  { day: 'Sat', jobViews: 43, jobsApplied: 42 },
  { day: 'Sun', jobViews: 11, jobsApplied: 96 },
];

const WeeklyChart: React.FC = () => {
  return (
    <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow max-md:mt-6 max-md:max-w-full">
        <div className="flex flex-col items-start p-2 ml-28 text-base font-medium leading-relaxed text-center text-white whitespace-nowrap bg-slate-800 w-[82px] max-md:ml-2.5">
          <div className="flex gap-2 items-center">
            <div className="flex shrink-0 self-stretch my-auto w-4 h-4 bg-emerald-300 rounded" />
            <div className="self-stretch my-auto">122</div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex shrink-0 self-stretch my-auto w-4 h-4 bg-sky-400 rounded" />
            <div className="self-stretch my-auto">34</div>
          </div>
        </div>
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex gap-4 items-end max-w-full w-[428px]">
            {weekData.map((dayData) => (
              <div key={dayData.day} className="flex flex-col flex-1 shrink basis-0">
                <div className="flex flex-col justify-center w-full" style={{ minHeight: `${Math.max(dayData.jobViews, dayData.jobsApplied)}px` }}>
                  <div className="flex flex-1 w-full bg-amber-400" style={{ minHeight: `${dayData.jobViews}px` }} />
                  <div className="flex flex-1 w-full bg-violet-500" style={{ minHeight: `${dayData.jobsApplied}px` }} />
                </div>
                <div className="self-start mt-2 text-base leading-relaxed text-center text-slate-500">
                  {dayData.day}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-7 items-start self-start mt-2 text-base font-medium leading-relaxed text-center text-slate-500">
            <div className="flex gap-2 items-center">
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 bg-amber-400 rounded" />
              <div className="self-stretch my-auto">Job View</div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="flex shrink-0 self-stretch my-auto w-4 h-4 bg-violet-500 rounded" />
              <div className="self-stretch my-auto">Job Applied</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyChart;