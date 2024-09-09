import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type LabelType = {
  className?: string;
  caption?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propBorder?: CSSProperties["border"];
  propGap?: CSSProperties["gap"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propHeight?: CSSProperties["height"];
  propWidth1?: CSSProperties["width"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propFlex1?: CSSProperties["flex"];
  propWidth2?: CSSProperties["width"];
};

const Label: NextPage<LabelType> = ({
  className = "",
  caption,
  propWidth,
  propBorderRadius,
  propBorder,
  propGap,
  propAlignSelf,
  propFlex,
  propPadding,
  propBackgroundColor,
  propHeight,
  propWidth1,
  propBackgroundColor1,
  propColor,
  propDisplay,
  propMinWidth,
  propAlignSelf1,
  propFlex1,
  propWidth2,
}) => {
  const labelStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      borderRadius: propBorderRadius,
      border: propBorder,
      gap: propGap,
      alignSelf: propAlignSelf,
      flex: propFlex,
      padding: propPadding,
      backgroundColor: propBackgroundColor,
    };
  }, [
    propWidth,
    propBorderRadius,
    propBorder,
    propGap,
    propAlignSelf,
    propFlex,
    propPadding,
    propBackgroundColor,
  ]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth1,
      backgroundColor: propBackgroundColor1,
    };
  }, [propHeight, propWidth1, propBackgroundColor1]);

  const caption2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      display: propDisplay,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf1,
      flex: propFlex1,
      width: propWidth2,
    };
  }, [
    propColor,
    propDisplay,
    propMinWidth,
    propAlignSelf1,
    propFlex1,
    propWidth2,
  ]);

  return (
    <div
      className={`w-[68px] rounded-61xl border-brands-primary border-[1px] border-solid box-border flex flex-row items-start justify-start py-1 px-[9px] gap-2 text-left text-sm text-brands-primary font-body-normal-regular ${className}`}
      style={labelStyle}
    >
      <div
        className="h-3 w-3 relative rounded-[50%] bg-brands-primary hidden"
        style={ellipseDivStyle}
      />
      <div
        className="relative leading-[160%] font-semibold inline-block min-w-[48px]"
        style={caption2Style}
      >
        {caption}
      </div>
    </div>
  );
};

export default Label;