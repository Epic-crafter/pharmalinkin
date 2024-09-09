import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Label from "./label";

export type JobListType = {
  className?: string;
  companyLogo?: string;
  socialMediaAssistant?: string;
  nomad?: string;
  parisFrance?: string;
  caption?: string;
  propWidth?: string;
  propBorderRadius?: string;
  propBorder?: string;
  propGap?: string;
  propAlignSelf?: string;
  propFlex?: string;
  propPadding?: string;
  propBackgroundColor?: string;
  propHeight?: string;
  propWidth1?: string;
  propBackgroundColor1?: string;
  propColor?: string;
  propDisplay2?: string;
  propMinWidth3?: string;
  propAlignSelf1?: string;
  propFlex1?: string;
  propWidth2?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propDisplay1?: CSSProperties["display"];
  propMinWidth2?: CSSProperties["minWidth"];
};

const JobList: NextPage<JobListType> = ({
  className = "",
  companyLogo,
  socialMediaAssistant,
  nomad,
  parisFrance,
  propDisplay,
  propMinWidth,
  propMinWidth1,
  propDisplay1,
  propMinWidth2,
  caption,
  propWidth,
  propBorderRadius,
  propBorder,
  propGap,
  propAlignSelf,
  propFlex,
  propPadding,
  propBackgroundColor,
  propHeight,
  propWidth1,
  propBackgroundColor1,
  propColor,
  propDisplay2,
  propMinWidth3,
  propAlignSelf1,
  propFlex1,
  propWidth2,
}) => {
  const socialMediaAssistantStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const nomadStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const parisFranceStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth2,
    };
  }, [propDisplay1, propMinWidth2]);

  return (
    <div
      className={`self-stretch bg-color-white flex flex-row items-start justify-start py-6 px-10 gap-6 text-left text-xl text-neutrals-100 font-body-normal-regular mq800:flex-wrap ${className}`}
    >
      <img
        className="h-16 w-16 relative object-cover"
        alt=""
        src={companyLogo}
      />
      <div className="w-[268px] flex flex-col items-start justify-start gap-2">
        <div
          className="relative leading-[120%] font-semibold inline-block min-w-[121px] mq450:text-base mq450:leading-[19px]"
          style={socialMediaAssistantStyle}
        >
          {socialMediaAssistant}
        </div>
        <div className="flex flex-row items-start justify-start py-[0.5px] px-0 gap-2 text-base text-neutrals-80">
          <div
            className="relative leading-[26px] inline-block min-w-[67px]"
            style={nomadStyle}
          >
            {nomad}
          </div>
          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <div className="w-1 h-1 relative rounded-[50%] bg-neutrals-80" />
          </div>
          <div className="relative leading-[26px]" style={parisFranceStyle}>
            {parisFrance}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-2 text-sm text-accents-green mq450:flex-wrap">
          <div className="rounded-61xl bg-mediumaquamarine flex flex-row items-start justify-start py-1.5 px-2.5">
            <div className="relative leading-[160%] font-semibold inline-block min-w-[63px]">
              Full-Time
            </div>
          </div>
          <div className="h-[34px] w-px relative bg-neutrals-20 mq450:w-full mq450:h-px" />
          <button className="cursor-pointer border-accents-yellow border-[1px] border-solid py-1 px-[9px] bg-[transparent] flex-1 rounded-61xl box-border flex flex-row items-start justify-start gap-2 min-w-[60px]">
            <div className="h-3 w-3 relative rounded-[50%] bg-accents-yellow hidden" />
            <div className="relative text-sm leading-[160%] font-semibold font-body-normal-regular text-accents-yellow text-left inline-block min-w-[72px]">
              Marketing
            </div>
          </button>
          <Label
            caption={caption}
            propWidth={propWidth}
            propBorderRadius={propBorderRadius}
            propBorder={propBorder}
            propGap={propGap}
            propAlignSelf={propAlignSelf}
            propFlex={propFlex}
            propPadding={propPadding}
            propBackgroundColor={propBackgroundColor}
            propHeight={propHeight}
            propWidth1={propWidth1}
            propBackgroundColor1={propBackgroundColor1}
            propColor={propColor}
            propDisplay={propDisplay2}
            propMinWidth={propMinWidth3}
            propAlignSelf1={propAlignSelf1}
            propFlex1={propFlex1}
            propWidth2={propWidth2}
          />
        </div>
      </div>
    </div>
  );
};

export default JobList;