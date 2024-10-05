import React from 'react';
import Image from 'next/image';
import maria from '../images/maria.png'

const UserProfile: React.FC = () => {
  return (
    <div className="flex flex-col px-8 pt-5 mt-36 w-full leading-relaxed">
      <div className="flex gap-4 items-center">
        <Image loading="lazy" src={maria} alt='' />
        <div className="flex flex-col self-stretch my-auto">
          <div className="text-lg font-semibold text-slate-800">Maria Kelly</div>
          <div className="text-sm opacity-50 text-slate-600">MariaKlly@email.com</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;