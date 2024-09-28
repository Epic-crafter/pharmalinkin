import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col w-full max-md:max-w-full">
      <div className="flex overflow-hidden flex-wrap gap-10 justify-center p-8 w-full bg-white shadow-sm max-w-[1168px] max-md:px-5 max-md:max-w-full">
        <h1 className="my-auto text-3xl font-semibold leading-tight text-slate-800">Dashboard</h1>
        <div className="flex gap-8 justify-center items-center text-base font-bold leading-relaxed text-center text-sky-600">
          <button className="gap-2.5 self-stretch px-6 py-3 my-auto border border-indigo-200 border-solid w-[213px] max-md:px-5">
            Back to homepage
          </button>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/40b506c083cdcac82a4a3fbc6aefa0c5bf4fa11ec1c5716b54a339b4f5d37955?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3" alt="" className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square" />
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-between items-center p-8 w-full bg-white max-w-[1168px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col self-stretch my-auto min-w-[240px] max-md:max-w-full">
          <h2 className="text-2xl font-semibold leading-tight text-slate-800">Good morning, Jake</h2>
          <p className="mt-2 text-base font-medium leading-relaxed text-slate-500 max-md:max-w-full">
            Here is what's happening with your job search applications from July 19 - July 25.
          </p>
        </div>
        <div className="flex gap-7 justify-between items-center self-stretch px-4 py-3 my-auto text-base leading-relaxed bg-white border border-solid border-zinc-200 text-slate-800 w-[180px]">
          <div className="self-stretch my-auto">Jul 19 - Jul 25</div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f2b100872e06b6f49eaa6aed71920bcf1073741b3d1e5bd42f75fc69e8ff536?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3" alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
        </div>
      </div>
    </header>
  );
};

export default Header;