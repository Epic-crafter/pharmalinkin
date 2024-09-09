import type { NextPage } from "next";
import Image from "next/image";
import JobCategory from "./job-category";
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
import next from '../assets/next.png'

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
        <Image alt="Explore by category" src={explore} />
        <div className="flex flex-row items-center justify-end gap-4 text-center text-base text-brands-primary font-body-normal-regular">
          <div className="relative leading-[26px] font-semibold inline-block min-w-[104px]">
            Show all jobs
          </div>
          <Image className="h-6 w-6 relative" alt="Arrow icon" src={ryt} />
        </div>
      </div>
      <div className="w-[1192px] flex flex-col items-start justify-start gap-8 max-w-full text-5xl mq800:gap-4">
        <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-8 mq800:gap-4">
          <JobCategory
            icon={plane}
            design="Design"
            jobsAvailable="235 jobs available"
            icon1={next}
            propBackgroundColor="#fff"
            propBorder="1px solid #d6ddeb"
            propColor="#25324b"
            propColor1="#7c8493"
          />
          <JobCategory
            icon={sales}
            design="Sales"
            jobsAvailable="756 jobs available"
            icon1={next}
            propBackgroundColor="#fff"
            propBorder="1px solid #d6ddeb"
            propColor="#25324b"
            propColor1="#7c8493"
          />
          <JobCategory
            icon={speaker}
            design="Marketing"
            jobsAvailable="140 jobs available"
            icon1={next}
            propBackgroundColor="#4640de"
            propBorder="unset"
            propColor="#fff"
            propColor1="#fff"
          />
          <JobCategory
            icon={finance}
            design="Finance"
            jobsAvailable="325 jobs available"
            icon1={next}
            propBackgroundColor="#fff"
            propBorder="1px solid #d6ddeb"
            propColor="#25324b"
            propColor1="#7c8493"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-8 mq800:gap-4">
          <JobCategory
            icon={tech}
            design="Technology"
            jobsAvailable="436 jobs available"
            icon1={next}
            propBackgroundColor="#fff"
            propBorder="1px solid #d6ddeb"
            propColor="#25324b"
            propColor1="#7c8493"
          />
          <JobCategory
            icon={code}
            design="Engineering"
            jobsAvailable="542 jobs available"
            icon1={next}
            propBackgroundColor="#fff"
            propBorder="1px solid #d6ddeb"
            propColor="#25324b"
            propColor1="#7c8493"
          />
          <JobCategory
            icon={bag}
            design="Business"
            jobsAvailable="211 jobs available"
            icon1={next}
            propBackgroundColor="#fff"
            propBorder="1px solid #d6ddeb"
            propColor="#25324b"
            propColor1="#7c8493"
          />
          <JobCategory
            icon={ppl}
            design="Human Resource"
            jobsAvailable="346 jobs available"
            icon1={next}
            propBackgroundColor="#fff"
            propBorder="1px solid #d6ddeb"
            propColor="#25324b"
            propColor1="#7c8493"
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPageCategoryDesk;
