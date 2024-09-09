import type { NextPage } from "next";
import JobList from "./job-list";
import Image from "next/image";
import jobopen from '../assets/Latest jobs open.png'
import ryt from '../assets/ryt.png'
export type LandingPageLatestJobOpenType = {
  className?: string;
};

const LandingPageLatestJobOpen: NextPage<LandingPageLatestJobOpenType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-start justify-start pt-[72px] px-[124px] pb-[60px] box-border relative gap-2.5 max-w-full text-left text-29xl text-neutrals-100 font-heading-h2 mq450:pt-[31px] mq450:px-5 mq450:pb-[25px] mq450:box-border mq800:pl-[62px] mq800:pr-[62px] mq800:box-border mq1125:pt-[47px] mq1125:pb-[39px] mq1125:box-border ${className}`}
    >
      
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        
        <div className="flex-1 flex flex-col items-start justify-start gap-12 max-w-full z-[2] mq800:gap-6">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq800:flex-wrap">
            <Image
            alt=""
            src={jobopen}/>
            <div className="flex flex-col items-start justify-start pt-[27px] px-0 pb-0 text-center text-base text-brands-primary font-body-normal-regular">
              <div className="flex flex-row items-start justify-start gap-4">
                <div className="relative leading-[26px] font-semibold inline-block min-w-[104px]">
                  Show all jobs
                </div>
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <Image
                className="w-6 h-6 relative"
                loading="lazy"
                alt=""
                src={ryt}
              />
            </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-8 max-w-full text-xl font-body-normal-regular mq800:gap-4">
            <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[377px] max-w-full mq800:min-w-full">
              <JobList
                companyLogo="/images/socialM.png"
                socialMediaAssistant="Social Media Assistant"
                nomad="Nomad"
                parisFrance="Paris, France"
                propDisplay="unset"
                propMinWidth="unset"
                propMinWidth1="56px"
                propDisplay1="inline-block"
                propMinWidth2="101px"
                caption="Design"
                propWidth="68px"
                propBorderRadius="80px"
                propBorder="1px solid #4640de"
                propGap="8px"
                propAlignSelf="unset"
                propFlex="unset"
                propPadding="4px 9px"
                propBackgroundColor="unset"
                propHeight="12px"
                propWidth1="12px"
                propBackgroundColor1="#4640de"
                propColor="#4640de"
                propDisplay2="inline-block"
                propMinWidth3="48px"
                propAlignSelf1="unset"
                propFlex1="unset"
                propWidth2="unset"
              />
              <JobList
                companyLogo="/images/brand.png"
                socialMediaAssistant="Brand Designer"
                nomad="Dropbox"
                parisFrance="San Fransisco, USA"
                propDisplay="unset"
                propMinWidth="unset"
                propMinWidth1="66px"
                propDisplay1="unset"
                propMinWidth2="unset"
                caption="Design"
                propWidth="68px"
                propBorderRadius="80px"
                propBorder="1px solid #4640de"
                propGap="8px"
                propAlignSelf="unset"
                propFlex="unset"
                propPadding="4px 9px"
                propBackgroundColor="unset"
                propHeight="12px"
                propWidth1="12px"
                propBackgroundColor1="#4640de"
                propColor="#4640de"
                propDisplay2="inline-block"
                propMinWidth3="48px"
                propAlignSelf1="unset"
                propFlex1="unset"
                propWidth2="unset"
              />
              <JobList
                companyLogo="/images/interactive.png"
                socialMediaAssistant="Interactive Developer"
                nomad="Terraform"
                parisFrance="Hamburg, Germany"
                propDisplay="unset"
                propMinWidth="unset"
                propMinWidth1="78px"
                propDisplay1="unset"
                propMinWidth2="unset"
                caption="Design"
                propWidth="68px"
                propBorderRadius="80px"
                propBorder="1px solid #4640de"
                propGap="8px"
                propAlignSelf="unset"
                propFlex="unset"
                propPadding="4px 9px"
                propBackgroundColor="unset"
                propHeight="12px"
                propWidth1="12px"
                propBackgroundColor1="#4640de"
                propColor="#4640de"
                propDisplay2="inline-block"
                propMinWidth3="48px"
                propAlignSelf1="unset"
                propFlex1="unset"
                propWidth2="unset"
              />
              <JobList
                companyLogo="/images/hr.png"
                socialMediaAssistant="HR Manager"
                nomad="Packer"
                parisFrance="Lucern, Switzerland"
                propDisplay="inline-block"
                propMinWidth="121px"
                propMinWidth1="54px"
                propDisplay1="unset"
                propMinWidth2="unset"
                caption="Design"
                propWidth="68px"
                propBorderRadius="80px"
                propBorder="1px solid #4640de"
                propGap="8px"
                propAlignSelf="unset"
                propFlex="unset"
                propPadding="4px 9px"
                propBackgroundColor="unset"
                propHeight="12px"
                propWidth1="12px"
                propBackgroundColor1="#4640de"
                propColor="#4640de"
                propDisplay2="inline-block"
                propMinWidth3="48px"
                propAlignSelf1="unset"
                propFlex1="unset"
                propWidth2="unset"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[377px] max-w-full mq800:min-w-full">
              <JobList
                companyLogo="/images/socialM1.png"
                socialMediaAssistant="Social Media Assistant"
                nomad="Netlify"
                parisFrance="Paris, France"
                propDisplay="unset"
                propMinWidth="unset"
                propMinWidth1="51px"
                propDisplay1="inline-block"
                propMinWidth2="101px"
                caption="Design"
                propWidth="68px"
                propBorderRadius="80px"
                propBorder="1px solid #4640de"
                propGap="8px"
                propAlignSelf="unset"
                propFlex="unset"
                propPadding="4px 9px"
                propBackgroundColor="unset"
                propHeight="12px"
                propWidth1="12px"
                propBackgroundColor1="#4640de"
                propColor="#4640de"
                propDisplay2="inline-block"
                propMinWidth3="48px"
                propAlignSelf1="unset"
                propFlex1="unset"
                propWidth2="unset"
              />
              <JobList
                companyLogo="/images/brand1.png"
                socialMediaAssistant="Brand Designer"
                nomad="Maze"
                parisFrance="San Fransisco, USA"
                propDisplay="unset"
                propMinWidth="unset"
                propMinWidth1="41px"
                propDisplay1="unset"
                propMinWidth2="unset"
                caption="Design"
                propWidth="68px"
                propBorderRadius="80px"
                propBorder="1px solid #4640de"
                propGap="8px"
                propAlignSelf="unset"
                propFlex="unset"
                propPadding="4px 9px"
                propBackgroundColor="unset"
                propHeight="12px"
                propWidth1="12px"
                propBackgroundColor1="#4640de"
                propColor="#4640de"
                propDisplay2="inline-block"
                propMinWidth3="48px"
                propAlignSelf1="unset"
                propFlex1="unset"
                propWidth2="unset"
              />
              <JobList
                companyLogo="/images/interactive1.png"
                socialMediaAssistant="Interactive Developer"
                nomad="Udacity"
                parisFrance="Hamburg, Germany"
                propDisplay="unset"
                propMinWidth="unset"
                propMinWidth1="60px"
                propDisplay1="unset"
                propMinWidth2="unset"
                caption="Design"
                propWidth="68px"
                propBorderRadius="80px"
                propBorder="1px solid #4640de"
                propGap="8px"
                propAlignSelf="unset"
                propFlex="unset"
                propPadding="4px 9px"
                propBackgroundColor="unset"
                propHeight="12px"
                propWidth1="12px"
                propBackgroundColor1="#4640de"
                propColor="#4640de"
                propDisplay2="inline-block"
                propMinWidth3="48px"
                propAlignSelf1="unset"
                propFlex1="unset"
                propWidth2="unset"
              />
              <JobList
                companyLogo="/images/hr1.png"
                socialMediaAssistant="HR Manager"
                nomad="Webflow"
                parisFrance="Lucern, Switzerland"
                caption="Design"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageLatestJobOpen;