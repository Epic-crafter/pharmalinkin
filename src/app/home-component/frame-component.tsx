import { Button } from "shadcn/ui/button";
import { Input } from "shadcn/ui/input";
import Image from "next/image";
import SearchBar from "./search-bar";
import title from "../../assets/Title.png";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full flex flex-row items-start justify-between p-5 gap-8 max-w-screen-lg mx-auto ${className}`}
    >
      {/* Left Section */}
      <div className="flex flex-col items-start justify-start pt-20 w-1/2">
        {/* Title Image */}
        <div className="mb-6">
          <Image
            className="w-[455px] max-w-full"
            loading="lazy"
            alt="Title"
            src={title}
          />
        </div>

        {/* Text */}
        <div className="text-lg text-gray-500 mb-4">
          Great platform for the job seeker searching for new career heights and passionate about startups.
        </div>

        {/* Search Bar */}
        <div className="w-full mb-4">
          <SearchBar />
        </div>

        {/* Popular Tags */}
        <div className="text-sm text-gray-600">
          <span>Popular: </span>
          <span className="text-blue-600">UI Designer, UX Researcher, Android, Admin</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center justify-center w-1/2">
        {/* Placeholder for the right image or element */}
        <div className="relative w-full h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">
          {/* Add your image here */}
          <p className="text-lg text-gray-500">Image or Illustration</p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
