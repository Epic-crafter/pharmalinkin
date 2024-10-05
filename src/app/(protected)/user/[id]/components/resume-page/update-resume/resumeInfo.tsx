import React from 'react';
import Image from 'next/image';
import tick from '../../images/tick.png'

interface ResumeInfoProps {
  resumeName: string;
  isVerified: boolean;
}

const ResumeInfo: React.FC<ResumeInfoProps> = ({ resumeName, isVerified }) => {
  return (
    <div className="flex flex-col max-w-full w-[259px]">
      <div className="flex gap-2 justify-center items-center self-start font-medium whitespace-nowrap text-slate-800">
        <span className="self-stretch my-auto">{resumeName}</span>
        <Image 
          loading="lazy" 
          src={tick} 
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" 
          alt=""
        />
      </div>
      <p className="text-slate-500">
        {isVerified ? "Your CV/Resume is verified." : "Your CV/Resume is not verified."}
      </p>
    </div>
  );
};

export default ResumeInfo;