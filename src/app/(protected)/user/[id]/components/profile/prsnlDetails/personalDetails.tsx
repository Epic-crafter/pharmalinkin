import React from 'react';
import InputField from '../prsnlDetails/InputField';
import SelectField from '../prsnlDetails/SelectField';

interface PersonalDetailsProps {
  fullName: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: string;
  gender: string;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({
  fullName,
  phoneNumber,
  email,
  dateOfBirth,
  gender
}) => {
  return (
    <section className="flex flex-wrap gap-10 mt-8 items-start text-base leading-relaxed">
      <h2 className="font-semibold text-slate-800">Personal Details</h2>
      <div className="flex flex-col grow text-slate-800 shrink min-w-[240px] w-[514px] max-md:max-w-full">
        <InputField
          label={<span className="text-black">Full Name </span>}
          value={fullName}
          placeholder="Enter your full name"
          required
        />
        <div className="flex flex-wrap gap-6 text-slate-800 items-start mt-6 max-md:max-w-full">
          <InputField
            label={<span className="text-black">Phone Number </span>}
            value={phoneNumber}
            placeholder="Enter your phone number"
            required
          />
          <InputField
            label={<span className="text-black">Email </span>}
            value={email}
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="flex flex-wrap gap-6 items-start mt-6 max-md:max-w-full">
          <SelectField
            label={<span className="text-black">Date of Birth </span>}
            value={dateOfBirth}
            placeholder="Select your date of birth"
            required
          />
          <InputField
            label={<span className="text-black">Gender </span>}
            value={gender}
            placeholder="Select your gender"
            required
          />
        </div>
      </div>
    </section>
  );
};

export default PersonalDetails;
