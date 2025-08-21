import React, { useState } from 'react';
import logo from '../assets/logo.png';
import dashboard from '../assets/dashboard.png';
import feedback from '../assets/feedback.png';
import training from '../assets/school.png';
import workspace from '../assets/workspace.png';
import studio from '../assets/studio_icon.png';
import event from '../assets/event.png';
import business from '../assets/business_icon.png';
import settings from '../assets/settings.png';

function Studio() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('studios');
  
  const dashboardItems = [
    { name: 'Dashboard', icon: dashboard, to: 'dashboard' },
    { name: 'All Feedback', icon: feedback, to: 'feedback' },
    { name: 'Training', icon: training, to: 'school' },
    { name: 'Co-Working Space', icon: workspace, to: 'workspace' },
    { name: 'Studio', icon: studio, to: 'studios' },
    { name: 'Events Hall', icon: event, to: 'hall' },
    { name: 'Business Solutions', icon: business, to: 'solution' },
    { name: 'Settings', icon: settings, to: 'settings' }
  ];
  
  const feedbackData = [
    {
      user: "Anonymous",
      service: "Studio",
      feedback: "Excellent training program, I really learned a lot from the session",
      date: "2 hours ago",
      status: "Reviewed",
      statusColor: "text-green-500"
    },
    {
      user: "Anonymous",
      service: "Studio",
      feedback: "Awesome workspace experience, very comfortable and productive environment",
      date: "5 hours ago",
      status: "Pending",
      statusColor: "text-orange-500"
    },
    {
      user: "Anonymous",
      service: "Studio",
      feedback: "The instructor was very knowledgeable and engaging throughout",
      date: "1 day ago",
      status: "Reviewed",
      statusColor: "text-green-500"
    },
    {
      user: "Anonymous",
      service: "Studio",
      feedback: "Well-organized event with great networking opportunities",
      date: "1 day ago",
      status: "Pending",
      statusColor: "text-orange-500"
    },
    {
      user: "Anonymous",
      service: "Studio",
      feedback: "Helpful consultation that addressed our specific needs",
      date: "2 days ago",
      status: "Reviewed",
      statusColor: "text-green-500"
    },
    {
      user: "Anonymous",
      service: "Studio",
      feedback: "Great facilities with all the equipment we needed",
      date: "3 days ago",
      status: "Pending",
      statusColor: "text-orange-500"
    },
     {
      user: "Anonymous",
      service: "Studio",
      feedback: "Great facilities with all the equipment we needed",
      date: "3 days ago",
      status: "Pending",
      statusColor: "text-orange-500"
    },
     {
      user: "Anonymous",
      service: "Studio",
      feedback: "Great facilities with all the equipment we needed",
      date: "3 days ago",
      status: "Pending",
      statusColor: "text-orange-500"
    }, {
      user: "Anonymous",
      service: "Studio",
      feedback: "Great facilities with all the equipment we needed",
      date: "3 days ago",
      status: "Pending",
      statusColor: "text-orange-500"
    }, {
      user: "Anonymous",
      service: "Studio",
      feedback: "Great facilities with all the equipment we needed",
      date: "3 days ago",
      status: "Pending",
      statusColor: "text-orange-500"
    }, {
      user: "Anonymous",
      service: "Studio",
      feedback: "Great facilities with all the equipment we needed",
      date: "3 days ago",
      status: "Pending",
      statusColor: "text-orange-500"
    }, {
      user: "Anonymous",
      service: "Studio",
      feedback: "Great facilities with all the equipment we needed",
      date: "3 days ago",
      status: "Pending",
      statusColor: "text-orange-500"
    }, {
      user: "Anonymous",
      service: "Studio",
      feedback: "Great facilities with all the equipment we needed",
      date: "3 days ago",
      status: "Pending",
      statusColor: "text-orange-500"
    }, {
      user: "Anonymous",
      service: "Studio",
      feedback: "Great facilities with all the equipment we needed",
      date: "3 days ago",
      status: "Pending",
      statusColor: "text-orange-500"
    }, {
      user: "Anonymous",
      service: "Studio",
      feedback: "Great facilities with all the equipment we needed",
      date: "3 days ago",
      status: "Pending",
      statusColor: "text-orange-500"
    }
  ];

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
        
        <img src={logo} alt="logo" className="w-40 ml-5"/>
        
        <div className="mb-8 mt-10">
          <ul className="space-y-3">
            {dashboardItems.map((item) => (
              <li key={item.name} className="flex">
                <a
                  href={item.to}
                  className={`flex items-center w-full py-2 px-4 transition-colors ${
                    activeItem === item.to
                      ? 'bg-[#9747FF] border-l-4 border-l-[#9747FF]'
                      : 'hover:bg-[#9747FF] hover:border-l-4 hover:border-l-[#9747FF]'
                  }`}
                  onClick={() => setActiveItem(item.to)} 
                >
                  <img 
                    src={item.icon} 
                    alt={`${item.name} icon`} 
                    className="w-5 h-5 mr-3"
                  />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 lg:p-8">

            <div className="p-4 border-b border-white">
              <button 
            className="text-black"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
              <h2 className="text-lg font-semibold text-gray-800 flex justify-center text-center -mt-7">Studio Feedback</h2>
            </div>
                      <div className="bg-white rounded-lg shadow overflow-hidden">

            
            {/* Table Headers - Hidden on mobile, visible on larger screens */}
            <div className="hidden md:grid md:grid-cols-6 gap-4 p-4 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-600">
              <div className="flex items-center">User</div>
              <div className="flex items-center">Services</div>
              <div className="flex items-center col-span-2">Feedback</div>
              <div className="flex items-center">Date</div>
              <div className="flex items-center">Status</div>
            </div>
            
            {/* Feedback Items */}
            <div className="divide-y divide-gray-100">
              {feedbackData.map((item, index) => (
                <div key={index} className="p-4 hover:bg-gray-50 transition-colors duration-150">
                  {/* Mobile View */}
                  <div className="md:hidden grid grid-cols-1 gap-2">
                    <div className="flex justify-between items-start">
                      <span className="font-medium text-gray-900">{item.user}</span>
                      <span className={`text-xs font-medium px-2 py-1 rounded-full ${item.statusColor} bg-opacity-10`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="font-medium text-sm text-purple-700">{item.service}</div>
                    <p className="text-sm text-gray-600 line-clamp-2">{item.feedback}</p>
                    <div className="text-xs text-gray-500">{item.date}</div>
                  </div>
                  
                  {/* Desktop View */}
                  <div className="hidden md:grid md:grid-cols-6 gap-4 items-center text-sm">
                    <div className="text-gray-900 font-medium">{item.user}</div>
                    <div className="text-purple-700 font-medium">{item.service}</div>
                    <div className="col-span-2 text-gray-600 pr-4">{item.feedback}</div>
                    <div className="text-gray-500">{item.date}</div>
                    <div className={`font-medium ${item.statusColor}`}>{item.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studio;