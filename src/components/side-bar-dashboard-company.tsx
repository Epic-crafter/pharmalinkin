import type { NextPage } from "next";
import SidebarMenu from "./sidebar-menu";

export type SideBarDashboardCompanyType = {
  className?: string;
};

const SideBarDashboardCompany: NextPage<SideBarDashboardCompanyType> = ({
  className = "",
}) => {
  return (
    <div
      className={`h-[509.2px] w-[106.5px] shadow-[1px_0px_0px_#d3d6db] bg-lights-gray overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[12.5px] px-0 pb-[12.6px] box-border gap-[55.2px] text-left text-3xs-4 text-color-black font-red-hat-display mq450:hidden ${className}`}
    >
      <div className="self-stretch h-[222px] flex flex-col items-start justify-start pt-0 px-0 pb-[207.8px] box-border gap-[12.6px] mq450:pb-[135px] mq450:box-border">
        <div className="flex flex-row items-start justify-start py-0 px-[9px]">
          <div className="flex flex-row items-start justify-start py-0 pl-0 pr-[25px] gap-[3.2px] shrink-0">
            <img
              className="h-[12.5px] w-[12.5px] relative overflow-hidden shrink-0"
              alt=""
              src="/frame-3-2.svg"
            />
            <b className="relative tracking-[-0.01em] leading-[150%] inline-block min-w-[47px]">
              JobHuntly
            </b>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] gap-[12.5px] shrink-0 text-base text-brands-primary font-body-small-regular">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 flex flex-row items-start justify-start gap-[4.7px]">
                <div className="flex flex-col items-start justify-start pt-[3.1px] px-0 pb-0">
                  <img
                    className="w-[1.6px] h-[12.5px] relative shrink-0"
                    alt=""
                    src="/indicator.svg"
                  />
                </div>
                <div className="flex-1 bg-brands-tertiary flex flex-row items-start justify-start py-[4.7px] pl-1.5 pr-0 gap-[6.3px] shrink-0">
                  <img
                    className="h-[9.4px] w-[9.4px] relative overflow-hidden shrink-0 min-h-[9px]"
                    alt=""
                    src="/icon-20.svg"
                  />
                  <div className="flex-1 relative leading-[9.4px] font-medium">
                    Dashboard
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[18.8px] px-0 pb-0 ml-[-100.3px] text-neutrals-60">
                <div className="self-stretch flex flex-row items-start justify-start py-[4.7px] px-3 gap-[6.3px] z-[1]">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[6.3px]">
                    <img
                      className="h-[9.4px] w-[9.4px] relative overflow-hidden shrink-0 min-h-[9px]"
                      alt=""
                      src="/icon-21.svg"
                    />
                    <div className="flex-1 relative leading-[9.4px] font-medium">
                      Messages
                    </div>
                  </div>
                  <div className="h-[9.4px] w-[9.4px] relative text-sm text-color-white font-body-normal-regular">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-brands-primary w-full h-full" />
                    <div className="absolute top-[1.9px] left-[3.5px] leading-[23px] font-semibold flex items-center w-[7px] h-[23px] min-w-[7px]">
                      1
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SidebarMenu
              icon="/icon-22.svg"
              caption="Company Profile"
              propAlignSelf="stretch"
              propFlex="1"
              propDisplay="unset"
              propMinWidth="unset"
            />
            <SidebarMenu
              icon="/icon-23.svg"
              caption="All Applicants"
              propAlignSelf="stretch"
              propFlex="1"
              propDisplay="unset"
              propMinWidth="unset"
            />
            <SidebarMenu
              icon="/icon-24.svg"
              caption="Job Listing"
              propAlignSelf="stretch"
              propFlex="1"
              propDisplay="unset"
              propMinWidth="unset"
            />
            <SidebarMenu
              icon="/icon-25.svg"
              caption="My Schedule"
              propAlignSelf="stretch"
              propFlex="1"
              propDisplay="unset"
              propMinWidth="unset"
            />
            <div className="self-stretch hidden flex-row items-center justify-start py-[4.7px] pl-3 pr-1.5 gap-[3.4px] text-neutrals-60">
              <img
                className="h-[9.4px] w-[9.4px] relative overflow-hidden shrink-0"
                alt=""
                src="/icon-26.svg"
              />
              <div className="h-[9.4px] flex-1 relative leading-[160%] font-medium flex items-center">
                Employee
              </div>
            </div>
          </div>
          <div className="self-stretch h-[0.4px] relative bg-brands-secondary" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[9.4px] text-7xs-5 text-gray-200">
            <div className="flex flex-row items-start justify-start py-0 px-[11px]">
              <div className="relative tracking-[0.04em] leading-[10px] font-semibold inline-block min-w-[30px]">
                SETTINGS
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base text-neutrals-60">
              <SidebarMenu
                icon="/icon-27.svg"
                caption="Settings"
                propAlignSelf="unset"
                propFlex="unset"
                propDisplay="inline-block"
                propMinWidth="65.8px"
              />
              <SidebarMenu icon="/icon-28.svg" caption="Help Center" />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[123.8px] relative max-w-full shrink-0 flex items-center justify-center">
        <img
          className="self-stretch h-full overflow-hidden shrink-0 object-contain absolute left-[0px] top-[-35px] w-full [transform:scale(1.573)]"
          loading="lazy"
          alt=""
          src="/pattern-1.svg"
        />
      </div>
      <div className="self-stretch h-[28.2px] flex flex-col items-start justify-start pt-0 px-0 pb-[28.2px] box-border gap-[8.3px] text-lg text-neutrals-100 font-body-normal-regular">
        <div className="self-stretch h-0 relative shrink-0" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-3 pr-0">
          <div className="w-[170.1px] flex flex-row items-start justify-start gap-[6.3px] shrink-0">
            <div className="flex flex-col items-start justify-start pt-[16.1px] px-0 pb-0">
              <img
                className="w-[18.8px] h-[18.8px] relative object-cover"
                alt=""
                src="/avatar@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start">
              <div className="w-[98px] h-[29px] relative leading-[160%] font-semibold flex items-center">
                Maria Kelly
              </div>
              <div className="self-stretch h-[22px] relative text-sm leading-[160%] text-dimgray-200 flex items-center whitespace-nowrap">
                MariaKlly@email.com
              </div>
            </div>
          </div>
        </div>
        <div className="w-[91.3px] h-[36.2px] relative hidden text-base text-accents-red">
          <div className="absolute bottom-[0px] left-[0px] shadow-[-3.1px_3.1px_15.67px_rgba(0,_0,_0,_0.08)] rounded-[3.13px] bg-color-white border-other-colors-untitled-border-dashboard border-[0.4px] border-solid box-border w-[91.3px] h-[31.3px]" />
          <div className="absolute bottom-[10.2px] left-[9.4px] flex flex-col items-start justify-start">
            <div className="self-stretch h-[26px] relative">
              <div className="absolute top-[0px] left-[15.7px] leading-[160%] font-medium">
                Logout
              </div>
              <img
                className="absolute top-[0.4px] left-[0px] w-[9.4px] h-[9.4px] overflow-hidden"
                alt=""
                src="/icon-29.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarDashboardCompany;