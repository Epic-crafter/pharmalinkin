import React from 'react';

type UserTypeOption = {
  icon: string;
  title: string;
  description: string;
};

type UserTypeSelectionProps = {
  options: UserTypeOption[];
};

const UserTypeSelection: React.FC<UserTypeSelectionProps> = ({ options }) => {
  return (
    <div className="flex gap-5 max-md:flex-col">
      {options.map((option, index) => (
        <button
          key={index}
          className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full p-7 pt-6 pb-12 rounded-xl border-2 border-solid border-zinc-300 hover:border-sky-600 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
        >
          <div className="flex gap-5 justify-between">
            <img
              loading="lazy"
              src={option.icon}
              alt={`${option.title} icon`}
              className="object-contain shrink-0 aspect-square w-[41px]"
            />
            <div className="flex shrink-0 my-auto rounded-full border-solid border-[5px] border-zinc-300 h-[33px] w-[33px]" />
          </div>
          <h2 className="self-center mt-12 text-2xl font-medium leading-10 text-center text-gray-900 w-[271px] max-md:mt-10">
            {option.title}
            <br />
            {option.description}
          </h2>
        </button>
      ))}
    </div>
  );
};

export default UserTypeSelection;
