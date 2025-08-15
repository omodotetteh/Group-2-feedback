import React, { useState } from 'react';
import logo from '../assets/logo.png'

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar - Now responsive */}
      <div className={`fixed lg:static z-30 w-64 bg-[#23024A] text-white p-6 h-full transition-all duration-300 ease-in-out 
        ${sidebarOpen ? 'left-0' : '-left-64'} lg:left-0`}>
        {/* Close button for mobile */}
        <button 
          className="lg:hidden absolute top-4 right-4 text-white"
          onClick={() => setSidebarOpen(false)}
        >
          ✕
        </button>
        
      <img src={logo} alt="logo" className='' />
        
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Businesses</h2>
          <ul className="space-y-3">
            {['All Feedback', 'Training', 'On-bedding Space', 'Studio', 'Events toll', 'Business Solutions', 'Settings'].map((item) => (
              <li key={item}>
                <a href="#" className="block hover:text-blue-300 py-1">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-4 lg:p-8">
        {/* Mobile Header */}
        <div className="lg:hidden flex justify-between items-center mb-4">
          <button 
            className="text-gray-700"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          <h2 className="text-xl font-bold">Hello Admin.</h2>
          <div className="w-8"></div> {/* Spacer */}
        </div>

        {/* Welcome Header */}
        <div className="mb-6 lg:mb-8">
          <h2 className="text-xl lg:text-2xl font-bold mb-2">Hello Admin.</h2>
          <p className="text-gray-600 text-sm lg:text-base">Not-for-set on-insight your feedback!</p>
        </div>

        {/* Stats Cards - Improved responsive sizing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
          {[
            { title: 'Year Feedback', value: '1,247', desc: '1 - 100 km month' },
            { title: 'Priority Review', value: '23', desc: 'Previous interview' },
            { title: 'Priority Review', value: '23', desc: 'Next-year observation' }
          ].map((card, index) => (
            <div key={index} className="bg-white p-4 lg:p-6 rounded-lg shadow">
              <h3 className="text-gray-500 text-xs lg:text-sm font-medium">{card.title}</h3>
              <p className="text-xl lg:text-3xl font-bold mt-1 lg:mt-2">{card.value}</p>
              <p className="text-gray-500 text-xs lg:text-sm mt-1 lg:mt-2">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Recent Feedback Section - Improved for mobile */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-3 lg:p-4 border-b">
            <h2 className="text-base lg:text-lg font-semibold mb-2 lg:mb-0">Recent Feedback</h2>
            {/* Hidden on mobile, shown on larger screens */}
            <div className="hidden lg:flex justify-between text-sm">
              {['User', 'Services', 'Feedback', 'Data', 'Status'].map((label) => (
                <span key={label} className="font-medium flex-1 max-w-[100px]">
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Feedback Items - Stacked on mobile */}
          <div className="divide-y">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="p-3 lg:p-4 hover:bg-gray-50">
                {/* Mobile view - stacked */}
                <div className="lg:hidden space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium">Anonymous</span>
                    <span className={`text-xs ${item % 2 === 0 ? 'text-orange-500' : 'text-green-500'}`}>
                      {item % 2 === 0 ? 'Pending' : 'Reviewed'}
                    </span>
                  </div>
                  <div className="text-sm font-medium">{item % 2 === 0 ? 'Workspace' : 'Training'}</div>
                  <p className="text-sm text-gray-600">
                    {item % 2 === 0 
                      ? 'Awesome workspace experience...' 
                      : 'Excellent training program...'}
                  </p>
                  <div className="text-xs text-gray-500">{item % 2 === 0 ? '5 hours ago' : '2 hours ago'}</div>
                </div>
                
                {/* Desktop view - inline */}
                <div className="hidden lg:flex justify-between items-center">
                  <span className="text-sm flex-1 max-w-[100px]">Anonymous</span>
                  <span className="text-sm flex-1 max-w-[100px]">{item % 2 === 0 ? 'Workspace' : 'Training'}</span>
                  <p className="text-sm flex-1 text-gray-600 pr-4 truncate">
                    {item % 2 === 0 
                      ? 'Awesome workspace experience, very comfortable and productive...' 
                      : 'Excellent training program, I really learned a lot from the...'}
                  </p>
                  <span className="text-sm flex-1 max-w-[100px] text-gray-500">{item % 2 === 0 ? '5 hours ago' : '2 hours ago'}</span>
                  <span className={`text-sm flex-1 max-w-[100px] ${item % 2 === 0 ? 'text-orange-500' : 'text-green-500'}`}>
                    {item % 2 === 0 ? 'Pending' : 'Reviewed'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;