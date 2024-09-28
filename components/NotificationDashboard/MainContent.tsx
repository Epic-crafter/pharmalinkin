import React from 'react';

interface MainContentProps {}

const MainContent: React.FC<MainContentProps> = () => {
  return (
    <div className="flex flex-col grow pb-8 justify-start max-md:max-w-full">
      <div className="flex bg-white min-h-[127px] w-full max-md:w-full" />
      <div className="flex gap-6 min-h-[372px] max-md:max-w-full" />
      <div className="flex flex-col px-8 pb-8 max-w-full w-full max-md:px-5">
        <div className="flex w-full min-h-[514px]" />
      </div>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9247615c547fde325294e9e41c33817b9d4a355def22af4199eae88604b5cd2?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3" 
        alt="Dashboard content" 
        className="object-contain z-10 mt-0 w-full border border-solid aspect-[1.08] border-zinc-200 max-w-[1104px] max-md:mt-0 max-md:mr-2.5 max-md:max-w-full" 
      />
    </div>
  );
};

export default MainContent;
