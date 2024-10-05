import React from 'react';

interface ApplicantType {
  type: string;
  count: number;
  color: string;
}

interface ApplicantTypeBarProps {
  applicantTypes: ApplicantType[];
}

const ApplicantTypeBar: React.FC<ApplicantTypeBarProps> = ({ applicantTypes }) => {
  const totalApplicants = applicantTypes.reduce((sum, type) => sum + type.count, 0);

  return (
    <div className="flex justify-center items-center px-6 w-full">
      {applicantTypes.map((type, index) => (
        <div
          key={index}
          className={`flex shrink-0 self-stretch my-auto h-4 ${type.color}`}
          style={{ width: `${(type.count / totalApplicants) * 100}%` }}
          role="img"
          aria-label={`${type.type}: ${type.count} applicants`}
        />
      ))}
    </div>
  );
};

export default ApplicantTypeBar;