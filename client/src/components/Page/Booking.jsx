import React, { useState } from 'react';
import axios from 'axios';
import { FaUserAlt, FaPhoneAlt, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaCar } from 'react-icons/fa';
import BookingImage from '../../assets/BookingImage.webp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GOONG_API_KEY = 'jjR9zAOy0xpTmAAlqmm2VhCjKHPhRAGr6bjScdH8';

export default function Booking() {
    const [formData, setFormData] = useState({
        fullName: '',
        contactNumber: '',
        pickupLocation: '',
        dropoffLocation: '',
        bookingDate: '',
        bookingTime: '',
        carType: '4_seat',
        passengerCount: 1
    });

    const [pickupSuggestions, setPickupSuggestions] = useState([]);
    const [dropoffSuggestions, setDropoffSuggestions] = useState([]);

    const fetchSuggestions = async (keyword, setSuggestions) => {
        if (!keyword || keyword.length < 5) {
            setSuggestions([]);
            return;
        }
        try {
            const response = await axios.get(
                `https://rsapi.goong.io/Place/AutoComplete`,
                {
                    params: {
                        api_key: GOONG_API_KEY,
                        input: keyword,
                    },
                }
            );
            setSuggestions(response.data.predictions || []);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));

        if (id === 'pickupLocation') {
            fetchSuggestions(value, setPickupSuggestions);
        } else if (id === 'dropoffLocation') {
            fetchSuggestions(value, setDropoffSuggestions);
        }
    };

    const handleSuggestionClick = (field, suggestion) => {
        setFormData(prev => ({
            ...prev,
            [field]: suggestion.description
        }));
        if (field === 'pickupLocation') {
            setPickupSuggestions([]);
        } else {
            setDropoffSuggestions([]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Thêm thời gian người dùng bấm nút submit
        const bookingWithTime = {
            ...formData,
            time: new Date().toISOString(), // Lưu thời gian hiện tại dưới dạng ISO
        };
    
        // Lấy danh sách lịch sử hiện tại từ localStorage
        const bookingHistory = JSON.parse(localStorage.getItem('bookingHistory')) || [];
    
        // Thêm lịch sử mới vào danh sách
        bookingHistory.push(bookingWithTime);
    
        // Lưu lại vào localStorage
        localStorage.setItem('bookingHistory', JSON.stringify(bookingHistory));
    
        console.log('Booking Details:', bookingWithTime);
    
        try {
            // Gửi dữ liệu đến server
            const response = await axios.post('http://localhost:5000/api/bookings', bookingWithTime);
    
            // Kiểm tra kết quả từ server
            if (response.status === 200) {
                // Hiển thị thông báo thành công
                toast.success("Đặt xe thành công! Vui lòng chú ý điện thoại, chúng tôi sẽ sớm liên hệ với bạn.", {
                    position: "top-right",
                    autoClose: 4000, // Đóng sau 3 giây
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
    
                // Đặt lại giá trị form về mặc định
                setFormData({
                    fullName: '',
                    contactNumber: '',
                    pickupLocation: '',
                    dropoffLocation: '',
                    bookingDate: '',
                    bookingTime: '',
                    carType: '4_seat',
                    passengerCount: 1
                });
    
                // Xóa danh sách gợi ý (nếu cần)
                setPickupSuggestions([]);
                setDropoffSuggestions([]);
            } else {
                // Nếu có lỗi từ server
                toast.error("Đã xảy ra lỗi khi đặt xe. Vui lòng thử lại.", {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error) {
            // Xử lý lỗi khi gọi API
            console.error('Error sending booking data:', error);
            toast.error("Đã xảy ra lỗi. Vui lòng kiểm tra kết nối và thử lại.", {
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };
    

    return (
        <div
            className="w-full bg-cover bg-center bg-no-repeat min-h-screen"
            style={{ backgroundImage: `url(${BookingImage})` }}
        >
            <div className="bg-black bg-opacity-10 min-h-screen flex items-center justify-center">
                <section className="bg-gray-50 mt-16 rounded-lg shadow-lg md:p-8 p-6 w-full max-w-6xl">
                    <h2 className="text-center text-lg md:text-xl border-b pb-4 font-bold mb-4 md:mb-8 uppercase text-gray-500">
                        Đặt Xe Ngay
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4 mb-6 md:grid-cols-4">
                            {/* Full Name */}
                            <div>
                                <label htmlFor="fullName" className="mb-2 text-xs md:text-sm font-normal text-gray-500 flex items-center">
                                    <FaUserAlt className="mr-2" /> Họ và tên
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-500 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                    required
                                />
                            </div>

                            {/* Contact Number */}
                            <div>
                                <label htmlFor="contactNumber" className="mb-2 text-xs md:text-sm font-normal text-gray-500 flex items-center">
                                    <FaPhoneAlt className="mr-2" /> Số điện thoại
                                </label>
                                <input
                                    type="tel"
                                    id="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-500 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                    pattern="[0-9]{10}"
                                    required
                                />
                            </div>

                            {/* Pickup Location */}
                            <div className="relative">
                                <label htmlFor="pickupLocation" className="mb-2 text-xs md:text-sm font-normal text-gray-500 flex items-center">
                                    <FaMapMarkerAlt className="mr-2" /> Địa điểm đón
                                </label>
                                <input
                                    type="text"
                                    id="pickupLocation"
                                    value={formData.pickupLocation}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-500 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                    required
                                    autoComplete="off"
                                />
                                {pickupSuggestions.length > 0 && (
                                    <ul className="absolute bg-white border border-gray-300 rounded-lg shadow-md mt-1 w-full z-10">
                                        {pickupSuggestions.map((suggestion) => (
                                            <li
                                                key={suggestion.place_id}
                                                className="p-2 text-sm hover:bg-gray-100 cursor-pointer"
                                                onClick={() => handleSuggestionClick('pickupLocation', suggestion)}
                                            >
                                                {suggestion.description}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Dropoff Location */}
                            <div className="relative">
                                <label htmlFor="dropoffLocation" className="mb-2 text-xs md:text-sm font-normal text-gray-500 flex items-center">
                                    <FaMapMarkerAlt className="mr-2" /> Địa điểm trả
                                </label>
                                <input
                                    type="text"
                                    id="dropoffLocation"
                                    value={formData.dropoffLocation}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-500 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                    required
                                    autoComplete="off"
                                />
                                {dropoffSuggestions.length > 0 && (
                                    <ul className="absolute bg-white border border-gray-300 rounded-lg shadow-md mt-1 w-full z-10">
                                        {dropoffSuggestions.map((suggestion) => (
                                            <li
                                                key={suggestion.place_id}
                                                className="p-2 text-sm hover:bg-gray-100 cursor-pointer"
                                                onClick={() => handleSuggestionClick('dropoffLocation', suggestion)}
                                            >
                                                {suggestion.description}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Booking Date */}
                            <div>
                                <label htmlFor="bookingDate" className="mb-2 text-xs md:text-sm font-normal text-gray-500 flex items-center">
                                    <FaCalendarAlt className="mr-2" /> Ngày đặt
                                </label>
                                <input
                                    type="date"
                                    id="bookingDate"
                                    value={formData.bookingDate}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-500 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                    required
                                />
                            </div>

                            {/* Booking Time */}
                            <div>
                                <label htmlFor="bookingTime" className="mb-2 text-xs md:text-sm font-normal text-gray-500 flex items-center">
                                    <FaClock className="mr-2" /> Giờ đặt
                                </label>
                                <input
                                    type="time"
                                    id="bookingTime"
                                    value={formData.bookingTime}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-500 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                    required
                                />
                            </div>

                            {/* Car Type */}
                            <div>
                                <label htmlFor="carType" className="mb-2 text-xs md:text-sm font-normal text-gray-500 flex items-center">
                                    <FaCar className="mr-2" /> Loại xe
                                </label>
                                <select
                                    id="carType"
                                    value={formData.carType}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-500 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                    required
                                >
                                    <option value="4_seat">4 chỗ</option>
                                    <option value="7_seat">7 chỗ</option>
                                    <option value="16_seat">16 chỗ</option>
                                </select>
                            </div>

                            {/* Passenger Count */}
                            <div>
                                <label htmlFor="passengerCount" className="mb-2 text-xs md:text-sm font-normal text-gray-500 flex items-center">
                                    <FaUserAlt className="mr-2" /> Số lượng hành khách
                                </label>
                                <input
                                    type="number"
                                    id="passengerCount"
                                    value={formData.passengerCount}
                                    onChange={handleInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-500 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                    min="1"
                                    max="16"
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
                            Đặt xe
                        </button>
                    </form>
                    <ToastContainer />
                </section>
            </div>
        </div>
    );
}