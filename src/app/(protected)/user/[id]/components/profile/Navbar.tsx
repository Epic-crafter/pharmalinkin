import React from 'react';
import { Button } from '../../../../../../components/ui/button';
import Notify from '../images/Notification (1).png';
import Image from 'next/image';
import '../../globals.css'

interface MyApplicationsProps {
  title?: string; // Make title optional
}

const Navbar: React.FC<MyApplicationsProps> = ({ title = "Default Title" }) => { // Provide a default title
  return (
    <header className="flex w-full overflow-hidden flex-wrap gap-10 justify-between p-8 bg-white shadow-sm max-md:px-5">
      {/* Full-width title */}
      {/* <h1 className="my-auto text-3xl font-semibold leading-tight text-slate-800 font-clash">
        My Applications
      </h1> */}
      <nav className="flex gap-8 justify-end items-center text-base font-bold leading-relaxed text-center text-sky-600 ml-auto">
  <button className="gap-2.5 self-stretch px-6 py-3 my-auto border border-indigo-200 border-solid w-[213px] max-md:px-5">
    Back to homepage
  </button>
  <Image
    loading="lazy"
    src={Notify}
    alt="Notification icon"
    className="object-contain shrink-0 w-10 aspect-square"
  />
</nav>

    </header>
  );
};

export { Navbar };
