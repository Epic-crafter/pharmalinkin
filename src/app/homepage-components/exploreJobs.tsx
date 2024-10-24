import Image from "next/image";
import explore from "../../assets/explore.png"
const ExploreJobs = () => {
    return (
      <div className="mb-8 lg:px-32 px-12 items-center py-8 lg:mx-0 mx-auto">
      <div className="grid lg:grid-cols-2 sm:flex  grid-cols-1 items-center justify-between bg-primary rounded-xl text-white ">
        <div className="w-full  lg:ml-8 space-y-6 p-8">
          <h2 className="text-3xl font-bold mb-4">Explore New Jobs Now</h2>
        
          <p className="mb-6 text-sm" style={{wordSpacing:"0.2rem",lineHeight:"1.4rem",letterSpacing:"1px"}}>
            Get started by creating your profile and uploading your resume. Explore personalized job matches tailored to your skills. Apply with ease and start your career journey today!
          </p>
          <button className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg">
            Sign Up For Free
          </button>
        </div>
        <div className="">
          <Image
            src={explore} 
            alt="Explore Jobs"
            className="w-full"
            />
        </div>
      </div>
            </div>
    );
  };
  
  export default ExploreJobs;
  