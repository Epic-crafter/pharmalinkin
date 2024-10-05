import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Navbar } from '../profile/Navbar';
import divider from '../../../../../../assets/Divider.png'
import { cn } from "@/lib/utils";
import Image from 'next/image';
import ManageResume from './manage-resume';
import AddCVResume from './cv-resume';
import UpdateResume from './update-resume/updateResume';
import ResumeUpload from './resume-upload/resumeUpload';

const resume: React.FC = () => {
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
    <ManageResume/>
    <AddCVResume/>
    <UpdateResume/>
    <ResumeUpload/>
      </main>
    </div>
  );
};

export default resume;
