import { FaBriefcase, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaRegUserCircle } from "react-icons/fa";
import Xlogo from "../../../../../assets/Xlogo.png"
import Image from "next/image";
export default function Card() {
  return (
    <div className="flex bg-gray-100">
      <div className="w-96 bg-white rounded p-4 text-center">
        {/* Profile Icon */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <div className=" ">
            <FaRegUserCircle className="text-primary font-bold " style={{ fontSize: "80px" }} />
           
          </div>
          {/* Name and Title and Icons */}
          <div className="flex flex-col text-left">
            <h2 className="text-lg font-bold">Jane Doe</h2>
            <p className="text-gray-500 text-xs">A passionate developer with expertise in frontend and backend technologies</p>
            {/* icons */}
            <div className="flex gap-3">
              <FaInstagram className="text-lg" />
              <FaLinkedin className="text-primary text-lg" />
              <Image src={Xlogo} alt="" className="w-5" />
            </div>
          </div>
        </div>

        <hr />

        <p className="text-gray-700 mt-4 flex items-center text-sm">
          <FaBriefcase className="text-black" /> : Software Developer
        </p>
        <p className="text-gray-700 mt-4 flex items-center text-sm">
          <FaMapMarkerAlt className="text-black " /> : 123 House , Xroad , City, India
        </p>
      </div>
    </div>
  );
}
