import React from 'react';
import WelcomeBack from '../../components/SignIn-form/WelcomeBack';
import UserTypeSelection from '../../components/SignIn-form/UserTypeSelection';
import CreateAccountButton from '../../components/SignIn-form/CreateAccountButton';
import LoginLink from '../../components/SignIn-form/LoginLink';

const JoinPage: React.FC = () => {
  const userTypeOptions = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/73db5245d3ff85e446e57b0bca54d808665a347272e0e005db3b9d383dd501cf?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3",
      title: "I'm a user",
      description: "looking for work",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/49ee0a5b15259a836ee54abddd0997adebe761731919e41689d8c060f8feb2e0?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3",
      title: "I'm a Company",
      description: "Manager, hiring",
    },
  ];

  return (
    <main className="flex flex-col gap-5 h-screen md:flex-row">
      <div className="flex flex-col w-full md:w-1/2 overflow-auto">
        <div className="flex flex-col overflow-hidden grow justify-center">
          <WelcomeBack
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/cb09afc1bef0ace4c9d341f8489ed543f91ef3a7659581326410e27d75d65118?placeholderIfAbsent=true&apiKey=78537e2ecd9846a991bfdeb4c92e98d3"
            title="Welcome Back"
            subtitle="Just a couple of clicks and we start"
          />
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/2 justify-center overflow-auto">
        <div className="flex flex-col items-center w-full my-auto">
          <h1 className="text-4xl font-semibold leading-tight text-blue-950 text-center md:text-left">
            Join as a User or Company
          </h1>
          <div className="w-full mt-10">
            <UserTypeSelection options={userTypeOptions} />
          </div>
          <CreateAccountButton />
          <LoginLink />
        </div>
      </div>
    </main>
  );
};

export default JoinPage;
