import Image from "next/image";
import Calender from '../images/calender.png'

interface JobApplicationStatusProps {
    name?: string;
    dateRange?: string;
  }
  
  const JobApplicationStatus: React.FC<JobApplicationStatusProps> = ({ name, dateRange }) => {
    return (
      <section className="flex flex-wrap gap-10 justify-between items-center p-8 bg-white max-md:px-5">
        <header className="flex flex-col self-stretch my-auto min-w-[240px]">
          <h1 className="text-2xl font-semibold leading-tight text-slate-800">
            Keep it up, Jake
          </h1>
          <p className="mt-2 text-base font-medium leading-relaxed text-slate-500">
            Here is job applications status from July 19 - July 25.
          </p>
        </header>
        <div className="flex gap-7 justify-between items-center self-stretch px-2 py-3 my-auto text-base leading-relaxed bg-white border border-solid border-zinc-200 text-slate-800 w-[180px]">
      <span className="self-stretch my-auto text-sm mx-2 text-slate-500">July 19-July 25</span>
      <Image 
        src={Calender} 
        alt="Date range picker icon" 
        className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" 
      />
    </div>
      </section>
    );
  };
  
  export {JobApplicationStatus};