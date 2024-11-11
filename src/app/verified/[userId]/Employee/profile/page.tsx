"use client";
import { FaImage, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useUser } from "@/lib/contexts/user";
import { useRouter } from "next/navigation";

interface Education {
  _id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
}

interface Experience {
  uniqueId: string;
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description?: string;
  position: string;
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
    experience: Experience[];
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
    _id: "",
    institution: "",
    degree: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
  });
  const [showEducationForm, setShowEducationForm] = useState(false);
  const [newExperience, setNewExperience] = useState<Experience>({
    uniqueId: "",
    title: "",
    position: "", 
  company: "",
  startDate: "",
  endDate: "",
  description: "",
  });
  const [showExperienceForm, setShowExperienceForm] = useState(false);

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
          setProfileData(data);
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,  // Handle both input and textarea
    field: string
  ) => {
    const { value } = e.target;
    setNewExperience((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  

  const handleAddEducation = async () => {
    if (
      newEducation.institution &&
      newEducation.degree &&
      newEducation.fieldOfStudy &&
      newEducation.startDate &&
      newEducation.endDate
    ) {
      try {
        const response = await fetch("/api/users/profile/add-education", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, ...newEducation }),
        });

        if (response.ok) {
          const addedEducation = await response.json();
          if (addedEducation.status) fetchProfileData();
          setNewEducation({
            _id: "",
            institution: "",
            degree: "",
            fieldOfStudy: "",
            startDate: "",
            endDate: "",
          });
          setShowEducationForm(false);
        } else {
          console.error("Failed to add education");
        }
      } catch (error) {
        console.error("Error adding education:", error);
      }
    }
  };

  const deleteEducation = async (educationId: string) => {
    if (!userId || !educationId) {
      console.error("User ID and Education ID are required!");
      return;
    }

    try {
      const response = await fetch("/api/users/profile/delete-education", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, educationId }),
      });

      const data = await response.json();
      if (data.status) {
        alert("Education entry deleted successfully");
        setProfileData((prevState) => {
          if (!prevState) return prevState;
          return {
            ...prevState,
            profile: {
              ...prevState.profile,
              education: prevState.profile.education.filter((edu: any) => edu._id !== educationId),
            },
          };
        });
      } else {
        console.error("Failed to delete education entry:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleExperienceInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setNewExperience({
      ...newExperience,
      [field]: e.target.value,
    });
  };

  const handleAddExperience = async () => {
    if (newExperience.title && newExperience.company && newExperience.startDate && newExperience.endDate) {
      try {
        const response = await fetch("/api/users/profile/add-experience", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId, ...newExperience }),
        });

        if (response.ok) {
          const addedExperience = await response.json();
          if (addedExperience.status) fetchProfileData();
          setNewExperience({
            uniqueId: "",
            title: "",
            position: "",  
  company: "",
  startDate: "",
  endDate: "",
  description: "",
          });
          setShowExperienceForm(false);
        } else {
          console.error("Failed to add experience");
        }
      } catch (error) {
        console.error("Error adding experience:", error);
      }
    }
  };

  const deleteExperience = async (experienceId: string) => {
    if (!userId || !experienceId) {
      console.error("User ID and Experience ID are required!");
      return;
    }

    try {
      const response = await fetch("/api/users/profile/delete-experience", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, experienceId }),
      });

      const data = await response.json();
      if (data.status) {
        alert("Experience entry deleted successfully");
        setProfileData((prevState) => {
          if (!prevState) return prevState;
          return {
            ...prevState,
            profile: {
              ...prevState.profile,
              experience: prevState.profile.experience.filter((exp: any) => exp.uniqueId !== experienceId),
            },
          };
        });
      } else {
        console.error("Failed to delete experience entry:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!profileData) {
    return <div>Loading...</div>;
  }

  const { user, firstName, lastName, email, phone, bio, location, mostRecentJobTitle, preferredJobTitle, preferredLocation, openForRemote, education, experience, socialLinks } = profileData.profile;

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
                    <label className="block font-bold  text-gray-900">Full Name</label>
                    <p className="mt-1">{firstName} {lastName}</p>
                  </div>
                  <div>
                    <label className="block font-bold text-gray-900">Phone Number</label>
                    <p className="mt-1">{phone || "Not Provided"}</p>
                  </div>
                  <div>
                    <label className="block font-bold text-gray-900">Email</label>
                    <p className="mt-1">{email}</p>
                  </div>
                  <div>
                    <label className="block font-bold text-gray-900">Location</label>
                    <p className="mt-1">{location || "Not Provided"}</p>
                  </div>
                  <div>
                    <label className="block font-bold text-gray-900">Bio</label>
                    <p className="mt-1">{bio || "Not Provided"}</p>
                  </div>
                  <div>
                    <label className="block font-bold text-gray-900">Most Recent Job Title</label>
                    <p className="mt-1">{mostRecentJobTitle || "Not Provided"}</p>
                  </div>
                  <div>
                    <label className="block font-bold text-gray-900">Preferred Job Title</label>
                    <p className="mt-1">{preferredJobTitle || "Not Provided"}</p>
                  </div>
                  <div>
                    <label className="block font-bold text-gray-900">Preferred Location</label>
                    <p className="mt-1">{preferredLocation || "Not Provided"}</p>
                  </div>
                  <div>
                    <label className="block font-bold text-gray-900">Open for Remote</label>
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
    education.map((edu:any, index) => (
        <div key={edu.id} className="my-6 border-b-2 relative">
      <button
        onClick={() => deleteEducation(edu._id)}
        className="absolute top-0 right-0 p-2 text-red-600"
      >
        <FaTrash className="inline-block" />
      </button>

      <div className="grid grid-cols-2 gap-4">
        <div className="w-full">
          <label className="block font-bold text-gray-900">Institution</label>
          <p className="mt-1">{edu.institution}</p>
        </div>
        <div className="w-full">
          <label className="block font-bold text-gray-900">Degree</label>
          <p className="mt-1">{edu.degree}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="w-full">
          <label className="block font-bold text-gray-900">Field of Study</label>
          <p className="mt-1">{edu.fieldOfStudy}</p>
        </div>
        <div className="w-full">
          <label className="block font-bold text-gray-900">Start Date</label>
          <p className="mt-1">{edu.startDate}</p>
        </div>
        <div className="w-full">
          <label className="block font-bold text-gray-900">End Date</label>
          <p className="mt-1">{edu.endDate}</p>
        </div>
      </div>
    </div>
  ))
) : (
  <p>No education information available.</p>
)}

              </div>

              {showEducationForm && (
                <div className="border-2 p-4 mt-8">
                  <h3 className="text-lg font-semibold">Add Education</h3>
                  <input
                    type="text"
                    value={newEducation.institution}
                    onChange={(e) => handleInputChange(e, "institution")}
                    placeholder="Institution"
                    className="w-full p-2 mt-2 mb-4 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    value={newEducation.degree}
                    onChange={(e) => handleInputChange(e, "degree")}
                    placeholder="Degree"
                    className="w-full p-2 mt-2 mb-4 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    value={newEducation.fieldOfStudy}
                    onChange={(e) => handleInputChange(e, "fieldOfStudy")}
                    placeholder="Field of Study"
                    className="w-full p-2 mt-2 mb-4 border border-gray-300 rounded"
                  />
                  <input
                    type="date"
                    value={newEducation.startDate}
                    onChange={(e) => handleInputChange(e, "startDate")}
                    placeholder="Start Date"
                    className="w-full p-2 mt-2 mb-4 border border-gray-300 rounded"
                  />
                  <input
                    type="date"
                    value={newEducation.endDate}
                    onChange={(e) => handleInputChange(e, "endDate")}
                    placeholder="End Date"
                    className="w-full p-2 mt-2 mb-4 border border-gray-300 rounded"
                  />
                  <button
                    className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
                    onClick={handleAddEducation}
                  >
                    Add Education
                  </button>
                </div>
              )}
              <button
                className="text-blue-600  pl-4 border-blue-600 pb-2 font-semibold mt-6"
                onClick={() => setShowEducationForm(!showEducationForm)}
              >
                {showEducationForm ? "Cancel" : "+ Add Education"}
              </button>
            </div>
           

