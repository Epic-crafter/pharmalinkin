import type { NextPage } from "next";
import Header1Desktop from "../components/header1-desktop";
import LandingPageCompanyDeskt from "../components/landing-page-company-deskt";
import LandingPageCategoryDesk from "../components/landing-page-category-desk";
import LandingPageCTADesktop from "../components/landing-page-c-t-a-desktop";
import LandingPageFeaturedJobs from "../components/landing-page-featured-jobs";
import LandingPageLatestJobOpen from "../components/landing-page-latest-job-open";
import Footer from "../components/footer";

const LandingPage: NextPage = () => {
  return (

    <div className="w-full relative bg-color-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Header1Desktop />
      <LandingPageCompanyDeskt />
      <LandingPageCategoryDesk />
      <LandingPageCTADesktop />
      <LandingPageFeaturedJobs />
      <LandingPageLatestJobOpen />
      <Footer />
    </div>
  );
};
export default LandingPage;