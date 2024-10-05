import React from 'react';

interface StatisticsCardProps {
  count: number;
  description: string;
  iconSrc: string;
  bgColor: string;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({ count, description, iconSrc, bgColor }) => {
  return (
    <section className={`flex gap-3.5 justify-between items-center px-6 py-7 ${bgColor} min-h-[106px] min-w-[240px] w-[351px] max-md:px-5`}>
      <div className="flex gap-3.5 items-center self-stretch my-auto min-w-[240px]">
        <h2 className="self-stretch my-auto text-5xl font-semibold leading-none max-md:text-4xl">
          {count}
        </h2>
        <p className="self-stretch my-auto text-lg font-medium leading-relaxed w-[200px]">
          {description}
        </p>
      </div>
      <img loading="lazy" src={iconSrc} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
    </section>
  );
};

export default StatisticsCard;