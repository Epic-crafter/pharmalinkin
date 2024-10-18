
import { X } from "lucide-react";
import { FaFilter } from "react-icons/fa";


// components/Filters.js
export default function Filters({ filters, showFilters, setShowFilters }: any) {
    return (
        <div className=" bg-white shadow rounded p-4 block lg:sticky lg:top-2">

            <div className="flex  lg:justify-center justify-between">

                <h2 className="text-lg font-semibold mb-4 lg:text-center flex items-center"><FaFilter className="text-blue-500 text-sm" />Filters</h2>
                {showFilters ? <span className="text-black font-bold lg:hidden" onClick={() => setShowFilters(false)}><X/></span> : ""}
            </div>

            {/* Preferences */}
            <div className="mb-4 ">
                <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm ">As per my <span className="font-bold" style={{ color: "#008bdc" }}>preferences</span></label>
                </div>
            </div>
            {/* Profile Filter */}
            {filters.map((filter: any, idx: any) => (
                <div key={idx} className="mb-4">
                    <label className="block text-sm font-bold mb-2">{filter.label}</label>
                    <input
                        type="text"
                        placeholder={filter.placeholder}
                        className="border p-2.5 w-full rounded text-sm "
                    />
                </div>
            ))}

            {/* Work from Home & Part-time checkboxes */}
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2"></label>
                <div className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2 text-sm " />
                    <label className="text-sm">Work from home</label>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" className="mr-2 text-sm" />
                    <label className="text-sm">Part-time</label>
                </div>
            </div>

            {/* Stipend Slider */}
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                    Desired minimum monthly stipend (₹)
                </label>
                <input type="range" min="0" max="10000" className="w-full" />
            </div>

            {/* Start Date Filter */}
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Starting from (or after)</label>
                <input type="date" className="border p-2 w-full rounded " />
            </div>

            {/* Max Duration Filter */}
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Max. duration (months)</label>
                <input type="number" className="border p-2 w-full rounded" placeholder="6" />
            </div>

            {/*  */}
            <div className="mb-4">
                <label className="block text-xs font-bold mb-2"></label>
                <div className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm">Internships with job offer</label>
                </div>
                <div className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm">Fast response</label>
                </div>
                <div className="flex items-center mb-2">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm">Early applicant</label>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm">Internships for women</label>
                </div>
            </div>

            <button className="text-sm font-medium text-blue-400 bg-transparent ">Clear All</button>

        </div>


    );
}
