import React from 'react';
import Image from 'next/image';
import Calendar from '../../images/calender.png';
interface SelectFieldProps {
    label: React.ReactNode;  // Allow both string and JSX
    value: string;
    placeholder: string;
    required?: boolean;
  }
const SelectField: React.FC<SelectFieldProps> = ({ label, value, required }) => {
  return (
    <div className="flex flex-col min-w-[240px] w-[258px]">
      <label className="font-semibold text-red-400">
        {label}
        {required && <span className="text-red-400">*</span>}
      </label>
      <div className="flex gap-10 justify-between items-center px-4 py-3 mt-1 w-full whitespace-nowrap bg-white border border-solid border-zinc-200 text-slate-600">
        <div className="self-stretch my-auto">{value}</div>
        <Image loading="lazy" src={Calendar} alt="" />
      </div>
    </div>
  );
};

export default SelectField;