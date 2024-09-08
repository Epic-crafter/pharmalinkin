import type { NextPage } from "next";
import Button from "./button";
import search from '../assets/search.png'
import location from '../assets/location.png'
import arrow from '../assets/arrow.png'
import Image from "next/image"
export type SearchBarType = {
  className?: string;
};

const SearchBar: NextPage<SearchBarType> = ({ className = "" }) => {
  return (
    <form
      className={`m-0 self-stretch shadow-[0px_79px_128px_rgba(192,_192,_192,_0.09),_0px_28.8px_46.72px_rgba(192,_192,_192,_0.06),_0px_14px_22.68px_rgba(192,_192,_192,_0.05),_0px_6.9px_11.12px_rgba(192,_192,_192,_0.04),_0px_2.7px_4.4px_rgba(192,_192,_192,_0.03)] bg-color-white flex flex-row items-start justify-start p-4 [row-gap:20px] mq800:flex-wrap ${className}`}
    >
      <div className="flex-[0.9447] flex flex-row items-start justify-start py-0 px-4 box-border gap-4 min-w-[198px] mq450:flex-1">
        <div className="flex flex-col items-start justify-start pt-[16.5px] px-0 pb-0">
          <Image className="w-6 h-6 relative" alt="" src={search} />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 gap-2.5">
          <input
            className="w-[156px] [border:none] [outline:none] font-body-normal-regular text-base bg-[transparent] h-[26px] relative leading-[160%] text-lightslategray text-left inline-block p-0"
            placeholder="Job title or keyword"
            type="text"
          />
          <div className="self-stretch h-px relative bg-neutrals-20" />
        </div>
      </div>
      <div className="flex-1 flex flex-row items-start justify-start py-0 px-2 box-border gap-4 min-w-[198px]">
        <div className="flex flex-col items-start justify-start pt-[16.5px] px-0 pb-0">
          <Image
            className="w-6 h-6 relative"
            loading="lazy"
            alt=""
            src={location}
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-5 px-0 pb-0 gap-2.5">
          <div className="self-stretch flex flex-row items-start justify-between gap-5">
            <div className="relative text-base leading-[26px] font-body-normal-regular text-black text-left inline-block min-w-[111px]">
              Florence, Italy
            </div>
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <Image className="w-4 h-4 relative" alt="" src={arrow} />
            </div>
          </div>
          <div className="self-stretch h-px relative bg-neutrals-20" />
        </div>
      </div>
      <Button
        caption="Search my job"
        propBackgroundColor="#4640de"
        propBorderRadius="unset"
        propDisplay="unset"
        propMinWidth="unset"
        propColor="#fff"
      />
    </form>
  );
};

export default SearchBar;