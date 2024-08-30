import type { NextPage } from "next";
import CategoryItems from "./category-items";
import "../app/globals.css";

export type CategoryType = {
  className?: string;
};

const Category: NextPage<CategoryType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-[108px] pb-20 box-border gap-10 max-w-full text-left text-37xl text-midnightblue-300 font-bai-jamjuree mq800:gap-5 mq800:pl-[54px] mq800:pr-[54px] mq800:pb-[52px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}
    >
      <h1 className="m-0 h-[72px] relative text-inherit leading-[120%] font-semibold font-[inherit] flex items-center shrink-0 max-w-full mq800:text-26xl mq800:leading-[54px] mq450:text-15xl mq450:leading-[40px]">
        <span>
          <span>{`Explore by `}</span>
          <span className="text-mediumslateblue-200">category</span>
        </span>
      </h1>
      <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-x-6 gap-y-[22.7px] min-h-[312px] text-5xl">
        <CategoryItems maskGroup="/mask-group@2x.png" design="Design" />
        <CategoryItems
          maskGroup="/mask-group-1@2x.png"
          design="Analyst"
          propMinWidth="88px"
          propDisplay="inline-block"
        />
        <CategoryItems
          maskGroup="/mask-group-2@2x.png"
          design="Electrician"
          propMinWidth="122px"
          propDisplay="inline-block"
        />
        <CategoryItems
          maskGroup="/mask-group-3@2x.png"
          design="Finance"
          propMinWidth="91px"
          propDisplay="inline-block"
        />
        <CategoryItems
          maskGroup="/mask-group-4@2x.png"
          design="Technology"
          propMinWidth="unset"
          propDisplay="none"
        />
        <CategoryItems
          maskGroup="/mask-group-5@2x.png"
          design="Engineering"
          propMinWidth="unset"
          propDisplay="none"
        />
        <CategoryItems
          maskGroup="/mask-group-6@2x.png"
          design="Marketing"
          propMinWidth="114px"
          propDisplay="inline-block"
        />
        <CategoryItems
          maskGroup="/mask-group-7@2x.png"
          design="Programmer"
          propMinWidth="unset"
          propDisplay="none"
        />
      </div>
    </div>
  );
};

export default Category;