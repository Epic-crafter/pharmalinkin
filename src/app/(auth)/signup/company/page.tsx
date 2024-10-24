"use client"; // This directive makes it a client component

import { useState } from 'react';

export default function JobPostingForm() {
  const [companyName, setCompanyName] = useState('');
  const [tagline, setTagline] = useState('');
  const [industry, setIndustry] = useState('');
  const [website, setWebsite] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [orgSize, setOrgSize] = useState('');
  const [orgType, setOrgType] = useState('');
  const [logo, setLogo] = useState<string | null>(null); // State for logo image

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setLogo(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="bg-white shadow-md sticky top-0 z-10 p-6">
        <h2 className="text-xl font-semibold">Let's get started with a few details about your company.</h2>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row gap-8 p-8 flex-grow">
        {/* Form Section */}
        <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <form>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name*</label>
                <input
                  type="text"
                  placeholder="Add your organization’s name"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium">linkedin.com/company/*</label>
                <input
                  type="url"
                  placeholder="Add your unique LinkedIn address"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Website</label>
                <input
                  type="url"
                  placeholder="Begin with http://, https:// or www."
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Industry*</label>
                <input
                  type="text"
                  placeholder="ex: Information Services"
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Organization size*</label>
                <select
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  value={orgSize}
                  onChange={(e) => setOrgSize(e.target.value)}
                >
                  <option value="">Select size</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">Organization type*</label>
                <select
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  value={orgType}
                  onChange={(e) => setOrgType(e.target.value)}
                >
                  <option value="">Select type</option>
                  <option value="Private">Private</option>
                  <option value="Public">Public</option>
                  <option value="Non-Profit">Non-Profit</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium">Logo</label>
                <input type="file" onChange={handleLogoUpload} className="w-full p-2" />
              </div>

              <div>
                <label className="block text-sm font-medium">Tagline</label>
                <input
                  type="text"
                  placeholder="ex: An information services firm helping small businesses succeed."
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value)}
                />
              </div>

              <div className="flex items-start mt-4">
                <input type="checkbox" className="mr-2" />
                <p className="text-sm">
                  I verify that I am an authorized representative of this organization and have the right to act on its behalf in the creation and management of this page.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Create page
            </button>
          </form>
        </div>

        {/* Preview Section */}
        <div className="lg:w-1/2 bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Page Preview</h3>

          <div className="border border-gray-300 p-4 rounded-lg bg-white">
            <div className="flex items-center justify-center mb-4">
              {logo ? (
                <img src={logo} alt="Company Logo" className="w-24 h-24 object-cover rounded-md" />
              ) : (
                <div className="w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center">
                  <span>No logo</span>
                </div>
              )}
            </div>

            <h4 className="text-lg font-semibold">{companyName || 'Company name'}</h4>
            <p className="text-sm text-gray-500">{tagline || 'Tagline'}</p>
            <p className="text-sm text-gray-500">{industry || 'Industry'}</p>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              + Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
