import type { NextPage } from "next";
import Image from 'next/image'
import rectangle from '../../assets/Rectangle 2742.png'
import startPosting from '../../assets/Start posting jobs today.png'
import dash from '../../assets/3.1 Dashboard Company.png'
import { Button } from "@/components/ui/button";

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
           <Button variant="outline">Sign Up For Free</Button>
          </div>
        </div>
        <div className="h-[346px] flex-1 bg-color-white overflow-hidden flex flex-row items-start justify-start min-w-[367px] max-w-full z-[1] text-3xs-4 text-color-black font-red-hat-display mq450:h-auto mq800:min-w-full">
          {/* <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[9.4px] box-border max-w-[calc(100%_-_106px)] shrink-0 text-base text-neutrals-100 font-heading-h2 mq450:max-w-full">
            <TopNav />
            <div className="self-stretch flex flex-row items-start justify-between pt-[12.6px] pb-[12.5px] pl-3 pr-[13px] gap-5 text-3xs-4 mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[5.6px] px-0 pb-0">
                <div className="flex flex-col items-start justify-start gap-[3.1px]">
                  <div className="relative leading-[120%] font-semibold inline-block min-w-[98px] shrink-0">
                    Good morning, Maria
                  </div>
                  <div className="relative text-6xs-3 leading-[160%] font-medium font-body-normal-regular text-neutrals-60 shrink-0 whitespace-nowrap">
                    Here is your job listings statistic report from July 19 -
                    July 25.
                  </div>
                </div>
              </div>
              <Dropdown />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-3 box-border max-w-full text-5xs-8">
              <div className="flex-1 flex flex-col items-start justify-start gap-[9.4px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[9.8px] shrink-0 text-lg-8 text-color-white font-body-normal-regular mq800:flex-wrap">
                  <div className="flex-1 bg-brands-primary flex flex-row items-center justify-start py-[9.4px] px-[9px] box-border gap-[5.1px] min-w-[104px]">
                    <div className="relative leading-[19px] font-semibold inline-block min-w-[22px]">
                      76
                    </div>
                    <div className="flex-1 relative text-6xs leading-[160%] font-medium">
                      New candidates to review
                    </div>
                    <img
                      className="h-[9.4px] w-[9.4px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/icon-33.svg"
                    />
                  </div>
                  <div className="flex-1 bg-accents-green flex flex-row items-center justify-between pt-[11.3px] px-[9px] pb-[11.2px] box-border min-w-[104px] gap-[13.85px]">
                    <div className="flex flex-row items-center justify-start gap-[5.1px]">
                      <div className="relative leading-[19px] font-semibold inline-block min-w-[12px]">
                        3
                      </div>
                      <div className="relative text-6xs leading-[160%] font-medium inline-block min-w-[78.3px]">
                        Schedule for today
                      </div>
                    </div>
                    <img
                      className="h-[9.4px] w-[9.4px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/icon-34.svg"
                    />
                  </div>
                  <div className="flex-1 bg-accents-blue flex flex-row items-center justify-between pt-[11.3px] px-[9px] pb-[11.2px] box-border min-w-[104px] gap-[2.85px]">
                    <div className="flex flex-row items-center justify-start gap-[5.1px]">
                      <div className="relative leading-[19px] font-semibold inline-block min-w-[23px]">
                        24
                      </div>
                      <div className="relative text-6xs leading-[160%] font-medium inline-block min-w-[78.3px]">
                        Messages received
                      </div>
                    </div>
                    <img
                      className="h-[9.4px] w-[9.4px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/icon-35.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[9.5px] shrink-0 mq800:flex-wrap">
                  <div className="w-[285.1px] bg-color-white border-neutrals-20 border-[0.4px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[9px] min-w-[285.1px] mq800:flex-1">
                    <div className="w-[347.2px] flex flex-col items-center justify-start pt-[9.4px] px-0 pb-0 box-border gap-[6.3px] max-w-[123%] shrink-0">
                      <div className="self-stretch flex flex-row items-center justify-between gap-5 mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start gap-[1.6px]">
                          <div className="relative leading-[120%] font-semibold inline-block min-w-[52px]">
                            Job statistics
                          </div>
                          <div className="relative text-7xs-5 leading-[160%] font-body-normal-regular text-neutrals-60 inline-block min-w-[81px] whitespace-nowrap">
                            Showing Jobstatistic Jul 19-25
                          </div>
                        </div>
                        <PillTab />
                      </div>
                      <Tabs />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[9px] mt-[-12.8px] text-center text-6xs-3 text-color-white font-body-normal-regular">
                      <div className="flex-1 flex flex-row items-end justify-start pt-0 px-0 pb-[0.1px] gap-[9.5px] z-[1] mq450:flex-wrap">
                        <div className="h-[121.6px] flex-1 relative min-w-[109px] shrink-0">
                          <div className="absolute top-[0px] left-[41.9px] w-[32.1px] h-[30.9px]">
                            <img
                              className="absolute top-[24.7px] left-[12.2px] rounded-[0.78px] w-[7.8px] h-[6.3px] object-contain"
                              alt=""
                              src="/chart-background.svg"
                            />
                            <div className="absolute h-[87.38%] w-full top-[0%] right-[0%] bottom-[12.62%] left-[0%] bg-neutrals-100 flex flex-col items-start justify-start pt-[3.2px] px-[3px] pb-[3.1px] box-border gap-[0.7px] z-[1]">
                              <div className="flex flex-row items-start justify-start gap-[2.1px]">
                                <div className="flex flex-col items-start justify-start pt-[1.8px] px-0 pb-0">
                                  <div className="w-[6.3px] h-[6.3px] relative rounded-[1.17px] bg-accents-green" />
                                </div>
                                <div className="relative leading-[160%] font-medium inline-block min-w-[11px]">
                                  122
                                </div>
                              </div>
                              <div className="flex flex-row items-end justify-start gap-[3.1px]">
                                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.8px]">
                                  <div className="w-[6.3px] h-[6.3px] relative rounded-[1.17px] bg-accents-blue" />
                                </div>
                                <div className="relative leading-[160%] font-medium inline-block min-w-[8px]">
                                  34
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute top-[5.1px] left-[0px] w-full flex flex-col items-start justify-start gap-[3.1px] z-[2] text-neutrals-60">
                            <div className="self-stretch flex flex-row items-end justify-start gap-[6.3px] shrink-0">
                              <div className="flex-1 flex flex-col items-start justify-start gap-[3.1px]">
                                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] gap-[0.8px] shrink-0">
                                  <div className="w-[18.6px] h-[45px] relative bg-accents-yellow" />
                                  <div className="w-[18.6px] h-[45px] relative bg-accents-purple" />
                                </div>
                                <div className="self-stretch relative leading-[160%] shrink-0">
                                  Mon
                                </div>
                              </div>
                              <div className="h-[75.2px] flex-1 flex flex-col items-start justify-start gap-[3.1px]">
                                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] gap-[0.7px]">
                                  <div className="w-[18.6px] h-[10.2px] relative bg-accents-yellow" />
                                  <div className="w-[18.6px] flex-1 relative bg-accents-purple" />
                                </div>
                                <div className="self-stretch relative leading-[160%]">
                                  Tue
                                </div>
                              </div>
                              <div className="flex-1 flex flex-col items-start justify-start gap-[3.1px]">
                                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] gap-[0.7px]">
                                  <div className="w-[18.6px] h-[43.1px] relative bg-accents-yellow" />
                                  <div className="w-[18.6px] h-[18.8px] relative bg-accents-purple" />
                                </div>
                                <div className="self-stretch relative leading-[160%]">
                                  Wed
                                </div>
                              </div>
                              <div className="h-[100.3px] flex-1 flex flex-col items-start justify-start gap-[3.2px]">
                                <div className="flex-1 flex flex-col items-start justify-start gap-[0.8px]">
                                  <div className="w-[18.6px] h-[21.1px] relative bg-accents-yellow" />
                                  <div className="w-[18.6px] flex-1 relative bg-accents-purple" />
                                </div>
                                <div className="self-stretch relative leading-[160%]">
                                  Thu
                                </div>
                              </div>
                              <div className="h-[90.1px] flex-1 flex flex-col items-start justify-start gap-[3.1px]">
                                <div className="flex-1 flex flex-col items-start justify-start gap-[0.8px]">
                                  <div className="w-[18.6px] flex-1 relative bg-accents-yellow" />
                                  <div className="w-[18.6px] h-[25.1px] relative bg-accents-purple" />
                                </div>
                                <div className="self-stretch relative leading-[160%]">
                                  Fri
                                </div>
                              </div>
                              <div className="flex-1 flex flex-col items-start justify-start gap-[3.1px]">
                                <div className="flex flex-col items-end justify-center gap-[0.8px]">
                                  <div className="w-[18.6px] h-[16.6px] relative bg-accents-yellow" />
                                  <div className="w-[18.6px] h-[16.6px] relative bg-accents-purple" />
                                </div>
                                <div className="self-stretch relative leading-[160%]">
                                  Sat
                                </div>
                              </div>
                              <div className="h-[55.2px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[12.5px] box-border gap-[3.2px]">
                                <div className="flex flex-col items-end justify-center gap-[0.8px] shrink-0">
                                  <div className="w-[18.6px] h-[4.3px] relative bg-accents-yellow" />
                                  <div className="w-[18.6px] h-[37.6px] relative bg-accents-purple" />
                                </div>
                                <div className="self-stretch relative leading-[160%] shrink-0">
                                  Sun
                                </div>
                              </div>
                            </div>
                            <div className="w-[95.2px] h-2.5 flex flex-row items-start justify-start gap-[11.4px] shrink-0">
                              <div className="self-stretch w-[37.4px] flex flex-row items-end justify-start gap-[3.1px] shrink-0">
                                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.8px]">
                                  <div className="w-[6.3px] h-[6.3px] relative rounded-[1.17px] bg-accents-yellow" />
                                </div>
                                <div className="self-stretch flex-1 relative leading-[160%] font-medium flex items-center justify-center">
                                  Job View
                                </div>
                              </div>
                              <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[3.1px] shrink-0">
                                <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.8px]">
                                  <div className="w-[6.3px] h-[6.3px] relative rounded-[1.17px] bg-accents-purple" />
                                </div>
                                <div className="self-stretch flex-1 relative leading-[160%] font-medium flex items-center justify-center">
                                  Job Applied
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[119.8px] w-[89.3px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[6.3px] min-w-[89.3px] shrink-0 text-left text-6xs text-neutrals-100 mq450:flex-1">
                          <div className="self-stretch bg-color-white border-neutrals-20 border-[0.4px] border-solid overflow-hidden flex flex-col items-start justify-start pt-[5px] px-1.5 pb-1.5 gap-[5.5px]">
                            <div className="self-stretch flex flex-row items-center justify-between gap-5">
                              <div className="relative leading-[160%] font-semibold inline-block min-w-[36px]">
                                Job Views
                              </div>
                              <div className="h-[12.5px] w-[12.5px] rounded-[12.53px] bg-accents-yellow flex flex-row items-start justify-start pt-[2.4px] px-0.5 pb-[2.3px] box-border">
                                <img
                                  className="h-[7.8px] w-[7.8px] relative overflow-hidden shrink-0"
                                  alt=""
                                  src="/icon-36.svg"
                                />
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-[0.8px] text-center text-mini-1">
                              <div className="relative leading-[100%] font-semibold inline-block min-w-[38px]">
                                2,342
                              </div>
                              <div className="flex flex-row items-start justify-start gap-[3.1px] text-6xs text-neutrals-60">
                                <div className="relative leading-[160%] font-medium inline-block min-w-[35px]">{`This Week `}</div>
                                <div className="flex flex-row items-center justify-start text-accents-purple">
                                  <div className="relative leading-[160%] font-medium inline-block min-w-[15px]">
                                    6.4%
                                  </div>
                                  <img
                                    className="h-[7.8px] w-[7.8px] relative overflow-hidden shrink-0"
                                    alt=""
                                    src="/icon-37.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex-1 bg-color-white border-neutrals-20 border-[0.4px] border-solid overflow-hidden flex flex-col items-start justify-start pt-[6.3px] px-1.5 pb-[6.7px] gap-[5.5px]">
                            <div className="self-stretch flex flex-row items-center justify-between gap-5">
                              <div className="relative leading-[160%] font-semibold inline-block min-w-[42px]">
                                Job Applied
                              </div>
                              <div className="h-[12.5px] w-[12.5px] rounded-[12.53px] bg-accents-purple flex flex-row items-start justify-start pt-[2.3px] px-0.5 pb-[2.4px] box-border">
                                <img
                                  className="h-[7.8px] w-[7.8px] relative overflow-hidden shrink-0"
                                  alt=""
                                  src="/icon-38.svg"
                                />
                              </div>
                            </div>
                            <div className="w-[61px] flex-1 flex flex-col items-start justify-start gap-[0.8px] text-center text-mini-1">
                              <div className="relative leading-[100%] font-semibold inline-block min-w-[26px]">
                                654
                              </div>
                              <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[3.1px] text-6xs text-neutrals-60">
                                <div className="self-stretch flex-1 relative leading-[160%] font-medium flex items-center justify-center">{`This Week `}</div>
                                <div className="self-stretch w-[22.8px] flex flex-row items-center justify-start text-accents-red">
                                  <div className="self-stretch flex-1 relative leading-[160%] font-medium flex items-center justify-center">
                                    0.5%
                                  </div>
                                  <img
                                    className="h-[7.8px] w-[7.8px] relative overflow-hidden shrink-0 object-contain"
                                    alt=""
                                    src="/icon-39.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[197.4px] w-[137.9px] flex flex-col items-start justify-start pt-0 px-0 pb-[129.3px] box-border gap-[9.5px] min-w-[137.9px] shrink-0 text-center mq800:flex-1">
                    <div className="self-stretch bg-color-white border-neutrals-20 border-[0.4px] border-solid flex flex-col items-start justify-start pt-0 px-0 pb-2 shrink-0">
                      <div className="self-stretch flex flex-row items-start justify-start pt-[9.4px] px-[9px] pb-[6.3px]">
                        <div className="w-[38px] relative leading-[120%] font-semibold flex items-center justify-center min-w-[38px]">
                          Job Open
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-end justify-start pt-[3.1px] px-[9px] pb-[3.4px] gap-[2.5px] text-left text-9xl-2 font-body-normal-regular">
                        <div className="relative leading-[100%] font-semibold inline-block min-w-[30px] mq450:text-4xl mq450:leading-[23px]">
                          12
                        </div>
                        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.7px] text-5xs-8 text-neutrals-60">
                          <div className="relative leading-[13px] inline-block min-w-[51px]">
                            Jobs Opened
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch bg-color-white border-neutrals-20 border-[0.4px] border-solid flex flex-col items-start justify-start pt-0 px-0 pb-2 shrink-0">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-row items-start justify-start pt-[9.4px] px-[9px] pb-[6.3px]">
                          <div className="w-[83px] relative leading-[120%] font-semibold flex items-center justify-center min-w-[83px]">
                            Applicants Summary
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-end justify-start pt-[3.2px] px-[9px] pb-[3.1px] gap-[3.1px] z-[1] mt-[-0.1px] text-left text-9xl-2 font-body-normal-regular">
                          <div className="relative leading-[100%] font-semibold inline-block min-w-[33px] mq450:text-4xl mq450:leading-[23px]">
                            67
                          </div>
                          <div className="h-[19.6px] relative text-5xs-8 leading-[160%] text-neutrals-60 flex items-center min-w-[41.1px]">
                            Applicants
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[9px] relative">
                        <div className="h-full w-[58.8px] absolute !m-[0] top-[0px] bottom-[0px] left-[9.4px] bg-accents-purple" />
                        <div className="h-[6.3px] w-[30.2px] relative bg-accents-green z-[1]" />
                        <div className="h-[6.3px] w-[26.6px] relative">
                          <div className="absolute top-[0px] left-[0px] bg-accents-blue w-[15.7px] h-[6.3px]" />
                          <div className="absolute top-[0px] left-[15.6px] bg-accents-yellow w-[11px] h-[6.3px] z-[1]" />
                        </div>
                        <div className="h-[6.3px] w-[3.5px] relative bg-accents-red" />
                      </div>
                      <div className="h-[45.7px] flex flex-row items-start justify-start py-0 pl-[9px] pr-2 box-border gap-[12.5px] text-left text-6xs-3 text-neutrals-60 font-body-normal-regular">
                        <div className="self-stretch flex flex-col items-start justify-start pt-[9.4px] px-0 pb-[0.1px] gap-[3.1px]">
                          <div className="flex flex-row items-start justify-start gap-[3.1px]">
                            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                              <div className="w-[7.8px] h-[7.8px] relative rounded-[1.57px] bg-accents-purple" />
                            </div>
                            <div className="relative leading-[160%] inline-block min-w-[39px]">
                              <span>{`Full Time : `}</span>
                              <span className="font-medium text-neutrals-100">
                                45
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[3.1px]">
                            <div className="flex flex-col items-start justify-start pt-[1.1px] px-0 pb-0">
                              <div className="w-[7.8px] h-[7.8px] relative rounded-[1.57px] bg-accents-green" />
                            </div>
                            <div className="relative leading-[160%] inline-block min-w-[42px]">
                              <span>{`Part-Time : `}</span>
                              <span className="font-medium text-neutrals-100">
                                24
                              </span>
                            </div>
                          </div>
                          <div className="w-12 flex-1 flex flex-row items-start justify-start gap-[3.1px]">
                            <div className="flex flex-col items-start justify-start pt-[1.1px] px-0 pb-0">
                              <div className="w-[7.8px] h-[7.8px] relative rounded-[1.57px] bg-accents-blue" />
                            </div>
                            <div className="self-stretch flex-1 relative leading-[160%] flex items-center">
                              <span>
                                <span>{`Remote : `}</span>
                                <span className="font-medium text-neutrals-100">
                                  22
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[9.4px] px-0 pb-0 gap-[3.1px]">
                          <div className="flex flex-row items-start justify-start gap-[3.1px]">
                            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                              <div className="w-[7.8px] h-[7.8px] relative rounded-[1.57px] bg-accents-yellow" />
                            </div>
                            <div className="relative leading-[160%] inline-block min-w-[44px]">
                              <span>{`Internship : `}</span>
                              <span className="font-medium text-neutrals-100">
                                32
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start gap-[3.1px]">
                            <div className="flex flex-col items-start justify-start pt-[1.1px] px-0 pb-0">
                              <div className="w-[7.8px] h-[7.8px] relative rounded-[1.57px] bg-accents-red" />
                            </div>
                            <div className="relative leading-[160%] inline-block min-w-[40px]">
                              <span>{`Contract : `}</span>
                              <span className="font-medium text-neutrals-100">
                                30
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch border-neutrals-20 border-[0.4px] border-solid flex flex-col items-start justify-start shrink-0">
                  <div className="self-stretch shadow-[0px_-0.4px_0px_#d6ddeb_inset] bg-color-white flex flex-row items-start justify-between py-[9.4px] pl-[9px] pr-2.5 shrink-0 gap-5 mq450:flex-wrap">
                    <div className="h-[9px] w-[49px] relative leading-[120%] font-semibold flex items-center">
                      Job Updates
                    </div>
                    <div className="h-2.5 w-[36.5px] flex flex-row items-start justify-start gap-[3.1px] text-6xs-3 text-brands-primary font-body-normal-regular">
                      <div className="self-stretch flex-1 relative leading-[160%] font-semibold">
                        View All
                      </div>
                      <img
                        className="h-[9.4px] w-[9.4px] relative"
                        alt=""
                        src="/icon-40.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center py-[9.4px] px-[9px] gap-[9.5px] shrink-0 text-sm text-accents-green font-body-normal-regular mq800:flex-wrap">
                    <div className="h-[179px] w-[96.5px] bg-color-white border-neutrals-20 border-[0.4px] border-solid box-border flex flex-col items-start justify-start py-[9.4px] px-[9px] gap-[8.6px]">
                      <div className="w-[205px] flex-1 flex flex-col items-start justify-start gap-[6.3px]">
                        <div className="w-[80.3px] h-[27px] flex flex-row items-start justify-between relative">
                          <img
                            className="h-[18.8px] w-[18.8px] absolute !m-[0] top-[0px] left-[0px]"
                            alt=""
                            src="/company-logo-1.svg"
                          />
                          <div className="h-[26.7px] w-[70.8px] !m-[0] absolute top-[0px] right-[0px] rounded-[31.33px] bg-mediumaquamarine flex flex-row items-start justify-start pt-[2.3px] px-[3px] pb-[2.4px] box-border z-[1]">
                            <div className="self-stretch w-[63px] relative leading-[160%] font-semibold inline-block">
                              Full-Time
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] gap-[0.7px] text-lg text-neutrals-100">
                          <div className="self-stretch h-[29px] relative leading-[160%] font-semibold inline-block">
                            Social Media Assistant
                          </div>
                          <div className="w-[164.8px] flex-1 flex flex-row items-start justify-start gap-[3.2px] text-base text-neutrals-60">
                            <div className="self-stretch w-14 relative leading-[160%] inline-block shrink-0">
                              Nomad
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[12.3px] px-0 pb-0">
                              <div className="w-[1.6px] h-[1.6px] relative rounded-[50%] bg-neutrals-40" />
                            </div>
                            <div className="self-stretch flex-1 relative leading-[160%] shrink-0">
                              Paris, France
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[138.8px] h-[26.7px] flex flex-row items-start justify-start gap-[3.2px]">
                        <Label
                          caption="Marketing"
                          propWidth="unset"
                          propBorderRadius="31.33px"
                          propBorder="0.4px solid #feb836"
                          propGap="3.1px"
                          propAlignSelf="stretch"
                          propFlex="1"
                          propPadding="2.3px 3px 2.4px 4px"
                          propBackgroundColor="unset"
                          propHeight="4.7px"
                          propWidth1="4.7px"
                          propBackgroundColor1="#feb836"
                          propColor="#feb836"
                          propDisplay="unset"
                          propMinWidth="unset"
                          propAlignSelf1="stretch"
                          propFlex1="1"
                          propWidth2="unset"
                        />
                        <Label
                          caption="Design"
                          propWidth="55.8px"
                          propBorderRadius="31.33px"
                          propBorder="0.4px solid #4640de"
                          propGap="3.1px"
                          propAlignSelf="stretch"
                          propFlex="unset"
                          propPadding="2.3px 3px 2.4px"
                          propBackgroundColor="unset"
                          propHeight="4.7px"
                          propWidth1="4.7px"
                          propBackgroundColor1="#4640de"
                          propColor="#4640de"
                          propDisplay="inline-block"
                          propMinWidth="unset"
                          propAlignSelf1="stretch"
                          propFlex1="unset"
                          propWidth2="48px"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[25.2px] relative gap-[3.1px] text-center text-neutrals-100">
                        <div className="flex flex-row items-start justify-start">
                          <div className="h-[2.3px] w-[15.5px] relative bg-accents-green" />
                          <div className="h-[2.3px] w-[15.5px] relative bg-accents-green" />
                          <div className="h-[2.3px] w-[15.5px] relative bg-neutrals-20" />
                          <div className="h-[2.3px] w-[15.5px] relative bg-neutrals-20" />
                          <div className="h-[2.3px] w-[15.5px] relative bg-neutrals-20" />
                        </div>
                        <div className="absolute !m-[0] right-[-86.3px] bottom-[0.1px] leading-[160%]">
                          <span className="font-semibold">5 applied</span>
                          <span className="text-neutrals-60">
                            <span className="text-black">{` `}</span>
                            <span>of 10 capacity</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="h-[179px] w-[96.5px] bg-color-white border-neutrals-20 border-[0.4px] border-solid box-border flex flex-col items-start justify-start py-[9.4px] px-[9px] gap-[8.6px]">
                      <div className="w-[164.8px] flex-1 flex flex-col items-start justify-start gap-[6.3px]">
                        <div className="w-[80.3px] h-[27px] flex flex-row items-start justify-between relative">
                          <img
                            className="h-[18.8px] w-[18.8px] absolute !m-[0] top-[0px] left-[0px]"
                            alt=""
                            src="/company-logo-2.svg"
                          />
                          <div className="h-[26.7px] w-[70.8px] !m-[0] absolute top-[0px] right-[0.1px] rounded-[31.33px] bg-mediumaquamarine flex flex-row items-start justify-start pt-[2.3px] pb-[2.4px] pl-1 pr-[3px] box-border z-[1]">
                            <div className="self-stretch flex-1 relative leading-[160%] font-semibold">
                              Full-Time
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] gap-[0.7px] text-lg text-neutrals-100">
                          <div className="w-[139px] h-[29px] relative leading-[160%] font-semibold inline-block">
                            Brand Designer
                          </div>
                          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[3.1px] text-base text-neutrals-60">
                            <div className="self-stretch w-14 relative leading-[160%] inline-block">
                              Nomad
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[12.3px] px-0 pb-0">
                              <div className="w-[1.6px] h-[1.6px] relative rounded-[50%] bg-neutrals-40" />
                            </div>
                            <div className="self-stretch flex-1 relative leading-[160%]">
                              Paris, France
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[129.8px] h-[26.7px] flex flex-row items-start justify-start gap-[3.2px]">
                        <Label
                          caption="Business"
                          propWidth="unset"
                          propBorderRadius="31.33px"
                          propBorder="0.4px solid #56cdad"
                          propGap="3.1px"
                          propAlignSelf="stretch"
                          propFlex="1"
                          propPadding="2.3px 3px 2.4px"
                          propBackgroundColor="unset"
                          propHeight="4.7px"
                          propWidth1="4.7px"
                          propBackgroundColor1="#56cdad"
                          propColor="#56cdad"
                          propDisplay="inline-block"
                          propMinWidth="unset"
                          propAlignSelf1="stretch"
                          propFlex1="unset"
                          propWidth2="63px"
                        />
                        <Label
                          caption="Design"
                          propWidth="55.8px"
                          propBorderRadius="31.33px"
                          propBorder="0.4px solid #4640de"
                          propGap="3.1px"
                          propAlignSelf="stretch"
                          propFlex="unset"
                          propPadding="2.3px 3px 2.4px"
                          propBackgroundColor="unset"
                          propHeight="4.7px"
                          propWidth1="4.7px"
                          propBackgroundColor1="#4640de"
                          propColor="#4640de"
                          propDisplay="inline-block"
                          propMinWidth="unset"
                          propAlignSelf1="stretch"
                          propFlex1="unset"
                          propWidth2="48px"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[25.2px] relative gap-[3.1px] text-center text-neutrals-100">
                        <div className="flex flex-row items-start justify-start">
                          <div className="h-[2.3px] w-[15.5px] relative bg-accents-green" />
                          <div className="h-[2.3px] w-[15.5px] relative bg-accents-green" />
                          <div className="h-[2.3px] w-[15.5px] relative bg-neutrals-20" />
                          <div className="h-[2.3px] w-[15.5px] relative bg-neutrals-20" />
                          <div className="h-[2.3px] w-[15.5px] relative bg-neutrals-20" />
                        </div>
                        <div className="absolute !m-[0] right-[-86.3px] bottom-[0.1px] leading-[160%]">
                          <span className="font-semibold">5 applied</span>
                          <span className="text-neutrals-60">
                            <span className="text-black">{` `}</span>
                            <span>of 10 capacity</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-[96.5px] bg-color-white border-neutrals-20 border-[0.4px] border-solid box-border flex flex-col items-start justify-start p-[9px] gap-[8.6px]">
                      <div className="w-[208.8px] flex flex-col items-start justify-start gap-[6.3px]">
                        <div className="w-[80.3px] h-[27px] flex flex-row items-start justify-between relative">
                          <img
                            className="h-[18.8px] w-[18.8px] absolute !m-[0] top-[0px] left-[0px]"
                            alt=""
                            src="/company-logo-3.svg"
                          />
                          <div className="h-[26.7px] w-[70.8px] !m-[0] absolute top-[0px] right-[0px] rounded-[31.33px] bg-mediumaquamarine flex flex-row items-start justify-start pt-[2.3px] px-[3px] pb-[2.4px] box-border z-[1]">
                            <div className="self-stretch w-[63px] relative leading-[160%] font-semibold inline-block">
                              Full-Time
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] gap-[0.7px] text-lg text-neutrals-100">
                          <div className="w-[197px] h-[29px] relative leading-[160%] font-semibold inline-block">
                            Interactive Developer
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-[3.1px] text-base text-neutrals-60 mq450:flex-wrap">
                            <div className="h-[26px] w-[78px] relative leading-[160%] inline-block">
                              Terraform
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[12.3px] px-0 pb-0">
                              <div className="w-[1.6px] h-[1.6px] relative rounded-[50%] bg-neutrals-40" />
                            </div>
                            <div className="h-[26px] flex-1 relative leading-[160%] inline-block min-w-[80px]">
                              Berlin, Germany
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[138.8px] h-[26.7px] flex flex-row items-start justify-start gap-[3.2px]">
                        <Label
                          caption="Marketing"
                          propWidth="unset"
                          propBorderRadius="31.33px"
                          propBorder="0.4px solid #feb836"
                          propGap="3.1px"
                          propAlignSelf="stretch"
                          propFlex="1"
                          propPadding="2.3px 3px 2.4px 4px"
                          propBackgroundColor="unset"
                          propHeight="4.7px"
                          propWidth1="4.7px"
                          propBackgroundColor1="#feb836"
                          propColor="#feb836"
                          propDisplay="unset"
                          propMinWidth="unset"
                          propAlignSelf1="stretch"
                          propFlex1="1"
                          propWidth2="unset"
                        />
                        <Label
                          caption="Design"
                          propWidth="55.8px"
                          propBorderRadius="31.33px"
                          propBorder="0.4px solid #4640de"
                          propGap="3.1px"
                          propAlignSelf="stretch"
                          propFlex="unset"
                          propPadding="2.3px 3px 2.4px"
                          propBackgroundColor="unset"
                          propHeight="4.7px"
                          propWidth1="4.7px"
                          propBackgroundColor1="#4640de"
                          propColor="#4640de"
                          propDisplay="inline-block"
                          propMinWidth="unset"
                          propAlignSelf1="stretch"
                          propFlex1="unset"
                          propWidth2="48px"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[25.2px] relative gap-[3.1px] text-center text-neutrals-100">
                        <div className="flex flex-row items-start justify-start">
                          <div className="h-[2.3px] w-[15.5px] relative bg-accents-green" />
                          <div className="h-[2.3px] w-[15.5px] relative bg-accents-green" />
                          <div className="h-[2.3px] w-[15.5px] relative bg-neutrals-20" />
                          <div className="h-[2.3px] w-[15.5px] relative bg-neutrals-20" />
                          <div className="h-[2.3px] w-[15.5px] relative bg-neutrals-20" />
                        </div>
                        <div className="absolute !m-[0] right-[-86.3px] bottom-[0.1px] leading-[160%]">
                          <span className="font-semibold">5 applied</span>
                          <span className="text-neutrals-60">
                            <span className="text-black">{` `}</span>
                            <span>of 10 capacity</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="h-[179px] w-[96.5px] bg-color-white border-neutrals-20 border-[0.4px] border-solid box-border flex flex-col items-start justify-start py-[9.4px] px-[9px] gap-[8.6px]">
                      <div className="w-[189.8px] flex-1 flex flex-col items-start justify-start gap-[6.3px]">
                        <div className="w-[80.3px] h-[27px] flex flex-row items-start justify-between relative">
                          <img
                            className="h-[18.8px] w-[18.8px] absolute !m-[0] top-[0px] left-[0px] object-cover"
                            alt=""
                            src="/company-logo-4@2x.png"
                          />
                          <div className="h-[26.7px] w-[70.8px] !m-[0] absolute top-[0px] right-[0.1px] rounded-[31.33px] bg-mediumaquamarine flex flex-row items-start justify-start pt-[2.3px] pb-[2.4px] pl-1 pr-[3px] box-border z-[1]">
                            <div className="self-stretch flex-1 relative leading-[160%] font-semibold">
                              Full-Time
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] gap-[0.7px] text-lg text-neutrals-100">
                          <div className="w-[158px] h-[29px] relative leading-[160%] font-semibold inline-block">
                            Product Designer
                          </div>
                          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[3.1px] text-base text-neutrals-60">
                            <div className="self-stretch w-[79px] relative leading-[160%] inline-block">
                              ClassPass
                            </div>
                            <div className="flex flex-col items-start justify-start pt-[12.3px] px-0 pb-0">
                              <div className="w-[1.6px] h-[1.6px] relative rounded-[50%] bg-neutrals-40" />
                            </div>
                            <div className="self-stretch flex-1 relative leading-[160%]">
                              Berlin, Germ..
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[129.8px] h-[26.7px] flex flex-row items-start justify-start gap-[3.1px]">
                        <Label
                          caption="Business"
                          propWidth="unset"
                          propBorderRadius="31.33px"
                          propBorder="0.4px solid #56cdad"
                          propGap="3.1px"
                          propAlignSelf="stretch"
                          propFlex="1"
                          propPadding="2.3px 3px 2.4px"
                          propBackgroundColor="unset"
                          propHeight="4.7px"
                          propWidth1="4.7px"
                          propBackgroundColor1="#56cdad"
                          propColor="#56cdad"
                          propDisplay="inline-block"
                          propMinWidth="unset"
                          propAlignSelf1="stretch"
                          propFlex1="unset"
                          propWidth2="63px"
                        />
                        <Label
                          caption="Design"
                          propWidth="55.8px"
                          propBorderRadius="31.33px"
                          propBorder="0.4px solid #4640de"
                          propGap="3.1px"
                          propAlignSelf="stretch"
                          propFlex="unset"
                          propPadding="2.3px 3px 2.4px 4px"
                          propBackgroundColor="unset"
                          propHeight="4.7px"
                          propWidth1="4.7px"
                          propBackgroundColor1="#4640de"
                          propColor="#4640de"
                          propDisplay="unset"
                          propMinWidth="unset"
                          propAlignSelf1="stretch"
                          propFlex1="1"
                          propWidth2="unset"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[25.2px] relative gap-[3.1px] text-center text-neutrals-100">
                        <div className="flex flex-row items-start justify-start">
                          <div className="h-[2.3px] w-[15.5px] relative bg-accents-green" />
                          <div className="h-[2.3px] w-[15.5px] relative bg-accents-green" />
                          <div className="h-[2.3px] w-[15.5px] relative bg-neutrals-20" />
                          <div className="h-[2.3px] w-[15.5px] relative bg-neutrals-20" />
                          <div className="h-[2.3px] w-[15.5px] relative bg-neutrals-20" />
                        </div>
                        <div className="absolute !m-[0] right-[-86.3px] bottom-[0.1px] leading-[160%]">
                          <span className="font-semibold">5 applied</span>
                          <span className="text-neutrals-60">
                            <span className="text-black">{` `}</span>
                            <span>of 10 capacity</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <Image
          alt=""
          src={dash}/>
        </div>
      </div>
    </section>
  );
};

export default LandingPageCTADesktop;