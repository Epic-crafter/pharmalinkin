import React from 'react';
import JobCard from './card';
import Image from 'next/image';
import arr from '../../images/arr.png'

interface JobData {
  logo: string;
  jobType: string;
  title: string;
  company: string;
  location: string;
  tags: { name: string; color: string }[];
  applicants: number;
  capacity: number;
}

const jobData: JobData[] = [
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/5a8dd0ebb8cf70fd2fa146f29b406384b71d984f6903612d01059dbc6397a337?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b",
    jobType: "Full-Time",
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    tags: [
      { name: "Marketing", color: "amber-400" },
      { name: "Design", color: "indigo-600" }
    ],
    applicants: 5,
    capacity: 10
  },
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/43a162b6764421e62a2120f6bd2635ebecbde8f4adba51dad56194f48c0aaf97?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b",
    jobType: "Full-Time",
    title: "Brand Designer",
    company: "Nomad",
    location: "Paris, France",
    tags: [
      { name: "Business", color: "emerald-300" },
      { name: "Design", color: "indigo-600" }
    ],
    applicants: 5,
    capacity: 10
  },
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/640bd84a69a6e857219ee3af810d3df291bec5475969a13835e7d16387c80515?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b",
    jobType: "Full-Time",
    title: "Interactive Developer",
    company: "Terraform",
    location: "Berlin, Germany",
    tags: [
      { name: "Marketing", color: "amber-400" },
      { name: "Design", color: "indigo-600" }
    ],
    applicants: 5,
    capacity: 10
  },
  {
    logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/a20ad071afd21516dee9c00d5bbf615af1aea3ee17c09f6786983cd29abd0c47?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b",
    jobType: "Full-Time",
    title: "Product Designer",
    company: "ClassPass",
    location: " Germany",
    tags: [
      { name: "Business", color: "emerald-300" },
      { name: "Design", color: "indigo-600" }
    ],
    applicants: 5,
    capacity: 10
  }
];

const JobUpdates: React.FC = () => {
  return (
    <section className="flex flex-col border border-solid border-zinc-200">
      <header className="flex flex-wrap gap-10 justify-between items-start p-6 w-full font-semibold bg-white shadow-sm max-md:px-5 max-md:max-w-full">
        <h1 className="text-xl leading-tight text-slate-800">Job Updates</h1>
        <a href="#" className="flex gap-2 items-center text-base leading-relaxed text-sky-600">
          <span className="self-stretch my-auto">View All</span>
          <Image loading="lazy" src={arr} alt=''/>
        </a>
      </header>
      <div className="flex flex-wrap gap-6 items-start p-6 w-full leading-relaxed max-md:px-5 max-md:max-w-full">
        {jobData.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </section>
  );
};

export default JobUpdates;