import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type JobCategoryType = {
  className?: string;
  icon?: string;
  design?: string;
  jobsAvailable?: string;
  icon1?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
};

const JobCategory: NextPage<JobCategoryType> = ({
  className = "",
  icon,
  design,
  jobsAvailable,
  icon1,
  propBackgroundColor,
  propBorder,
  propColor,
  propColor1,
}) => {
  const jobCategoryStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      border: propBorder,
    };
  }, [propBackgroundColor, propBorder]);

  const designStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const jobsAvailableStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div
      className={`flex-1 bg-color-white border-neutrals-20 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[30px] px-[31px] gap-8 min-w-[230px] max-w-[274px] text-left text-5xl text-neutrals-100 font-heading-h2 mq450:gap-4 ${className}`}
      style={jobCategoryStyle}
    >
      <img
        className="w-12 h-12 relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={icon}
      />
      <div className="self-stretch flex flex-col items-start justify-center gap-3">
        <h3
          className="m-0 self-stretch relative text-inherit leading-[29px] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[23px]"
          style={designStyle}
        >
          {design}
        </h3>
        <div className="flex flex-row items-center justify-start gap-4 text-lg text-neutrals-60 font-body-normal-regular">
          <div className="relative leading-[29px]" style={jobsAvailableStyle}>
            {jobsAvailable}
          </div>
          <img className="h-6 w-6 relative" alt="" src={icon1} />
        </div>
      </div>
    </div>
  );
};

export default JobCategory;