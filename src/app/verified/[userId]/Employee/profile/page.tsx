"use client";
import { FaImage } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useUser } from "@/lib/contexts/user";

export default function Profile() {
    const { userId } = useUser();
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        dateOfBirth: '',
        gender: '',
        accountType: ''
    });

    // Fetch profile data when the component mounts and userId is available
    useEffect(() => {
        const fetchProfileData = async () => {
            if (userId) {
                try {
                    const response = await fetch(`/api/user/profile?userId=${userId}`);
                    if (response.ok) {
                        const data = await response.json();
                        setFormData(data);
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSaveProfile = async () => {
        try {
            const response = await fetch('/api/user/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, userId }),
            });

            if (response.ok) {
                console.log('Profile saved successfully');
            } else {
                console.error('Failed to save profile');
            }
        } catch (error) {
            console.error('An error occurred while saving the profile:', error);
        }
    };

    return (
        <div>
            <div className="flex">
                {/* Main Content */}
                <div className="w-3/5 min-h-screen rounded-lg flex-grow">
                    <main>
                        {/* Tabs */}
                        <div className="bg-white rounded flex border-t-2 border-gray-200 gap-8 p-4">
                            <button className="text-blue-600 border-b-2 border-blue-600 pb-2 font-semibold">
                                My Profile
                            </button>
                            <button className="text-gray-500 pb-2 hover:text-blue-600">
                                Login Details
                            </button>
                            <button className="text-gray-500 pb-2 hover:text-blue-600">
                                Notifications
                            </button>
                        </div>
                        <hr className="border-gray-300 mt-0" />

                        {/* Profile Content */}
                        <div className="bg-white space-y-8">
                            {/* Basic Information */}
                            <div className="bg-white p-2 m-2">
                                <h2 className="text-lg font-semibold">Basic Information</h2>
                                <p className="text-gray-500">This is your personal information that you can update anytime.</p>
                            </div>
                            <hr className="border-gray-300 mt-0" />

                            {/* Profile Photo Section */}
                            <div className="flex justify-between gap-4 flex-col md:flex-row items-start md:items-center md:justify-between p-2 m-2">
                                <div className="lg:w-1/5 md:w-2/5 sm:w-full">
                                    <h2 className="text-lg font-semibold">Profile Photo</h2>
                                    <p className="text-gray-500">This image will be shown publicly as your profile picture.</p>
                                </div>
                                <div className="lg:w-3/5 md:w-3/5 sm:w-full sm:justify-center md:justify-center flex gap-10 flex-row items-center">
                                    <div className="w-40 h-40 rounded-full flex items-center">
                                        <img
                                            src='https://s3-alpha-sig.figma.com/img/726e/e4e5/7698f6797df8e06d6a2a95171dcbd1a9?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JCszppyp1ib1l6ypD-D84s~4ZrhE2~FpnV7zsAZDjCzEjHki6DnfoKLbzrUmnDv~zpFpzqh-KJBSJPNKKtIckxBtJDmwScoRivOiQpX5G~oEDA8h53PZbMYGk8ZJF7tXj4MiQodaqmuv~EDqD5LUzNY04-16uFLhpZn62nsC8OCo2i2lvaemFavt8EtObWoXJK~YrFrFLAvr9jG6bVuy9d8hTtGdfwKHJ4gLerBoklBbfI~zsFLUDEuOjm-lnFcRIFop7kZ-MxZprK0shmQvYvX7uu1HgV9t~~LTYtG4hFgHaiy7mY6yq6aiezi-K4-mMIU92VpAmZ5Hk4lRed3r7Q__'
                                            alt="Profile"
                                            className="w-36 h-36 rounded-full object-cover"
                                        />
                                    </div>
                                    <div className='flex flex-col items-center justify-center border-dashed border-2 text-gray-500 rounded-lg border-blue-400 lg:h-32 lg:w-72 sm:h-3rem sm:w-4rem p-2'>
                                        <FaImage className='text-blue-400 h-8 w-6' />
                                        <label id='file' className="text-sm mt-2">
                                            SVG, PNG, JPG or GIF (max. 400x400px)
                                        </label>
                                        <input id='file' type='file' className='hidden' />
                                    </div>
                                </div>
                            </div>
                            <hr className="border-gray-300 mt-0" />

                            {/* Personal Details Section */}
                            <div className="flex justify-between flex-col md:flex-row p-2 m-2">
                                <div className="lg:w-1/5 md:w-2/5 sm:w-full">
                                    <h2 className="text-lg font-semibold">Personal Details</h2>
                                </div>
                                <div className="lg:w-3/5 md:w-3/5 sm:w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block font-medium text-gray-700">Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium text-gray-700">Phone Number</label>
                                        <input
                                            type="text"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium text-gray-700">Date of Birth</label>
                                        <input
                                            type="date"
                                            name="dateOfBirth"
                                            value={formData.dateOfBirth}
                                            onChange={handleChange}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-medium text-gray-700">Gender</label>
                                        <select
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            required
                                        >
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <hr className="border-gray-300 mt-0" />

                            {/* Save Button */}
                            <div className="flex justify-end p-2 m-2">
                                <button
                                    type="button"
                                    onClick={handleSaveProfile}
                                    className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Save Profile
                                </button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
