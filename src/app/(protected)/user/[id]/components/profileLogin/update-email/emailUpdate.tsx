import React from 'react';
import EmailUpdateForm from '../update-email/form';

const EmailUpdate: React.FC = () => {
  return (
    <section className="flex flex-wrap mt-8 gap-10 items-start text-base">
      <div className="flex flex-col min-w-[240px] w-[259px]">
        <h2 className="font-semibold leading-relaxed text-slate-800">Update Email</h2>
        <p className="mt-1.5 leading-7 text-slate-600">
          Update your email address to make sure it is safe
        </p>
      </div>
      <EmailUpdateForm currentEmail="jakegyll@email.com" isVerified={true} />
    </section>
  );
};

export default EmailUpdate;