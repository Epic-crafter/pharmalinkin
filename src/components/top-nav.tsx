import type { NextPage } from "next";

export type TopNavType = {
  className?: string;
};

const TopNav: NextPage<TopNavType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch shadow-[0px_-1px_0px_#d6ddeb_inset] bg-color-white overflow-hidden flex flex-row items-center justify-between pt-[6.3px] px-3 pb-[6.2px] gap-5 text-left text-base text-neutrals-80 font-body-normal-regular mq450:flex-wrap ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-[6.3px]">
        <img
          className="h-[18.8px] w-[18.8px] relative"
          alt=""
          src="/company-logo.svg"
        />
        <div className="flex flex-col items-start justify-start">
          <div className="relative leading-[26px] inline-block min-w-[73px]">
            Company
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-0 gap-[3.1px] text-xl text-neutrals-100">
            <div className="relative leading-[120%] font-semibold inline-block min-w-[72px] mq450:text-base mq450:leading-[19px]">
              Nomad
            </div>
            <img
              className="h-[9.4px] w-[9.4px] relative"
              alt=""
              src="/icon-30.svg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-[12.5px]">
        <img
          className="h-[15.7px] w-[15.7px] relative"
          alt=""
          src="/notification.svg"
        />
        <button className="cursor-pointer [border:none] py-[4.7px] px-[9px] bg-brands-primary flex flex-row items-center justify-center gap-[3.9px] whitespace-nowrap hover:bg-mediumslateblue">
          <img
            className="h-[9.4px] w-[9.4px] relative overflow-hidden shrink-0"
            alt=""
            src="/icon-31.svg"
          />
          <b className="relative text-base leading-[26px] inline-block font-body-normal-regular text-color-white text-center min-w-[81px]">
            Post a job
          </b>
        </button>
      </div>
    </div>
  );
};

export default TopNav;