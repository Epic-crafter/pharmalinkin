import type { NextPage } from "next";
import Image from 'next/image';
import vodafone from '../assets/vodafone-2017-logo.png';
import tesla from '../assets/tesla-9 1.png';
import amd from '../assets/amd-logo-1.png';
import intel from '../assets/intel-3.png';
import talkit from '../assets/talkit 1.png';
import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
export type LandingPageCompanyDesktType = {
  className?: string;
};

const LandingPageCompanyDeskt: NextPage<LandingPageCompanyDesktType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-color-white overflow-hidden flex flex-col items-start justify-start py-12 pl-[124px] pr-[122px] gap-8 text-left text-lg text-gray-200 font-body-normal-regular mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-4 mq800:pl-[62px] mq800:pr-[61px] mq800:box-border ${className}`}
    >
      <div className="relative text-[#202430] leading-[29px]">Companies we helped grow</div>
      <div className="self-stretch flex flex-row items-start justify-between flex-wrap content-start gap-5">
        <Image
          className="h-10 w-[153.5px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={vodafone}
        />
        <Image
          className="h-8 w-[82.1px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={intel}
        />
        <Image
          className="h-7 w-[112.1px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={tesla}
        />
        <Image
        className="h-7 w-[116.5px] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={amd}
      />
      <Image
      className="h-8 w-[108.2px] relative overflow-hidden shrink-0"
      loading="lazy"
      alt=""
      src={talkit}
    />
        
        
      </div>
    </section>
  );
};

export default LandingPageCompanyDeskt;