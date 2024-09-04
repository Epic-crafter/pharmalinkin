import type { NextPage } from "next";

export type TagType = {
  className?: string;
};

const Tag: NextPage<TagType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[91px] border-brands-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-0.5 px-[11px] text-center text-base text-brands-primary font-body-normal-regular ${className}`}
    >
      <div className="relative leading-[26px] inline-block min-w-[67px]">
        Full Time
      </div>
    </div>
  );
};

export default Tag;