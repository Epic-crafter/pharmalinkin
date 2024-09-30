import React from 'react';

interface InputFieldProps {
    label: React.ReactNode;  // Allow both string and JSX
    value: string;
    placeholder: string;
    required?: boolean;
  }

const InputField: React.FC<InputFieldProps> = ({ label, value, required }) => {
  return (
    <div className="flex flex-col min-w-[240px] w-[258px]">
      <label className="font-semibold text-red-400">
        {label}
        {required && <span className="text-red-400">*</span>}
      </label>
      <div className="gap-2.5 self-stretch px-4 py-3 mt-1 w-full bg-white border border-solid border-zinc-200 text-slate-600">
        {value}
      </div>
    </div>
  );
};

export default InputField;