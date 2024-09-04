import type { NextPage } from "next";
import JobCategory from "./job-category";
import Image from 'next/image'
import explore from '../assets/Explore by category.png'
import ryt from '../assets/ryt.png'
import bag from '../assets/bag.png'
import code from '../assets/code.png'
import finance from '../assets/finance.png'
import plane from '../assets/plane.png'
import ppl from '../assets/ppl.png'
import sales from '../assets/sales.png'
import tech from '../assets/tech.png'
import speaker from '../assets/speaker.png'


export type LandingPageCategoryDeskType = {
  className?: string;
};

const LandingPageCategoryDesk: NextPage<LandingPageCategoryDeskType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-color-white flex flex-col items-center justify-start pt-[72px] px-5 pb-0 box-border gap-12 max-w-full text-left text-29xl text-neutrals-100 font-heading-h2 mq800:gap-6 mq800:pt-[47px] mq800:box-border ${className}`}
    >
      <div className="w-[1192px] flex flex-row items-end justify-between max-w-full gap-5 mq800:flex-wrap">
        <Image alt="" src={explore}/>
        <div className="flex flex-row items-center justify-end gap-4 text-center text-base text-brands-primary font-body-normal-regular">
          <div className="relative leading-[26px] font-semibold inline-block min-w-[104px]">
            Show all jobs
          </div>
          <Image className="h-6 w-6 relative" alt="" src={ryt} />
        </div>
      </div>
      <div className="w-[1192px] flex flex-col items-start justify-start gap-8 max-w-full text-5xl mq800:gap-4">
        <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-8 mq800:gap-4">
          <JobCategory
            icon="/icon-4.svg"
            design="Design"
            jobsAvailable="235 jobs available"
            icon1="/icon-5.svg"
            propBackgroundColor="#fff"
            propBorder="1px solid #d6ddeb"
            propColor="#25324b"
            propColor1="#7c8493"
          />
          <JobCategory
            icon="/icon-6.svg"
            design="Sales"
            jobsAvailable="756 jobs available"
            icon1="/icon.svg"
            propBackgroundColor="#fff"
            propBorder="1px solid #d6ddeb"
            propColor="#25324b"
            propColor1="#7c8493"
          />
          <JobCategory
            icon="/icon-8.svg"
            design="Marketing"
            jobsAvailable="140 jobs available"
            icon1="/icon.svg"
            propBackgroundColor="#4640de"
            propBorder="unset"
            propColor="#fff"
            propColor1="#fff"
          />
          <JobCategory
            icon="/icon-10.svg"
            design="Finance"
            jobsAvailable="325 jobs available"
            icon1="/icon.svg"
            propBackgroundColor="#fff"
            propBorder="1px solid #d6ddeb"
            propColor="#25324b"
            propColor1="#7c8493"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-8 mq800:gap-4">
          <JobCategory
            icon="/icon-12.svg"
            design="Technology"
            jobsAvailable="436 jobs available"
            icon1="/icon-13.svg"
            propBackgroundColor="#fff"
            propBorder="1px solid #d6ddeb"
            propColor="#25324b"
            propColor1="#7c8493"
          />
          <JobCategory
            icon="/icon-14.svg"
            design="Engineering"
            jobsAvailable="542 jobs available"
            icon1="/icon-15.svg"
            propBackgroundColor="#fff"
            propBorder="1px solid #d6ddeb"
            propColor="#25324b"
            propColor1="#7c8493"
          />
          <JobCategory
            icon="/icon-16.svg"
            design="Business"
            jobsAvailable="211 jobs available"
            icon1="/icon-17.svg"
            propBackgroundColor="#fff"
            propBorder="1px solid #d6ddeb"
            propColor="#25324b"
            propColor1="#7c8493"
          />
          <JobCategory
            icon="/icon-18.svg"
            design="Human Resource"
            jobsAvailable="346 jobs available"
            icon1="/icon-19.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPageCategoryDesk;