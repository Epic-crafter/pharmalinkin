"use client";
import { FaImage } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useUser } from "@/lib/contexts/user";
import { useRouter } from "next/navigation";

interface SocialLinks {
  linkedin: string;
  facebook: string;
  twitter: string;
}

interface CompanyProfileData {
    user: {
      name: string;
      email: string;
    };
    companyName: string;
    industry: string;
    location: string;
    website: string;
    about: string;
    type: string;
    foundedYear: number;
    companySize: string;
    logo: string;
    verified: boolean;
    createdAt: string;
    socialLinks: SocialLinks;
}

export default function CompanyProfile() {
  const { userId } = useUser();
  const [companyData, setCompanyData] = useState<CompanyProfileData | null>(null);

  const fetchCompanyData = async () => {
    if (userId) {
      try {
        const response = await fetch("/api/company/get-profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });
        if (response.ok) {
          const data = await response.json();
          console.log(data[0]);
          
          setCompanyData(data[0]);
          console.log("Fetched Company Data:", data);
        } else {
          console.error("Failed to fetch company data");
        }
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    }
  };

  useEffect(() => {
    fetchCompanyData();
  }, [userId]);

  if (!companyData) {
    return <div>Loading...</div>;
  }

  const {companyName, industry, location, website, about, type, foundedYear, companySize, logo, verified, createdAt, socialLinks } = companyData;

  return (
    <div>
      <div className="flex">
        <div className="w-3/5 min-h-screen rounded-lg flex-grow">
          <main>
            <div className="bg-white rounded flex border-t-2 border-gray-200 gap-8 p-4">
              <button className="text-blue-600 border-b-2 border-blue-600 pb-2 font-semibold">
                Company Profile
              </button>
              <button className="text-gray-500 pb-2 hover:text-blue-600">Settings</button>
            </div>
            <hr className="border-gray-300 mt-0" />
            <div className="bg-white space-y-8">
              <div className="bg-white p-2 m-2">
                <h2 className="text-lg font-semibold">Basic Information</h2>
                <p className="text-gray-500">Company information that can be updated anytime.</p>
              </div>
              <hr className="border-gray-300 mt-0" />

              <div className="flex justify-between gap-4 flex-col md:flex-row items-start md:items-center md:justify-between p-2 m-2">
                <div className="lg:w-1/5 md:w-2/5 sm:w-full">
                  <h2 className="text-lg font-semibold">Company Logo</h2>
                  <p className="text-gray-500">This image will be shown as your company's logo.</p>
                </div>
                <div className="lg:w-3/5 md:w-3/5 sm:w-full sm:justify-center md:justify-center flex gap-10 flex-row items-center">
                  <div className="w-40 h-40 rounded-full flex items-center">
                    <img
                      src={logo || "https://via.placeholder.com/150"}
                      onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/150")}
                      alt="Company Logo"
                      className="w-36 h-36 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center border-dashed border-2 text-gray-500 rounded-lg border-blue-400 lg:h-32 lg:w-72 sm:h-3rem sm:w-4rem p-2">
                    <FaImage className="text-blue-400 h-8 w-6" />
                    <label id="file" className="text-sm mt-2">
                      SVG, PNG, JPG or GIF (max. 400x400px)
                    </label>
                    <input id="file" type="file" className="hidden" />
                  </div>
                </div>
              </div>
              <hr className="border-gray-300 mt-0" />

              <div className="flex justify-between flex-col md:flex-row p-2 m-2">
                <div className="lg:w-1/5 md:w-2/5 sm:w-full">
                  <h2 className="text-lg font-semibold">Company Details</h2>
                </div>
                <div className="lg:w-3/5 md:w-3/5 sm:w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-bold text-gray-900">Company Name</label>
                    <p className="mt-1">{companyName}</p>
                  </div>
                  <div>
                    <label className="block font-bold text-gray-900">Industry</label>
                    <p className="mt-1">{industry || "Not Provided"}</p>
                  </div>
                  <div>
                    <label className="block font-bold text-gray-900">Location</label>
                    <p className="mt-1">{location || "Not Provided"}</p>
                  </div>
                  <div>
                    <label className="block font-bold text-gray-900">Website</label>
                    <p className="mt-1">{website || "Not Provided"}</p>
                  </div>
                  <div>
                    <label className="block font-bold text-gray-900">About</label>
                    <p className="mt-1">{about || "Not Provided"}</p>
                  </div>
                  <div>
                    <label className="block font-bold text-gray-900">Company Type</label>
                    <p className="mt-1">{type || "Not Provided"}</p>
                  </div>
                  <div>
                    <label className="block font-bold text-gray-900">Founded Year</label>
                    <p className="mt-1">{foundedYear || "Not Provided"}</p>
                  </div>
                  <div>
                    <label className="block font-bold text-gray-900">Company Size</label>
                    <p className="mt-1">{companySize || "Not Provided"}</p>
                  </div>
                  <div>
                    <label className="block font-bold text-gray-900">Verified</label>
                    <p className="mt-1">{verified ? "Yes" : "No"}</p>
                  </div>
                  <div>
                    <label className="block font-bold text-gray-900">Created At</label>
                    <p className="mt-1">{createdAt || "Not Provided"}</p>
                  </div>
                </div>
              </div>
              <hr className="border-gray-300 mt-0" />

              <div className="flex justify-between flex-col md:flex-row p-2 m-2">
                <div className="lg:w-1/5 md:w-2/5 sm:w-full">
                  <h2 className="text-lg font-semibold">Social Links</h2>
                </div>
                <div className="lg:w-3/5 md:w-3/5 sm:w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-bold text-gray-900">LinkedIn</label>
                    <p className="mt-1">{socialLinks.linkedin || "Not Provided"}</p>
                  </div>
                  <div>
                    <label className="block font-bold text-gray-900">Facebook</label>
                    <p className="mt-1">{socialLinks.facebook || "Not Provided"}</p>
                  </div>
                  <div>
                    <label className="block font-bold text-gray-900">Twitter</label>
                    <p className="mt-1">{socialLinks.twitter || "Not Provided"}</p>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3 px-16 mb-4 mr-16 w-full flex justify-end">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  See Preview
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
