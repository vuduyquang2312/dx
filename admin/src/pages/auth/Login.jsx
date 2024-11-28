import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Đăng nhập thành công, lưu trạng thái vào localStorage
                localStorage.setItem('isLogin', 'true'); // Đặt isLogin = true vào localStorage

                alert('Đăng nhập thành công!');
                navigate('/'); // Chuyển hướng về trang chủ
            } else {
                // Hiển thị lỗi nếu đăng nhập thất bại
                setError(data.message || 'Đã xảy ra lỗi khi đăng nhập.');
            }
        } catch (err) {
            setError('Lỗi kết nối tới server.');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-[#292F3D]">
            <div className="w-full max-w-md bg-[#383E4E] p-8 rounded-lg">
                
                <form className="max-w-sm mx-auto" onSubmit={handleLogin}>
                    <div className="mb-5">
                        <label htmlFor="username" className="block text-white  mb-2 text-xs ">
                            Tên đăng nhập
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="bg-[#20222E] mt-4 border-none  text-white text-xs rounded-lg  block w-full p-3"
                            placeholder="Tên đăng nhập"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block text-white mb-2 text-xs   dark:text-white">
                            Mật khẩu
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-[#20222E]  mt-4 border-none text-gray-300 text-xs rounded-lg  block w-full p-3"
                            placeholder="Mật khẩu"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-xs mb-5">{error}</p>}
                    <button
                        type="submit"
                        className="text-black mt-6 bg-[#58c098] hover:bg-[#58c09887] focus:ring-4 focus:outline-none  rounded-lg text-sm w-full px-5 py-2.5"
                    >
                        Đăng nhập
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
