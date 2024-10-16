"use client";

import {  FaImage, FaRegBell} from 'react-icons/fa';
// pages/profile.js
// import Sidebar from '../components/Sidebar';
import Sidebar from './components/sidebar';

import { useState } from 'react';

export default function Profile() {
    const [formData, setFormData] = useState({
        fullName: 'Jake Gyll',
        phoneNumber: '+44 1245 572 135',
        email: 'Jakegyll@gmail.com',
        dateOfBirth: '1957-09-09',
        gender: 'male',
        accountType: 'job-seeker',
    });
    const [sidebarOpen, setSidebarOpen] = useState(false);
   
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
      };
    return (
        <div className="flex">
            {/* Sidebar */}


            <div className={`fixed lg:static z-10 ${sidebarOpen ? 'block' : 'hidden'} lg:block w-64 bg-gray-100 shadow-lg inset-y-0 left-0 transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } sm:relative sm:translate-x-0 transition-transform duration-300 ease-in-out md:`}>
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className="w-3/5 min-h-screen  m-6 rounded-lg flex-grow">
                <header className="flex items-center space-x-4 justify-between lg:justify-end font-bold   ">
                <div className="flex items-center visible lg:hidden space-x-3 font-bold mb-4 ">
                    <img className='border-2 h-10 w-10 rounded-full bg-blue-400' />

                    <h1 className='text-xl' >Pharamalinkin</h1>

                </div>
                <div className='flex items-center gap-2'>

                    <button className='border-2 border-gray-300 p-3 text-blue-600  rounded-lg cursor-pointer'>Back to homepage</button>
                    <FaRegBell className='text-lg' />
                    <div className="lg:hidden sm:visible text-black ">
                        {/* Sidebar toggle button for mobile */}
                        <span onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="p-2 text-black rounded-md">...</span>
                       
                            </div>
                       
                    </div>
                </header>
                {/* Tabs */}
                <div className="bg-white rounded-t-lg  flex  gap-8 p-2 m-2">
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
                <hr className="border-gray-300 mt-0 " />


                {/* Profile Content */}
                <div className="bg-white space-y-8 ">
                    {/* Basic Information */}
                    <div className="bg-white p-2 m-2">
                        <h2 className="text-lg font-semibold">Basic Information</h2>
                        <p className=" text-gray-500">This is your personal information that you can update anytime.</p>
                    </div>
                    <hr className="border-gray-300 mt-0 " />
                    {/* Profile Photo Section */}
                    <div className="flex gap-4 flex-col md:flex-row items-start md:items-center p-2 m-2">
                        <div className="w-1/3 sm:w-full">
                            <h2 className="text-lg font-semibold">Profile Photo</h2>
                            <p className=" text-gray-500">
                                This image will be shown publicly as your profile picture. It will help recruiters recognize you!
                            </p>
                        </div>
                        <div className="w-2/3 sm:w-full  flex gap-10 flex-row  items-center">
                            <div className="w-40 h-40 rounded-full flex items-center ">
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
                    <div className="flex flex-col md:flex-row p-2 m-2">
                        <div className="w-1/3 sm:w-full">
                            <h2 className="text-lg font-semibold">Personal Details</h2>
                        </div>
                        <div className="w-2/3 sm:w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div>
                                <label className="block w-full  font-medium text-gray-700" >Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                  
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block font-medium text-gray-700">Phone Number</label>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required
                                />
                            </div>

                            {/* Date of Birth */}
                            <div>
                                <label className="block font-medium text-gray-700">Date of Birth</label>
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    value={formData.dateOfBirth}
                                    
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required
                                />
                            </div>

                            {/* Gender */}
                            <div>
                                <label className="block font-medium text-gray-700">Gender</label>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required
                                >
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <hr className="border-gray-300 mt-0" />

                    {/* Account Type Section */}
                    <div className="flex flex-col md:flex-row p-2 m-2">
                        <div className=" sm:w-full w-1/3">
                            <h2 className="text-lg font-semibold">Account Type</h2>
                            <p className=" text-gray-500">
                                You can update your account type</p>
                        </div>

                        <div className="sm:w-full w-2/3 flex flex-col gap-2 items-start">
                            <div className='space-x-8 text-gray-600 '>
                                <div className='flex gap-2 items-center'>
                                    <input
                                        type="radio"
                                        name="accountType"
                                        value="job-seeker"
                                        checked={formData.accountType === 'job-seeker'}

                                        className="focus:ring-indigo-500 h-4 w-4  border-gray-300"
                                    />
                                    <label className="ml-2 block font-medium text-gray-700">Job Seeker</label>

                                </div>
                                <p className='text-sm'>Looking for a job</p>
                            </div>
                            <div className='space-x-8 text-gray-600 '>
                                <div className='flex gap-2 items-center'>
                                    <input
                                        type="radio"
                                        name="accountType"
                                        value="job-seeker"
                                        checked={formData.accountType === 'employer'}
                                       
                                        className="focus:ring-indigo-500 h-4 w-4  border-gray-300"
                                    />
                                    <label className="ml-2 block font-medium text-gray-700">Employer</label>

                                </div>
                                <p className='text-sm'>Hiring, sourcing candidates, or posting a jobs</p>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <hr className="border-gray-300 mt-0" />

                    {/* Save Button */}
                    <div className="flex justify-end p-2 m-2">
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Save Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
