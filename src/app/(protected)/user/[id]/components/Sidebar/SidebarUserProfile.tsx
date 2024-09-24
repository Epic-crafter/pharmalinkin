import Image from 'next/image';
import React from 'react';

interface SidebarUserProfileProps {
  email: string;
}

const SidebarUserProfile: React.FC<SidebarUserProfileProps> = ({ email }) => {
  return (
    <div className="flex gap-4 items-start px-7 pt-6 mt-16 max-w-full text-sm leading-relaxed text-gray-800 whitespace-nowrap w-[272px] max-md:px-5 max-md:mt-10">
      {/* <Image 
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f81875e08a98e98e280a72bcd32234891a1903a80d34ebe953afaf06a27b1ef2?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b" 
        alt="User avatar" 
        width={48} 
        height={48} 
        className="object-contain shrink-0 self-start w-12 aspect-square" 
      /> */}
      <div className="grow shrink self-end mt-7 opacity-50 w-[134px]">{email}</div>
    </div>
  );
};

export default SidebarUserProfile;
