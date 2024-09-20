import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image, { StaticImageData } from "next/image";
import { Card } from "@/components/ui/card";

export type JobCategoryType = {
  className?: string;
  icon?: string | StaticImageData; // Accepting either string or StaticImageData
  design?: string;
  jobsAvailable?: string;
  icon1?: string | StaticImageData; // Accepting either string or StaticImageData

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBorder?: CSSProperties["border"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
};

const JobCategory: NextPage<JobCategoryType> = ({
  icon,
  design,
  jobsAvailable,
  icon1,
}) => {
 
  return (
    <Card
      className={`flex-1 cursor-pointer hover:bg-primary bg-color-white flex flex-col items-start justify-start py-[30px] px-[31px] gap-8 min-w-[230px] max-w-[274px] text-left text-5xl text-neutrals-100 font-heading-h2 mq450:gap-4 `}
    >
      {/* Rendering icon */}
      {icon && (
        <div className="w-10 h-10 relative overflow-hidden shrink-0">
          {typeof icon === "string" ? (
            <img src={icon} alt={design || "Icon"} loading="lazy" />
          ) : (
            <Image
              src={icon}
              alt={design || "Icon"}
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
      )}

      <div className="self-stretch flex flex-col items-start justify-center gap-3">
        {/* Job Design Title */}
        <h3 className="m-0 self-stretch relative text-inherit leading-[24px] font-semibold font-[inherit] text-lg mq450:text-base mq450:leading-[20px]">
          {design}
        </h3>

        {/* Jobs Available */}
        <div className="flex flex-row items-center justify-start gap-4 text-base text-neutrals-60 font-body-normal-regular">
          <div className="relative leading-[24px]">{jobsAvailable}</div>

          {/* Rendering icon1 */}
          {icon1 && (
            <div className="h-6 w-6 relative">
              {typeof icon1 === "string" ? (
                <img src={icon1} alt="Icon 1" />
              ) : (
                <Image
                  src={icon1}
                  alt="Icon 1"
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default JobCategory;
