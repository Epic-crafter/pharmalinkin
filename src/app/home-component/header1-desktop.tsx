import type { NextPage } from "next";
import Image from "next/image"; // Import Image from next/image
import TopMenu from "./top-menu";
import FrameComponent from "./frame-component";
import frame from '../../assets/Frame 3.png'; // Import the image
import pattern from '../../assets/Pattern.png';
import pic from '../../assets/1x.png';
import { Button } from "@/components/ui/button";

export type Header1DesktopType = {
  className?: string;
};

const Header1Desktop: NextPage<Header1DesktopType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-[794px] bg-lights-gray flex flex-col items-end justify-start pt-0 px-0 pb-[716px] box-border relative gap-[9px] max-w-full text-left text-53xl text-neutrals-100 font-body-normal-regular mq450:pb-[196px] mq450:box-border mq1125:pb-[302px] mq1125:box-border mq1350:h-auto mq1350:pb-[465px] mq1350:box-border ${className}`}
    >
      <div className="w-[860px] h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] max-h-full flex items-center justify-center z-[0]">
        <Image
          className="w-full h-full object-contain absolute left-[-68px] top-[0px] [transform:scale(1.159)]"
          alt=""
          src={pattern}
        />
        
      </div>
      <Image
        className="w-[486.5px] h-[918.9px] relative object-cover hidden max-w-full z-[1]"
        alt=""
        src={pic}
      />
      <header className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border gap-[508px] shrink-0 top-[0] z-[99] sticky max-w-full text-left text-5xl text-neutrals-100 font-red-hat-display mq450:gap-[63px] mq800:gap-[127px] mq1350:gap-[254px]">
        <div className="flex flex-row items-start justify-start gap-12 max-w-full mq450:gap-6">
          <div className="flex flex-col items-start justify-start pt-[21px] px-0 pb-0">
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-start justify-start gap-2 z-[1] ml-[-160px]">
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <Image // Use Image component for imported image
                    className="w-8 h-8 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt="Frame"
                    src={frame} // Use the imported image as src
                  />
                </div>
                <h6 className="m-0 relative text-inherit tracking-[-0.01em] leading-[100%] font-bold font-[inherit] inline-block min-w-[120px] whitespace-nowrap text-sm-3">
                  JobHuntly
                </h6>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-1 px-0 pb-0 gap-4 text-base text-neutrals-80 font-body-normal-regular mq800:hidden">
            <TopMenu
              caption="Find Jobs"
              propDisplay="inline-block"
              propMinWidth="76px"
            />
            <TopMenu caption="Browse Companies" />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-3.5 px-0 gap-[15.5px] mq450:hidden">
          <Button variant="ghost" className="p-4">Login</Button>
          <div className="h-[49px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
            <div className="w-px h-[49px] relative border-neutrals-20 border-r-[1px] border-solid box-border" />
          </div>
          <Button className="p-4">Sign Up</Button>
        </div>
      </header>
      <FrameComponent />
    </section>
  );
};

export default Header1Desktop;
