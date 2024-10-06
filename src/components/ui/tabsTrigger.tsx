// TabsTrigger.tsx
import React from 'react';

interface TabsTriggerProps {
  value: string;
  activeTab: string;
  setActiveTab: (value: string) => void;
  children: React.ReactNode;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, activeTab, setActiveTab, children }) => {
  const isActive = activeTab === value;

  return (
    <button
      className={`py-2 px-4 ${isActive ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};
