import React from 'react';
import logo from '../../user/[id]/components/images/logoooo.png'
import Image from 'next/image';
const SidebarHeader: React.FC = () => {
  return (
    <header className="flex gap-2 items-center self-center pr-16 text-2xl font-bold tracking-tight text-gray-800 whitespace-nowrap">
      <Image loading="lazy" src={logo} alt=''/>
      <h1 className="self-stretch my-auto">Pharmalinkin</h1>
    </header>
  );
};

export default SidebarHeader;