import type { NextPage } from "next";
import "../app/globals.css";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-midnightblue-200 flex flex-row items-start justify-start pt-[88px] px-[108px] pb-5 box-border relative gap-32 max-w-full text-left text-5xl text-lavender-100 font-bai-jamjuree mq800:gap-8 mq800:pl-[27px] mq800:pr-[27px] mq800:box-border mq450:gap-4 mq450:pt-[57px] mq450:box-border mq1300:gap-16 mq1300:flex-wrap mq1300:pl-[54px] mq1300:pr-[54px] mq1300:box-border ${className}`}
    >
      <div className="w-[603px] flex flex-col items-end justify-start min-w-[603px] max-w-full mq1125:min-w-full mq1300:flex-1">
        <div className="w-[181px] flex flex-col items-start justify-start gap-[26px]">
          <h3 className="m-0 relative text-inherit leading-[38px] font-semibold font-[inherit] inline-block min-w-[119px] mq450:text-lgi mq450:leading-[30px]">
            Help Links
          </h3>
          <div className="self-stretch h-36 relative text-lg leading-[42px] text-lavender-300 flex items-center shrink-0">
            <span>
              <p className="m-0">About Us</p>
              <p className="m-0">Services</p>
              <p className="m-0">{`Privacy Policy `}</p>
              <p className="m-0">{`Terms & Condition`}</p>
            </span>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full mt-[-208px] text-base text-lavender-300">
          <div className="flex flex-row items-start justify-start relative max-w-full">
            <div className="h-[150px] w-8 !m-[0] absolute bottom-[-10px] left-[0px] flex flex-row items-start justify-start [transform:_rotate(-90deg)] [transform-origin:0_0]">
              <div className="h-px w-[33px] relative border-midnightblue-100 border-t-[1px] border-solid box-border" />
              <div className="h-px w-[33px] relative border-midnightblue-100 border-t-[1px] border-solid box-border ml-[-18px]" />
              <div className="flex-1 flex flex-col items-start justify-start pt-px pb-0 pl-0 pr-[33px] ml-[-18px]">
                <img
                  className="w-[30px] h-[30px] relative object-contain [transform:_rotate(90deg)]"
                  loading="lazy"
                  alt=""
                  src="/social-icon--hover-facebook@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-px pb-0 pl-0 pr-[33px] ml-[-18px]">
                <img
                  className="w-[30px] h-[30px] relative object-contain [transform:_rotate(90deg)]"
                  loading="lazy"
                  alt=""
                  src="/social-icon--facebook-bg.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 ml-[-18px]">
                <img
                  className="w-[30px] h-[30px] relative object-contain [transform:_rotate(90deg)]"
                  loading="lazy"
                  alt=""
                  src="/social-icon--facebook-bg-1@2x.png"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[174px] max-w-full mq450:gap-[87px]">
              <div className="w-[294px] flex flex-col items-start justify-start gap-7">
                <div className="self-stretch h-11 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-0 px-[5px] pb-[6.8px] box-border gap-[14.8px]">
                  <img
                    className="h-[44.1px] w-[109.9px] relative"
                    loading="lazy"
                    alt=""
                    src="/group-2.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[5.3px] px-0 pb-0">
                    <img
                      className="self-stretch h-[31.9px] relative max-w-full overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/group-3.svg"
                    />
                  </div>
                </div>
                <div className="w-[287px] h-12 relative leading-[32px] flex items-center shrink-0">{`Find your next career opportunity and connect with like-minded individuals. `}</div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pl-1.5 pr-0 text-lg text-steelblue font-outfit">
                <div className="relative leading-[30px] z-[1]">
                  © 2023 All Right Reserved Creativemouse.co
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[416px] flex flex-col items-start justify-start gap-6 min-w-[416px] max-w-full mq800:min-w-full mq1300:flex-1">
        <div className="w-[358px] flex flex-col items-start justify-start gap-2 max-w-full">
          <h3 className="m-0 relative text-inherit leading-[40px] font-semibold font-[inherit] mq450:text-lgi mq450:leading-[30px]">
            Subscribe Our Newsletter
          </h3>
          <div className="self-stretch relative text-base leading-[24px] text-white">
            Get the freshest job news and articles delivered to your inbox every
            week.
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start relative text-base text-cornflowerblue-100">
          <div className="self-stretch bg-white flex flex-row items-center justify-start py-4 px-8 whitespace-nowrap">
            <div className="relative leading-[32px] inline-block min-w-[104px]">
              Email Address
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-4 px-[38px] bg-mediumslateblue-200 !m-[0] absolute top-[24px] left-[303px] overflow-hidden flex flex-row items-center justify-center z-[1] hover:bg-mediumslateblue-100">
            <div className="relative text-base leading-[24px] font-medium font-bai-jamjuree text-white text-left inline-block min-w-[53px]">
              Submit
            </div>
          </button>
        </div>
      </div>
      <div className="h-px w-[1225px] absolute !m-[0] right-[101px] bottom-[67px] border-slateblue border-t-[1px] border-solid box-border z-[1]" />
    </footer>
  );
};

export default Footer;