// TabsContent.tsx
import React from 'react';

interface TabsContentProps {
  value: string;
  activeTab: string;
  children: React.ReactNode;
}

export const TabsContent: React.FC<TabsContentProps> = ({ value, activeTab, children }) => {
  return activeTab === value ? <div className="mt-4">{children}</div> : null;
};
