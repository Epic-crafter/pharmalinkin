import Image from 'next/image';
import React from 'react';
import frame from '../../../../../../assets/frame.png'
const SidebarLogo: React.FC = () => {
  return (
    <div className="flex gap-2 items-center self-center pr-16 text-2xl font-bold tracking-tight text-gray-800 whitespace-nowrap max-md:pr-5">
      <Image 
        loading="lazy" 
        src={frame} 
        alt="Pharmalinkin logo" 
        width={32} 
        height={32} 
        className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" 
      />
      <div className="self-stretch my-auto">Pharmalinkin</div>
    </div>
  );
};

export default SidebarLogo;
