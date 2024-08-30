import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import "../app/globals.css";

export type CategoryItemsType = {
  className?: string;
  maskGroup?: string;
  design?: string;

  /** Style props */
  propMinWidth?: string | number;
  propDisplay?: "block" | "inline" | "inline-block" | "flex" | "grid" | "none";
};

const CategoryItems: NextPage<CategoryItemsType> = ({
  className = "",
  maskGroup,
  design,
  propMinWidth,
  propDisplay,
}) => {
  const designStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      display: propDisplay,
    };
  }, [propMinWidth, propDisplay]);

  return (
    <div
      className={`border-thistle-100 border-[1px] border-solid flex flex-row items-center justify-start py-9 pl-[23px] pr-[61px] gap-4 text-left text-5xl text-midnightblue-300 font-bai-jamjuree mq450:pr-5 mq450:box-border ${className}`}
    >
      <img
        className="h-12 w-12 relative object-contain"
        loading="lazy"
        alt=""
        src={maskGroup}
      />
      <div className="flex flex-col items-start justify-start gap-5">
        <h3
          className="m-0 relative text-inherit leading-[29px] font-semibold font-[inherit] inline-block min-w-[79px] mq450:text-lgi mq450:leading-[23px]"
          style={designStyle}
        >
          {design}
        </h3>
        <div className="relative text-base leading-[120%] text-darkslateblue">
          235 Jobs Available
        </div>
      </div>
    </div>
  );
};

export default CategoryItems;
