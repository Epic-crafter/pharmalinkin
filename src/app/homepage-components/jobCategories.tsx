import Image from "next/image";
import plane from "../../assets/plane.png"
import sales from "../../assets/sales.png"
import speaker from "../../assets/speaker.png"
import finance from "../../assets/finance.png"
import tech from "../../assets/tech.png"
import code from "../../assets/code.png"
import bag from "../../assets/bag.png"
import ppl from "../../assets/ppl.png"
import next from "../../assets/next.png"
const categories = [
    { title: "Design", count: 236,img:plane, highlight: false },
    { title: "Sales", count: 786,img:sales, highlight: false },
    { title: "Marketing", count: 140,img:speaker, highlight: true },
    { title: "Finance", count: 325,img:finance, highlight: false },
    { title: "Technology", count: 436,img:tech, highlight: false },
    { title: "Engineering", count: 542,img:code, highlight: false },
    { title: "Business", count: 211,img:bag, highlight: false },
    { title: "Human Resource", count: 346,img:ppl, highlight: false },
  ];
  
  const JobCategories = () => {
    return (
      <div className="bg-blue-100 lg:px-32 px-12 py-12 space-y-8 center">
<h1 className="font-bold  text-2xl py-4" >Browse Jobs by Category</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4  justify-between gap-8 ">
        {categories.map((category, index) => (
          <div
          key={index}
          className={`p-6 border rounded-lg ${
            category.highlight ? "bg-blue-500 text-white" : "bg-white"
          }`}
          >
            <Image src={category.img} alt="" className="mb-6 w-12 xs:w-4"/>
            <h3 className={`text-lg font-semibold text-blue-900 mb-2`}>{category.title}</h3>
            <div className="flex items-center justify-between">
            <p className={`text-sm  ${
            category.highlight ? "text-white" : "text-gray-500"
          }`}>{category.count} jobs available</p>
            <Image src={next} alt=""/>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  };
  
  export default JobCategories;
  