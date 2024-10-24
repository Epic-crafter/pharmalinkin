import { FaDribbble, FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.jpg";
import Image from "next/image";
const Footer = () => {
    return (
      <footer className="bg-blue-800 text-gray-300 py-12 lg:px-32 px-12 pt-12 text-sm lg:mx-0 mx-auto">
        <div className="  grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_2fr]  gap-8 justify-between">
          
          {/* Logo & Description */}
          <div className="space-y-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 flex justify-center items-center">
                {/* Replace with your logo */}
                <Image className=' h-10 w-10 rounded-full' src={logo} alt='' />

              </div>
             
              <h2 className="text-xl font-semibold ml-2 text-white" style={{letterSpacing:"0.1rem"}}>Pharmalinkin</h2>
            </div>
            <p style={{wordSpacing:"0.2rem",lineHeight:"1.5rem"}}>
              Great platform for the job seeker that is passionate about startups.
              Find your dream job easier.
            </p>
          </div>
          
          {/* About Links */}
          <div>
            <h2 className=" mb-4 text-lg text-white">About</h2>
            <ul className="space-y-5">
              <li>
                <a href="#" className="hover:underline">Companies</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Pricing</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Terms</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Advice</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
            </ul>
          </div>
  
          {/* Resources Links */}
          <div>
            <h2 className=" mb-4 text-lg text-white" >Resources</h2>
            <ul className="space-y-5">
              <li>
                <a href="#" className="hover:underline">Help Docs</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Guide</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Updates</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contact Us</a>
              </li>
            </ul>
          </div>
  
          {/* Newsletter Subscription */}
          <div>
            <h2 className=" mb-4 text-lg text-white">Get job notifications</h2>
            <div className="space-y-8">

            <p className="mb-4" >
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="p-4 w-full text-black"
                />
              <button className="bg-indigo-600 px-4 text-white p-4 font-semibold hover:bg-indigo-500">
                Subscribe
              </button>
                </div>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="border-t border-blue-600 mt-8 pt-8">
          <div className=" mx-auto flex flex-col md:flex-row items-center justify-between ">
            <p className="text-gray-400">2024. @Pharmalinkin. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0 ">
              <a href="https://facebook.com" className="hover:text-blue-300 shadow p-2 bg-blue-700 rounded-full">
                <FaFacebookF className="text-white"/>
              </a>
              <a href="https://instagram.com" className="hover:text-blue-300 shadow p-2 bg-blue-700 rounded-full">
                <FaInstagram className="text-white"/>
              </a>
              <a href="https://dribbble.com" className="hover:text-blue-300 shadow p-2 bg-blue-700 rounded-full">
                <FaDribbble className="text-white"/>
              </a>
              <a href="https://linkedin.com" className="hover:text-blue-300 shadow p-2 bg-blue-700 rounded-full">
                <FaLinkedin className="text-white"/>
              </a>
              <a href="https://twitter.com" className="hover:text-blue-300 shadow p-2 bg-blue-700 rounded-full">
                <FaTwitter className="text-white"/>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  