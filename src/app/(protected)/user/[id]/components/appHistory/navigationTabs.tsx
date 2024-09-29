import React from 'react';
import {TabItem} from '../appHistory/tabItem';

interface TabData {
  label: string;
  count: number;
  isActive?: boolean;
}

const tabData: TabData[] = [
  { label: 'All', count: 45, isActive: true },
  { label: 'In Review', count: 34 },
  { label: 'Interviewing', count: 18 },
  { label: 'Assessment', count: 5 },
  { label: 'Offered', count: 2 },
  { label: 'Hired', count: 1 },
];

const NavigationTabs: React.FC = () => {
  return (
    <nav className="flex flex-wrap gap-8 items-start pl-8 pt-6 text-base font-semibold leading-relaxed bg-white shadow-sm text-slate-500 max-md:pl-5">
      {tabData.map((tab, index) => (
        <TabItem key={index} {...tab} />
      ))}
    </nav>
  );
};

export {NavigationTabs};