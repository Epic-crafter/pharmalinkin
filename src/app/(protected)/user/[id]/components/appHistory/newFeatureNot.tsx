import React from "react";
import Image from "next/image";
import Icon from '../images/Icon.png'
import cross from '../images/cross.png'
interface NewFeatureNotificationProps {
  iconSrc?: string;
  title?: string;
  description?: string;
  closeSrc: string;
  src: string;
  
}

const NewFeatureNotification: React.FC<NewFeatureNotificationProps> = ({
  iconSrc,
  title,
  description,
  closeSrc
}) => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-wrap gap-6 py-5 pr-4 pl-8 bg-violet-50 max-md:pl-5">
      <Image
      loading="lazy"
      src={Icon}
      alt="New feature notification icon"
      className="object-contain shrink-0 self-start mt-2 w-14 rounded-none aspect-[0.95]"
    />
        <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between text-lg font-semibold text-sky-600 max-md:max-w-full">
        <h2>New Feature</h2>
        <button aria-label="Close notification">
          <Image
            loading="lazy"
            src={cross}
            alt=""
            className="object-contain shrink-0 self-start w-6 aspect-square"
          />
        </button>
      </div>
      <p className="text-base leading-7 text-slate-500 w-[735px] max-md:max-w-full">
      You can request a follow-up 7 days after applying for a job if the application status is in review. Only one follow-up is allowed per job.
      </p>
    </div>
      </div>
    </section>
  );
};

export {NewFeatureNotification};