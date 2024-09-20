import { NextPage } from "next";
import Image from "next/image";
import Tag from "./tag"; // Assuming you will convert this to ShadCN

import { CardTitle, CardContent, CardHeader, Card } from "@/components/ui/card";

import product from "../../assets/product.png";
import canva from "../../assets/canva.png";
import strategy from "../../assets/strategy.png";
import analyst from "../../assets/analyst.png";
import { Badge } from "@/components/ui/badge";

export type Row1Type = {
  className?: string;
};

const labelColors: { [key: string]: string } = {
  Development: "bg-blue-500/20 text-blue-500",
  Design: "bg-purple-500/20 text-purple-500",
  Marketing: "bg-green-500/20 text-green-500",
  Sales: "bg-red-500/20 text-red-500",
  Operations: "bg-yellow-500/20 text-yellow-500",
  Support: "bg-gray-500/20 text-gray-500",
  default: "bg-gray-500/20 text-gray-500", // Fallback color
};

const jobData = [
  {
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    image: product,
    description: "ClassPass is looking for Product Designer to help us.",
    labels: ["Marketing", "Design"],
  },
  {
    title: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    image: canva,
    description: "Canva is looking for Lead Engineer to help develop n ...",
    labels: ["Marketing", "Design"],
  },
  {
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    image: strategy,
    description: "GoDaddy is looking for Brand Strategist to join the team...",
    labels: ["Marketing", "Design"],
  },
  {
    title: "Data Analyst",
    company: "IBM",
    location: "New York, USA",
    image: analyst,
    description: "IBM is looking for Data Analyst to provide insights...",
    labels: ["Marketing", "Design"],
  },
];

const Row1: NextPage<Row1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-8 text-left text-lg text-neutrals-100 font-body-normal-regular mq800:gap-4 ${className}`}
    >
      {jobData.map((job, index) => (
        <Card
          key={index}
          className="flex-1 bg-color-white border-neutrals-20 border-[1px] border-solid box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-4 min-w-[244px] max-w-[274px]"
        >
          <CardHeader className="self-stretch flex flex-row items-start justify-between gap-5">
            <Image
              className="h-12 w-12 relative object-cover"
              loading="lazy"
              alt={job.title}
              src={job.image}
            />
            <Tag />
          </CardHeader>
          <CardContent className="flex flex-col items-start justify-start gap-0.5">
            <CardTitle className="relative leading-[29px] font-semibold">
              {job.title}
            </CardTitle>
            <div className="flex flex-row items-start justify-start gap-2 text-base text-neutrals-80">
              <div className="relative leading-[26px] inline-block min-w-[79px]">
                {job.company}
              </div>
              <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                <div className="w-1 h-1 relative rounded-[50%] bg-dimgray-300" />
              </div>
              <div className="relative leading-[26px] inline-block min-w-[123px]">
                {job.location}
              </div>
            </div>
          </CardContent>
          <CardContent className="self-stretch relative text-base leading-[160%] font-body-small-regular text-neutrals-60">
            {job.description}
          </CardContent>
          <div className="flex flex-row items-start justify-start gap-2">
            {job.labels.map((label: string, i: number) => (
              <Badge
                key={i}
                className={`${
                  labelColors[label] || labelColors["default"]
                } p-2 min-w-0`}
              >
                {label}
              </Badge>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Row1;
