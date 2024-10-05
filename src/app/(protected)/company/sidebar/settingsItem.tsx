import React from 'react';

interface SidebarSettingsItemProps {
  icon: string;
  text: string;
}

const SidebarSettingsItem: React.FC<SidebarSettingsItemProps> = ({ icon, text }) => {
  return (
    <li className="flex gap-4 items-center py-3 pr-4 pl-8 w-full">
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      <span className="flex-1 shrink self-stretch my-auto basis-0">{text}</span>
    </li>
  );
};

export default SidebarSettingsItem;