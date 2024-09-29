import React from 'react';
import AccountTypeOption from '../profile/accOption';

interface AccountType {
  title: string;
  description: string;
  isSelected: boolean;
}

const AccountTypeSelection: React.FC = () => {
  const accountTypes: AccountType[] = [
    { title: "Job Seeker", description: "Looking for a job", isSelected: true },
    { title: "Employer", description: "Hiring, sourcing candidates, or posting a jobs", isSelected: false }
  ];

  return (
    <section className="flex flex-wrap mt-8 gap-10 items-start">
      <div className="flex flex-col text-base min-w-[240px]">
        <h2 className="font-semibold leading-7 text-slate-800">Account Type</h2>
        <p className="mt-1 leading-relaxed text-slate-600">You can update your account type</p>
      </div>
      <div className="flex flex-col min-w-[240px] w-[396px]">
        <div className="flex flex-col max-w-full w-[299px]">
          {accountTypes.map((type, index) => (
            <div key={index} className={index > 0 ? "mt-6" : ""}>
              <AccountTypeOption
                isSelected={type.isSelected}
                title={type.title}
                description={type.description}
              />
            </div>
          ))}
        </div>
      </div>
      
      
    </section>
  );
};

export {AccountTypeSelection};