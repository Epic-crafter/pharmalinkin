import type { NextPage } from "next";
import Header1Desktop from "./home-component/header1-desktop";
import LandingPageCompanyDeskt from "./home-component/landing-page-company-deskt";
import LandingPageCategoryDesk from "./home-component/landing-page-category-desk";
import LandingPageCTADesktop from "./home-component/landing-page-c-t-a-desktop";
import LandingPageFeaturedJobs from "./home-component/landing-page-featured-jobs";
import LandingPageLatestJobOpen from "./home-component/landing-page-latest-job-open";
import Footer from "./home-component/footer";

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