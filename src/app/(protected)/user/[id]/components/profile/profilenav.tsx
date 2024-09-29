import React from 'react';

interface NavItemProps {
  label: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, isActive = false }) => (
  <div className={`flex flex-col ${label === 'Login Details' ? 'w-32' : 'w-20'} text-slate-800 ${isActive ? 'text-sky-600' : ''} whitespace-nowrap`}>
    <div className="self-center">{label}</div>
    {isActive && <div className="flex mt-2 w-full bg-sky-600 rounded-none min-h-[4px]" />}
  </div>
);

const ProfileNavigation: React.FC = () => {
  const navItems = [
    { label: 'My Profile', isActive: true },
    { label: 'Login Details', isActive: false },
    { label: 'Notifications', isActive: false },
  ];

  return (
    <nav className="flex flex-wrap gap-10 items-start w-full bg-white shadow-sm max-md:max-w-full">
      {navItems.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
    </nav>
  );
};

export default ProfileNavigation;
