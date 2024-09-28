import React from 'react';
import Image from 'next/image';
import App from '../images/applic.png'
import comp from '../images/company.png'
import dash from '../images/dashboard.png'
import findJobs from '../images/findJobs.png'
import help from '../images/help.png'
import logo from '../images/logoooo.png'
import mess from '../images/mess.png'
import myProf from '../images/myProfile.png'
import settings from '../images/settings.png'
import jake from '../images/Avatar.png'

const Sidebar: React.FC = () => {
  return (
    <aside className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
      <div className="flex overflow-hidden flex-col justify-between py-8 mx-auto w-full shadow-sm bg-slate-50">
        <div className="flex flex-col w-full max-w-[272px]">
          <div className="flex gap-2 items-center self-center pr-16 text-2xl font-bold tracking-tight text-gray-800 whitespace-nowrap max-md:pr-5">
            <Image loading="lazy" src={logo} alt=''/>
            <div className="self-stretch my-auto">Pharmalinkin</div>
          </div>
          <nav className="flex flex-col justify-center mt-8 w-full">
            <ul className="flex flex-col w-full leading-relaxed">
            <li className="flex gap-4 items-center px-8 py-3 w-full whitespace-nowrap max-md:px-5">
              <div className="flex gap-4 items-start self-stretch my-auto text-base font-medium text-slate-500">

                <Image loading="lazy" src={dash} alt=''/>
                <div className="flex-1 shrink self-stretch my-auto basis-0">Dashboard</div>
                </div>
              </li>
              <li className="flex gap-4 items-center px-8 py-3 w-full whitespace-nowrap max-md:px-5">
                <div className="flex gap-4 items-start self-stretch my-auto text-base font-medium text-slate-500">
                <Image loading="lazy" src={mess} alt=''/>
                <div className="w-32">Messages</div>
                </div>
                <div className="flex flex-col self-stretch my-auto w-6 text-sm font-semibold text-white">
                  <div className="px-0.5 w-6 h-6 bg-sky-600 rounded-full">1</div>
                </div>
              </li>
              {/* {['My Applications', 'Find Jobs', 'Browse Companies', 'My Public Profile'].map((item, index) => (
                <li key={index} className="flex gap-4 items-center py-3 pr-4 pl-8 w-full text-base font-medium text-slate-500 max-md:pl-5">
            <Image loading="lazy" src={logo} alt=''/>
            <div className="flex-1 shrink self-stretch my-auto basis-0">{item}</div>
                </li>
              ))} */}
              <li className="flex gap-3 justify-center items-center w-full text-base font-medium text-sky-600 whitespace-nowrap max-w-[256px]">
                <div className="flex shrink-0 self-stretch my-auto w-1 h-8 bg-sky-600" />
                <div className="flex flex-1 shrink gap-4 items-center self-stretch px-4 py-3 my-auto bg-violet-100 basis-0">
                <Image loading="lazy" src={App} alt=''/>
                <div className="flex-1 shrink self-stretch my-auto basis-0">My Applications</div>
                </div>
              </li>
              <li className="flex gap-4 items-center px-8 py-3 w-full whitespace-nowrap max-md:px-5">
              <div className="flex gap-4 items-start self-stretch my-auto text-base font-medium text-slate-500">

                <Image loading="lazy" src={findJobs} alt=''/>
                <div className="flex-1 shrink self-stretch my-auto basis-0">Find Jobs</div>
                </div>
              </li>
              <li className="flex gap-4 items-center px-8 py-3 w-full whitespace-nowrap max-md:px-5">
              <div className="flex gap-4 items-start self-stretch my-auto text-base font-medium text-slate-500">

                <Image loading="lazy" src={comp} alt=''/>
                <div className="flex-1 shrink self-stretch my-auto basis-0">Browse Companies</div>
                </div>
              </li>
              <li className="flex gap-4 items-center px-8 py-3 w-full whitespace-nowrap max-md:px-5">
              <div className="flex gap-4 items-start self-stretch my-auto text-base font-medium text-slate-500">

                <Image loading="lazy" src={myProf} alt=''/>
                <div className="flex-1 shrink self-stretch my-auto basis-0">My Public Profile</div>
                </div>
              </li>
              

            </ul>
          </nav >
          <div className="flex mt-8 w-full bg-indigo-200 min-h-[1px]" />
          <div className="flex flex-col mt-8 w-full">
            <div className="flex gap-2.5 items-start self-start pl-8 text-sm font-semibold tracking-wide leading-6 text-gray-800 whitespace-nowrap max-md:pl-5">
              <div className="opacity-50">SETTINGS</div>
              
              
            </div>
            <nav className="">
              <ul className="flex flex-col mt-6 w-full text-base font-medium leading-relaxed text-slate-500">
              <li className="flex gap-4 items-center py-3 pr-4 pl-8 w-full max-md:pl-5">
              <div className="flex gap-4 items-start self-stretch my-auto text-base font-medium text-slate-500">

                <Image loading="lazy" src={settings} alt=''/>
                <div className="flex-1 shrink self-stretch my-auto basis-0">Settings</div>
                </div>
              </li>
              <li className="flex gap-4 items-center py-3 pr-4 pl-8 w-full max-md:pl-5">
              <div className="flex gap-4 items-start self-stretch my-auto text-base font-medium text-slate-500">

                <Image loading="lazy" src={help} alt=''/>
                <div className="flex-1 shrink self-stretch my-auto basis-0">Help Center</div>
                </div>
              </li>
              </ul>
              </nav>
            
          </div>
        </div>
        <div className="flex gap-4 items-center gap-4 px-8 pt-6 mt-66 mb-0 max-w-full text-sm leading-relaxed text-gray-800 whitespace-nowrap w-[272px] max-md:px-5 max-md:mt-10">
  <Image loading="lazy" src={jake} alt='' className="w-12 h-12 mt-14 object-cover rounded-full" />
  <div className="flex flex-col mt-14">
    <div className="text-base font-medium shrink self-stretch my-auto basis-0">Jake Gyll</div>
    <div className="text-sm opacity-50 shrink self-stretch my-auto basis-0">jakegyll@email.com</div>
</div>


        </div>
      </div>
    </aside>
  );
};

export default Sidebar;