import type { NextPage } from "next";
import React, { useMemo } from "react";
import "../app/globals.css";

export type JobListingsType = {
  className?: string;
  appStore?: string;
  emailMarketing?: string;
  arrowUpRight?: string;

  /** Style props */
  propWidth?: string | number;
  propWidth1?: string | number;
  propTextAlign?: "left" | "right" | "center" | "justify" | "start" | "end";
};

const JobListings: NextPage<JobListingsType> = ({
  className = "",
  appStore,
  emailMarketing,
  arrowUpRight,
  propWidth,
  propWidth1,
  propTextAlign,
}) => {
  const listingItemsStyle = useMemo<React.CSSProperties>(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const appStoreIconStyle = useMemo<React.CSSProperties>(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const emailMarketingStyle = useMemo<React.CSSProperties>(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  return (
    <div
      className={`w-72 border-gainsboro-100 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[30px] px-[31px] gap-8 text-left text-base text-mediumslateblue-200 font-bai-jamjuree mq450:gap-4 ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-6">
        <div
          className="w-[193px] flex flex-row items-center justify-between gap-5"
          style={listingItemsStyle}
        >
          <img
            className="h-12 w-12 relative object-cover"
            loading="lazy"
            alt=""
            src={appStore}
            style={appStoreIconStyle}
          />
          <div className="h-[33px] w-px relative border-gainsboro-300 border-r-[1px] border-solid box-border" />
          <div className="relative leading-[32px] uppercase font-semibold inline-block min-w-[81px] shrink-0">
            Full Time
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-4 text-center text-5xl text-midnightblue-300">
          <h3
            className="m-0 relative text-inherit leading-[32px] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[26px]"
            style={emailMarketingStyle}
          >
            {emailMarketing}
          </h3>
          <div className="self-stretch h-16 relative text-base leading-[24px] text-darkslateblue text-left flex items-center shrink-0">
            Join our team as an Email Marketing Specialist and lead our digital
            outreach efforts.
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-2 text-midnightblue-200">
        <div className="relative [text-decoration:underline] leading-[24px] font-medium inline-block min-w-[94px]">
          More Details
        </div>
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0"
          alt=""
          src={arrowUpRight}
        />
      </div>
    </div>
  );
};

export default JobListings;
