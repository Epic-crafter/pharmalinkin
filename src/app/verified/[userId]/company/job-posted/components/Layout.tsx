import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from '../../dashboard/Header';
interface LayoutProps {
  children: ReactNode; // Explicitly type children as ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen ">
        <Header/>
        <div className='min-h-screen flex'>
        <Sidebar />
      <main className="flex-grow p-6 bg-gray-100">
        {children}
      </main>
        </div>
      
    </div>
  );
};

export default Layout;
