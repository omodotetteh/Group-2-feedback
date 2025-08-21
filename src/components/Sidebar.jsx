import React, { useState } from 'react';
import logo from '../assets/logo.png'
import dashboard from '../assets/dashboard.png'
import feedback from '../assets/feedback.png'
import training from '../assets/school.png'
import workspace from '../assets/workspace.png'
import studio from '../assets/studio_icon.png'
import event from '../assets/event.png'
import business from '../assets/business_icon.png'
import settings from '../assets/settings.png'


function Sidebar() {

    const [sidebarOpen, setSidebarOpen] = useState(false);
  
    const dashboardItems = [
      { name: 'Dashboard', icon: dashboard },
      { name: 'All Feedback', icon: feedback },
      { name: 'Training', icon: training},
      { name: 'Co-Working Space', icon: workspace },
      { name: 'Studio', icon: studio },
      { name: 'Events Hall', icon: event },
      { name: 'Business Solutions', icon: business },
      { name: 'Settings', icon: settings }
    ];
  return (
    <div>
      {sidebarOpen && (
              <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              ></div>
            )}
      
            {/* Sidebar - Now responsive */}
            <div className={`fixed lg:static z-30 w-64 bg-[#23024A] text-white p-6 h-full transition-all duration-300 ease-in-out 
              ${sidebarOpen ? 'left-0' : '-left-64'} lg:left-0`}>
              
            <img src={logo} alt="logo" className='w-50 flex items-center ' />
      
         
              {/* the sidebar texts */}
              <div className="mb-8 mt-10">
                <ul className="space-y-3">
                  {dashboardItems.map((item) => (
                    <li key={item.name}
                     className='flex'>
                      <a href="#" 
                      className="flex items-center w-100 hover:bg-[#9747FF] hover:border-l-4 hover:border-l-[#9747FF] py-2 px-4 transition-colors">
                       <img 
                        src={item.icon} 
                        alt=''
                        className="w-5 h-5 mr-3"
                        />
                        {item.name}
                        </a>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
    </div>
  )
}

export default Sidebar
