import React from 'react';

const LoginLink: React.FC = () => {
  return (
   <p className="mt-5 text-center text-lg leading-loose text-indigo-900 text-opacity-50">
  <span className="font-semibold text-sky-600">Already have an account?</span>{" "}
  <a href="#login" className="font-semibold text-gray-900">Login</a>
</p>

  );
};

export default LoginLink;