import React from 'react';
import Image from 'next/image';
interface StatCardProps {
  title: string;
  value: number | null | undefined; // Adjusted to allow possible undefined or null values
  change: number;
  iconSrc: string;
  iconBgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value = 0, change, iconSrc, iconBgColor }) => {
  const isPositiveChange = change >= 0;
  const changeColor = isPositiveChange ? 'text-violet-500' : 'text-red-400';
  const changeIcon = isPositiveChange
    ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/7fad011922a98e6ab808a9b9cbb0758b616fe5f753a3bd2251a19a524a0b45eb?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b'
    : 'https://cdn.builder.io/api/v1/image/assets/TEMP/9a9c207f91fb195a1ea2020c48aabf00bd8253d689ebe159f50a842df25e3a00?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b';

  return (
    <div className="flex overflow-hidden flex-col mt-8 p-4 w-full bg-white border border-solid border-zinc-200 max-w-[228px] min-h-[145px] mb-4">
      <div className="flex gap-10 justify-between items-center w-full">
        <h2 className="self-stretch my-auto text-lg font-semibold leading-relaxed text-slate-800">
          {title}
        </h2>
        <div className={`flex gap-2.5 items-center self-stretch p-1.5 my-auto w-8 h-8 ${iconBgColor} rounded-[32px]`}>
          <img loading="lazy" src={iconSrc} alt="" className="object-contain w-5 aspect-square" />
        </div>
      </div>
      <div className="flex flex-col self-start mt-3.5 text-center">
        <div className="self-start text-4xl font-semibold leading-none text-slate-800">
          {value?.toLocaleString() ?? '0'}
        </div>
        <div className="flex gap-2 items-start text-lg font-medium leading-relaxed">
          <div className="text-slate-500">This Week</div>
          <div className={`flex items-center ${changeColor} whitespace-nowrap`}>
            <div className="self-stretch my-auto">{Math.abs(change)}%</div>
            <img loading="lazy" src={changeIcon} alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
