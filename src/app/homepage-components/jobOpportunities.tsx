
 "use client";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gitlab from "../../assets/gitlab.png"
import user from "../../assets/heroicons_users.png"
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaUserAlt, FaUserFriends } from "react-icons/fa";
// Custom Left Arrow component
const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="bg-white text-primary p-2 rounded-full z-10 border-2 border-primary"
      onClick={onClick}
    >
     <FaArrowLeft/>
    </button>
  );
};

// Custom Right Arrow component
const NextArrow = ({ onClick }) => {
  return (
    <button
      className="bg-primary border-2 border-primary text-white p-2 rounded-full z-10"
      onClick={onClick}
    >
     <FaArrowRight/>
    </button>
  );
};

const JobOpportunities = () => {
  const scrollRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow:2.5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,  // Pass custom next arrow
    prevArrow: <PrevArrow />,  // Pass custom previous arrow
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 758, 
        settings: {
          slidesToShow:2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 712,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 498,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    
      
    ],
  };

  const types = [
    { title: "Product Management", noOfOpportunities: 34 },
    { title: "Design", noOfOpportunities: 92 },
    { title: "Development", noOfOpportunities: 104 },
    { title: "Marketing", noOfOpportunities: 92 },
    { title: "Customer Service", noOfOpportunities: 54 },
  ];

  return (
    <div className="lg:pl-32 px-12  pr-8 py-12  mx-auto ">

        <div className="flex justify-between items-center mb-4 ">
          <h2 className="text-2xl font-bold mb-4">Latest Job Opportunities</h2>
          <div className="flex gap-4">

          <PrevArrow onClick={() => scrollRef.current.slickPrev()} /> {/* Link to slider */}
          <NextArrow onClick={() => scrollRef.current.slickNext()} /> {/* Link to slider */}
          </div>
        </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4  bg-white ">
      {/* Left side - Job Opportunity Categories */}
      <div className="col-span-1 xs:hidden ">
        <ul className="space-y-8 ">
          {types.map((type, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{type.title}</span>
              <span className="text-sm bg-gray-200 px-2 rounded">
                {type.noOfOpportunities}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right side - Job Opportunity Cards */}
      <div className="col-span-2 relative space-x-2">
        <Slider ref={scrollRef} {...settings} className="flex  ">
          {/* 1st card */}
          <div className="bg-blue-200 text-black p-4 rounded-2xl w-52 space-y-4 border-2 border-white mr-4">
            <h3 className="text-lg font-bold">Product Designer</h3>
            <div className="flex text-xs gap-4">
              <p className="bg-blue-400 px-2 py-1 rounded-full">Full time</p>
              <p className="bg-blue-400 px-2 py-1  rounded-full">Product</p>
            </div>
           
            <p className="text-md font-semibold pt-4">34K$ - 45K$</p>
            <div className="flex text-xs justify-around gap-1 items-center">

            <hr className="border-white border-2  w-2/3"/> <span className="text-blue-500 text-2xs font-semibold" style={{fontSize:"10px"}}>4 hour ago</span>
            </div>
            <div className="flex items-center justify-between text-xs" style={{fontSize:"10px"}} >
              <div className="flex text-xs gap-1 items-center" >
                <Image src={Gitlab} alt="" className="p-1 rounded-lg bg-white w-10 h-10" />
              
                <div className="" >
                  <p className="font-semibold">Gitlab</p>
                  <p className="flex gap-1"><FaUserFriends/> 1200-3000</p>
                </div>
              </div>
              <p className="p-1 bg-red-100 rounded-full">20 Jobs</p>
            </div>
          </div>
          {/* 2nd card */}
          <div className="bg-blue-200 text-black p-4 rounded-2xl  w-52 space-y-4  border-2 border-white ">
            <h3 className="text-lg font-bold">Product Designer</h3>
            <div className="flex text-xs gap-4">
              <p className="bg-blue-400 px-2 py-1 rounded-full">Full time</p>
              <p className="bg-blue-400 px-2 py-1  rounded-full">Product</p>
            </div>
           
            <p className="text-md font-semibold pt-4">34K$ - 45K$</p>
            <div className="flex text-xs justify-around gap-1 items-center">

            <hr className="border-white border-2  w-2/3"/> <span className="text-blue-500 text-2xs font-semibold" style={{fontSize:"10px"}}>4 hour ago</span>
            </div>
            <div className="flex items-center justify-between text-xs" style={{fontSize:"10px"}} >
              <div className="flex text-xs gap-1 items-center" >
                <Image src={Gitlab} alt="" className="p-1 rounded-lg bg-white w-10 h-10" />
              
                <div className="" >
                  <p className="font-semibold">Gitlab</p>
                  <p className="flex gap-1"><FaUserFriends/> 1200-3000</p>
                </div>
              </div>
              <p className="p-1 bg-red-100 rounded-full">20 Jobs</p>
            </div>
          </div>
          {/* 3rd card */}
          <div className="bg-blue-200 text-black p-4 rounded-2xl  w-52 space-y-4  border-2 border-white ">
            <h3 className="text-lg font-bold">Product Designer</h3>
            <div className="flex text-xs gap-4">
              <p className="bg-blue-400 px-2 py-1 rounded-full">Full time</p>
              <p className="bg-blue-400 px-2 py-1  rounded-full">Product</p>
            </div>
           
            <p className="text-md font-semibold pt-4">34K$ - 45K$</p>
            <div className="flex text-xs justify-around gap-1 items-center">

            <hr className="border-white border-2  w-2/3"/> <span className="text-blue-500 text-2xs font-semibold" style={{fontSize:"10px"}}>4 hour ago</span>
            </div>
            <div className="flex items-center justify-between text-xs" style={{fontSize:"10px"}} >
              <div className="flex text-xs gap-1 items-center" >
                <Image src={Gitlab} alt="" className="p-1 rounded-lg bg-white w-10 h-10" />
              
                <div className="" >
                  <p className="font-semibold">Gitlab</p>
                  <p className="flex gap-1"><FaUserFriends/> 1200-3000</p>
                </div>
              </div>
              <p className="p-1 bg-red-100 rounded-full">20 Jobs</p>
            </div>
          </div>
          {/* 4th card */}
          <div className="bg-blue-200 text-black p-4 rounded-2xl max-w-64 w-52 space-y-4  border-2 border-white ">
            <h3 className="text-lg font-bold">Product Designer</h3>
            <div className="flex text-xs gap-4">
              <p className="bg-blue-400 px-2 py-1 rounded-full">Full time</p>
              <p className="bg-blue-400 px-2 py-1  rounded-full">Product</p>
            </div>
           
            <p className="text-md font-semibold pt-4">34K$ - 45K$</p>
            <div className="flex text-xs justify-around gap-1 items-center">

            <hr className="border-white border-2  w-2/3"/> <span className="text-blue-500 text-2xs font-semibold" style={{fontSize:"10px"}}>4 hour ago</span>
            </div>
            <div className="flex items-center justify-between text-xs" style={{fontSize:"10px"}} >
              <div className="flex text-xs gap-1 items-center" >
                <Image src={Gitlab} alt="" className="p-1 rounded-lg bg-white w-10 h-10" />
              
                <div className="" >
                  <p className="font-semibold">Gitlab</p>
                  <p className="flex gap-1"><FaUserFriends/> 1200-3000</p>
                </div>
              </div>
              <p className="p-1 bg-red-100 rounded-full">20 Jobs</p>
            </div>
          </div>
          {/* 5th card */}
          <div className="bg-blue-200 text-black p-4 rounded-2xl max-w-64 w-52 space-y-4  border-2 border-white ">
            <h3 className="text-lg font-bold">Product Designer</h3>
            <div className="flex text-xs gap-4">
              <p className="bg-blue-400 px-2 py-1 rounded-full">Full time</p>
              <p className="bg-blue-400 px-2 py-1  rounded-full">Product</p>
            </div>
           
            <p className="text-md font-semibold pt-4">34K$ - 45K$</p>
            <div className="flex text-xs justify-around gap-1 items-center">

            <hr className="border-white border-2  w-2/3"/> <span className="text-blue-500 text-2xs font-semibold" style={{fontSize:"10px"}}>4 hour ago</span>
            </div>
            <div className="flex items-center justify-between text-xs" style={{fontSize:"10px"}} >
              <div className="flex text-xs gap-1 items-center" >
                <Image src={Gitlab} alt="" className="p-1 rounded-lg bg-white w-10 h-10" />
              
                <div className="" >
                  <p className="font-semibold">Gitlab</p>
                  <p className="flex gap-1"><FaUserFriends/> 1200-3000</p>
                </div>
              </div>
              <p className="p-1 bg-red-100 rounded-full">20 Jobs</p>
            </div>
          </div>
     
        </Slider>
      </div>
    </div>
    </div>

  );
};

export default JobOpportunities;
