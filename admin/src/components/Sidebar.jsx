import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiBell, FiUsers, FiClock, FiBarChart, FiSettings, FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Người dùng đặt xe', path: '/dat-xe', icon: <FiUsers size={14} /> },
    { name: 'Lịch sử đặt xe', path: '/lich-su', icon: <FiClock size={14} /> },
    { name: 'Báo cáo người dùng', path: '/bao-cao', icon: <FiBarChart size={14} /> },
    { name: 'Cài đặt', path: '/cai-dat', icon: <FiSettings size={14} /> },
    { name: 'Đăng xuất', path: '/dang-xuat', icon: <FiLogOut size={14} /> }];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Thanh công cụ phía trên */}
      <div className="flex items-center justify-between py-4 px-4 bg-[#272B2F] fixed top-0 left-0 w-full z-50">
        <input
          type="text"
          placeholder="Search..."
          className="text-xs rounded-md border border-gray-600 bg-[#212529] w-full max-w-xs px-4 py-2 text-gray-300"
        />
        <button className="ml-6 p-2 text-gray-400 hover:text-white">
          <FiBell size={20} />
        </button>
        <button
          className="p-2 text-gray-400 hover:text-white md:hidden ml-4"
          onClick={toggleSidebar}
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#212529] text-white w-56 transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 text-lg font-bold border-b border-gray-700">Datxenngay.com</div>
        <nav className="flex-grow mt-4">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center py-4 px-4 text-xs hover:bg-gray-700 transition-colors duration-200 ${
                  isActive ? 'bg-gray-700' : ''
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              <span className="mr-3 text-gray-400">{link.icon}</span>
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
