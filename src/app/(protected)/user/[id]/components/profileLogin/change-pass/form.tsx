import React from 'react';
import PasswordInput from './input';
import {Button} from '../../../../../../../components/ui/button'
const PasswordChangeForm: React.FC = () => {
  return (
    <form className="flex flex-col leading-relaxed min-w-[240px] w-[540px] max-md:max-w-full">
      <PasswordInput label="Old" placeholder="Enter your old password" />
      <PasswordInput label="New" placeholder="Enter your new password" />
      <Button type="submit" className="gap-2.5 self-start px-6 py-3 mt-6 font-bold text-center text-white  max-md:px-5">
        Change Password
      </Button>
    </form>
  );
};

export default PasswordChangeForm;