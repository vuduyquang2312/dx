import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Support() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [history, setHistory] = useState([]); // Lưu lịch sử yêu cầu

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage('');
        setErrorMessage('');

        try {
            // Gửi yêu cầu POST tới server
            const response = await fetch('https://datxenngay.com/api/support', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                toast.success('Yêu cầu hỗ trợ đã được gửi thành công!');
                setFormData({ name: '', email: '', message: '' });

                // Lưu yêu cầu mới vào lịch sử trong localStorage
                const newRequest = {
                    ...formData,
                    date: new Date().toLocaleString(),
                };

                const updatedHistory = [...history, newRequest];
                setHistory(updatedHistory);
                localStorage.setItem('supportHistory', JSON.stringify(updatedHistory)); // Lưu vào localStorage
            } else {
                setErrorMessage(result.message || 'Đã xảy ra lỗi, vui lòng thử lại.');
            }
        } catch (error) {
            setErrorMessage('Không thể kết nối tới server. Vui lòng thử lại sau.');
        } finally {
            setLoading(false);
        }
    };

    // Lấy lịch sử yêu cầu từ localStorage khi component được load
    useEffect(() => {
        const storedHistory = localStorage.getItem('supportHistory');
        if (storedHistory) {
            setHistory(JSON.parse(storedHistory));
        }
    }, []);

    return (
        <section className="bg-white dark:bg-gray-700 py-8 px-4">
            <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-8">
                {/* Phần Form Hỗ Trợ */}
                <div className="lg:col-span-1 md:border md:p-4 p-0 rounded-lg mt-16">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Họ tên
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-2 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                placeholder="Nhập tên của bạn"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-2 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                placeholder="Nhập email của bạn"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Nội dung vấn đề
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="mt-2 block w-full px-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                                placeholder="Mô tả vấn đề bạn gặp phải"
                                rows="4"
                                required
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="text-blue-700 w-full hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                                disabled={loading}
                            >
                                {loading ? 'Đang gửi...' : 'Gửi yêu cầu hỗ trợ'}
                            </button>
                        </div>

                        {/* Hiển thị thông báo thành công hoặc lỗi */}
                        {successMessage && <p className="text-green-500">{successMessage}</p>}
                        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                    </form>
                </div>

                {/* Phần Lịch Sử Yêu Cầu */}
                <div className="lg:col-span-1 mt-4 md:mt-16">
                    <div className="space-y-4">
                        {/* Hiển thị các yêu cầu đã gửi */}
                        {history.length > 0 ? (
                            history.map((request, index) => (
                                <div key={index} className="p-4 border dark:bg-gray-800 rounded-lg">
                                    <p className="text-lg border-b py-4 font-semibold text-gray-900 dark:text-white">
                                        Yêu cầu #{index + 1}
                                    </p>
                                    <p className="text-sm border-b py-4 text-gray-700 dark:text-gray-300">Vấn đề: {request.message}</p>
                                    <p className="text-sm border-b py-4 text-gray-500 dark:text-gray-400">Ngày: {request.date}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">Chưa có yêu cầu hỗ trợ nào.</p>
                        )}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}
