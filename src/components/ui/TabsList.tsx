// TabsList.tsx
import React from 'react';

interface TabsListProps {
  children: React.ReactNode;
}

export const TabsList: React.FC<TabsListProps> = ({ children }) => {
  return (
    <div className="flex space-x-4 border-b border-gray-200">
      {children}
    </div>
  );
};
