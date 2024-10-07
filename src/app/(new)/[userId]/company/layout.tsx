import React, { ReactNode } from 'react';
import Dashboard from './dashboard/page';

interface Page {
  children: ReactNode;
}

const Page: React.FC<Page> = ({ children }) => {
  return (
    <div className="flex gap-5 max-md:flex-col">
      <Dashboard />
      {children}
    </div>
  );
};

export default Page;
