import React from 'react';
import { Button } from '@/components/ui/button';

interface AddCvButtonProps {
  onClick?: () => void;
}

const AddCvButton: React.FC<AddCvButtonProps> = ({ onClick }) => {
  return (
    <Button
      className="gap-2.5 self-start px-6 py-3 mt-6 font-bold text-center text-white  max-md:px-5"
      onClick={onClick}
    >
      Add CV / Resume
    </Button>
  );
};

export default AddCvButton;