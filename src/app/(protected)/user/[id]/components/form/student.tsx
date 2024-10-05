import React from 'react';
import FormInput from './form';

const StudentForm: React.FC = () => {
  const formInputs = [
    { label: 'Name' },
    { label: 'Email', type: 'email' },
    { label: 'Phone Number', type: 'tel' },
    { label: 'Course' },
    { label: 'City' },
  ];

  return (
    <main className="overflow-hidden pl-20 bg-white max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col">
        <section className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
          <form className="flex flex-col self-stretch my-auto w-full text-3xl font-semibold leading-relaxed text-stone-900 max-md:mt-10 max-md:max-w-full">
            <h1 className="self-start text-5xl text-black">Student Form</h1>
            {formInputs.map((input) => (
              <FormInput key={input.label} {...input} />
            ))}
            <button
              type="submit"
              className="gap-2.5 self-stretch px-6 py-2.5 mt-11 text-2xl font-bold text-center text-white whitespace-nowrap bg-sky-600 rounded-lg min-h-[59px] max-md:px-5 max-md:mt-10"
            >
              Submit
            </button>
          </form>
        </section>
        <section className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/705feecbfb99704041b978a23987053f0cfa6f512c242e2bf04aced723eb48d2?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b"
            alt="Student form illustration"
            className="object-contain grow w-full aspect-[0.76] max-md:mt-10 max-md:max-w-full"
          />
        </section>
      </div>
    </main>
  );
};

export default StudentForm;