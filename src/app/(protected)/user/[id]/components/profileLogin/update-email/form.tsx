import React from 'react';
import {Button} from '../../../../../../../components/ui/button';
import Input from '../update-email/input';

interface EmailUpdateFormProps {
  currentEmail: string;
  isVerified: boolean;
}

const EmailUpdateForm: React.FC<EmailUpdateFormProps> = ({ currentEmail, isVerified }) => {
  return (
    <form className="flex flex-col items-start leading-relaxed min-w-[240px] w-[539px] max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[259px]">
        <div className="flex gap-2 justify-center items-center self-start font-medium whitespace-nowrap text-slate-800">
          <div className="self-stretch my-auto">{currentEmail}</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9500c87cba81011ee78baceaa135f7582efba54d7b9acb75ac5f29c5396f747a?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" alt="" />
        </div>
        <div className="text-slate-500">{isVerified ? 'Your email address is verified.' : 'Your email address is not verified.'}</div>
      </div>
      <Input label="Update Email" placeholder="Enter your new email" className="mt-5" />
      <Button className='mt-4'>Update Email</Button>
    </form>
  );
};

export default EmailUpdateForm;