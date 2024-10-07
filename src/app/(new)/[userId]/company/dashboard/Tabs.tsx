"use client"
import { TabsList } from '../../../../../components/ui/TabsList';
import { TabsTrigger } from '../../../../../components/ui/tabsTrigger';
import { TabsContent } from '../../../../../components/ui/tabsContent';
import { Tabs } from "../../../../../components/ui/Tabs";
import React, { useState } from 'react';


const Example = () => {
  const [activeTab, setActiveTab] = useState('internships');

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tabs List */}
      <TabsList>
        <TabsTrigger value="internships" activeTab={activeTab} setActiveTab={setActiveTab}>
          Internships
        </TabsTrigger>
        <TabsTrigger value="jobs" activeTab={activeTab} setActiveTab={setActiveTab}>
          Jobs
        </TabsTrigger>
      </TabsList>

      {/* Tabs Content */}
      <TabsContent value="internships" activeTab={activeTab}>
        <div>
          <h2 className="text-xl font-semibold">Internship Details</h2>
          <p>Here you'll see internship details...</p>
        </div>
      </TabsContent>

      <TabsContent value="jobs" activeTab={activeTab}>
        <div>
          <h2 className="text-xl font-semibold">Job Details</h2>
          <p>Here you'll see job details...</p>
        </div>
      </TabsContent>
    </div>
  );
};

export default Example;

