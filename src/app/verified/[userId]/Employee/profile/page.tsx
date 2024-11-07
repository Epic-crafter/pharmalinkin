"use client";
import { FaImage } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useUser } from "@/lib/contexts/user";
import { useRouter } from "next/navigation";

interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
}

interface ProfileData {
  profile: {
    user: {
      name: string;
      email: string;
      profilePicture: string;
    };
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    bio: string;
    location: string;
    mostRecentJobTitle: string;
    preferredJobTitle: string;
    preferredLocation: string;
    openForRemote: boolean;
    education: Education[];
    socialLinks: {
      linkedin: string;
      github: string;
      twitter: string;
    };
  };
}

export default function Profile() {
  const { userId } = useUser();
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [newEducation, setNewEducation] = useState<Education>({
    institution: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
  });
  const [showEducationForm, setShowEducationForm] = useState(false); // State to manage form visibility

  useEffect(() => {
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
            setProfileData(data); // Set the profile data from the API
            console.log("Fetched Profile Data:", data); // Displaying fetched data in console
          } else {
            console.error("Failed to fetch profile data");
          }
        } catch (error) {
          console.error("Error fetching profile data:", error);
        }
      }
    };

    fetchProfileData();
  }, [userId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setNewEducation({
      ...newEducation,
      [field]: e.target.value,
    });
  };

  const handleAddEducation = () => {
    if (
      newEducation.institution &&
      newEducation.degree &&
      newEducation.fieldOfStudy &&
      newEducation.startDate &&
      newEducation.endDate
    ) {
      setProfileData((prevState) => {
        if (!prevState) return prevState;
        return {
          ...prevState,
          profile: {
            ...prevState.profile,
            education: [...prevState.profile.education, newEducation],
          },
        };
      });
      setNewEducation({
        institution: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
      });
      setShowEducationForm(false); // Hide the form after adding education
    }
  };

  if (!profileData) {
    return <div>Loading...</div>; // Show loading state if profileData is not yet available
  }

  const { user, firstName, lastName, email, phone, bio, location, mostRecentJobTitle, preferredJobTitle, preferredLocation, openForRemote, education, socialLinks } = profileData.profile;

  return (
    <div>
      <div className="flex">
        <div className="w-3/5 min-h-screen rounded-lg flex-grow">
          <main>
            <div className="bg-white rounded flex border-t-2 border-gray-200 gap-8 p-4">
              <button className="text-blue-600 border-b-2 border-blue-600 pb-2 font-semibold">
                My Profile
              </button>
              <button className="text-gray-500 pb-2 hover:text-blue-600">Login Details</button>
              <button className="text-gray-500 pb-2 hover:text-blue-600">Notifications</button>
            </div>
            <hr className="border-gray-300 mt-0" />

            <div className="bg-white space-y-8">
              <div className="bg-white p-2 m-2">
                <h2 className="text-lg font-semibold">Basic Information</h2>
                <p className="text-gray-500">This is your personal information that you can update anytime.</p>
              </div>
              <hr className="border-gray-300 mt-0" />

              <div className="flex justify-between gap-4 flex-col md:flex-row items-start md:items-center md:justify-between p-2 m-2">
                <div className="lg:w-1/5 md:w-2/5 sm:w-full">
                  <h2 className="text-lg font-semibold">Profile Photo</h2>
                  <p className="text-gray-500">This image will be shown publicly as your profile picture.</p>
                </div>
                <div className="lg:w-3/5 md:w-3/5 sm:w-full sm:justify-center md:justify-center flex gap-10 flex-row items-center">
                  <div className="w-40 h-40 rounded-full flex items-center">
                    <img
                      src={user.profilePicture || "https://via.placeholder.com/150"}
                      onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/150")}
                      alt="Profile"
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
                  <h2 className="text-lg font-semibold">Personal Details</h2>
                </div>
                <div className="lg:w-3/5 md:w-3/5 sm:w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-medium text-gray-900">Full Name</label>
                    <p className="mt-1">{firstName} {lastName}</p>
                  </div>
                  <div>
                    <label className="block font-medium text-gray-900">Phone Number</label>
                    <p className="mt-1">{phone || "Not Provided"}</p>
                  </div>
                  <div>
                    <label className="block font-medium text-gray-900">Email</label>
                    <p className="mt-1">{email}</p>
                  </div>
                  <div>
                    <label className="block font-medium text-gray-900">Location</label>
                    <p className="mt-1">{location || "Not Provided"}</p>
                  </div>
                  <div>
                    <label className="block font-medium text-gray-900">Bio</label>
                    <p className="mt-1">{bio || "Not Provided"}</p>
                  </div>
                  <div>
                    <label className="block font-medium text-gray-900">Most Recent Job Title</label>
                    <p className="mt-1">{mostRecentJobTitle || "Not Provided"}</p>
                  </div>
                  <div>
                    <label className="block font-medium text-gray-900">Preferred Job Title</label>
                    <p className="mt-1">{preferredJobTitle || "Not Provided"}</p>
                  </div>
                  <div>
                    <label className="block font-medium text-gray-900">Preferred Location</label>
                    <p className="mt-1">{preferredLocation || "Not Provided"}</p>
                  </div>
                  <div>
                    <label className="block font-medium text-gray-900">Open for Remote</label>
                    <p className="mt-1">{openForRemote ? "Yes" : "No"}</p>
                  </div>
                </div>
              </div>
              <hr className="border-gray-300 mt-0" />

              <div className="p-2 m-2">
                <h2 className="text-lg font-semibold">Educational Details</h2>
              </div>
              <hr className="border-gray-300 mt-0" />

              <div className="pl-4">
  {education.length > 0 ? (
    education.map((edu: Education, index: number) => (
      <div key={index} className="my-6 border-b-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full">
            <label className="block font-medium text-gray-900">Institution</label>
            <p className="mt-1">{edu.institution}</p>
          </div>
          <div className="w-full">
            <label className="block font-medium text-gray-900">Degree</label>
            <p className="mt-1">{edu.degree}</p>
          </div>
          <div className="w-full">
            <label className="block font-medium text-gray-900">Field of Study</label>
            <p className="mt-1">{edu.fieldOfStudy}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full">
            <label className="block font-medium text-gray-900">Start Date</label>
            <p className="mt-1">{edu.startDate}</p>
          </div>
          <div className="w-full">
            <label className="block font-medium text-gray-900">End Date</label>
            <p className="mt-1">{edu.endDate}</p>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p>No educational details available.</p>
  )}
</div>


              {/* Show Add Education Form */}
              {showEducationForm && (
                <div className="border-2 border-dashed p-4 my-6">
                  <h3 className="text-lg font-semibold">Add New Education</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block font-medium text-gray-900">Institution</label>
                      <input
                        type="text"
                        value={newEducation.institution}
                        onChange={(e) => handleInputChange(e, "institution")}
                        className="w-full border-2 p-2 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-900">Degree</label>
                      <input
                        type="text"
                        value={newEducation.degree}
                        onChange={(e) => handleInputChange(e, "degree")}
                        className="w-full border-2 p-2 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-900">Field of Study</label>
                      <input
                        type="text"
                        value={newEducation.fieldOfStudy}
                        onChange={(e) => handleInputChange(e, "fieldOfStudy")}
                        className="w-full border-2 p-2 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-900">Start Date</label>
                      <input
                        type="date"
                        value={newEducation.startDate}
                        onChange={(e) => handleInputChange(e, "startDate")}
                        className="w-full border-2 p-2 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-900">End Date</label>
                      <input
                        type="date"
                        value={newEducation.endDate}
                        onChange={(e) => handleInputChange(e, "endDate")}
                        className="w-full border-2 p-2 rounded-lg"
                      />
                    </div>
                    <button
                      onClick={handleAddEducation}
                      className="bg-blue-600 text-white p-2 rounded-lg mt-4"
                    >
                      Add Education
                    </button>
                  </div>
                </div>
              )}

              {/* Add Education Button */}
              <button
                onClick={() => setShowEducationForm(!showEducationForm)}
                className="text-blue-600  pl-4 border-blue-600 pb-2 font-semibold mt-6"
              >
                {showEducationForm ? "Cancel" : "+ Add More Education"}
              </button>
            </div>
            <div className="flex justify-center pb-4">
                                <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">Submit</button>
                            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
