import type { NextPage } from "next";
import Tag from "./tag";
import CompanyLogo from "./company-logo";
import Label from "./label";

export type Row1Type = {
  className?: string;
};

const Row1: NextPage<Row1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-8 text-left text-lg text-neutrals-100 font-body-normal-regular mq800:gap-4 ${className}`}
    >
      <div className="flex-1 bg-color-white border-neutrals-20 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-4 min-w-[244px] max-w-[274px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          <img
            className="h-12 w-12 relative object-cover"
            loading="lazy"
            alt=""
            src="/company-logo-9@2x.png"
          />
          <Tag />
        </div>
        <div className="flex flex-col items-start justify-start gap-0.5">
          <div className="relative leading-[29px] font-semibold">
            Product Designer
          </div>
          <div className="flex flex-row items-start justify-start gap-2 text-base text-neutrals-80">
            <div className="relative leading-[26px] inline-block min-w-[79px]">
              ClassPass
            </div>
            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
              <div className="w-1 h-1 relative rounded-[50%] bg-dimgray-300" />
            </div>
            <div className="relative leading-[26px] inline-block min-w-[123px]">
              Manchester, UK
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-base leading-[160%] font-body-small-regular text-neutrals-60">
          ClassPass is looking for Product Designer to help us...
        </div>
        <div className="flex flex-row items-start justify-start gap-2">
          <button className="cursor-pointer [border:none] py-1 px-4 bg-chocolate-200 rounded-61xl flex flex-row items-start justify-start hover:bg-chocolate-100">
            <div className="relative text-sm leading-[160%] font-semibold font-body-normal-regular text-accents-yellow text-left inline-block min-w-[72px]">
              Marketing
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-1 px-4 bg-mediumaquamarine rounded-61xl flex flex-row items-start justify-start hover:bg-seagreen">
            <div className="relative text-sm leading-[160%] font-semibold font-body-normal-regular text-accents-green text-left inline-block min-w-[48px]">
              Design
            </div>
          </button>
        </div>
      </div>
      <div className="flex-1 bg-color-white border-neutrals-20 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-4 min-w-[244px] max-w-[274px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          <CompanyLogo />
          <Tag />
        </div>
        <div className="flex flex-col items-start justify-start gap-0.5">
          <div className="relative leading-[29px] font-semibold inline-block min-w-[129px]">
            Lead Designer
          </div>
          <div className="flex flex-row items-start justify-start gap-2 text-base text-neutrals-80">
            <div className="relative leading-[26px] inline-block min-w-[48px]">
              Canva
            </div>
            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
              <div className="w-1 h-1 relative rounded-[50%] bg-dimgray-300" />
            </div>
            <div className="relative leading-[26px] inline-block min-w-[127px]">
              Ontario, Canada
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-base leading-[160%] font-body-small-regular text-neutrals-60">
          Canva is looking for Lead Engineer to help develop n ...
        </div>
        <div className="flex flex-row items-start justify-start gap-2">
          <button className="cursor-pointer [border:none] py-1 px-4 bg-mediumaquamarine rounded-61xl flex flex-row items-start justify-start hover:bg-seagreen">
            <div className="relative text-sm leading-[160%] font-semibold font-body-normal-regular text-accents-green text-left inline-block min-w-[48px]">
              Design
            </div>
          </button>
          <button className="cursor-pointer [border:none] py-1 px-4 bg-blueviolet rounded-61xl flex flex-row items-start justify-start gap-2">
            <div className="h-3 w-3 relative rounded-[50%] bg-brands-primary hidden" />
            <div className="relative text-sm leading-[160%] font-semibold font-body-normal-regular text-brands-primary text-left inline-block min-w-[63px]">
              Business
            </div>
          </button>
        </div>
      </div>
      <div className="flex-1 bg-color-white border-neutrals-20 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-4 min-w-[244px] max-w-[274px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          <img
            className="h-12 w-12 relative object-cover"
            loading="lazy"
            alt=""
            src="/company-logo-10@2x.png"
          />
          <Tag />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
          <div className="relative leading-[29px] font-semibold">
            Brand Strategist
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-2 text-base text-neutrals-80">
            <div className="relative leading-[26px] inline-block min-w-[70px]">
              GoDaddy
            </div>
            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
              <div className="w-1 h-1 relative rounded-[50%] bg-dimgray-300" />
            </div>
            <div className="relative leading-[26px]">Marseille, France</div>
          </div>
        </div>
        <div className="self-stretch relative text-base leading-[160%] font-body-small-regular text-neutrals-60">
          GoDaddy is looking for Brand Strategist to join the team...
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-2">
          <div className="rounded-61xl bg-chocolate-200 flex flex-row items-start justify-start py-1 px-4">
            <div className="relative text-sm leading-[160%] font-semibold font-body-normal-regular text-accents-yellow text-left inline-block min-w-[72px]">
              Marketing
            </div>
          </div>
          <div className="rounded-61xl bg-mediumaquamarine hidden flex-row items-center justify-center py-1 px-4">
            <div className="relative text-sm leading-[160%] font-semibold font-body-normal-regular text-accents-green text-left">
              Tech
            </div>
          </div>
        </button>
      </div>
      <div className="flex-1 bg-color-white border-neutrals-20 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-4 min-w-[205px] max-w-[274px] text-base text-brands-primary">
        <div className="self-stretch flex flex-row items-start justify-between gap-5 text-center">
          <img
            className="h-12 w-12 relative object-cover"
            loading="lazy"
            alt=""
            src="/company-logo-11@2x.png"
          />
          <Tag />
        </div>
        <div className="flex flex-col items-start justify-start gap-0.5 text-lg text-neutrals-100">
          <div className="relative leading-[29px] font-semibold inline-block min-w-[114px]">
            Data Analyst
          </div>
          <div className="flex flex-row items-start justify-start gap-2 text-base text-neutrals-80">
            <div className="relative leading-[26px] inline-block min-w-[55px]">
              Twitter
            </div>
            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
              <div className="w-1 h-1 relative rounded-[50%] bg-dimgray-300" />
            </div>
            <div className="relative leading-[26px] inline-block min-w-[106px]">
              San Diego, US
            </div>
          </div>
        </div>
        <div className="self-stretch relative leading-[160%] font-body-small-regular text-neutrals-60">
          Twitter is looking for Data Analyst to help team desi ...
        </div>
        <div className="flex flex-row items-start justify-start gap-2 text-sm text-accents-yellow">
          <div className="h-[30px] rounded-61xl bg-chocolate-200 hidden flex-row items-center justify-center py-1 px-4 box-border">
            <div className="self-stretch relative leading-[160%] font-semibold">
              Marketing
            </div>
          </div>
          <Label
            caption="Technology"
            propWidth="unset"
            propBorderRadius="80px"
            propBorder="unset"
            propGap="8px"
            propAlignSelf="unset"
            propFlex="unset"
            propPadding="8px 16px"
            propBackgroundColor="rgba(255, 101, 80, 0.1)"
            propHeight="12px"
            propWidth1="12px"
            propBackgroundColor1="#ff6550"
            propColor="#ff6550"
            propDisplay="inline-block"
            propMinWidth="82px"
            propAlignSelf1="unset"
            propFlex1="unset"
            propWidth2="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default Row1;