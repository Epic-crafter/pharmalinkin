import React from 'react';

interface AddCVResumeProps {
  title: string;
  description: string;
}

const AddCVResume: React.FC<AddCVResumeProps> = ({ title, description }) => {
    return (
    <section className="flex flex-col mt-8 ml-8 leading-relaxed">
        <h2 className="text-lg font-semibold text-gray-800">Add CV / Resume</h2>
        <p className="mt-1 text-base text-slate-600 max-md:max-w-full">
        This is CV/ Resume document that you can update anytime.
        </p>
    </section>
    );
};

export default AddCVResume;