import type { NextPage } from "next";
import JobList from "./job-list";

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
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/bg.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
        <div className="h-[794px] w-[860px] absolute !m-[0] right-[-324px] bottom-[-60px] z-[1] flex items-center justify-center">
          <img
            className="h-full w-full z-[1] object-contain absolute left-[-68px] top-[-41px] [transform:scale(1.159)]"
            alt=""
            src="/pattern-2.svg"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-12 max-w-full z-[2] mq800:gap-6">
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq800:flex-wrap">
            <h1 className="m-0 w-[386px] relative text-inherit leading-[53px] font-semibold font-[inherit] inline-block max-w-full mq450:text-10xl mq450:leading-[32px] mq800:text-19xl mq800:leading-[42px]">
              <span>{`Latest `}</span>
              <span className="text-accents-blue">jobs open</span>
            </h1>
            <div className="flex flex-col items-start justify-start pt-[27px] px-0 pb-0 text-center text-base text-brands-primary font-body-normal-regular">
              <div className="flex flex-row items-start justify-start gap-4">
                <div className="relative leading-[26px] font-semibold inline-block min-w-[104px]">
                  Show all jobs
                </div>
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <img className="w-6 h-6 relative" alt="" src="/icon-42.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-8 max-w-full text-xl font-body-normal-regular mq800:gap-4">
            <div className="flex-1 flex flex-col items-start justify-start gap-4 min-w-[377px] max-w-full mq800:min-w-full">
              <JobList
                companyLogo="/company-logo-12.svg"
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
                companyLogo="/company-logo-13.svg"
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
                companyLogo="/company-logo-14.svg"
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
                companyLogo="/company-logo-15.svg"
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
                companyLogo="/company-logo-16@2x.png"
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
                companyLogo="/company-logo-17@2x.png"
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
                companyLogo="/company-logo-18@2x.png"
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
                companyLogo="/company-logo-19@2x.png"
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