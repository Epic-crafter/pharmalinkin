// @ts-ignore
"use client"
import { DownloadIcon, MailIcon } from 'lucide-react';

export default function page() {
  const skills = ['Java', 'JavaScript', 'Python'];

  const experience = [
    { company: 'Pixel Studios', role: 'Front-End Developer', duration: 'April 2018 - Present', location: 'Mumbai, India' },
    { company: 'Pixel Studios', role: 'Front-End Developer', duration: 'April 2018 - Present', location: 'Mumbai, India' },
    { company: 'Pixel Studios', role: 'Front-End Developer', duration: 'April 2018 - Present', location: 'Mumbai, India' },
  ];

  const education = [
    { institution: 'XYZ University', degree: 'B-Tech (Computer Engineering)', duration: 'April 2018 - Present', location: 'Mumbai, India' },
    { institution: 'XYZ University', degree: 'B-Tech (Computer Engineering)', duration: 'April 2018 - Present', location: 'Mumbai, India' },
    { institution: 'XYZ University', degree: 'B-Tech (Computer Engineering)', duration: 'April 2018 - Present', location: 'Mumbai, India' },
  ];

  const certificates = [
    { title: 'AI/ML', provider: 'IBM International Courses', duration: 'April 2018 - Present', location: 'Mumbai, India' },
    { title: 'IBM International Courses', provider: 'XYZ University', duration: 'April 2018 - Present', location: 'Mumbai, India' },
  ];

  return (
    <main>
      <div className="max-w-4xl mx-auto px-6 py-10 font-sans">
        <div className="bg-gray-100 shadow-lg rounded-lg p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <div className="bg-gray-300 rounded-full h-24 w-24 flex items-center justify-center text-gray-700 font-bold text-xl">
              AD
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
              <h2 className="text-2xl font-bold">Adarsh YDv</h2>
              <p className="text-gray-600">Backend Developer</p>
            </div>
          </div>

          {/* Basic Info */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p><strong>Age:</strong> 28</p>
              <p><strong>CTC:</strong> 12.5 lakh</p>
              <p><strong>Location:</strong> Mumbai</p>
            </div>
            <div>
              <p><strong>Years of Experience:</strong> 6 years</p>
              <p><strong>Phone:</strong> +91-1234567890</p>
              <p><strong>Email:</strong> abc@gmail.com</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <DownloadIcon className="w-5 h-5 mr-2" />
              Download Resume
            </button>
            <button className="flex items-center justify-center bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700">
              <MailIcon className="w-5 h-5 mr-2" />
              Send Email
            </button>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <h3 className="font-bold text-lg">Skills</h3>
            <div className="flex flex-wrap mt-2">
              {skills.map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mr-2 mt-2">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mt-6">
            <h3 className="font-bold text-lg">Experience</h3>
            {experience.map((exp, index) => (
              <div key={index} className="mt-4 border-b pb-4">
                <p className="text-blue-600 font-semibold">{exp.company}</p>
                <p>{exp.role}</p>
                <p className="text-sm text-gray-500">{exp.duration} | {exp.location}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-6">
            <h3 className="font-bold text-lg">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="mt-4 border-b pb-4">
                <p className="text-blue-600 font-semibold">{edu.institution}</p>
                <p>{edu.degree}</p>
                <p className="text-sm text-gray-500">{edu.duration} | {edu.location}</p>
              </div>
            ))}
          </div>

          {/* Certificates */}
          <div className="mt-6">
            <h3 className="font-bold text-lg">Certificates</h3>
            {certificates.map((cert, index) => (
              <div key={index} className="mt-4 border-b pb-4">
                <p className="text-blue-600 font-semibold">{cert.title}</p>
                <p>{cert.provider}</p>
                <p className="text-sm text-gray-500">{cert.duration} | {cert.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
