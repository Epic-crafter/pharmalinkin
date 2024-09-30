import React from 'react';

interface TabItemProps {
  label: string;
  count: number;
  isActive?: boolean;
}

const TabItem: React.FC<TabItemProps> = ({ label, count, isActive = false }) => {
  return (
    <div className={`flex flex-col ${isActive ? 'text-indigo-600' : ''}`}>
      <div className="self-center">
        {label} {isActive ? (
          <>
            <span className="text-slate-500">(</span>
            <span className="text-indigo-600">{count}</span>
            <span className="text-slate-500">)</span>
          </>
        ) : `(${count})`}
      </div>
      {isActive && (
        <div className="flex mt-2 w-full bg-indigo-600 rounded-none fill-indigo-600 min-h-[4px]" />
      )}
    </div>
  );
};

export {TabItem};