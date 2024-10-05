import React from 'react';
import {Button} from '../../../../../../../components/ui/button';


interface CancelButtonProps {}

const CancelButton: React.FC<CancelButtonProps> = () => {
  return (
    
    <Button className="gap-2.5 px-6 py-3 mt-6 ml-3 font-bold text-center text-blue-600 bg-violet-100 max-md:px-5 max-md:ml-2.5">
    Cancel
  </Button>

    
  );
};

export default CancelButton;