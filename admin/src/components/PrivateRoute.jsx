import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLogin') === 'true';

  if (!isLoggedIn) {
    // Nếu chưa đăng nhập, chuyển hướng về /login
    return <Navigate to="/login" replace />;
  }

  // Nếu đã đăng nhập, hiển thị nội dung của route
  return children;
};

export default PrivateRoute;
