import React from 'react';

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, children }) => {
  return (
    <section className="flex flex-col mt-8 w-full">
      <h2 className="flex gap-2.5 items-start self-start pl-8 text-sm font-semibold tracking-wide leading-6 text-gray-800 whitespace-nowrap max-md:pl-5">
        <span className="opacity-50">{title}</span>
      </h2>
      <ul className="flex flex-col mt-6 w-full text-base font-medium leading-relaxed text-slate-500">
        {children}
      </ul>
    </section>
  );
};

export default SidebarSection;
