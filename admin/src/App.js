import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Login from './pages/auth/Login';
import PrivateRoute from './components/PrivateRoute'; // Import component PrivateRoute

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route Login */}
        <Route path="/login" element={<Login />} />

        {/* Routes chính */}
        <Route
          path="/*"
          element={
            // <PrivateRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex-grow mt-16 h-screen text-gray-50 bg-[#212529]">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </div>
              </div>
            // </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
