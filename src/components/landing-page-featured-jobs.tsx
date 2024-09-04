import type { NextPage } from "next";
import Row from "./row";
import Row1 from "./row1";

export type LandingPageFeaturedJobsType = {
  className?: string;
};

const LandingPageFeaturedJobs: NextPage<LandingPageFeaturedJobsType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch bg-color-white overflow-hidden flex flex-col items-center justify-start pt-0 px-5 pb-[72px] box-border gap-12 max-w-full text-left text-29xl text-neutrals-100 font-heading-h2 mq450:pb-[31px] mq450:box-border mq800:gap-6 mq800:pb-[47px] mq800:box-border ${className}`}
    >
      <div className="w-[1192px] flex flex-row items-start justify-between max-w-full gap-5 mq800:flex-wrap mq800:justify-center">
        <h1 className="m-0 w-[329px] relative text-inherit leading-[53px] font-semibold font-[inherit] inline-block max-w-full mq450:text-10xl mq450:leading-[32px] mq800:text-19xl mq800:leading-[42px]">
          <span>{`Featured `}</span>
          <span className="text-accents-blue">jobs</span>
        </h1>
        <div className="flex flex-col items-start justify-start pt-[27px] px-0 pb-0 text-center text-base text-brands-primary font-body-normal-regular">
          <div className="flex flex-row items-start justify-start gap-4">
            <div className="relative leading-[26px] font-semibold inline-block min-w-[104px]">
              Show all jobs
            </div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <img
                className="w-6 h-6 relative"
                loading="lazy"
                alt=""
                src="/icon-41.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1192px] flex flex-col items-start justify-start gap-8 max-w-full text-lg font-body-normal-regular mq800:gap-4">
        <Row />
        <Row1 />
      </div>
    </section>
  );
};

export default LandingPageFeaturedJobs;