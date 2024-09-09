import type { NextPage } from "next";
import Tag from "./tag";
import r from '../../assets/r.png';
import dr from '../../assets/dr.png';
import pilch from '../../assets/pilch.png';
import design from '../../assets/designn.png';
import Image from 'next/image'
import Label from "./label";

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
          <Image
            className="h-12 w-12 relative object-cover"
            loading="lazy"
            alt=""
            src={r}
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
        <Label
            caption="Marketing"
            propWidth="unset"
            propBorderRadius="80px"
            propBorder="unset"
            propGap="8px"
            propAlignSelf="unset"
            propFlex="unset"
            propPadding="8px 16px"
            propBackgroundColor="rgba(235,133,51,0.1)"
            propHeight="12px"
            propWidth1="12px"
            propBackgroundColor1="#EB8533"
            propColor="#EB8533"
            propDisplay="inline-block"
            propMinWidth="82px"
            propAlignSelf1="unset"
            propFlex1="unset"
            propWidth2="unset"
          />
        <Label
            caption="Design"
            propWidth="unset"
            propBorderRadius="80px"
            propBorder="unset"
            propGap="8px"
            propAlignSelf="unset"
            propFlex="unset"
            propPadding="8px 16px"
            propBackgroundColor="rgba(86,205,173,0.1)"
            propHeight="12px"
            propWidth1="12px"
            propBackgroundColor1="#56CDAD"
            propColor="#56CDAD"
            propDisplay="inline-block"
            propMinWidth="82px"
            propAlignSelf1="unset"
            propFlex1="unset"
            propWidth2="unset"
          />
        </div>
      </div>
      <div className="flex-1 bg-color-white border-neutrals-20 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-4 min-w-[244px] max-w-[274px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          <Image
            className="h-12 w-12 relative"
            loading="lazy"
            alt=""
            src={dr}
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
        <Label
            caption="Design"
            propWidth="unset"
            propBorderRadius="80px"
            propBorder="unset"
            propGap="8px"
            propAlignSelf="unset"
            propFlex="unset"
            propPadding="8px 16px"
            propBackgroundColor="rgba(86,205,173,0.1)"
            propHeight="12px"
            propWidth1="12px"
            propBackgroundColor1="#56CDAD"
            propColor="#56CDAD"
            propDisplay="inline-block"
            propMinWidth="82px"
            propAlignSelf1="unset"
            propFlex1="unset"
            propWidth2="unset"
          />
        <Label
            caption="Buisness"
            propWidth="unset"
            propBorderRadius="80px"
            propBorder="unset"
            propGap="8px"
            propAlignSelf="unset"
            propFlex="unset"
            propPadding="8px 16px"
            propBackgroundColor="rgba(70,64,222,0.1)"
            propHeight="12px"
            propWidth1="12px"
            propBackgroundColor1="#4640DE"
            propColor="#4640DE"
            propDisplay="inline-block"
            propMinWidth="82px"
            propAlignSelf1="unset"
            propFlex1="unset"
            propWidth2="unset"
          />
        </div>
      </div>
      <div className="flex-1 bg-color-white border-neutrals-20 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-4 min-w-[244px] max-w-[274px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          <Image
            className="h-12 w-12 relative object-cover"
            loading="lazy"
            alt=""
            src={pilch}
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
        <Label
            caption="Marketing"
            propWidth="unset"
            propBorderRadius="80px"
            propBorder="unset"
            propGap="8px"
            propAlignSelf="unset"
            propFlex="unset"
            propPadding="8px 16px"
            propBackgroundColor="rgba(235,133,51,0.1)"
            propHeight="12px"
            propWidth1="12px"
            propBackgroundColor1="#EB8533"
            propColor="#EB8533"
            propDisplay="inline-flex"
            propMinWidth="82px"
            propAlignSelf1="unset"
            propFlex1="unset"
            propWidth2="unset"
            
          />
      </div>
      <div className="flex-1 bg-color-white border-neutrals-20 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-4 min-w-[244px] max-w-[274px]">
        <div className="self-stretch flex flex-row items-start justify-between gap-5">
          <Image
            className="h-12 w-12 relative object-cover"
            loading="lazy"
            alt=""
            src={design}
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
          <Label
            caption="Design"
            propWidth="unset"
            propBorderRadius="80px"
            propBorder="unset"
            propGap="8px"
            propAlignSelf="unset"
            propFlex="unset"
            propPadding="8px 16px"
            propBackgroundColor="rgba(86,205,173,0.1)"
            propHeight="12px"
            propWidth1="12px"
            propBackgroundColor1="#56CDAD"
            propColor="#56CDAD"
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

export default Row;