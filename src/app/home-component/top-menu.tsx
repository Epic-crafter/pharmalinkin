import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TopMenuType = {
  className?: string;
  caption?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const TopMenu: NextPage<TopMenuType> = ({
  className = "",
  caption,
  propDisplay,
  propMinWidth,
}) => {
  const captionStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={`flex flex-row items-start justify-start py-6 px-0 text-left text-base text-neutrals-80 font-body-normal-regular ${className}`}
    >
      <div
        className="relative leading-[26px] font-medium whitespace-nowrap"
        style={captionStyle}
      >
        {caption}
      </div>
    </div>
  );
};

export default TopMenu;