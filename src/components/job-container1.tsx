import type { NextPage } from "next";
import React, { useMemo } from "react";
import "../app/globals.css";

export type JobContainer1Type = {
  className?: string;
  appStore?: string;
  leadProductDesigner?: string;
  icon?: string;
  arrowUpRight?: string;

  /** Style props */
  propWidth?: string | number;
  propDisplay?: string;
  propMinWidth?: string | number;
  propWidth1?: string | number;
  propDisplay1?: string;
  propMinWidth1?: string | number;
  propAlignSelf?: string;
  propWidth2?: string | number;
  propFlex?: string | number;
};

const JobContainer1: NextPage<JobContainer1Type> = ({
  className = "",
  appStore,
  leadProductDesigner,
  icon,
  arrowUpRight,
  propWidth,
  propDisplay,
  propMinWidth,
  propWidth1,
  propDisplay1,
  propMinWidth1,
  propAlignSelf,
  propWidth2,
  propFlex,
}) => {
  const frameDivStyle: React.CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const applyBeforeStyle: React.CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      width: propWidth1,
    };
  }, [propDisplay, propMinWidth, propWidth1]);

  const dec2023Style: React.CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
      alignSelf: propAlignSelf,
    };
  }, [propDisplay1, propMinWidth1, propAlignSelf]);

  const locationCardStyle: React.CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const londonUnitedKingdomStyle: React.CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={`w-[496px] bg-white shrink-0 flex flex-col items-start justify-start py-8 pl-8 pr-[31px] box-border gap-5 max-w-full text-left text-xs text-cornflowerblue-200 font-bai-jamjuree ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full shrink-0">
        <div className="flex flex-row items-start justify-start max-w-full mq450:gap-5">
          <div className="h-12 w-[414px] flex flex-row items-start justify-between max-w-full gap-5">
            <div
              className="flex flex-col items-start justify-start"
              style={frameDivStyle}
            >
              <div
                className="relative leading-[16px] uppercase font-medium inline-block min-w-[86px]"
                style={applyBeforeStyle}
              >
                Apply before
              </div>
              <div
                className="relative text-base leading-[32px] uppercase font-medium text-midnightblue-200 inline-block min-w-[92px]"
                style={dec2023Style}
              >
                8 Dec, 2023
              </div>
            </div>
            <div className="h-[49px] w-px relative border-lavender-200 border-r-[1px] border-solid box-border" />
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[16px] uppercase font-medium inline-block min-w-[57px]">
                Job type
              </div>
              <div className="relative text-base leading-[32px] uppercase font-medium text-midnightblue-200 inline-block min-w-[81px]">
                Full time
              </div>
            </div>
            <div className="h-[49px] w-px relative border-lavender-200 border-r-[1px] border-solid box-border" />
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[16px] uppercase font-medium inline-block min-w-[46px]">
                Salary
              </div>
              <div className="relative text-base leading-[32px] uppercase font-medium text-midnightblue-200 inline-block min-w-[81px]">
                $10k-$15k
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full text-5xl text-midnightblue-300">
          <div className="flex flex-row items-center justify-start gap-4 max-w-full mq450:flex-wrap">
            <img
              className="h-12 w-12 relative object-cover"
              loading="lazy"
              alt=""
              src={appStore}
            />
            <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[26px]">
              {leadProductDesigner}
            </h3>
          </div>
          <div className="self-stretch relative text-base leading-[24px] text-darkslateblue">
            Join our team as an Email Marketing Specialist and lead our digital
            outreach efforts.
          </div>
        </div>
      </div>
      <div className="self-stretch h-px relative border-lavender-200 border-t-[1px] border-solid box-border" />
      <div className="self-stretch flex flex-row items-center justify-between gap-5 text-base text-darkslateblue mq800:flex-wrap">
        <div
          className="flex flex-row items-center justify-start gap-2.5"
          style={locationCardStyle}
        >
          <img className="h-6 w-6 relative" alt="" src={icon} />
          <div
            className="relative leading-[32px]"
            style={londonUnitedKingdomStyle}
          >
            London, United Kingdom
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
    </div>
  );
};

export default JobContainer1;
