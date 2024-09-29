import React from 'react';
import Image from 'next/image';
import Profile from '../images/profile.png'

interface ProfilePhotoSectionProps {
  profilePhotoSrc: string;
}

const ProfilePhotoSection: React.FC<ProfilePhotoSectionProps> = ({ profilePhotoSrc }) => {
  return (
    <section className="flex flex-wrap gap-10 mt-8 items-start text-base">
      <div className="flex flex-col min-w-[240px] w-[259px]">
      <h2 className="font-semibold leading-relaxed text-slate-800">
        Profile Photo
      </h2>
      <p className="mt-1.5 leading-7 text-slate-600">
        This image will be shown publicly as your profile picture, it will help recruiters recognize you!
      </p>
    </div>
      <div className="flex flex-wrap gap-8 ml-8 items-start leading-relaxed min-w-[240px] max-md:max-w-full">
        <Image 
          loading="lazy" 
          src={Profile} 
          alt="Current profile photo" 
          className="object-contain shrink-0 aspect-square w-[124px]" 
        />
        <div 
      className="flex flex-col justify-center px-11 py-6 ml-10 rounded-lg border-2 border-sky-600 border-dashed bg-slate-50 min-w-[240px] max-md:px-5"
      role="button"
      tabIndex={0}
      aria-label="Upload new profile photo"
    >
      <div className="flex flex-col items-center">
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/07e39c128f4eaa542ed6352526cccbf58f4a439198ae96028b7d193704c8f6ba?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b" 
          alt="" 
          className="object-contain w-8 aspect-square" 
        />
        <div className="flex flex-col items-center mt-2">
          <p className="text-slate-600">
            <span className="font-medium text-sky-600">Click to replace</span>{" "}
            <span className="text-slate-600">or drag and drop</span>
          </p>
          <p className="mt-1 text-slate-500">
            SVG, PNG, JPG or GIF (max. 400 x 400px)
          </p>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
};

export {ProfilePhotoSection};