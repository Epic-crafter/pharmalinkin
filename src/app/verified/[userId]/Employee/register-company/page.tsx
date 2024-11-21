"use client"; // This directive makes it a client component

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Textarea from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function JobPostingForm({params}:any) {
  const [companyName, setCompanyName] = useState("");
  const [about, setAbout] = useState("");
  const [industry, setIndustry] = useState("");
  const [website, setWebsite] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [location, setLocation] = useState("");
  const [foundedYear, setFoundedYear] = useState("");
  const [orgSize, setOrgSize] = useState("");
  const [orgType, setOrgType] = useState("");
  const [logo, setLogo] = useState<string | null>(null); 
 const [accepted, setAccepted] = useState<any>(false)
 const router = useRouter()
  const OnSubmit = async (e:any) => {
    e.preventDefault(); 
    const companyData = {
      user:params.Id,
      companyName,
      about,
      industry,
      website,
      linkedin,
      facebook,
      twitter,
      location,
      foundedYear: foundedYear ? parseInt(foundedYear) : undefined, 
      companySize: orgSize,
      type: orgType,
      socialLinks: {
        linkedin,
        facebook,
        twitter,
      },
      logo,
      verified: false, 
    };
  
    try {
      const response = await fetch("/api/company/create-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(companyData),
      });
      
      const result = await response.json();
      if (response.ok) {
        router.push("/verified")
      }
      if(result.error){alert(result.error)}
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-white shadow-md sticky top-0 z-10 p-6">
        <h2 className="text-xl font-semibold">
          Let&apos;s get started with a few details about your company.
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:p-16 p-4 flex-grow">
        <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={OnSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name*</label>
                <Input
                  type="text"
                  placeholder="Add your organization’s name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium">LinkedIn*</label>
                <Input
                  type="url"
                  placeholder="Add your unique LinkedIn address"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Facebook</label>
                <Input
                  type="url"
                  placeholder="Add your Facebook link"
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Twitter</label>
                <Input
                  type="url"
                  placeholder="Add your Twitter link"
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Website</label>
                <Input
                  type="url"
                  placeholder="Begin with http://, https:// or www."
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Industry*</label>
                <Input
                  type="text"
                  placeholder="ex: Information Services"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Location*</label>
                <Input
                  type="text"
                  placeholder="Add your organization's location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Founded Year
                </label>
                <Input
                  type="number"
                  placeholder="ex: 2000"
                  value={foundedYear}
                  onChange={(e) => setFoundedYear(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Organization size*
                </label>
                <Select value={orgSize} onValueChange={(e) => setOrgSize(e)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10</SelectItem>
                    <SelectItem value="11-50">11-50</SelectItem>
                    <SelectItem value="51-200">51-200</SelectItem>
                    <SelectItem value="201-500">201-500</SelectItem>
                    <SelectItem value="501-1000">501-1000</SelectItem>
                    <SelectItem value="1001-5000">1001-5000</SelectItem>
                    <SelectItem value="5000+">5000+</SelectItem>
                   
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium">
                  Organization type*
                </label>
                <Select value={orgType} onValueChange={(e) => setOrgType(e)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Private">Private</SelectItem>
                    <SelectItem value="Public">Public</SelectItem>
                    <SelectItem value="Non-Profit">Non-Profit</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium">Logo</label>
                <Input
                  type="url"
                  placeholder="Begin with http://, https:// or www."
                  onChange={(e) => setLogo(e.target.value)}
                  className="w-full p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Tagline</label>
                <Textarea
                  placeholder="ex: An information services firm helping small businesses succeed."
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </div>

              <div className="flex items-start mt-4">
                <Checkbox checked={accepted} onCheckedChange={(e)=>setAccepted(e)} className="mr-2" />
                <p className="text-sm">
                  I verify that I am an authorized representative of this
                  organization and have the right to act on its behalf in the
                  creation and management of this Page.
                </p>
              </div>
            </div>

            <Button disabled={!accepted} type="submit" className="mt-6 w-full">
              Create Page
            </Button>
          </form>
        </div>

        {/* Preview Section */}
        <div className="lg:w-1/2 bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Page Preview</h3>

          <div className="border border-gray-300 p-4 rounded-lg bg-white">
            <div className="flex items-center justify-center mb-4">
              {logo ? (
                <img
                  src={logo}
                  alt="Company Logo"
                  className="w-24 h-24 object-contain rounded-md"
                />
              ) : (
                <div className="w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center">
                  <span>No logo</span>
                </div>
              )}
            </div>

            <h4 className="text-lg font-semibold">
              {companyName || "Company name"}
            </h4>
            <p className="text-sm text-gray-500">{about || "Tagline"}</p>
            <p className="text-sm text-gray-500">{industry || "Industry"}</p>
            <p className="text-sm text-gray-500">{location || "Location"}</p>
            <p className="text-sm text-gray-500">
              {foundedYear ? `Founded: ${foundedYear}` : "Founded Year"}
            </p>

            <Button className="mt-4 w-full">+ Follow</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
