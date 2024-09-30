import React from 'react';

interface PasswordInputProps {
  label: string;
  placeholder: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col mt-6 w-full max-w-[540px] max-md:max-w-full">
      <label htmlFor={`${label.toLowerCase()}Password`} className="font-semibold text-slate-600">{label} Password</label>
      <input
        type="password"
        id={`${label.toLowerCase()}Password`}
        className="gap-2.5 self-stretch px-4 py-3 mt-1 w-full text-gray-400 bg-white border border-solid border-zinc-200 max-md:max-w-full"
        placeholder={placeholder}
      />
      <p className="mt-1 text-sm text-slate-500">Minimum 8 characters</p>
    </div>
  );
};

export default PasswordInput;