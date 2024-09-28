import React from 'react';

interface StatCardProps {
  title: string;
  value: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <div className="flex overflow-hidden items-start px-6 pt-7 max-w-full bg-white border border-solid border-zinc-200 w-[258px] max-md:px-5">
      <div className="flex z-10 flex-col self-start mr-0">
        <div className="text-xl leading-tight">{title}</div>
        <div className="self-start mt-7 text-7xl leading-none text-center max-md:text-4xl">{value}</div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/18f3f47f59b7d3164cd2960a52660fc16dcf4023c0fdea299808f109ad425834?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3" alt="" className="object-contain shrink-0 self-end mt-16 aspect-[1.29] w-[88px] max-md:mt-10" />
    </div>
  );
};

export default StatCard;