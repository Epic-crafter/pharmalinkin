import React from 'react';
import SidebarHeader from './header';
import SidebarMenu from './menu';
import SidebarSettings from './settings';
import UserProfile from './profile';

const Sidebar: React.FC = () => {
  return (
    <aside className="flex overflow-hidden flex-col justify-between self-stretch py-8 shadow-sm bg-slate-50 max-w-[272px]">
      <div className="flex flex-col w-full">
        <SidebarHeader />
        <SidebarMenu />
        <SidebarSettings />
      </div>
      <UserProfile />
    </aside>
  );
};

export default Sidebar;