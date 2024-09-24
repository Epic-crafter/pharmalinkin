import React from 'react';
import Image from 'next/image';

interface SidebarNavItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
  notificationCount?: number;
}

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ icon, label, isActive, notificationCount }) => {
  const baseClasses = "flex gap-4 items-center py-3 pr-4 pl-8 w-full text-base font-medium max-md:pl-5";
  const activeClasses = isActive ? "text-sky-600 bg-violet-100" : "text-slate-500";

  return (
    <li className={`${baseClasses} ${activeClasses}`}>
      {isActive && <div className="flex shrink-0 self-stretch my-auto w-1 h-8 bg-sky-600" />}
      
      {/* Use Next.js Image component for optimized image loading */}
      <div className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square">
        <Image src={icon} alt={`${label} icon`} width={24} height={24} />
      </div>

      <div className="flex-1 shrink self-stretch my-auto basis-0">{label}</div>
      
      {notificationCount && (
        <div className="flex flex-col self-stretch my-auto w-6 text-sm font-semibold text-white">
          <div className="flex items-center justify-center px-0.5 w-6 h-6 bg-sky-600 rounded-full">
            {notificationCount}
          </div>
        </div>
      )}
    </li>
  );
};

export default SidebarNavItem;
