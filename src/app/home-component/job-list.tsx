import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <Card
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
          <div className="relative leading-[26px]" style={parisFranceStyle}>
            {parisFrance}
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-2 text-sm text-accents-green mq450:flex-wrap">
          <Badge className="py-1.5 px-2.5">
              Full-Time
          </Badge>
          <Badge variant='outline' className="py-1.5 px-2.5">
              Marketing
          </Badge>
          <Badge className="py-1.5 px-2.5">
              Marketing
          </Badge>
        </div>
      </div>
    </Card>
  );
};

export default JobList;
