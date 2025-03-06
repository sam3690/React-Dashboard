// Layout.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/SideBar';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Navbar at the top */}
      <Navbar />
      
      {/* Main content area with sidebar and content */}
      <div className="flex flex-grow">
        {/* Sidebar on the left */}
        <Sidebar />
        
        {/* Main content area on the right */}
        <main className="flex-grow sm:p-4 p-0">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;