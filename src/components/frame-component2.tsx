import type { NextPage } from "next";
import JobListings from "./job-listings";
import "../app/globals.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[17px] box-border max-w-full text-center text-37xl text-midnightblue-300 font-bai-jamjuree ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start py-20 px-[108px] box-border gap-12 max-w-full mq800:gap-6 mq800:pl-[54px] mq800:pr-[54px] mq800:box-border mq1125:pt-[52px] mq1125:pb-[52px] mq1125:box-border mq450:py-[34px] mq450:px-5 mq450:box-border">
        <div className="w-[546px] flex flex-row items-center justify-start flex-wrap content-center gap-14 max-w-full mq800:gap-7">
          <div className="flex-1 flex flex-col items-end justify-start gap-2 min-w-[252px] max-w-full">
            <h1 className="m-0 self-stretch h-12 relative text-inherit leading-[32px] font-semibold font-[inherit] flex items-center shrink-0 mq800:text-26xl mq800:leading-[26px] mq450:text-15xl mq450:leading-[19px]">
              <span>
                <span>{`Featured `}</span>
                <span className="text-mediumslateblue-200">Jobs</span>
              </span>
            </h1>
            <img
              className="w-[123px] h-2 relative"
              alt=""
              src="/featured-icon.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-start gap-2 text-left text-base">
            <div className="h-6 relative [text-decoration:underline] leading-[120%] font-medium flex items-center min-w-[78px]">
              Browse All
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/arrowupright.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-x-6 gap-y-[22.7px] min-h-[632px] text-left text-base text-mediumslateblue-200">
          <JobListings
            appStore="/app-store@2x.png"
            emailMarketing="Email Marketing"
            arrowUpRight="/arrowupright-1.svg"
          />
          <JobListings
            appStore="/spotify@2x.png"
            emailMarketing="Visual Designer"
            arrowUpRight="/arrowupright-2.svg"
            propWidth="193px"
            propWidth1="48px"
            propTextAlign="left"
          />
          <JobListings
            appStore="/wordpress@2x.png"
            emailMarketing="Data Analyst"
            arrowUpRight="/arrowupright-3.svg"
            propWidth="193px"
            propWidth1="48px"
            propTextAlign="left"
          />
          <JobListings
            appStore="/slack@2x.png"
            emailMarketing="Content Writer"
            arrowUpRight="/arrowupright-4.svg"
            propWidth="193px"
            propWidth1="48px"
            propTextAlign="left"
          />
          <JobListings
            appStore="/search-1@2x.png"
            emailMarketing="Product Designer"
            arrowUpRight="/arrowupright-5.svg"
            propWidth="193px"
            propWidth1="48px"
            propTextAlign="left"
          />
          <JobListings
            appStore="/telegram@2x.png"
            emailMarketing="PHP/JS Developer"
            arrowUpRight="/arrowupright-6.svg"
            propWidth="193px"
            propWidth1="48px"
            propTextAlign="left"
          />
          <JobListings
            appStore="/figma@2x.png"
            emailMarketing="Plugin Developer"
            arrowUpRight="/arrowupright-7.svg"
            propWidth="185px"
            propWidth1="40px"
            propTextAlign="left"
          />
          <JobListings
            appStore="/pinterest@2x.png"
            emailMarketing="Digital Marketer"
            arrowUpRight="/arrowupright-8.svg"
            propWidth="193px"
            propWidth1="48px"
            propTextAlign="left"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;