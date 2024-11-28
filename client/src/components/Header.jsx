import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPolicyOpen, setIsPolicyOpen] = useState(false); // State để quản lý mục con "Chính sách"
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const togglePolicy = () => {
        setIsPolicyOpen((prev) => !prev); // Toggle trạng thái mở rộng
        setIsAboutOpen(false);
    };

    const toogleAbout = () => {
        setIsAboutOpen((prev) => !prev); // Toggle trạng thái mở rộng
        setIsPolicyOpen(false);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
        setIsPolicyOpen(false); // Đóng mục "Chính sách"
        setIsAboutOpen(false);
    };


    return (
        <header className="fixed border w-full z-50">
            <nav className="bg-white border-gray-200 py-4 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                        <span className="self-center text-sm md:text-lg font-semibold whitespace-nowrap uppercase dark:text-white">
                            Đặt xe ngay
                        </span>
                    </Link>

                    {/* Nút liên hệ */}
                    <div className="lg:order-3 flex items-center justify-center ml-auto lg:ml-4">
                        <a
                            href="tel:0819462462"
                            className="flex items-center gap-2 text-white bg-purple-700 text-xs md:text-sm hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-lg px-4 py-3 lg:px-4 lg:py-3 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                        >
                            <MdOutlinePhoneInTalk />
                            <span>Liên hệ đặt xe</span>
                        </a>
                    </div>

                    {/* Menu toggle button */}
                    <div className="lg:hidden flex items-center ml-4">
                        <button
                            onClick={toggleMenu}
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 text-xs border-none text-gray-500 rounded-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2"
                            aria-expanded={isMenuOpen}
                        >
                            <FaBars className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Menu */}
                    <div
                        className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isMenuOpen ? "block" : "hidden"
                            }`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link
                                    to="/"
                                    onClick={handleCloseMenu}
                                    className={`block py-2 pl-3 pr-4 text-sm md:text-lg rounded lg:p-0 ${location.pathname === "/"
                                        ? "text-purple-700"
                                        : "text-gray-700 hover:text-purple-700"
                                        } dark:text-white`}
                                >
                                    Trang chủ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/dat-xe"
                                    onClick={handleCloseMenu}
                                    className={`block py-2 pl-3 pr-4 text-sm md:text-lg rounded lg:p-0 ${location.pathname === "/dat-xe"
                                        ? "text-purple-700"
                                        : "text-gray-700 hover:text-purple-700"
                                        } dark:text-white`}
                                >
                                    Đặt xe
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/history"
                                    onClick={handleCloseMenu}
                                    className={`block py-2 pl-3 pr-4 text-sm md:text-lg rounded lg:p-0 ${location.pathname === "/history"
                                        ? "text-purple-700"
                                        : "text-gray-700 hover:text-purple-700"
                                        } dark:text-white`}
                                >
                                    Lịch sử đặt
                                </Link>
                            </li>
                            <li className="relative pl-3">
                                <button
                                    className={`flex justify-between items-center w-full text-left py-2 text-sm md:text-lg rounded cursor-pointer lg:p-0 ${isPolicyOpen ? "text-purple-700" : "text-gray-700 hover:text-purple-700"} dark:text-white`}
                                    onClick={togglePolicy}
                                >
                                    Chính sách
                                    <span
                                        className={`ml-2 transform transition-transform duration-300 ${isPolicyOpen ? "rotate-180" : "rotate-0"}`}
                                    >
                                        <FaChevronDown />
                                    </span>
                                </button>
                                {isPolicyOpen && (
                                    <ul
                                        className="absolute bg-white border-b rounded-md shadow-lg pl-4 md:p-4 mt-1 md:mt-2 space-y-2 z-50"
                                        style={{ top: "100%", left: 0, minWidth: "300px" }}
                                    >
                                        <li>
                                            <Link
                                                to="/chinh-sach/giai-quyet-su-co-va-khieu-nai"
                                                onClick={handleCloseMenu}
                                                className="block py-2 text-sm md:text-base text-gray-500 hover:text-purple-700 dark:text-white"
                                            >
                                                Giải quyết sự cố và khiếu nại
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/chinh-sach/dieu-khoan-phap-ly"
                                                onClick={handleCloseMenu}
                                                className="block py-2 text-sm md:text-base text-gray-500 hover:text-purple-700 dark:text-white"
                                            >
                                                Điều khoản pháp lý
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/chinh-sach/bao-ve-quyen-rieng-tu"
                                                onClick={handleCloseMenu}
                                                className="block py-2 text-sm md:text-base text-gray-500 hover:text-purple-700 dark:text-white"
                                            >
                                                Chính sách bảo vệ quyền riêng tư
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/chinh-sach/van-chuyen-hanh-khach"
                                                onClick={handleCloseMenu}
                                                className="block py-2 text-sm md:text-base text-gray-500 hover:text-purple-700 dark:text-white"
                                            >
                                                Quy định vận chuyển hành khách
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            
                            <li>
                                <Link
                                    to="/ho-tro"
                                    onClick={handleCloseMenu}
                                    className={`block py-2 pl-3 pr-4 text-sm md:text-lg rounded lg:p-0 ${location.pathname === "/ho-tro"
                                        ? "text-purple-700"
                                        : "text-gray-700 hover:text-purple-700"
                                        } dark:text-white`}
                                >
                                    Hỗ trợ
                                </Link>
                            </li>
                            <li className="relative pl-3">
                                <button
                                    className={`flex justify-between items-center w-full text-left py-2 text-sm md:text-lg rounded cursor-pointer lg:p-0 ${isAboutOpen ? "text-purple-700" : "text-gray-700 hover:text-purple-700"} dark:text-white`}
                                    onClick={toogleAbout}
                                >
                                    Về chúng tôi
                                    <span
                                        className={`ml-2 transform transition-transform duration-300 ${isAboutOpen ? "rotate-180" : "rotate-0"}`}
                                    >
                                        <FaChevronDown />
                                    </span>
                                </button>
                                {isAboutOpen && (
                                    <ul
                                        className="absolute bg-white border-b rounded-md shadow-lg pl-4 md:p-4 mt-1 md:mt-2 space-y-2 z-50"
                                        style={{ top: "100%", left: 0, minWidth: "300px" }}
                                    >
                                        <li>
                                            <Link
                                                to="/ve-chung-toi/huong-dan-dat-xe"
                                                onClick={handleCloseMenu}
                                                className="block py-2 text-sm md:text-base text-gray-500 hover:text-purple-700 dark:text-white"
                                            >
                                                Hướng dẫn đặt xe
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/ve-chung-toi/huong-dan-thanh-toan"
                                                onClick={handleCloseMenu}
                                                className="block py-2 text-sm md:text-base text-gray-500 hover:text-purple-700 dark:text-white"
                                            >
                                                Hướng dẫn thanh toán
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="/ve-chung-toi/cau-hoi-thuong-gap"
                                                onClick={handleCloseMenu}
                                                className="block py-2 text-sm md:text-base text-gray-500 hover:text-purple-700 dark:text-white"
                                            >
                                                 Câu hỏi thường gặp FAQ
                                            </Link>
                                        </li>
                                        
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
