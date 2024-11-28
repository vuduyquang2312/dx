import React, { useState, useEffect } from 'react';
import Image404 from '../../assets/404-Error.jpg';

export default function History() {
  const [hasBookingHistory, setHasBookingHistory] = useState(false);
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    const bookingHistory = localStorage.getItem('bookingHistory');
    if (bookingHistory) {
      setHasBookingHistory(true);
      setBookingData(JSON.parse(bookingHistory));
    }
  }, []);

  // Function to format the time in "hour:minute:second, day month year" format
  const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleString('vi-VN', {

      year: 'numeric', // Năm
      month: 'long', // Tháng
      day: 'numeric', // Ngày
      hour: '2-digit', // Giờ
      minute: '2-digit', // Phút
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-700">
      <section className="max-w-screen-xl px-4 py-12 lg:py-16">
        {hasBookingHistory ? (
          <div className='mt-8'>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {bookingData.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border dark:bg-gray-800 dark:text-gray-300">
                  <p className="text-sm py-4 text-gray-500 border-b dark:text-gray-400">Họ và tên: {item.fullName}</p>
                  <p className="text-sm py-4 text-gray-500 border-b dark:text-gray-400">Số điện thoại: {item.contactNumber}</p>
                  <p className="text-sm py-4 text-gray-500 border-b dark:text-gray-400">Điểm đón: {item.pickupLocation}</p>
                  <p className="text-sm py-4 text-gray-500 border-b dark:text-gray-400">Điểm đến: {item.dropoffLocation}</p>
                  <p className="text-sm py-4 text-gray-500 border-b dark:text-gray-400">Loại xe: {item.carType}</p>
                  <p className="text-sm py-4 text-gray-500 border-b dark:text-gray-400">Ngày đặt: {item.bookingDate}</p>
                  <p className="text-sm py-4 text-gray-500 border-b dark:text-gray-400">Thời gian đón: {item.bookingTime}</p>
                  <p className="text-sm py-4 text-gray-500 border-b dark:text-gray-400">Thời gian đặt: {formatTime(item.time)}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 flex justify-center">
              <img
                src={Image404}
                alt="404"
                className="w-full max-w-md lg:max-w-lg"
              />
            </div>
            <div className="lg:col-span-5 text-center lg:text-left">
              <p className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                Bạn chưa từng đặt xe của chúng tôi.<br />
                <span className="mt-4">
                  Hãy nhấp vào nút đặt xe ngay bên dưới để trải nghiệm dịch vụ
                </span>
              </p>
              <button
                type="button"
                className="text-blue-700 mt-4 hover:text-white border w-full border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
              >
                <a href="/dat-xe">Đặt xe ngay</a>
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
