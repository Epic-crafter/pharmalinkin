import type { NextPage } from "next";

export type DropdownType = {
  className?: string;
};

const Dropdown: NextPage<DropdownType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[35px] w-[70.5px] bg-color-white border-neutrals-20 border-[0.4px] border-solid box-border flex flex-row items-center justify-between py-[4.7px] px-1.5 relative whitespace-nowrap text-left text-base text-neutrals-100 font-body-normal-regular ${className}`}
    >
      <div className="w-[102px] absolute !m-[0] top-[4.7px] left-[6.2px] leading-[26px] inline-block">
        Jul 19 - Jul 25
      </div>
      <img
        className="h-[7.8px] w-[7.8px] absolute !m-[0] top-[13.7px] left-[56.4px] overflow-hidden shrink-0 z-[1]"
        alt=""
        src="/icon-32.svg"
      />
    </div>
  );
};

export default Dropdown;