import React from 'react';

interface ApplicationProps {
  company: string;
  logo: string;
  position: string;
  location: string;
  type: string;
  dateApplied: string;
  status: string;
  statusColor: string;
}

const Application: React.FC<ApplicationProps> = ({ company, logo, position, location, type, dateApplied, status, statusColor }) => {
  return (
    <div className={`flex flex-wrap gap-10 justify-between items-center p-6 w-full rounded-lg ${company === 'Udacity' ? 'bg-white' : 'bg-slate-50'} max-md:px-5 max-md:max-w-full`}>
      <div className="flex gap-4 items-center self-stretch my-auto min-w-[240px] w-[446px] max-md:max-w-full">
        <img loading="lazy" src={logo} alt={`${company} logo`} className="object-contain shrink-0 self-stretch my-auto w-16 aspect-square" />
        <div className="flex flex-col self-stretch my-auto min-w-[240px]">
          <div className="text-lg font-bold text-slate-800">{position}</div>
          <div className="flex gap-2 justify-center items-center text-base min-h-[27px] text-slate-500">
            <div className="self-stretch my-auto">{company}</div>
            <div className="self-stretch my-auto">{location}</div>
            <div className="self-stretch my-auto">{type}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col self-stretch my-auto text-base w-[171px]">
        <div className="font-medium text-slate-800">Date Applied</div>
        <div className="mt-1.5 text-slate-500">{dateApplied}</div>
      </div>
      <div className={`flex flex-col justify-center items-start self-stretch my-auto text-sm font-semibold ${statusColor} w-[117px]`}>
        <div className={`gap-2 self-stretch px-2.5 py-1.5 border ${statusColor.replace('text-', 'border-')} border-solid rounded-[80px]`}>
          {status}
        </div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/31db2583bb6d02f4a2f0c4b2effc618eabfc9c964ab69343df7e514417f9ba53?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
    </div>
  );
};

const RecentApplications: React.FC = () => {
  const applications: ApplicationProps[] = [
    {
      company: 'Nomad',
      logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/52fedb4e459cdb815dceb1d168ba97a1745751c31db990503d4a202c8f0ba117?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3',
      position: 'Social Media Assistant',
      location: 'Paris, France',
      type: 'Full-Time',
      dateApplied: '24 July 2024',
      status: 'In Review',
      statusColor: 'text-amber-400'
    },
    {
      company: 'Udacity',
      logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0e3de6a4e23120fee03372d479fb057887792852dee83a6fb56ca766f3990ba8?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3',
      position: 'Social Media Assistant',
      location: 'New York, USA',
      type: 'Full-Time',
      dateApplied: '23 July 2024',
      status: 'Shortlisted',
      statusColor: 'text-indigo-600'
    },
    {
      company: 'Packer',
      logo: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9b2a5c21a703c8872e5684e3f824e8cc52f0723cccdd514e59be9eaa8e40a782?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3',
      position: 'Social Media Assistant',
      location: 'Madrid, Spain',
      type: 'Full-Time',
      dateApplied: '22 July 2024',
      status: 'Declined',
      statusColor: 'text-red-400'
    }
  ];

  return (
    <section className="flex flex-col px-8 pb-8 max-w-full leading-relaxed w-[1168px] max-md:px-5">
      <div className="flex flex-col w-full">
        <div className="flex flex-col py-6 w-full bg-white border border-solid border-zinc-200 max-md:max-w-full">
          <h3 className="self-start ml-6 text-xl font-semibold leading-tight text-slate-800 max-md:ml-2.5">
            Recent Applications History
          </h3>
          <div className="shrink-0 mt-8 h-px border border-solid bg-zinc-200 border-zinc-200 max-md:max-w-full" />
          <div className="flex flex-col mx-6 mt-6 max-md:mr-2.5 max-md:max-w-full">
            {applications.map((app, index) => (
              <Application key={index} {...app} />
            ))}
          </div>
          <button className="flex gap-4 items-center self-center mt-6 text-base font-semibold text-center text-sky-600">
            <div className="self-stretch my-auto">View all applications history</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1615f346c98f623b7359ff24ffc9e038077e7653459387f4a70772591000ef9a?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentApplications;