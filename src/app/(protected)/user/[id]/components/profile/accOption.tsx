import React from 'react';

interface AccountTypeOptionProps {
  isSelected: boolean;
  title: string;
  description: string;
}

const AccountTypeOption: React.FC<AccountTypeOptionProps> = ({ isSelected, title, description }) => (
  <div className="flex gap-4 items-start">
    <div className="flex overflow-hidden flex-col justify-center p-0.5 w-6">
      <div className={`flex ${isSelected ? 'flex-col justify-center px-0.5 py-1 rounded-full border border-sky-600 border-solid' : 'shrink-0 h-5 rounded-full border-2 border-solid border-zinc-200 stroke-[2px] stroke-zinc-200'}`}>
        {isSelected && <div className="flex shrink-0 w-3 h-3 bg-sky-600 rounded-full" />}
      </div>
    </div>
    <div className="flex flex-col text-base whitespace-nowrap leading-relaxed min-w-[240px]">
      <div className="font-medium text-slate-800">{title}</div>
      <div className={isSelected ? 'text-slate-600' : 'text-gray-800' }>{description}</div>
    </div>
  </div>
);

export default AccountTypeOption;