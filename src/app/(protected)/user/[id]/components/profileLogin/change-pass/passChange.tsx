import React from 'react';
import PasswordChangeForm from '../change-pass/form';

const PasswordChangeSection: React.FC = () => {
  return (
    <section className="flex mt-8 flex-wrap gap-10 items-start text-base">
      <div className="flex flex-col mt-6 min-w-[240px] w-[259px]">
        <h2 className="font-semibold leading-relaxed text-slate-800">New Password</h2>
        <p className="mt-1.5 leading-7 text-slate-600">Manage your password to make sure it is safe</p>
      </div>
      <PasswordChangeForm />
    </section>
  );
};

export default PasswordChangeSection;