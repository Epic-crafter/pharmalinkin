import type { NextPage } from "next";

export type TabMenuType = {
  className?: string;
};

const TabMenu: NextPage<TabMenuType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[74px] shrink-0 flex flex-col items-center justify-start gap-[2.7px] text-left text-base text-neutrals-100 font-body-normal-regular ${className}`}
    >
      <div className="relative leading-[26px] font-semibold inline-block min-w-[74px]">
        Overview
      </div>
      <img
        className="self-stretch h-[1.6px] relative max-w-full overflow-hidden shrink-0"
        alt=""
        src="/rectangle-173.svg"
      />
    </div>
  );
};

export default TabMenu;