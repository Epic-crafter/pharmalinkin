import React from 'react';

interface SidebarItemProps {
  icon: string;
  text: string;
  active?: boolean;
  badge?: number;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, active, badge }) => {
  const baseClasses = "flex gap-4 items-center py-3 pr-4 pl-8 w-full text-base font-medium max-md:pl-5";
  const activeClasses = active ? "text-sky-600 bg-violet-100" : "text-slate-500";

  return (
    <div className={`${baseClasses} ${activeClasses}`}>
      {active && <div className="flex shrink-0 self-stretch my-auto w-1 h-8 bg-sky-600" />}
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      <div className="flex-1 shrink self-stretch my-auto basis-0">{text}</div>
      {badge && (
        <div className="flex flex-col self-stretch my-auto w-6 text-sm font-semibold text-white">
          <div className="px-0.5 w-6 h-6 bg-sky-600 rounded-full">{badge}</div>
        </div>
      )}
    </div>
  );
};

export default SidebarItem;