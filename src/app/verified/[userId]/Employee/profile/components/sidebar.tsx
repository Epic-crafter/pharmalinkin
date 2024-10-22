// components/Sidebar.js
import React from 'react';
import { FaUser, FaHome, FaEnvelope, FaCog, FaSearch, FaBuilding, FaQuestionCircle, FaFileAlt, FaPage4, FaPagelines, FaDochub } from 'react-icons/fa'; // Import icons

export default function Sidebar() {
    return (
        <div className={` bg-gray-100 flex justify-between p-6  `}>


            <div className="fixed text-gray-500 w-full">

                
                <div className=''>
                   {/* Profile */}
                     <a className="flex items-center space-x-3 hover:bg-blue-100 p-2 rounded-md cursor-pointer ">
                        <FaUser/>
                        <span>Profile</span>
                    </a>
                    {/* Resume */}
                    <a className="flex items-center space-x-3 hover:bg-blue-100 p-2 rounded-md cursor-pointer">
                        <FaFileAlt/>
                        <span>Resume</span>
                    </a>
                </div>
                {/* <div>

                  
                    <a className="flex items-center space-x-3 hover:bg-blue-100 p-2 rounded-md cursor-pointer ">
                        <FaHome />
                        <span>Dashboard</span>
                    </a>
                  
                    <a className="flex items-center space-x-3 hover:bg-blue-100 p-2 rounded-md cursor-pointer">
                        <FaEnvelope />
                        <span>Messages</span>
                    </a>
                    
                    <a className="flex items-center space-x-3 hover:bg-blue-100 p-2 rounded-md cursor-pointer">
                        <FaFileAlt />
                        <span>My Applications</span>
                    </a>
                  
                    <a className="flex items-center space-x-3 hover:bg-blue-100 p-2 rounded-md cursor-pointer">
                        <FaSearch />
                        <span>Find Jobs</span>
                    </a>
                   
                    <a className="flex items-center space-x-3 hover:bg-blue-100 p-2 rounded-md cursor-pointer">
                        <FaBuilding />
                        <span>Browse Companies</span>
                    </a>
                    
                    <a className="flex items-center space-x-3 hover:bg-blue-100 p-2 rounded-md cursor-pointer">
                        <FaUser />
                        <span>My Public Profile</span>
                    </a>

                </div> */}

                <hr className='my-4 w-[90%]' />
                
                {/* <div className=' '>
                    <h4 className='mb-1'>SETTINGS</h4>
                    <a className="flex items-center space-x-3 hover:bg-blue-100 p-2 rounded-md cursor-pointer">
                        <FaCog />
                        <span>Settings</span>
                    </a>
                    <a className="flex items-center space-x-3 hover:bg-blue-100 p-2 rounded-md cursor-pointer">
                        <FaQuestionCircle />
                        <span>Help Center</span>
                    </a>
                </div> */}
            </div>

            <div className="fixed  bottom-3 ">
                <div className=" text-gray-500 flex items-center gap-2">
                    <img className='w-10 h-10 rounded-full' src='https://s3-alpha-sig.figma.com/img/726e/e4e5/7698f6797df8e06d6a2a95171dcbd1a9?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JCszppyp1ib1l6ypD-D84s~4ZrhE2~FpnV7zsAZDjCzEjHki6DnfoKLbzrUmnDv~zpFpzqh-KJBSJPNKKtIckxBtJDmwScoRivOiQpX5G~oEDA8h53PZbMYGk8ZJF7tXj4MiQodaqmuv~EDqD5LUzNY04-16uFLhpZn62nsC8OCo2i2lvaemFavt8EtObWoXJK~YrFrFLAvr9jG6bVuy9d8hTtGdfwKHJ4gLerBoklBbfI~zsFLUDEuOjm-lnFcRIFop7kZ-MxZprK0shmQvYvX7uu1HgV9t~~LTYtG4hFgHaiy7mY6yq6aiezi-K4-mMIU92VpAmZ5Hk4lRed3r7Q__' alt='' />
                    <div>

                        <p className='text-black font-bold'>Jake Gyll</p>
                        <p className='text-sm'>jakegyll@gmail.com</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
