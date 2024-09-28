import React from 'react';

type WelcomeBackProps = {
  imageUrl: string;
  title: string;
  subtitle: string;
};

const WelcomeBack: React.FC<WelcomeBackProps> = ({ imageUrl, title, subtitle }) => {
  return (
    <section className="flex flex-col items-center px-20 py-64 w-full bg-sky-600 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <img loading="lazy" src={imageUrl} alt="Welcome illustration" className="object-contain self-stretch w-full aspect-[1.5] max-md:max-w-full" />
      <div className="mt-5 text-sm leading-7 text-center text-white">
        <h1 className="text-3xl font-semibold leading-[60px]">{title}</h1>
        <p className="text-lg font-semibold">{subtitle}</p>
      </div>
      <nav className="flex gap-2 justify-center items-center mt-16 mb-0 max-md:mt-10 max-md:mb-2.5" aria-label="Page navigation">
        <div className="flex gap-2.5 items-center self-stretch p-2 my-auto w-6 h-6 bg-white rounded-[30px]">
          <div className="flex w-2 h-2 bg-sky-600 rounded-full min-h-[8px]" />
        </div>
        <div className="flex gap-2.5 self-stretch py-1 my-auto w-4 h-4 bg-white min-h-[16px] rounded-[30px]" />
        <div className="flex shrink-0 gap-2.5 self-stretch my-auto w-4 h-4 bg-white rounded-[30px]" />
      </nav>
    </section>
  );
};

export default WelcomeBack;
