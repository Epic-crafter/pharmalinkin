import type { NextPage } from "next";


export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <header className="flex w-full overflow-hidden flex-wrap gap-10 justify-between p-8 bg-white shadow-sm max-md:px-5">
      {/* Full-width title */}
      {/* <h1 className="my-auto text-3xl font-semibold leading-tight text-slate-800 font-clash">
        My Applications
      </h1> */}
      <nav className="flex gap-8 justify-end items-center text-base font-bold leading-relaxed text-center text-sky-600 ml-auto">
  
  <button
            className="bg-sky-600 text-white inline-block gap-2.5 self-stretch px-6 py-3 my-auto w-[213px] max-md:px-5"
          >
            Back to Homepage
          </button>
  
</nav>

    </header>
  );
};

export default Footer;