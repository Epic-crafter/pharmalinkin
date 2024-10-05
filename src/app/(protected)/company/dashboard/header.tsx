import React from 'react';
import Image from 'next/image';
import nomad from '../images/nomad.png'
import show from '../images/show.png'
import noti from '../images/noti.png'
import {Button} from '../../../../components/ui/button'
import plus from '../images/plusss.png'

const Header: React.FC = () => {
  return (
    <header className="flex overflow-hidden flex-wrap gap-10 justify-between items-center px-8 py-4 bg-white shadow-sm max-md:px-5">
      <div className="flex gap-4 items-center self-stretch my-auto whitespace-nowrap">
      <Image 
        loading="lazy" 
        src={nomad}
        alt="Company icon" 
        className="object-contain shrink-0 self-stretch my-auto w-12 aspect-square" 
      />
      <div className="flex flex-col self-stretch my-auto">
        <div className="text-base leading-relaxed text-slate-600">Company</div>
        <div className="flex gap-2 items-start text-xl font-semibold leading-tight text-slate-800">
          <div>Nomad</div>
          <Image 
            loading="lazy" 
            src={show} 
            alt="Verification icon" 
            className="object-contain shrink-0 w-6 aspect-square" 
          />
        </div>
      </div>
    </div>

      <div className="flex gap-8 justify-center items-center self-stretch my-auto text-base font-bold leading-relaxed text-center text-white">
      <Image 
      loading="lazy" 
      src= {noti}
      alt="Company logo" 
      className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square" 
    />
        <Button className="flex gap-2.5 justify-center items-center self-stretch px-6 py-3 my-auto bg-sky-600 max-md:px-5">
      <Image 
        loading="lazy" 
        src={plus} 
        alt="" 
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" 
      />
      <span className="self-stretch my-auto">Post a job</span>
    </Button>
      </div>
    </header>
  );
};

export default Header;