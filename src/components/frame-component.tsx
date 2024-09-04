import type { NextPage } from "next";
import Image from "next/image";
import SearchBar from "./search-bar";

import title from '../assets/Title.png'
export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1335px] flex flex-row items-start justify-start py-0 pl-5 pr-0 box-border gap-[58px] shrink-0 max-w-full text-left text-53xl text-neutrals-100 font-body-normal-regular mq800:gap-[29px] mq1350:flex-wrap mq1350:justify-center ${className}`}
    >
      <div className="w-[629px] flex flex-col items-start justify-start pt-[73px] px-0 pb-0 box-border min-w-[629px] max-w-full shrink-0 mq800:pt-[47px] mq800:box-border mq800:min-w-full mq1350:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[23px] shrink-0 max-w-full z-[1]">
          <div className="w-[553px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-[13px] max-w-full font-heading-h2">
            {/* <h1 className="m-0 self-stretch relative text-inherit leading-[110%] font-semibold font-[inherit] inline-block min-h-[237px] mq450:text-24xl mq450:leading-[48px] mq800:text-39xl mq800:leading-[63px]">
              <span>{`Discover more than `}</span>
              <span className="text-accents-blue">5000+ Jobs</span>
            </h1> */}
            <Image
              className="w-[455px] relative max-h-full max-w-full"
              loading="lazy"
              alt=""
              src={title}
            />
          </div>
          <div className="w-[441px] relative text-l leading-[160%] text-[#515B6F] inline-block max-w-full box-border pr-5 mq450:text-base mq450:leading-[26px]">
  Great platform for the job seeker that searching for new career
  heights and passionate about startups.
</div>

          <div className="w-[852px] flex flex-col items-start justify-start gap-4 max-w-[136%] shrink-0 text-base text-gray-100">
            <SearchBar />
            <div className="relative leading-[26px] text-[#202430] text-sm inline-block max-w-full">
              <span>{`Popular : `}</span>
              <span className="text-sm text-[#202430]">
                UI Designer, UX Researcher, Android, Admin
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1800px] w-[600px] relative min-w-[600px] shrink-0 max-w-full z-[1] mq1125:min-w-[600px] mq1350:flex-1 ml-auto mr-4">
  {/* <Image
    className="absolute top-[0px] left-[0px] w-[1400px] h-[960px] object-cover"
    alt=""
    src={pattern}
  /> */}
  {/* <Image
    className="absolute top-[350px] left-[50px] w-[600px] h-[400px] object-contain z-[1]"
    alt=""
    src={pic1x}
  /> */}
</div>

    </div>
  );
};

export default FrameComponent;