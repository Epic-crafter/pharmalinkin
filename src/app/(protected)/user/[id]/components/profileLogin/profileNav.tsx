import React from 'react';

interface NavItemProps {
  label: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, isActive }) => {
  return (
    <div className={`flex flex-col ${isActive ? 'text-slate-800' : 'text-slate-500'}`}>
      <div className={`${isActive ? 'self-center' : ''}`}>{label}</div>
      {isActive && (
        <div className="flex mt-2 w-full bg-sky-600 rounded-none min-h-[4px]" />
      )}
    </div>
  );
};

interface ProfileNavigationProps {
  items?: Array<{
    label: string;
    isActive?: boolean;
  }>;
}

const ProfileNavigation: React.FC<ProfileNavigationProps> = ({ items = [] }) => {
  if (items.length === 0) {
    return <p>No items available.</p>;
  }

  return (
    <nav className="flex flex-wrap gap-10 items-start w-full bg-white shadow-sm max-md:max-w-full">
      {items.map((item, index) => (
        <NavItem key={index} label={item.label} isActive={item.isActive} />
      ))}
    </nav>
  );
};

export default ProfileNavigation;
