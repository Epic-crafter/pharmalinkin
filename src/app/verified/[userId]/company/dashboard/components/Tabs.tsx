// Tabs.tsx
import React, { useState } from 'react';
import { TabsTrigger } from '../../../../../../components/ui/tabsTrigger';

export const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('internships'); // State to manage active tab

  return (
    <div className="flex space-x-4">
      {/* Render TabsTrigger components with the necessary props */}
      <TabsTrigger value="internships" activeTab={activeTab} setActiveTab={setActiveTab}>
        Internships
      </TabsTrigger>

      <TabsTrigger value="jobs" activeTab={activeTab} setActiveTab={setActiveTab}>
        Jobs
      </TabsTrigger>
    </div>
  );
};
