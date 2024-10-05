import React from 'react';

interface SidebarMenuItemProps {
  icon: string;
  text: string;
  isActive?: boolean;
  notificationCount?: number;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ icon, text, isActive, notificationCount }) => {
  const baseClasses = "flex gap-4 items-center py-3 w-full";
  const activeClasses = isActive ? "text-sky-600 bg-violet-100" : "text-slate-500";
  const paddingClasses = isActive ? "pl-4" : "px-8";

  return (
    <li className={`${baseClasses} ${activeClasses} ${paddingClasses}`}>
      {isActive && (
        <div className="flex shrink-0 self-stretch my-auto w-1 h-8 bg-indigo-600 fill-indigo-600" />
      )}
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 w-6 aspect-square" />
      <span className="flex-1 shrink basis-0">{text}</span>
      {notificationCount && (
        <div className="flex flex-col self-stretch my-auto w-6 text-sm font-semibold text-white">
          <div className="px-0.5 w-6 h-6 bg-sky-600 rounded-full">
            {notificationCount}
          </div>
        </div>
      )}
    </li>
  );
};

export default SidebarMenuItem;