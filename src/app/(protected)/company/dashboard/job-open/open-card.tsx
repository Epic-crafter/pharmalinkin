import React from 'react';

interface JobOpenCardProps {
  jobsOpened: number;
}

const JobOpenCard: React.FC<JobOpenCardProps> = ({ jobsOpened }) => {
  return (
    <section className="flex flex-col pb-6 w-full bg-white border border-solid border-zinc-200">
      <h2 className="gap-2.5 self-center px-6 pt-6 pb-4 w-full text-xl font-semibold leading-tight text-center text-slate-800">
        Job Open
      </h2>
      <div className="flex gap-2 px-6 py-2 w-full">
        <div className="text-7xl font-semibold leading-none text-slate-800">
          {jobsOpened}
        </div>
        <div className="grow shrink self-end mt-9 text-xl leading-relaxed text-slate-500 w-[206px]">
          Jobs Opened
        </div>
      </div>
    </section>
  );
};

export default JobOpenCard;