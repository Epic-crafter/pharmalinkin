import React from 'react';

interface ApplicantType {
  type: string;
  count: number;
  color: string;
}

interface ApplicantTypeLegendProps {
  applicantTypes: ApplicantType[];
}

const ApplicantTypeLegend: React.FC<ApplicantTypeLegendProps> = ({ applicantTypes }) => {
  const halfLength = Math.ceil(applicantTypes.length / 2);
  const firstColumn = applicantTypes.slice(0, halfLength);
  const secondColumn = applicantTypes.slice(halfLength);

  return (
    <div className="flex gap-8 items-start px-6 w-full text-base leading-relaxed text-slate-800">
      <div className="flex flex-col pt-6">
        {firstColumn.map((type, index) => (
          <LegendItem key={index} type={type} />
        ))}
      </div>
      <div className="flex flex-col pt-6">
        {secondColumn.map((type, index) => (
          <LegendItem key={index} type={type} />
        ))}
      </div>
    </div>
  );
};

const LegendItem: React.FC<{ type: ApplicantType }> = ({ type }) => (
  <div className="flex gap-2 items-center mt-2 first:mt-0">
    <div className={`flex shrink-0 self-stretch my-auto w-5 h-5 ${type.color} rounded`} />
    <div className="self-stretch my-auto">
      {type.type}: <span className="font-medium text-slate-800">{type.count}</span>
    </div>
  </div>
);

export default ApplicantTypeLegend;