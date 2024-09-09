import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type SidebarMenuType = {
  className?: string;
  icon?: string;
  caption?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const SidebarMenu: NextPage<SidebarMenuType> = ({
  className = "",
  icon,
  caption,
  propAlignSelf,
  propFlex,
  propDisplay,
  propMinWidth,
}) => {
  const sidebarMenuStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const caption1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propFlex, propDisplay, propMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-row items-center justify-start py-[4.7px] pl-3 pr-1.5 gap-[6.3px] text-left text-base text-neutrals-60 font-body-small-regular ${className}`}
      style={sidebarMenuStyle}
    >
      <img
        className="h-[9.4px] w-[9.4px] relative overflow-hidden shrink-0 min-h-[9px]"
        alt=""
        src={icon}
      />
      <div
        className="flex-1 relative leading-[9.4px] font-medium"
        style={caption1Style}
      >
        {caption}
      </div>
    </div>
  );
};

export default SidebarMenu;