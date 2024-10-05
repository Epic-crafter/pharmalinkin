import React from 'react';

interface JobTag {
  name: string;
  color: string;
}

interface JobCardProps {
  logo: string;
  jobType: string;
  title: string;
  company: string;
  location: string;
  tags: JobTag[];
  applicants: number;
  capacity: number;
}

const JobCard: React.FC<JobCardProps> = ({
  logo,
  jobType,
  title,
  company,
  location,
  tags,
  applicants,
  capacity
}) => {
  return (
    <article className="flex flex-col flex-1 shrink py-6 pr-5 pl-6 bg-white border border-solid basis-0 border-zinc-200 min-w-[240px] max-md:pl-5">
      <div className="flex flex-col w-full max-w-[205px]">
        <div className="flex gap-10 justify-between items-start w-full text-sm font-semibold text-emerald-300 whitespace-nowrap">
          <img loading="lazy" src={logo} alt={`${company} logo`} className="object-contain shrink-0 w-12 aspect-square" />
          <div className="gap-2 self-stretch px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px]">
            {jobType}
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
          <div className="flex gap-2 justify-center items-center self-start text-base text-slate-500">
            <span className="self-stretch my-auto">{company}</span>
            <span className="self-stretch my-auto">{location}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-start self-start mt-6 text-sm font-semibold whitespace-nowrap">
        {tags.map((tag, index) => (
          <div key={index} className={`gap-2 self-stretch px-2.5 py-1.5 text-${tag.color} border border-${tag.color} border-solid rounded-[80px]`}>
            {tag.name}
          </div>
        ))}
      </div>
      <div className="flex flex-col mt-6 w-full text-sm text-center text-slate-500">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f222244f5aac6ace1bb71e2d414b3d8448a9027abe1c1ded52d5ee933bcb688d?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b" alt="" className="object-contain w-full aspect-[33.33]" />
        <div className="self-start mt-2">
          <span className="font-semibold text-slate-800">{applicants} applied</span>{" "}
          <span className="text-slate-500">of {capacity} capacity</span>
        </div>
      </div>
    </article>
  );
};

export default JobCard;
