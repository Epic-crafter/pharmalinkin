import React from 'react';

interface BasicInformationProps {
  title: string;
  description: string;
}

const BasicInformation: React.FC<BasicInformationProps> = () => {
  return (
    <section className="flex flex-col leading-relaxed mt-8">
      <h2 className="text-lg font-semibold text-gray-800">Basic Information</h2>
      <p className="mt-1 text-base text-slate-600 max-md:max-w-full">This is your personal information that you can update anytime.</p>
    </section>
  );
};

export {BasicInformation};