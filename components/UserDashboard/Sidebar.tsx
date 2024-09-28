import React from 'react';
import { HomeIcon, InboxIcon, Cog6ToothIcon, QuestionMarkCircleIcon, UserIcon, BriefcaseIcon, BuildingOffice2Icon } from '@heroicons/react/24/solid';

const Sidebar: React.FC = () => {
  return (
    <aside className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col justify-between py-8 mx-auto w-full shadow-sm bg-slate-50">
        <div className="flex flex-col w-full max-w-[272px]">
          <div className="flex gap-2 items-center self-center pr-16 text-2xl font-bold tracking-tight text-gray-800 whitespace-nowrap max-md:pr-5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/df93e6789f1ec707ad2bc872be3b8defeaf51314ca57c90bcbac513a8f0a5c80?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3" alt="Pharmalinkin logo" className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square" />
            <div className="self-stretch my-auto">Pharmalinkin</div>
          </div>
          <nav className="flex flex-col justify-center mt-8 w-full">
            <ul className="flex flex-col w-full leading-relaxed">
              <li className="flex gap-3 justify-center items-center w-full text-base font-medium text-sky-600 whitespace-nowrap max-w-[256px]">
                <div className="flex shrink-0 self-stretch my-auto w-1 h-8 bg-sky-600" />
                <div className="flex flex-1 shrink gap-4 items-center self-stretch px-4 py-3 my-auto bg-violet-100 basis-0">
                  <HomeIcon className="w-6 h-6 text-sky-600" />
                  <div className="flex-1 shrink self-stretch my-auto basis-0">Dashboard</div>
                </div>
              </li>
              <li className="flex gap-4 items-center px-8 py-3 w-full whitespace-nowrap max-md:px-5">
                <div className="flex gap-4 items-start self-stretch my-auto text-base font-medium text-slate-500">
                  <InboxIcon className="w-6 h-6 text-slate-500" />
                  <div className="w-32">Messages</div>
                </div>
                <div className="flex flex-col self-stretch my-auto w-6 text-sm font-semibold text-white">
                  <div className="px-0.5 w-6 h-6 bg-sky-600 rounded-full">1</div>
                </div>
              </li>
              {[
                { name: 'My Applications', icon: BriefcaseIcon },
                { name: 'Find Jobs', icon: BriefcaseIcon },
                { name: 'Browse Companies', icon: BuildingOffice2Icon },
                { name: 'My Public Profile', icon: UserIcon },
              ].map((item, index) => (
                <li key={index} className="flex gap-4 items-center py-3 pr-4 pl-8 w-full text-base font-medium text-slate-500 max-md:pl-5">
                  <item.icon className="w-6 h-6 text-slate-500" />
                  <div className="flex-1 shrink self-stretch my-auto basis-0">{item.name}</div>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex mt-8 w-full bg-indigo-200 min-h-[1px]" />
          <div className="flex flex-col mt-8 w-full">
            <div className="flex gap-2.5 items-start self-start pl-8 text-sm font-semibold tracking-wide leading-6 text-gray-800 whitespace-nowrap max-md:pl-5">
              <div className="opacity-50">SETTINGS</div>
            </div>
            <ul className="flex flex-col mt-6 w-full text-base font-medium leading-relaxed text-slate-500">
              {[
                { name: 'Settings', icon: Cog6ToothIcon },
                { name: 'Help Center', icon: QuestionMarkCircleIcon },
              ].map((item, index) => (
                <li key={index} className="flex gap-4 items-center py-3 pr-4 pl-8 w-full max-md:pl-5">
                  <item.icon className="w-6 h-6 text-slate-500" />
                  <div className="flex-1 shrink self-stretch my-auto basis-0">{item.name}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7d86fc04e0b1c32d6f3fe6b069ccc21b036e50faed724d168c4e6ccf777f2f0?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3" alt="Advertisement" className="object-contain mt-16 max-w-full aspect-[0.86] w-[272px] max-md:mt-10" />
        <div className="flex gap-4 items-start px-8 pt-6 mt-16 max-w-full text-sm leading-relaxed text-gray-800 whitespace-nowrap w-[272px] max-md:px-5 max-md:mt-10">
          <UserIcon className="w-12 h-12 text-gray-800" />
          <div className="grow shrink self-end mt-7 opacity-50 w-[134px]">jakegyll@email.com</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
