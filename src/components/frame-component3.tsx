import type { NextPage } from "next";
import JobContainer1 from "./job-container1";
import "../app/globals.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-ghostwhite-100 flex flex-col items-start justify-start py-24 px-[108px] box-border gap-9 max-w-full text-left text-37xl text-midnightblue-300 font-bai-jamjuree mq800:gap-[18px] mq800:py-10 mq800:px-[27px] mq800:box-border mq1125:pt-[62px] mq1125:pb-[62px] mq1125:box-border mq1300:pl-[54px] mq1300:pr-[54px] mq1300:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-end justify-start flex-wrap content-end py-5 px-0 box-border relative gap-2 max-w-full">
        <div className="flex-1 flex flex-row items-end justify-start py-0 pl-0 pr-24 box-border gap-[18px] min-w-[529px] max-w-full mq800:flex-wrap mq800:min-w-full mq1125:pr-12 mq1125:box-border mq450:pr-5 mq450:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[294px] max-w-full">
            <h1 className="m-0 h-12 relative text-inherit leading-[32px] font-semibold font-[inherit] flex items-center shrink-0 mq800:text-26xl mq800:leading-[26px] mq450:text-15xl mq450:leading-[19px]">
              <span>
                <span>{`Latest `}</span>
                <span className="text-mediumslateblue-200">{`Jobs `}</span>
                <span>Post</span>
              </span>
            </h1>
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <img
                className="h-2 w-[129px] relative"
                alt=""
                src="/vector-7-1.svg"
              />
            </div>
          </div>
          <div className="w-[247px] flex flex-col items-start justify-end pt-0 px-0 pb-[31px] box-border">
            <img
              className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
              alt=""
              src="/vector-9.svg"
            />
          </div>
        </div>
        <div className="h-full w-[104px] !m-[0] absolute top-[0px] right-[402px] bottom-[0px] flex flex-row items-start justify-start gap-2">
          <div className="self-stretch flex-1 relative rounded-[50%] border-mediumslateblue-200 border-[0px] border-solid" />
          <div className="h-6 w-6 absolute !m-[0] top-[0px] left-[0px] rounded-[50%] border-mediumslateblue-200 border-[0px] border-solid box-border z-[1]" />
          <div className="h-10 w-10 absolute !m-[0] top-[0px] left-[0px] rounded-[50%] border-mediumslateblue-200 border-[0px] border-solid box-border z-[2]" />
          <div className="h-14 w-14 absolute !m-[0] top-[0px] left-[0px] rounded-[50%] border-mediumslateblue-200 border-[0px] border-solid box-border z-[3]" />
          <div className="h-[72px] w-[72px] absolute !m-[0] top-[0px] left-[0px] rounded-[50%] border-mediumslateblue-200 border-[0px] border-solid box-border z-[4]" />
          <div className="h-[88px] w-[88px] absolute !m-[0] top-[0px] left-[0px] rounded-[50%] border-mediumslateblue-200 border-[0px] border-solid box-border z-[5]" />
        </div>
        <div className="w-[292px] flex flex-col items-start justify-end pt-0 pb-[24.6px] pl-0 pr-[7px] box-border">
          <img
            className="self-stretch h-[7.4px] relative max-w-full overflow-hidden shrink-0"
            alt=""
            src="/vector-10.svg"
          />
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-5 text-base">
          <div className="h-6 relative [text-decoration:underline] leading-[120%] font-medium flex items-center shrink-0 min-w-[78px]">
            Browse All
          </div>
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-6">
          <img
            className="w-4 h-4 relative overflow-hidden shrink-0"
            alt=""
            src="/arrowupright-9.svg"
          />
        </div>
      </div>
      <div className="ml-[-358px] w-[1940px] flex flex-col items-start justify-start py-0 px-0 box-border gap-6 max-w-[159%] shrink-0 text-xs text-cornflowerblue-200">
        <div className="w-[1440px] overflow-x-auto flex flex-row items-start justify-start py-0 px-0 box-border gap-6 max-w-full">
          <div className="w-[496px] bg-white shrink-0 flex flex-col items-start justify-start py-8 pl-8 pr-[31px] box-border gap-5 max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full shrink-0">
              <div className="flex flex-row items-start justify-start max-w-full mq450:gap-5">
                <div className="h-12 w-[414px] flex flex-row items-start justify-between max-w-full gap-5">
                  <div className="self-stretch w-[92px] flex flex-col items-start justify-start">
                    <div className="w-[86px] h-4 relative leading-[16px] uppercase font-medium flex items-center">
                      Apply before
                    </div>
                    <div className="self-stretch flex-1 relative text-base leading-[32px] uppercase font-medium text-midnightblue-200 flex items-center">
                      8 Dec, 2023
                    </div>
                  </div>
                  <div className="h-[49px] w-px relative border-lavender-200 border-r-[1px] border-solid box-border" />
                  <div className="w-[81px] flex flex-col items-start justify-start">
                    <div className="w-[57px] relative leading-[16px] uppercase font-medium flex items-center">
                      Job type
                    </div>
                    <div className="self-stretch relative text-base leading-[32px] uppercase font-medium text-midnightblue-200">
                      Full time
                    </div>
                  </div>
                  <div className="h-[49px] w-px relative border-lavender-200 border-r-[1px] border-solid box-border" />
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[16px] uppercase font-medium inline-block min-w-[46px]">
                      Salary
                    </div>
                    <div className="relative text-base leading-[32px] uppercase font-medium text-midnightblue-200 inline-block min-w-[81px]">
                      $10k-$15k
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-4 text-5xl text-midnightblue-300">
                <div className="w-[246px] flex flex-row items-center justify-start gap-4">
                  <img
                    className="h-12 w-12 relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/wordpress-1@2x.png"
                  />
                  <h3 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[26px]">
                    Digital Marketer
                  </h3>
                </div>
                <div className="self-stretch relative text-base leading-[24px] text-darkslateblue">
                  Join our team as an Email Marketing Specialist and lead our
                  digital outreach efforts.
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative border-lavender-200 border-t-[1px] border-solid box-border" />
            <div className="self-stretch flex flex-row items-center justify-between gap-5 shrink-0 text-base text-darkslateblue mq800:flex-wrap">
              <div className="h-8 w-[214px] flex flex-row items-center justify-start gap-2.5">
                <img
                  className="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/icon.svg"
                />
                <div className="self-stretch flex-1 relative leading-[32px] flex items-center">
                  London, United Kingdom
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-2 text-midnightblue-200">
                <div className="relative [text-decoration:underline] leading-[24px] font-medium inline-block min-w-[94px]">
                  More Details
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                  src="/arrowupright-10.svg"
                />
              </div>
            </div>
          </div>
          <JobContainer1
            appStore="/app-store-1@2x.png"
            leadProductDesigner="Lead Product Designer"
            icon="/icon.svg"
            arrowUpRight="/arrowupright-11.svg"
          />
          <JobContainer1
            appStore="/spotify-1@2x.png"
            leadProductDesigner="Social Media Assistant"
            icon="/icon.svg"
            arrowUpRight="/arrowupright-12.svg"
            propWidth="unset"
            propDisplay="inline-block"
            propMinWidth="86px"
            propWidth1="unset"
            propDisplay1="inline-block"
            propMinWidth1="92px"
            propAlignSelf="unset"
            propWidth2="unset"
            propFlex="unset"
          />
          <div className="w-[496px] bg-white shrink-0 flex flex-col items-start justify-start py-8 pl-8 pr-[31px] box-border gap-5 max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full shrink-0">
              <div className="flex flex-row items-start justify-start max-w-full mq450:gap-5">
                <div className="h-12 w-[414px] flex flex-row items-start justify-between max-w-full gap-5">
                  <div className="flex flex-col items-start justify-start">
                    <div className="relative leading-[16px] uppercase font-medium inline-block min-w-[86px]">
                      Apply before
                    </div>
                    <div className="relative text-base leading-[32px] uppercase font-medium text-midnightblue-200 inline-block min-w-[92px]">
                      8 Dec, 2023
                    </div>
                  </div>
                  <div className="h-[49px] w-px relative border-lavender-200 border-r-[1px] border-solid box-border" />
                  <div className="self-stretch w-[81px] flex flex-col items-start justify-start">
                    <div className="w-[57px] h-4 relative leading-[16px] uppercase font-medium flex items-center">
                      Job type
                    </div>
                    <div className="self-stretch flex-1 relative text-base leading-[32px] uppercase font-medium text-midnightblue-200 flex items-center">
                      Full time
                    </div>
                  </div>
                  <div className="h-[49px] w-px relative border-lavender-200 border-r-[1px] border-solid box-border" />
                  <div className="self-stretch w-[81px] flex flex-col items-start justify-start">
                    <div className="w-[46px] h-4 relative leading-[16px] uppercase font-medium flex items-center">
                      Salary
                    </div>
                    <div className="self-stretch flex-1 relative text-base leading-[32px] uppercase font-medium text-midnightblue-200 flex items-center">
                      $10k-$15k
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-4 text-5xl text-midnightblue-300">
                <div className="w-[246px] flex flex-row items-center justify-start gap-4">
                  <img
                    className="h-12 w-12 relative object-cover"
                    alt=""
                    src="/wordpress@2x.png"
                  />
                  <h3 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[26px]">
                    Digital Marketer
                  </h3>
                </div>
                <div className="self-stretch relative text-base leading-[24px] text-darkslateblue">
                  Join our team as an Email Marketing Specialist and lead our
                  digital outreach efforts.
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative border-lavender-200 border-t-[1px] border-solid box-border" />
            <div className="self-stretch flex flex-row items-center justify-between gap-5 text-base text-darkslateblue mq800:flex-wrap">
              <div className="w-[214px] flex flex-row items-center justify-start gap-2.5">
                <img className="h-6 w-6 relative" alt="" src="/icon.svg" />
                <div className="flex-1 relative leading-[32px]">
                  London, United Kingdom
                </div>
              </div>
              <div className="w-[118px] flex flex-row items-center justify-start gap-2 text-midnightblue-200">
                <div className="h-6 flex-1 relative [text-decoration:underline] leading-[32px] font-medium flex items-center">
                  More Details
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                  src="/arrowupright-13.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1611px] overflow-x-auto flex flex-row items-start justify-start py-0 px-[171px] box-border gap-6 max-w-full mq800:pl-[42px] mq800:pr-[42px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1300:pl-[85px] mq1300:pr-[85px] mq1300:box-border">
          <JobContainer1
            appStore="/wordpress-3@2x.png"
            leadProductDesigner="Digital Marketer"
            icon="/icon-4.svg"
            arrowUpRight="/arrowupright-14.svg"
            propWidth="92px"
            propDisplay="flex"
            propMinWidth="unset"
            propWidth1="86px"
            propDisplay1="unset"
            propMinWidth1="unset"
            propAlignSelf="stretch"
            propWidth2="214px"
            propFlex="1"
          />
          <JobContainer1
            appStore="/slack-1@2x.png"
            leadProductDesigner="Full-Stack Developer"
            icon="/icon-5.svg"
            arrowUpRight="/arrowupright-15.svg"
            propWidth="unset"
            propDisplay="inline-block"
            propMinWidth="86px"
            propWidth1="unset"
            propDisplay1="inline-block"
            propMinWidth1="92px"
            propAlignSelf="unset"
            propWidth2="unset"
            propFlex="unset"
          />
          <JobContainer1
            appStore="/pinterest-1@2x.png"
            leadProductDesigner="UX Designer/Researcher"
            icon="/icon-6.svg"
            arrowUpRight="/arrowupright-16.svg"
            propWidth="unset"
            propDisplay="inline-block"
            propMinWidth="86px"
            propWidth1="unset"
            propDisplay1="inline-block"
            propMinWidth1="92px"
            propAlignSelf="unset"
            propWidth2="unset"
            propFlex="unset"
          />
          <div className="w-[496px] bg-white shrink-0 flex flex-col items-start justify-start py-8 pl-8 pr-[31px] box-border gap-5 max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full shrink-0">
              <div className="flex flex-row items-start justify-start max-w-full mq450:gap-5">
                <div className="h-12 w-[414px] flex flex-row items-start justify-between max-w-full gap-5">
                  <div className="self-stretch w-[92px] flex flex-col items-start justify-start">
                    <div className="w-[86px] h-4 relative leading-[16px] uppercase font-medium flex items-center">
                      Apply before
                    </div>
                    <div className="self-stretch flex-1 relative text-base leading-[32px] uppercase font-medium text-midnightblue-200 flex items-center">
                      8 Dec, 2023
                    </div>
                  </div>
                  <div className="h-[49px] w-px relative border-lavender-200 border-r-[1px] border-solid box-border" />
                  <div className="self-stretch w-[81px] flex flex-col items-start justify-start">
                    <div className="w-[57px] h-4 relative leading-[16px] uppercase font-medium flex items-center">
                      Job type
                    </div>
                    <div className="self-stretch flex-1 relative text-base leading-[32px] uppercase font-medium text-midnightblue-200 flex items-center">
                      Full time
                    </div>
                  </div>
                  <div className="h-[49px] w-px relative border-lavender-200 border-r-[1px] border-solid box-border" />
                  <div className="self-stretch w-[81px] flex flex-col items-start justify-start">
                    <div className="w-[46px] h-4 relative leading-[16px] uppercase font-medium flex items-center">
                      Salary
                    </div>
                    <div className="self-stretch flex-1 relative text-base leading-[32px] uppercase font-medium text-midnightblue-200 flex items-center">
                      $10k-$15k
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-4 text-5xl text-midnightblue-300">
                <div className="w-[238px] flex flex-row items-center justify-start gap-4">
                  <img
                    className="h-12 w-10 relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/figma-1@2x.png"
                  />
                  <h3 className="m-0 h-8 flex-1 relative text-inherit leading-[32px] font-semibold font-[inherit] flex items-center mq450:text-lgi mq450:leading-[26px]">
                    Digital Marketer
                  </h3>
                </div>
                <div className="self-stretch h-12 relative text-base leading-[24px] text-darkslateblue flex items-center shrink-0">
                  Join our team as an Email Marketing Specialist and lead our
                  digital outreach efforts.
                </div>
              </div>
            </div>
            <div className="self-stretch h-px relative border-lavender-200 border-t-[1px] border-solid box-border" />
            <div className="self-stretch flex flex-row items-center justify-between gap-5 shrink-0 text-base text-darkslateblue mq800:flex-wrap">
              <div className="h-8 w-[214px] flex flex-row items-center justify-start gap-2.5">
                <img className="h-6 w-6 relative" alt="" src="/icon-7.svg" />
                <div className="self-stretch flex-1 relative leading-[32px] flex items-center">
                  London, United Kingdom
                </div>
              </div>
              <div className="w-[118px] flex flex-row items-center justify-start gap-2 text-midnightblue-200">
                <div className="h-6 flex-1 relative [text-decoration:underline] leading-[32px] font-medium flex items-center">
                  More Details
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                  src="/arrowupright-17.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;