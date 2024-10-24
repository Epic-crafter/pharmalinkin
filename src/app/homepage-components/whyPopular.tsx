import quality from "../../assets/quality.png"
import company from "../../assets/company.png"
import international from "../../assets/international.png"
import creditcard from "../../assets/creditcard.png"
import Image from "next/image";
import popular from "../../assets/popular.png"

const WhyWeArePopular = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:px-32 px-12 pt-12">
        <div className="text-left  lg:w-2/4 w-full  ">
        <div className=" space-y-4 mb-12">

          <h2 className="text-3xl font-bold  lg:w-2/3" style={{wordSpacing: "0.3rem"}}>Why We are Most Popular</h2>
          <p className="text-gray-700 text-sm " style={{lineHeight: "1.5rem",wordSpacing:"0.3rem"}} >
          We connect top talent with leading employers seamlessly. Our smart algorithms ensure personalized job matches. Secure verification and real-time updates guarantee successful placements.
          </p>
        </div>
          <div className="grid grid-cols-2 gap-4 ">
            <button className="px-4 py-2 bg-white  border-gray-300 rounded flex items-center gap-4 font-semibold text-gray-700 text-sm shadow-lg"><Image src={quality} alt="" className=""/>Quality Job</button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded flex items-center gap-4 font-semibold text-gray-700 text-sm"><Image src={company} alt=""/>Top Companies</button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded flex items-center gap-4 font-semibold text-gray-700 text-sm"><Image src={creditcard} alt=""/>No extra charge</button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded flex items-center gap-4 font-semibold text-gray-700 text-sm"><Image src={international } alt=""/>International Job</button>

          </div>
        </div>
        <div className="lg:w-2/4 w-2/3">
          <Image
            src={popular}
            alt="Popular"
            className=" "
          />
        </div>
      </div>
    );
  };
  
  export default WhyWeArePopular;
  