import React from 'react';
import Image from 'next/image';
import dots from '../../images/dots.png'
export interface ApplicationRowProps {
  id: number;
  companyName: string;
  companyLogo: string;
  role: string;
  dateApplied: string;
  status: string;
  statusColor: string;
  isEven?: boolean;
}

export function ApplicationRow({
  id,
  companyName,
  companyLogo,
  role,
  dateApplied,
  status,
  statusColor,
  isEven = false
}: ApplicationRowProps) {
  return (
    <div className={`flex flex-wrap items-center p-6 w-full ${isEven ? 'bg-slate-50' : 'bg-white'} max-md:px-5 max-md:max-w-full`}>
      <div className="self-stretch my-auto w-14">{id}</div>
      <div className="flex gap-2 items-center self-stretch my-auto whitespace-nowrap w-[221px]">
        <img loading="lazy" src={companyLogo} alt={`${companyName} logo`} className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square" />
        <div className="self-stretch my-auto">{companyName}</div>
      </div>
      <div className="self-stretch my-auto w-[275px]">{role}</div>
      <div className="self-stretch my-auto w-[194px]">{dateApplied}</div>
      <div className="flex flex-col justify-center items-start self-stretch my-auto text-sm font-semibold  min-w-[240px] w-[246px]">
        <div className={`gap-2 self-stretch px-2.5 py-1.5 border border-color-${statusColor} border-solid rounded-[80px] text-${statusColor}`}>
          {status}
        </div>
      </div>
      <Image loading="lazy" src={dots} alt=''/>
    </div>
  );
}