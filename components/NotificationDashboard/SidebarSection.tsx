import React from 'react';
import SidebarItem from './SidebarItem';

interface SidebarSectionProps {
  title: string;
  items: Array<{
    icon: string;
    text: string;
  }>;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items }) => {
  return (
    <section className="flex flex-col mt-8 w-full">
      <h2 className="flex gap-2.5 items-start self-start pl-8 text-sm font-semibold tracking-wide leading-6 text-gray-800 whitespace-nowrap max-md:pl-5">
        {title}
      </h2>
      <div className="flex flex-col mt-6 w-full text-base font-medium leading-relaxed text-slate-500">
        {items.map((item, index) => (
          <SidebarItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default SidebarSection;