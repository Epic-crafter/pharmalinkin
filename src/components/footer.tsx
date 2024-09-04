import type { NextPage } from "next";
import FooterContent from "./footer-content";
import DividerSocial from "./divider-social";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-color-black flex flex-col items-center justify-start pt-16 px-5 pb-10 box-border gap-20 max-w-full text-left text-lg text-color-white font-body-normal-regular mq450:gap-5 mq800:gap-10 mq800:pt-[42px] mq800:pb-[26px] mq800:box-border ${className}`}
    >
      <FooterContent />
      <DividerSocial />
    </footer>
  );
};

export default Footer;