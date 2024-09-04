import type { NextPage } from "next";
import TabMenu from "./tab-menu";

export type TabsType = {
  className?: string;
};

const Tabs: NextPage<TabsType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[284.7px] shadow-[0px_-1px_0px_#d6ddeb_inset] bg-color-white overflow-x-auto flex flex-row items-start justify-start py-0 pl-[9px] pr-0 box-border gap-[15.7px] text-left text-base text-neutrals-60 font-body-normal-regular ${className}`}
    >
      <TabMenu />
      <div className="flex flex-col items-center justify-start">
        <div className="relative leading-[26px] font-semibold inline-block min-w-[81px]">
          Jobs View
        </div>
      </div>
      <div className="w-[104px] shrink-0 flex flex-col items-center justify-start">
        <div className="self-stretch relative leading-[26px] font-semibold">
          Jobs Applied
        </div>
      </div>
      <div className="h-2.5 hidden flex-col items-center justify-start">
        <div className="relative leading-[160%] font-semibold">
          Notifications
        </div>
      </div>
      <div className="h-2.5 hidden flex-col items-center justify-start">
        <div className="relative leading-[160%] font-semibold">
          Notifications
        </div>
      </div>
      <div className="h-2.5 hidden flex-col items-center justify-start">
        <div className="relative leading-[160%] font-semibold">
          Notifications
        </div>
      </div>
    </div>
  );
};

export default Tabs;