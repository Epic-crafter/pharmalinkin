import { Input } from "../components/ui/input";
import type { NextPage } from "next";

export type Input1Type = {
  className?: string;
};

const Input1: NextPage<Input1Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 bg-color-white border-neutrals-20 border-[1px] border-solid box-border flex flex-row items-start justify-start py-2.5 px-4 min-w-[109px] ${className}`}
    >
      <Input
        className="w-[109px] border-none outline-none font-body-normal-regular text-base bg-transparent h-[26px] leading-[160%] text-neutrals-40 p-0"
        placeholder="Email Address"
        type="text"
      />
    </div>
  );
};

export default Input1;
