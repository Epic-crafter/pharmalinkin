import { FaToggleOn } from "react-icons/fa";
// import girl from "../../assets/girl.png"
import girl from "../../assets/girl.png"
import Hero from "../../assets/Hero.png"
import Image from "next/image";

const HeroSection = () => {
    return (
        <section className="flex flex-col md:flex-row   items-center justify-between py-12 lg:px-32 px-12 lg:mx-0 mx-auto " >
            <div className=" w-full lg:w-2/5 lg:mx-0 mx-auto">
                <div className="flex gap-2 items-center font-semibold">
                    <FaToggleOn className="text-blue-700 text-xl" style={{ fontSize: "30px" }} />
                    <p>Find your dream job</p>
                </div>
                <h1 className="text-4xl  w-full font-bold py-2">Find a job that suits your interest & skills</h1>
                <p className="text-lg py-2">Great platform for the job seeker that offers smart matching algorithms to find you the best job!</p>
                <div className=" w-2/3 text-lg space-y-4 lg:w-[75%] py-2">

                    <div className="flex ">
                        <img className='w-10 h-10 rounded-full' src='https://s3-alpha-sig.figma.com/img/726e/e4e5/7698f6797df8e06d6a2a95171dcbd1a9?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JCszppyp1ib1l6ypD-D84s~4ZrhE2~FpnV7zsAZDjCzEjHki6DnfoKLbzrUmnDv~zpFpzqh-KJBSJPNKKtIckxBtJDmwScoRivOiQpX5G~oEDA8h53PZbMYGk8ZJF7tXj4MiQodaqmuv~EDqD5LUzNY04-16uFLhpZn62nsC8OCo2i2lvaemFavt8EtObWoXJK~YrFrFLAvr9jG6bVuy9d8hTtGdfwKHJ4gLerBoklBbfI~zsFLUDEuOjm-lnFcRIFop7kZ-MxZprK0shmQvYvX7uu1HgV9t~~LTYtG4hFgHaiy7mY6yq6aiezi-K4-mMIU92VpAmZ5Hk4lRed3r7Q__' alt='' />
                        <img className='w-10 h-10 rounded-full' src='https://s3-alpha-sig.figma.com/img/726e/e4e5/7698f6797df8e06d6a2a95171dcbd1a9?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JCszppyp1ib1l6ypD-D84s~4ZrhE2~FpnV7zsAZDjCzEjHki6DnfoKLbzrUmnDv~zpFpzqh-KJBSJPNKKtIckxBtJDmwScoRivOiQpX5G~oEDA8h53PZbMYGk8ZJF7tXj4MiQodaqmuv~EDqD5LUzNY04-16uFLhpZn62nsC8OCo2i2lvaemFavt8EtObWoXJK~YrFrFLAvr9jG6bVuy9d8hTtGdfwKHJ4gLerBoklBbfI~zsFLUDEuOjm-lnFcRIFop7kZ-MxZprK0shmQvYvX7uu1HgV9t~~LTYtG4hFgHaiy7mY6yq6aiezi-K4-mMIU92VpAmZ5Hk4lRed3r7Q__' alt='' />
                        <img className='w-10 h-10 rounded-full' src='https://s3-alpha-sig.figma.com/img/726e/e4e5/7698f6797df8e06d6a2a95171dcbd1a9?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JCszppyp1ib1l6ypD-D84s~4ZrhE2~FpnV7zsAZDjCzEjHki6DnfoKLbzrUmnDv~zpFpzqh-KJBSJPNKKtIckxBtJDmwScoRivOiQpX5G~oEDA8h53PZbMYGk8ZJF7tXj4MiQodaqmuv~EDqD5LUzNY04-16uFLhpZn62nsC8OCo2i2lvaemFavt8EtObWoXJK~YrFrFLAvr9jG6bVuy9d8hTtGdfwKHJ4gLerBoklBbfI~zsFLUDEuOjm-lnFcRIFop7kZ-MxZprK0shmQvYvX7uu1HgV9t~~LTYtG4hFgHaiy7mY6yq6aiezi-K4-mMIU92VpAmZ5Hk4lRed3r7Q__' alt='' />


                    </div>
                    <p className="text-sm font-semibold">Over <span className=" text-blue-500">12800+</span> job seekers are happy with the platform</p>
                    {/* <form className="flex space-x-2">
            <input type="text" placeholder="Job title, skills, etc." className="flex-grow p-3 border border-gray-300 rounded-lg"/>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg">Search</button>
          </form> */}
                </div>
            </div>
            <div className="  lg:w-2/5 w-2/3 lg:mx-0 mx-auto">
                <Image src={Hero} alt="girl" className="w-full mb-0" />
            </div>
        </section>
    );
};

export default HeroSection;
