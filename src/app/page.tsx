import type { NextPage } from "next";
// import Header1Desktop from "./home-component/header1-desktop";
// import LandingPageCompanyDeskt from "./home-component/landing-page-company-deskt";
// import LandingPageCategoryDesk from "./home-component/landing-page-category-desk";
// import LandingPageCTADesktop from "./home-component/landing-page-c-t-a-desktop";
// import LandingPageFeaturedJobs from "./home-component/landing-page-featured-jobs";
// import LandingPageLatestJobOpen from "./home-component/landing-page-latest-job-open";
// import Footer from "./home-component/footer";
import Header from "./homepage-components/header";
import HeroSection from "./homepage-components/HeroSection";
import TrustedBy from "./homepage-components/trustedBy";
import JobOpportunities from "./homepage-components/jobOpportunities";
import JobCategories from "./homepage-components/jobCategories";
import WhyWeArePopular from "./homepage-components/whyPopular";
import FeaturedJobs from "./homepage-components/featuredJobs";
import ExploreJobs from "./homepage-components/exploreJobs";
import UserFeedback from "./homepage-components/userFeedback";
import Footer from "./homepage-components/footer";
import SearchBar from "./homepage-components/searchbar";
const LandingPage: NextPage = () => {
  return (

    // <div className="w-full relative bg-color-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
    <div className="mx-auto">
      {/* <Header1Desktop />
      <LandingPageCompanyDeskt />
      <LandingPageCategoryDesk />
      <LandingPageCTADesktop />
      <LandingPageFeaturedJobs />
      <LandingPageLatestJobOpen />
      <Footer /> */}
      <div style={{background:"linear-gradient(135deg,#dde7f3, #f4f8fb,#dde7f3)"}}>

      <Header/>
      <HeroSection/>
      </div>
      <div className="w-full mt-4 mb-4">
      <SearchBar/>
      </div>
      <TrustedBy/>
      <JobOpportunities/>
      <JobCategories/>
      <WhyWeArePopular/>
      <FeaturedJobs/>
      <ExploreJobs/>
      <UserFeedback/>
      <Footer/>
    </div>
  );
};
export default LandingPage;