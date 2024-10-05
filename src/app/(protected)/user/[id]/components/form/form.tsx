import React from 'react';

interface FormInputProps {
  label: string;
  type?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, type = 'text' }) => {
    const id = label ? label.toLowerCase().replace(/\s+/g, '-') : '';
  

  return (
    <>
      <label htmlFor={id} className="self-start mt-5 text-3xl font-semibold leading-relaxed text-stone-900">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="flex shrink-0 mt-8 rounded-lg border border-black border-solid h-[49px] w-full"
        aria-label={label}
      />
    </>
  );
};

export default FormInput;