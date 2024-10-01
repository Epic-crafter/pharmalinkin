import React from 'react';

interface InputProps {
  label: string;
  placeholder: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ label, placeholder, className = '' }) => {
  return (
    <div className={`flex flex-col self-stretch w-full max-w-[539px] ${className}`}>
      <label htmlFor="emailInput" className="font-semibold text-slate-600">{label}</label>
      <input
        id="emailInput"
        type="email"
        placeholder={placeholder}
        className="gap-2.5 self-stretch px-4 py-3 mt-1 w-full text-gray-400 bg-white border border-solid border-zinc-200 max-md:max-w-full"
      />
    </div>
  );
};

export default Input;