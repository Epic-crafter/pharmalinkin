import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Navbar } from '../appHistory/navbar';
import {JobApplicationStatus} from '../appHistory/jobAppStatus'
import DividerSocial from '@/app/home-component/divider-social';
import Image from 'next/image';
import divider from '../../../../../../assets/Divider.png'
import { cn } from "@/lib/utils";
import {NewFeatureNotification} from '../appHistory/newFeatureNot';
import { NavigationTabs } from '../appHistory/navigationTabs';
import { ApplicationHistory } from './content-area/ApplicationHistory';

const DashboardHistory: React.FC = () => {
  return (
    <div className="w-full">
      <main className="flex flex-col w-full">
        <Navbar />
        <div
      className={cn(
        "w-[1192px] flex flex-col items-start justify-start gap-10 max-w-full text-left text-base text-color-white font-body-normal-regular mq800:gap-5",
        
      )}
    >
        <Image
        className="self-stretch relative max-w-full overflow-hidden max-h-2 mt-[-2px] bg-zinc-200"
        loading="lazy"
        alt="divider"
        src={divider}
      />      
      </div>  
      <JobApplicationStatus/>
      <NewFeatureNotification/>
      <NavigationTabs/>
      <ApplicationHistory/>
      </main>
    </div>
  );
};

export default DashboardHistory;
