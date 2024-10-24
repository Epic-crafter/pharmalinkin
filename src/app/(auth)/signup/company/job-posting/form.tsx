"use client";

import { useState } from 'react';
import { Input } from '../../../../../components/ui/input';
import { Button } from '../../../../../components/ui/button';
import Textarea from '../../../../../components/ui/textarea';
import { Select } from '../../../../../components/ui/select';
import { Checkbox } from '../../../../../components/ui/checkbox';
import { CheckedState } from '@radix-ui/react-checkbox';

const industries = ['IT', 'Finance', 'Healthcare', 'Education', 'Construction']; // Example industries
const employeesRange = ['1-10', '11-50', '51-200', '201-500', '500+']; // Example employee ranges

export default function OrganizationForm() {
  const [formData, setFormData] = useState({
    orgName: '',
    description: '',
    city: '',
    industry: '',
    employees: '',
    isFreelancer: false,
    logo: null as File | null, // Allow logo to be either a File or null
  });

  // Add typing for ChangeEvent
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      // Type narrowing to ensure checkbox has `checked` property
      const target = e.target as HTMLInputElement; 
      setFormData({
        ...formData,
        [name]: target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle select changes separately using the correct prop (`onValueChange`)
  const handleSelectChange = (value: string, name: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Add typing for file upload event
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, logo: e.target.files[0] }); // Assign File object to logo
    }
  };

  // Add typing for form submit event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submit logic (e.g., API call)
    console.log(formData);
  };

  return (
    <form className="max-w-xl mx-auto space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block font-medium text-gray-700">Organization Name</label>
        <Input
          type="text"
          name="orgName"
          value={formData.orgName}
          onChange={handleInputChange}
          placeholder="Organization Name"
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          name="isFreelancer"
          checked={formData.isFreelancer}
          onCheckedChange={(checked: CheckedState) => handleSelectChange(checked ? 'true' : 'false', 'isFreelancer')}
        />
        <label className="block text-gray-700">I am an independent practitioner (freelancer, architect, lawyer, etc.)</label>
      </div>

      <div>
        <label className="block font-medium text-gray-700">Organization Description</label>
        <Textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Describe your organization"
        />
      </div>

      <div>
        <label className="block font-medium text-gray-700">Organization City</label>
        <Input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          placeholder="e.g., Mumbai"
        />
      </div>

      <div>
  <label className="block font-medium text-gray-700">Industry</label>
  <select
    name="industry"
    value={formData.industry}
    onChange={(e) => handleSelectChange(e.target.value, 'industry')}
    className="block w-full p-2 border border-gray-300 rounded-md"
    required
  >
    <option value="" >Select industry</option>
    {industries.map((industry) => (
      <option key={industry} value={industry}>
        {industry}
      </option>
    ))}
  </select>
</div>

<div>
  <label className="block font-medium text-gray-700">No. of Employees</label>
  <select
    name="employees"
    value={formData.employees}
    onChange={(e) => handleSelectChange(e.target.value, 'employees')}
    className="block w-full p-2 border border-gray-300 rounded-md"
    required
  >
    <option value="">Select an option</option>
    {employeesRange.map((range) => (
      <option key={range} value={range}>
        {range}
      </option>
    ))}
  </select>
</div>


      <div>
        <label className="block font-medium text-gray-700">Organization Logo (Optional)</label>
        <Input
          type="file"
          accept=".jpg,.jpeg,.png,.gif,.bmp"
          onChange={handleLogoUpload}
        />
        <p className="text-sm text-gray-500">Max file size: 1MB and max resolution: 500px x 500px</p>
      </div>

      <Button type="submit" className="w-full bg-blue-600 text-white">
        Submit
      </Button>
    </form>
  );
}
