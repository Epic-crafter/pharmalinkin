import type { NextPage } from "next";

export type DividerSocialType = {
  className?: string;
};

const DividerSocial: NextPage<DividerSocialType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1192px] flex flex-col items-start justify-start gap-10 max-w-full text-left text-base text-color-white font-body-normal-regular mq800:gap-5 ${className}`}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-2px]"
        loading="lazy"
        alt=""
        src="/divider.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-between gap-5 mq800:flex-wrap">
        <div className="w-[295px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start opacity-[0.5]">
            <div className="relative leading-[26px] font-medium">
              2021 @ JobHuntly. All rights reserved.
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-6">
          <img
            className="h-8 w-8 relative min-h-[32px]"
            loading="lazy"
            alt=""
            src="/facebook.svg"
          />
          <img
            className="h-8 w-8 relative min-h-[32px]"
            loading="lazy"
            alt=""
            src="/instagram.svg"
          />
          <img
            className="h-8 w-8 relative min-h-[32px]"
            loading="lazy"
            alt=""
            src="/dribbble.svg"
          />
          <img
            className="h-8 w-8 relative min-h-[32px]"
            loading="lazy"
            alt=""
            src="/linkedin.svg"
          />
          <img
            className="h-8 w-8 relative min-h-[32px]"
            loading="lazy"
            alt=""
            src="/twitter.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default DividerSocial;