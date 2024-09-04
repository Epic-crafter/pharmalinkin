import type { NextPage } from "next";
import Tag from "./tag";

export type RowType = {
  className?: string;
};

const Row: NextPage<RowType> = ({ className = "" }) => {
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
            src="/company-logo-5@2x.png"
          />
          <Tag />
        </div>
        <div className="flex flex-col items-start justify-start gap-0.5">
          <div className="relative leading-[29px] font-semibold">
            Email Marketing
          </div>
          <div className="flex flex-row items-start justify-start gap-2 text-base text-neutrals-80">
            <div className="relative leading-[26px] inline-block min-w-[59px]">
              Revolut
            </div>
            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
              <div className="w-1 h-1 relative rounded-[50%] bg-dimgray-300" />
            </div>
            <div className="relative leading-[26px] inline-block min-w-[105px]">
              Madrid, Spain
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-base leading-[160%] font-body-small-regular text-neutrals-60">
          Revolut is looking for Email Marketing to help team ma ...
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
          <img
            className="h-12 w-12 relative"
            loading="lazy"
            alt=""
            src="/company-logo-6.svg"
          />
          <Tag />
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-0.5">
          <div className="relative leading-[29px] font-semibold">
            Brand Designer
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-2 text-base text-neutrals-80">
            <div className="relative leading-[26px] inline-block min-w-[66px]">
              Dropbox
            </div>
            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
              <div className="w-1 h-1 relative rounded-[50%] bg-dimgray-300" />
            </div>
            <div className="relative leading-[26px]">San Fransisco, US</div>
          </div>
        </div>
        <div className="self-stretch relative text-base leading-[160%] font-body-small-regular text-neutrals-60">
          Dropbox is looking for Brand Designer to help the team t ...
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
            src="/company-logo-7@2x.png"
          />
          <Tag />
        </div>
        <div className="flex flex-col items-start justify-start gap-0.5">
          <div className="relative leading-[29px] font-semibold">
            Email Marketing
          </div>
          <div className="flex flex-row items-start justify-start gap-2 text-base text-neutrals-80">
            <div className="relative leading-[26px] inline-block min-w-[40px]">
              Pitch
            </div>
            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
              <div className="w-1 h-1 relative rounded-[50%] bg-dimgray-300" />
            </div>
            <div className="relative leading-[26px] inline-block min-w-[123px]">
              Berlin, Germany
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-base leading-[160%] font-body-small-regular text-neutrals-60">
          Pitch is looking for Customer Manager to join marketing t ...
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-2">
          <button className="cursor-pointer [border:none] py-1 px-4 bg-chocolate-200 rounded-61xl flex flex-row items-start justify-start hover:bg-chocolate-100">
            <div className="relative text-sm leading-[160%] font-semibold font-body-normal-regular text-accents-yellow text-left inline-block min-w-[72px]">
              Marketing
            </div>
          </button>
          <div className="rounded-61xl bg-mediumaquamarine hidden flex-row items-center justify-center py-1 px-4">
            <div className="relative text-sm leading-[160%] font-semibold font-body-normal-regular text-accents-green text-left">
              Tech
            </div>
          </div>
        </button>
      </div>
      <div className="flex-1 bg-color-white border-neutrals-20 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-4 min-w-[244px] max-w-[274px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          <img
            className="h-12 w-12 relative object-cover"
            loading="lazy"
            alt=""
            src="/company-logo-8@2x.png"
          />
          <Tag />
        </div>
        <div className="flex flex-col items-start justify-start gap-0.5">
          <div className="relative leading-[29px] font-semibold">
            Visual Designer
          </div>
          <div className="flex flex-row items-start justify-start gap-2 text-base text-neutrals-80">
            <div className="relative leading-[26px] inline-block min-w-[60px]">
              Blinklist
            </div>
            <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
              <div className="w-1 h-1 relative rounded-[50%] bg-dimgray-300" />
            </div>
            <div className="relative leading-[26px] inline-block min-w-[118px]">
              Granada, Spain
            </div>
          </div>
        </div>
        <div className="self-stretch relative text-base leading-[160%] font-body-small-regular text-neutrals-60">
          Blinkist is looking for Visual Designer to help team desi ...
        </div>
        <div className="flex flex-row items-start justify-start gap-2 text-sm text-accents-yellow">
          <div className="rounded-61xl bg-chocolate-200 hidden flex-row items-center justify-center py-1 px-4">
            <div className="relative leading-[160%] font-semibold">
              Marketing
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-1 px-4 bg-mediumaquamarine rounded-61xl flex flex-row items-start justify-start hover:bg-seagreen">
            <div className="relative text-sm leading-[160%] font-semibold font-body-normal-regular text-accents-green text-left inline-block min-w-[48px]">
              Design
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Row;