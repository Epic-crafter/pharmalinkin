import type { NextPage } from "next";
import { cn } from "@/lib/utils"; // Helper function from shadcn to combine class names
import Image from "next/image";
import insta from '../assets/insta.png';
import twitter from '../assets/Twitter.png';
import fb from '../assets/fb.png';
import link from '../assets/LinkedIn.png';
import dribble from '../assets/Dribbble.png'; 
import divider from '../assets/Divider.png';

export type DividerSocialType = {
  className?: string;
};

const DividerSocial: NextPage<DividerSocialType> = ({ className = "" }) => {
  return (
    <div
      className={cn(
        "w-[1192px] flex flex-col items-start justify-start gap-10 max-w-full text-left text-base text-color-white font-body-normal-regular mq800:gap-5",
        className
      )}
    >
      <Image
        className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-2px]"
        loading="lazy"
        alt="divider"
        src={divider}
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
          <Image
            className="h-8 w-8 relative min-h-[32px]"
            loading="lazy"
            alt="facebook"
            src={fb}
          />
          <Image
            className="h-8 w-8 relative min-h-[32px]"
            loading="lazy"
            alt="instagram"
            src={insta}
          />
          <Image
            className="h-8 w-8 relative min-h-[32px]"
            loading="lazy"
            alt="dribbble"
            src={dribble}
          />
          <Image
            className="h-8 w-8 relative min-h-[32px]"
            loading="lazy"
            alt="linkedin"
            src={link}
          />
          <Image
            className="h-8 w-8 relative min-h-[32px]"
            loading="lazy"
            alt="twitter"
            src={twitter}
          />
        </div>
      </div>
    </div>
  );
};

export default DividerSocial;
