import type { NextPage } from "next";
import Input1 from "./input1";
import Button from "./button";

export type FooterContentType = {
  className?: string;
};

const FooterContent: NextPage<FooterContentType> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start gap-[71px] max-w-full text-left text-lg text-color-white font-body-normal-regular mq800:gap-[18px] mq1350:gap-[35px] mq1350:flex-wrap ${className}`}
    >
      <div className="w-[393px] flex flex-col items-start justify-start py-0 pl-0 pr-[17px] box-border max-w-full text-5xl font-red-hat-display">
        <div className="self-stretch flex flex-col items-start justify-start gap-8 mq450:gap-4">
          <div className="flex flex-row items-start justify-start gap-2">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-8 h-8 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/frame-3-3.svg"
              />
            </div>
            <h3 className="m-0 relative text-inherit tracking-[-0.01em] leading-[150%] font-bold font-[inherit] inline-block min-w-[120px] mq450:text-lgi mq450:leading-[29px]">
              JobHuntly
            </h3>
          </div>
          <div className="self-stretch relative text-base leading-[160%] font-body-normal-regular text-neutrals-20">
            Great platform for the job seeker that passionate about startups.
            Find your dream job easier.
          </div>
        </div>
      </div>
      <div className="w-[295px] flex flex-row items-start justify-between gap-5">
        <div className="flex flex-col items-start justify-start gap-[18px]">
          <div className="flex flex-row items-start justify-start py-0 px-px">
            <div className="relative leading-[29px] font-semibold inline-block min-w-[55px]">
              About
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-4 text-base text-neutrals-20">
            <div className="relative leading-[26px] inline-block min-w-[89px]">
              Companies
            </div>
            <div className="relative leading-[26px] inline-block min-w-[54px]">
              Pricing
            </div>
            <div className="relative leading-[26px] inline-block min-w-[48px]">
              Terms
            </div>
            <div className="relative leading-[26px] inline-block min-w-[53px]">
              Advice
            </div>
            <div className="relative leading-[26px] inline-block min-w-[105px]">
              Privacy Policy
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-[18px]">
          <div className="relative leading-[29px] font-semibold inline-block min-w-[97px]">
            Resources
          </div>
          <div className="flex flex-col items-start justify-start gap-[23px] text-base text-neutrals-20">
            <div className="relative leading-[26px] inline-block min-w-[79px]">
              Help Docs
            </div>
            <div className="relative leading-[26px] inline-block min-w-[45px]">
              Guide
            </div>
            <div className="relative leading-[26px] inline-block min-w-[67px]">
              Updates
            </div>
            <div className="relative leading-[26px] inline-block min-w-[88px]">
              Contact Us
            </div>
          </div>
        </div>
      </div>
      <div className="w-[362px] flex flex-col items-start justify-start gap-10 max-w-full mq450:gap-5">
        <div className="w-[306px] flex flex-col items-start justify-start gap-[18px]">
          <div className="relative leading-[29px] font-semibold">
            Get job notifications
          </div>
          <div className="self-stretch relative text-base leading-[160%] text-neutrals-20">
            The latest job news, articles, sent to your inbox weekly.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start gap-2 max-w-full mq450:flex-wrap">
            <Input1 />
            <Button caption="Subscribe" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;