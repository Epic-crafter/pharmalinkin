import React from 'react';
import ApplicantTypeBar from './typeBar';
import ApplicantTypeLegend from './typeLegend';

const applicantTypes = [
  { type: 'Full Time', count: 45, color: 'bg-sky-600' },
  { type: 'Part-Time', count: 24, color: 'bg-emerald-300' },
  { type: 'Remote', count: 22, color: 'bg-sky-400' },
  { type: 'Internship', count: 32, color: 'bg-amber-400' },
  { type: 'Contract', count: 30, color: 'bg-red-400' },
];

const ApplicantsSummaryCard: React.FC = () => {
  const totalApplicants = applicantTypes.reduce((sum, type) => sum + type.count, 0);

  return (
    <section className="flex flex-col pb-6 mt-6 w-full bg-white border border-solid border-zinc-200">
      <h2 className="gap-2.5 self-center px-6 pt-6 pb-4 w-full text-xl font-semibold leading-tight text-center text-slate-800">
        Applicants Summary
      </h2>
      <div className="flex gap-2 items-end py-2 pl-6 w-full whitespace-nowrap">
        <div className="text-7xl font-semibold leading-none text-slate-800">{totalApplicants}</div>
        <div className="text-xl leading-8 text-slate-500 w-[105px]">Applicants</div>
      </div>
      <ApplicantTypeBar applicantTypes={applicantTypes} />
      <ApplicantTypeLegend applicantTypes={applicantTypes} />
    </section>
  );
};

export default ApplicantsSummaryCard;