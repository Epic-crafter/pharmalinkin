import type { NextPage } from "next";
import Tag from "./tag";
import CompanyLogo from "./company-logo";
import Label from "./label";
import product from '../../assets/product.png';
import canva from '../../assets/canva.png';
import strategy from '../../assets/strategy.png';
import analyst from '../../assets/analyst.png';
import Image from 'next/image';

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
          <Image
            className="h-12 w-12 relative object-cover"
            loading="lazy"
            alt=""
            src={product}
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
          ClassPass is looking for Product Designer to help us.
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
            src={strategy}
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
      </div>
      <div className="flex-1 bg-color-white border-neutrals-20 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-4 min-w-[205px] max-w-[274px] text-base text-brands-primary">
        <div className="self-stretch flex flex-row items-start justify-between gap-5 text-center">
          <Image
            className="h-12 w-12 relative object-cover"
            loading="lazy"
            alt=""
            src={analyst}
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