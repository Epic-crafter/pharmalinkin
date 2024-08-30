import type { NextPage } from "next";
import "../app/globals.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[225px] box-border max-w-full text-left text-53xl text-midnightblue-300 font-bai-jamjuree mq800:pb-[95px] mq800:box-border mq1125:pb-[146px] mq1125:box-border ${className}`}
    >
      <div className="flex-1 bg-ghostwhite-200 flex flex-col items-center justify-start pt-[30px] pb-0 pl-7 pr-5 box-border relative gap-6 max-w-full">
        <header className="w-[1224px] flex flex-row items-start justify-between top-[0] z-[99] sticky gap-5 max-w-full">
          <div className="w-[707px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5">
              <div className="h-6 w-40 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-0 px-0.5 pb-[3.7px] box-border gap-[8.1px]">
                <img
                  className="h-[24.1px] w-[59.8px] relative"
                  loading="lazy"
                  alt=""
                  src="/group.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-[2.9px] px-0 pb-0">
                  <img
                    className="self-stretch h-[17.4px] relative max-w-full overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/group-1.svg"
                  />
                </div>
              </div>
              <nav className="m-0 w-[395px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-full mq800:hidden">
                <nav className="m-0 self-stretch flex flex-row items-start justify-start gap-12 text-left text-base text-midnightblue-400 font-bai-jamjuree mq450:gap-6">
                  <div className="h-4 flex-1 relative">
                    <a className="[text-decoration:none] absolute top-[0px] left-[0px] leading-[16px] text-[inherit] inline-block min-w-[72px] whitespace-nowrap">
                      Find Jobs
                    </a>
                    <a className="[text-decoration:none] absolute top-[0px] left-[120px] leading-[16px] text-[inherit] inline-block min-w-[87px] whitespace-nowrap">
                      Latest Jobs
                    </a>
                  </div>
                  <a className="[text-decoration:none] relative leading-[16px] text-[inherit] whitespace-nowrap">
                    Browse Companies
                  </a>
                </nav>
              </nav>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-2 px-[23px] bg-mediumslateblue-200 overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
            <a className="[text-decoration:none] relative text-base leading-[24px] font-medium font-bai-jamjuree text-white text-left inline-block min-w-[51px]">
              Sign In
            </a>
          </button>
        </header>
        <div className="w-[1232px] flex flex-col items-end justify-start min-h-[656px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pl-0 pr-[26px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-center justify-start relative [row-gap:20px] max-w-full mq1125:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start py-5 px-0 box-border gap-12 min-w-[428px] max-w-full mq800:gap-6 mq800:min-w-full">
                <div className="w-[640px] flex flex-col items-start justify-start gap-6 max-w-full">
                  <h1 className="m-0 self-stretch relative text-inherit leading-[96px] font-bold font-[inherit] mq800:text-39xl mq800:leading-[77px] mq450:text-24xl mq450:leading-[58px]">
                    <span>{`Explore Over `}</span>
                    <span className="text-mediumslateblue-200">7,000+</span>
                    <span> Job Opportunities</span>
                  </h1>
                  <div className="w-[569px] h-14 relative text-base leading-[32px] text-darkslateblue flex items-center shrink-0 max-w-full">{`Discover a platform tailored for passionate job seekers interested in startups. Find your next career opportunity and connect with like-minded individuals. `}</div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start max-w-full text-base text-lightsteelblue-100">
                  <div className="self-stretch bg-white flex flex-row items-center justify-between p-4 box-border max-w-full gap-5 mq800:flex-wrap">
                    <div className="h-10 w-[382px] flex flex-row items-center justify-start gap-24 max-w-full mq450:gap-12">
                      <div className="flex-1 flex flex-row items-start justify-start gap-2">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src="/search.svg"
                        />
                        <div className="relative leading-[24px] font-light inline-block min-w-[62px]">
                          Keyword
                        </div>
                      </div>
                      <div className="h-[41px] w-px relative border-whitesmoke border-r-[1px] border-solid box-border" />
                      <div className="flex-1 flex flex-row items-center justify-center gap-2">
                        <img
                          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                          loading="lazy"
                          alt=""
                          src="/mappin.svg"
                        />
                        <div className="relative leading-[24px] font-light inline-block min-w-[64px]">
                          Location
                        </div>
                      </div>
                    </div>
                    <button className="cursor-pointer [border:none] py-4 px-[38px] bg-mediumslateblue-200 shadow-[0px_26px_73px_rgba(123,_102,_255,_0.69)] overflow-hidden flex flex-row items-center justify-center hover:bg-mediumslateblue-100">
                      <div className="relative text-base leading-[24px] font-medium font-bai-jamjuree text-white text-left inline-block min-w-[52px]">
                        Search
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-6 max-w-full text-lightsteelblue-200 mq800:flex-wrap">
                    <img
                      className="h-14 w-[196px] relative mix-blend-multiply"
                      loading="lazy"
                      alt=""
                      src="/vector-4.svg"
                    />
                    <div className="relative leading-[16px] inline-block max-w-full">
                      Tags: Digital Marketer, UX Designer, Data Analyst
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="w-[547px] relative max-h-full object-cover max-w-full mq1125:flex-1"
                alt=""
                src="/img-carriere-1@2x.png"
              />
              <div className="h-[140.7px] w-[574.1px] !m-[0] absolute top-[15.8px] right-[301.9px] flex flex-row items-center justify-start z-[1]">
                <div className="flex-1 !m-[0] absolute top-[0px] left-[0px] flex flex-col items-start justify-start py-0 pl-[84px] pr-[47px]">
                  <img
                    className="self-stretch h-[140.7px] relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/vector-5.svg"
                  />
                </div>
                <div className="h-[74px] w-[74px] !m-[0] absolute top-[33.2px] left-[500px] flex flex-row items-start justify-start z-[1]">
                  <div className="self-stretch flex-1 relative rounded-[50%] border-thistle-200 border-[0px] border-solid" />
                  <div className="h-[17.1px] w-[17.1px] absolute !m-[0] top-[0px] left-[0px] rounded-[50%] border-thistle-200 border-[0px] border-solid box-border z-[1]" />
                  <div className="h-[28.5px] w-[28.5px] absolute !m-[0] top-[0px] left-[0px] rounded-[50%] border-thistle-200 border-[0px] border-solid box-border z-[2]" />
                  <div className="h-[39.9px] w-[39.9px] absolute !m-[0] top-[0px] left-[0px] rounded-[50%] border-thistle-200 border-[0px] border-solid box-border z-[3]" />
                  <div className="h-[51.3px] w-[51.3px] absolute !m-[0] top-[0px] left-[0px] rounded-[50%] border-thistle-200 border-[0px] border-solid box-border z-[4]" />
                  <div className="h-[62.7px] w-[62.7px] absolute !m-[0] top-[0px] left-[0px] rounded-[50%] border-thistle-200 border-[0px] border-solid box-border z-[5]" />
                </div>
                <img
                  className="h-[87.2px] w-[87.2px] !m-[0] absolute top-[125.2px] left-[0px] object-contain z-[1]"
                  alt=""
                  src="/frame-25@2x.png"
                />
              </div>
              <div className="w-[22px] absolute !m-[0] right-[-9.5px] bottom-[402px] text-lg tracking-[0.52em] leading-[120%] uppercase font-semibold inline-block [transform:_rotate(-90deg)] [transform-origin:0_0] z-[1]">
                Scroll Down
              </div>
              <div className="w-[200px] !m-[0] absolute right-[9px] bottom-[-97px] flex flex-row items-start justify-start gap-2 z-[1]">
                <img
                  className="h-[280px] flex-1 relative rounded-md max-w-full overflow-hidden"
                  loading="lazy"
                  alt=""
                  src="/vector-6.svg"
                />
                <img
                  className="h-full w-[98px] absolute !m-[0] top-[0px] right-[-98px] bottom-[0px] rounded-3xs max-h-full object-contain"
                  loading="lazy"
                  alt=""
                  src="/arrow-11.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[77px] h-[77px] rounded-26xl bg-midnightblue-200 flex flex-row items-center justify-center relative gap-2 z-[1] mt-[-532px]">
            <div className="h-[45.5px] w-[62px] relative rounded-27xl border-white border-[1px] border-solid box-border" />
            <img
              className="h-[21.4px] w-0 absolute !m-[0] top-[calc(50%_-_10.5px)] left-[calc(50%_-_0.5px)] object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/arrow-11-1.svg"
            />
          </div>
        </div>
        <div className="w-[931px] !m-[0] absolute bottom-[-145px] left-[108px] flex flex-row items-start justify-start flex-wrap content-start gap-[31px] max-w-full">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover min-w-[484px] min-h-[96px] mq800:min-w-full"
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
          <img
            className="self-stretch w-[155px] relative max-h-full object-cover min-h-[96px]"
            loading="lazy"
            alt=""
            src="/image-3@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;