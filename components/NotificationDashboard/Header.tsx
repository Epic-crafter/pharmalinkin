import React from 'react';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex overflow-hidden flex-wrap gap-10 justify-center p-8 w-full bg-white shadow-sm max-w-[1168px] max-md:px-5 max-md:max-w-full">
      <h1 className="my-auto text-3xl font-semibold leading-tight text-slate-800">Dashboard</h1>
      <div className="flex gap-8 justify-center items-center text-base font-bold leading-relaxed text-center text-sky-600">
        <button className="gap-2.5 self-stretch px-6 py-3 my-auto border border-indigo-200 border-solid w-[213px] max-md:px-5">
          Back to homepage
        </button>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca54771f7ffa4d620c869eb712bbf8e922ac7385d474ea2b84f212e2f35d7b3b?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3" alt="" className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square" />
      </div>
    </header>
  );
};

export default Header;