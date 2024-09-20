import type { NextPage } from "next";
import Image from 'next/image'
import rectangle from '../assets/Rectangle 2742.png'
import startPosting from '../assets/Start posting jobs today.png'
import dash from '../assets/3.1 Dashboard Company.png'

import {Button} from '../../components/ui/button'
export type LandingPageCTADesktopType = {
  className?: string;
};

const LandingPageCTADesktop: NextPage<LandingPageCTADesktopType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-color-white overflow-hidden flex flex-row items-start justify-center py-[72px] px-5 box-border max-w-full text-left text-base text-color-white font-body-normal-regular mq800:pt-[47px] mq800:pb-[47px] mq800:box-border ${className}`}
    >
      <div className="w-[1192px] flex flex-row items-start justify-start pt-[68px] px-[70px] pb-0 box-border relative gap-[124px] max-w-full mq450:gap-[15px] mq450:pt-11 mq450:box-border mq800:gap-[31px] mq1125:flex-wrap mq1350:gap-[62px] mq1350:pl-[35px] mq1350:pr-[35px] mq1350:box-border">
        <Image
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src={rectangle}
        />
        <div className="w-[364px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border min-w-[364px] max-w-full mq800:min-w-full mq1125:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-6 z-[1]">
            <Image
            alt=""
            src={startPosting}/>
            <div className="self-stretch relative leading-[26px] font-small text-[#ffffff]">
              Start posting jobs for only $10.
            </div>
            <Button className="text-[#4640de] bg-[#ffffff]">
              Sign Up For Free
            </Button>
          </div>
        </div>
        <div className="h-[346px] flex-1 bg-color-white overflow-hidden flex flex-row items-start justify-start min-w-[367px] max-w-full z-[1] text-3xs-4 text-color-black font-red-hat-display mq450:h-auto mq800:min-w-full">
          
          <Image
          alt=""
          src={dash}/>
        </div>
      </div>
    </section>
  );
};

export default LandingPageCTADesktop;