import React from 'react';
import UploadSection from './uploadSection';
import CancelButton from './cancelButton';
import AddCvButton from './cvButton';
interface ResumeUploadProps {}

const ResumeUpload: React.FC<ResumeUploadProps> = () => {
  return (
    <section className="max-w-[915px]">
      <div className="flex gap-5 mt-8 ml-8 max-md:flex-col">
        <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-1 text-base max-md:mt-10">
            <h2 className="font-semibold leading-relaxed text-slate-800">
              Upload Resume
            </h2>
            <p className="mt-1.5 leading-7 text-slate-600">
              Update your resume to make sure it is safe
            </p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start w-full text-base leading-relaxed max-md:mt-10 max-md:max-w-full">
            <h3 className="font-semibold text-slate-600">Upload CV /Resume</h3>
            <UploadSection />
            <div className="flex items-center gap-4">
  <CancelButton />
  <AddCvButton />
</div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeUpload;