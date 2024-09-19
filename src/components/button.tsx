import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import { Button as ShadcnButton } from '@/components/ui/button';

export type ButtonType = {
  className?: string;
  caption?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propColor?: CSSProperties["color"];
};

const Button: NextPage<ButtonType> = ({
  className = "",
  caption,
  propBackgroundColor,
  propBorderRadius,
  propDisplay,
  propMinWidth,
  propColor,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      borderRadius: propBorderRadius,
    };
  }, [propBackgroundColor, propBorderRadius]);

  const caption3Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      color: propColor,
    };
  }, [propDisplay, propMinWidth, propColor]);

  return (
    <ShadcnButton
      className={`cursor-pointer [border:none] py-3 px-6 bg-brands-primary flex flex-row items-start justify-start hover:bg-mediumslateblue ${className}`}
      style={buttonStyle}
    >
      <b
        className="relative text-base leading-[26px] inline-block font-body-normal-regular text-color-white text-center min-w-[83px]"
        style={caption3Style}
      >
        {caption}
      </b>
    </ShadcnButton>
  );
};

export default Button;
