import type { NextPage } from "next";
import "../app/globals.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-37xl text-white font-bai-jamjuree ${className}`}
    >
      <div className="w-[1224px] bg-mediumslateblue-300 flex flex-col items-center justify-center py-24 px-5 box-border relative gap-10 max-w-full mq800:gap-5 mq450:pt-[62px] mq450:pb-[62px] mq450:box-border">
        <div className="w-[648px] flex flex-col items-center justify-start gap-4 max-w-full">
          <h1 className="m-0 h-[72px] relative text-inherit leading-[120%] font-semibold font-[inherit] flex items-center shrink-0 max-w-full mq800:text-26xl mq800:leading-[54px] mq450:text-15xl mq450:leading-[40px]">
            Start Recruiting Now
          </h1>
          <div className="self-stretch h-14 relative text-base leading-[32px] text-center flex items-center justify-center shrink-0">
            Are you ready to take your recruitment efforts to the next level?
            Our platform offers a seamless and efficient way to get your job
            listings in front of top talent.
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-4 px-8 bg-white overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-gainsboro-200">
          <div className="relative text-base leading-[24px] font-medium font-bai-jamjuree text-mediumslateblue-200 text-left inline-block min-w-[95px]">
            Sign Up Now
          </div>
        </button>
        <div className="w-[1440px] !m-[0] absolute top-[3.5px] left-[calc(50%_-_720px)] flex flex-row items-start justify-between py-0 pl-0 pr-[109px] box-border gap-5 z-[1]">
          <div className="w-[107px] flex flex-row items-start justify-start pt-0 pb-[104px] px-0 box-border relative">
            <img
              className="h-[328px] w-[146px] relative object-contain shrink-0"
              alt=""
              src="/mask-group-8@2x.png"
            />
            <img
              className="h-[328px] w-[146px] absolute !m-[0] top-[104px] left-[105px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/mask-group-9@2x.png"
            />
          </div>
          <div className="w-[146px] flex flex-row items-start justify-start pt-0 px-0 pb-[104px] box-border relative">
            <img
              className="h-[328px] flex-1 relative max-w-full overflow-hidden object-contain"
              alt=""
              src="/mask-group-10@2x.png"
            />
            <img
              className="h-[328px] w-[146px] absolute !m-[0] top-[103px] left-[105px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/mask-group-11@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;