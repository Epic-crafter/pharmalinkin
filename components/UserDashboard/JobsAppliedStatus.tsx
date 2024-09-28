import React from 'react';

const JobsAppliedStatus: React.FC = () => {
  return (
    <div className="flex flex-col items-start px-6 py-7 bg-white border border-solid border-zinc-200 min-w-[240px] w-[352px] max-md:px-5">
      <h3 className="text-xl font-semibold leading-tight text-center text-slate-800">Jobs Applied Status</h3>
      <div className="flex gap-6 items-center self-stretch mt-11 max-md:mt-10">
        <div className="flex flex-col self-stretch my-auto w-[152px]">
          <div className="flex relative flex-col justify-center p-1 rounded-full aspect-square shadow-[9px_9px_27px_rgba(70,64,222,0.2)] w-[152px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/23e7a6125dfe1e673384864429b019b158eae7efe5a004c1a6d0df490d635b5d?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3" alt="Job application status chart" className="object-cover absolute inset-0 size-full" />
            <div className="flex relative shrink-0 w-full h-36 rounded-full border-violet-100 border-solid border-[14.306px]" />
          </div>
        </div>
        <div className="flex flex-col self-stretch my-auto leading-relaxed whitespace-nowrap">
          {[
            { color: 'bg-sky-600', percentage: '60%', label: 'Unsuitable' },
            { color: 'bg-violet-100', percentage: '40%', label: 'Interviewed' }
          ].map((item, index) => (
            <div key={index} className="flex gap-4 items-center mt-2 first:mt-0">
              <div className={`flex shrink-0 self-stretch my-auto w-5 h-5 ${item.color} rounded`} />
              <div className="flex flex-col self-stretch my-auto">
                <div className="text-lg font-bold text-slate-800">{item.percentage}</div>
                <div className="text-base text-slate-500">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="flex gap-2 items-center mt-11 text-base font-semibold leading-relaxed text-sky-600 max-md:mt-10">
        <span className="self-stretch my-auto">View All Applications</span>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c86cfe391038f1b08939e3507b72294fb92785a216e0b1078c9e0136e707c325?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      </button>
    </div>
  );
};

export default JobsAppliedStatus;