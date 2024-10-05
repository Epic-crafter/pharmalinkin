import React from 'react';

interface TabProps {
  label: string;
  isActive: boolean;
}

const Tab: React.FC<TabProps> = ({ label, isActive }) => (
  <div className="flex flex-col w-[133px]">
    <div className="self-center">{label}</div>
    {isActive && <div className="flex mt-2 w-full bg-blue-600 rounded-none min-h-[4px]" />}
  </div>
);

const ManageResume: React.FC = () => {
  return (
    <nav className="flex flex-col items-start px-8 pt-8 text-base font-semibold leading-relaxed text-slate-800 max-md:px-5">
      <div className="flex flex-wrap gap-10 items-start max-w-full bg-white shadow-sm w-[769px]">
        <Tab label="Manage Resume" isActive={true} />
        <div className="flex min-h-[26px]" />
        <div className="flex min-h-[26px]" />
      </div>
    </nav>
  );
};

export default ManageResume;