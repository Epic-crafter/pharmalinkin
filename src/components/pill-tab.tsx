import type { NextPage } from "next";

export type PillTabType = {
  className?: string;
};

const PillTab: NextPage<PillTabType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[34.6px] bg-lights-blue overflow-x-auto flex flex-row items-start justify-start pt-[1.6px] px-px pb-[1.5px] box-border text-left text-base text-brands-primary font-body-normal-regular ${className}`}
    >
      <div className="w-[53.4px] bg-color-white shrink-0 flex flex-row items-center justify-center pt-[2.7px] px-1 pb-[2.8px] box-border">
        <div className="relative leading-[26px] font-semibold inline-block min-w-[44px]">
          Week
        </div>
      </div>
      <div className="w-[62.4px] bg-lights-blue shrink-0 flex flex-row items-center justify-center pt-[2.7px] px-1 pb-[2.8px] box-border">
        <div className="w-[53px] relative leading-[26px] font-semibold inline-block">
          Month
        </div>
      </div>
      <div className="self-stretch w-[45.4px] bg-lights-blue shrink-0 flex flex-row items-center justify-center pt-[2.7px] px-1 pb-[2.8px] box-border">
        <div className="self-stretch w-9 relative leading-[160%] font-semibold inline-block">
          Year
        </div>
      </div>
    </div>
  );
};

export default PillTab;