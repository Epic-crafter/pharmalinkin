import React from 'react';
import {Button} from '../../../../../../../components/ui/button';


const UpdateNameForm: React.FC = () => {
  return (
    <form className="flex flex-col self-stretch mt-5 w-full max-w-[539px] max-md:max-w-full">
      <label htmlFor="newCvName" className="font-semibold text-slate-600">
        Update CV /Resume Name
      </label>
      <input
        type="text"
        id="newCvName"
        className="gap-2.5 self-stretch px-4 py-3 mt-1 w-full text-gray-400 bg-white border border-solid border-zinc-200 max-md:max-w-full"
        placeholder="Enter your new CV name"
      />
      <Button
        type="submit"
        className="gap-2.5 self-start px-6 py-3 mt-6 font-bold text-center text-white  max-md:px-5"
      >
        Update Name
      </Button>
    </form>
  );
};

export default UpdateNameForm;