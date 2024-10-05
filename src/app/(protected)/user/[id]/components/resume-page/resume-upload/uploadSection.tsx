import React from 'react';
import Image from 'next/image';
import upload from '../../images/ep_upload-filled.png'

interface UploadSectionProps {}

const UploadSection: React.FC<UploadSectionProps> = () => {
  return (
    <div className="flex flex-col justify-center items-center self-stretch px-20 py-10 mt-3 text-gray-400 bg-white border border-dashed border-zinc-200 max-md:px-5 max-md:max-w-full">
      <Image
        loading="lazy"
        src={upload}
        alt=""
        className="object-contain aspect-square w-[60px]"
      />
      <p className="mt-1">
        <span className="font-semibold text-black">Browse files</span> or drop here
      </p>
      <p className="self-stretch mt-1">
        Only PDF format available . Max file size 12 MB
      </p>
    </div>
  );
};

export default UploadSection;