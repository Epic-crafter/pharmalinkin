import React from 'react';
import { ApplicationRow, ApplicationRowProps } from './ApplicationRow';
import { Pagination } from './Pagination';
import Image from 'next/image';
import magnify from '../../images/magnify.png'
import filter from '../../images/filter.png'

const applications: ApplicationRowProps[] = [
  {
    id: 1,
    companyName: "Nomad",
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/fdd6a381bbdcd78193f6116ef73fa93a5e0d96f46509b6c752455f8f13e21e90?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b",
    role: "Social Media Assistant",
    dateApplied: "24 July 2024",
    status: "In Review",
    statusColor: "amber-400"
  },
  {
    id: 2,
    companyName: "Udacity",
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/ec2793ce87b48b37a01d1d74e4895da60fd57a5d135adafe6c3af11291c699d7?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b",
    role: "Social Media Assistant",
    dateApplied: "20 July 2024",
    status: "Shortlisted",
    statusColor: "#56CDAD"
  },
  {
    id: 3,
    companyName: "Packer",
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/0314dfa3129816ad1bbf146c6182dadeeef2374741e55dbce47d3fb3bad84144?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b",
    role: "Social Media Assistant",
    dateApplied: "16 July 2024",
    status: "Offered",
    statusColor: "indigo-600"
  },
  {
    id: 4,
    companyName: "Divvy",
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/71fb1e2f311b4a9d65fa85ed2b2a058e8906488d603cd75b19adc91d71a2fdfd?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b",
    role: "Social Media Assistant",
    dateApplied: "14 July 2024",
    status: "Interviewing",
    statusColor: "amber-400"
  },
  {
    id: 5,
    companyName: "DigitalOcean",
    companyLogo: "https://cdn.builder.io/api/v1/image/assets/TEMP/619d68ede8bfb0290387e1f144192326cc22ecf1a9a7cf11d10e8bc6f1ae5df3?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b",
    role: "Social Media Assistant",
    dateApplied: "10 July 2024",
    status: "Unsuitable",
    statusColor: "red-400"
  }
];

export function ApplicationHistory() {
  return (
    <main className="flex flex-col py-6 bg-white text-slate-800">
      <header className="flex flex-wrap gap-10 max-md:max-w-full">
        <h1 className="self-stretch my-auto text-xl ml-8 font-semibold leading-tight text-left">
          Applications History
        </h1>
        <div className="flex gap-2 self-stretch mr-16 my-auto ml-auto text-right font-medium leading-relaxed whitespace-nowrap">
        <div className="flex gap-2 ml-auto mr-16">
  <div className="flex gap-2 text-right px-4 py-3 bg-white border border-solid border-zinc-200">
    <Image loading="lazy" src={magnify} alt=''/>
    <span className="self-stretch my-auto">Search</span>
  </div>
  <div className="flex gap-2 text-right px-4 py-3 bg-white border border-solid border-zinc-200">
    <Image loading="lazy" src={filter} alt=''/>
    <span className="self-stretch my-auto">Filter</span>
  </div>
</div>

    </div>
      </header>
      <section className="flex flex-col mt-6 w-full text-base leading-relaxed shadow-sm max-md:max-w-full">
        <div className="flex flex-wrap items-center pb-6 pl-6 max-w-full font-medium text-gray-800 bg-white shadow-sm w-[1102px] max-md:pl-5">
          <div className="self-stretch my-auto w-14 opacity-50">#</div>
          <div className="self-stretch my-auto opacity-50 w-[221px]">Company Name</div>
          <div className="self-stretch my-auto opacity-50 w-[275px]">Roles</div>
          <div className="self-stretch my-auto opacity-50 w-[194px]">Date Applied</div>
          <div className="self-stretch my-auto opacity-50">Status</div>
        </div>
        {applications.map((app, index) => (
          <ApplicationRow key={app.id} {...app} isEven={index % 2 === 1} />
        ))}
      </section>
      <Pagination />
    </main>
  );
}