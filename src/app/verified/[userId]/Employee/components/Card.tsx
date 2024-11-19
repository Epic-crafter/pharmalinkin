import { FaBriefcase, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaRegUserCircle } from "react-icons/fa";
import Xlogo from "../../../../../assets/Xlogo.png"
import Image from "next/image";
import { useUser } from "@/lib/contexts/user";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function Card() {
  const { userId } = useUser();
  const [profileData, setProfileData] = useState<any>(null);

  console.log("USER-ID", userId);

  const fetchProfileData = async () => {
    if (userId) {
      try {
        const response = await fetch("/api/users/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });
        if (response.ok) {
          const data = await response.json();
          setProfileData(data.profile);
          console.log("Fetched Profile Data:", data);
        } else {
          console.error("Failed to fetch profile data");
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    }
  };
  useEffect(() => {
    fetchProfileData();
  }, [userId]);


  return (
    <div className="flex bg-gray-100">
      <div className="w-96 bg-white rounded p-4 text-center">
        {/* Profile Icon */}
        <div className="flex justify-start gap-2 items-center mb-4">
          <div className=" ">
            <FaRegUserCircle className="text-primary font-bold " style={{ fontSize: "80px" }} />
           
          </div>
          {/* Name and Title and Icons */}
          <div className="flex flex-col text-left">
            <h2 className="text-lg font-bold">{profileData?.firstName} {profileData?.lastName}</h2>
            <p className="text-gray-500 text-xs">{profileData?.bio}</p>
            {/* icons */}
            <div className="flex gap-3">
             <a href=""> <FaInstagram className="text-lg" /></a>
             <a href={profileData?.socialLinks.linkedin}><FaLinkedin className="text-primary text-lg" /></a>
             <a href={profileData?.socialLinks.twitter}> <Image src={Xlogo} alt="" className="w-5" /></a>
            </div>
          </div>
        </div>

        <hr />

        <p className="text-gray-700 mt-4 flex items-center text-sm">
          <FaBriefcase className="text-black" /> : {profileData?.mostRecentJobTitle}
        </p>
        <p className="text-gray-700 mt-4 flex items-center text-sm">
          <FaMapMarkerAlt className="text-black " /> : {profileData?.location}
        </p>
      </div>
    </div>
  );
}

