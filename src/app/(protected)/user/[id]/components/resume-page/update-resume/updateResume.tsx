import React from 'react';
import ResumeInfo from './resumeInfo';
import UpdateNameForm from './updateName';

interface UpdateResumeProps {
  resumeName: string;
  isVerified: boolean;
}

const UpdateResume: React.FC<UpdateResumeProps> = ({ resumeName, isVerified }) => {
  return (
    <section className="flex flex-wrap mt-8 ml-8 gap-10 items-start text-base">
      <div className="flex flex-col min-w-[240px] w-[259px]">
        <h2 className="font-semibold leading-relaxed text-slate-800">
          Update Resume Name
        </h2>
        <p className="mt-1.5 leading-7 text-slate-600">
          Update your resume name to make sure it is safe
        </p>
      </div>
      <div className="flex flex-col items-start leading-relaxed min-w-[240px] w-[539px] max-md:max-w-full">
        <ResumeInfo resumeName={resumeName} isVerified={isVerified} />
        <UpdateNameForm />
      </div>
    </section>
  );
};

export default UpdateResume;