<div className="bg-white space-y-8">
              {/* Experience Details Section */}
              <div className="p-2 m-2">
                <h2 className="text-lg font-semibold">Experience Details</h2>
              </div>
              <hr className="border-gray-300 mt-0" />
              <div className="pl-4">
                {experience.length > 0 ? (
                  experience.map((exp: any) => (
                    <div key={exp.uniqueId} className="my-6 border-b-2 relative">
                      <button
                        onClick={() => deleteExperience(exp.uniqueId)}
                        className="absolute top-0 right-0 p-2 text-red-600"
                      >
                        <FaTrash className="inline-block" />
                      </button>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="w-full">
                          <label className="block font-bold text-gray-900">Company</label>
                          <p className="mt-1">{exp.company}</p>
                        </div>
                        <div className="w-full">
                          <label className="block font-bold text-gray-900">Position</label>
                          <p className="mt-1">{exp.position}</p>
                        </div>
                        <div className="w-full">
                          <label className="block font-bold text-gray-900">Start Date</label>
                          <p className="mt-1">{exp.startDate}</p>
                        </div>
                        <div className="w-full">
                          <label className="block font-bold text-gray-900">End Date</label>
                          <p className="mt-1">{exp.endDate || "Present"}</p>
                        </div>
                        <div className="w-full">
                          <label className="block font-bold text-gray-900">Description</label>
                          <p className="mt-1">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No experience details available.</p>
                )}
              </div>
              
              {/* Toggle Add Experience Form */}
              <button
                className="text-blue-600  pl-4 border-blue-600 pb-2 font-semibold mt-6"
                onClick={() => setShowExperienceForm(!showExperienceForm)}
              >
                {showExperienceForm ? "Close" : "+ Add Experience"}
              </button>

              {/* Add Experience Form */}
              {showExperienceForm && (
                <div className="mt-4 p-4 border border-gray-300 rounded-lg">
                  <div>
                    <label className="block text-gray-700 font-bold">Company</label>
                    <input
                      type="text"
                      value={newExperience.company}
                      onChange={(e) => handleInputChange(e, "company")}
                      className="w-full p-2 border rounded-lg mt-1"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-700 font-bold">Position</label>
                    <input
                      type="text"
                      value={newExperience.position}
                      onChange={(e) => handleInputChange(e, "position")}
                      className="w-full p-2 border rounded-lg mt-1"
                      placeholder="Position"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-700 font-bold">Start Date</label>
                    <input
                      type="date"
                      value={newExperience.startDate}
                      onChange={(e) => handleInputChange(e, "startDate")}
                      className="w-full p-2 border rounded-lg mt-1"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-700 font-bold">End Date</label>
                    <input
                      type="date"
                      value={newExperience.endDate || ""}
                      onChange={(e) => handleInputChange(e, "endDate")}
                      className="w-full p-2 border rounded-lg mt-1"
                    />
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-700 font-bold">Description</label>
                    <textarea
                      value={newExperience.description}
                      onChange={(e) => handleInputChange(e, "description")}
                      className="w-full p-2 border rounded-lg mt-1"
                      placeholder="Describe your role and responsibilities"
                    />
                  </div>
                  <button
                    onClick={handleAddExperience}
                    className="bg-blue-600 text-white py-2 px-4 rounded mt-4"
                  >
                    Add Experience
                  </button>
                </div>
              )}
            </div>

            <div className='lg:w-2/3 px-16 mb-4 mr-16 w-full flex justify-end'>
  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
    See Preview
  </button>
</div>

          </main>
        </div>
      </div>
    </div>
  );
}
