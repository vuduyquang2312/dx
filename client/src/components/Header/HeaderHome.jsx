import React from 'react';
import { FaCarRear } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import Hero from '../../assets/hero.png';

export default function HeaderHome() {
    return (
        <div>
            <section className="bg-white dark:bg-gray-700 ">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28 motion-preset-bounce">
                    <div className="mr-auto place-self-start mt-16 lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-3xl font-extrabold leading-none tracking-tight text-left md:text-5xl xl:text-6xl dark:text-white">
                            Đặt xe ngay <br />
                            <span className="text-blue-600 mt-4 block">an toàn và tiện lợi</span>
                        </h1>


                        <p className="max-w-2xl mb-6 font-light text-sm text-left text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-300">
                            Đặt xe nhanh chóng với các tiện ích từ trang web của chúng tôi.<br /> Hãy trải nghiệm dịch vụ chất lượng cao, an toàn và bảo mật.
                        </p>

                        <div className="flex items-start space-y-0  sm:space-y-0 sm:space-x-4">
                            <div className='flex  justify-center'>
                            <a
                                href="/dat-xe"
                                className="flex items-center justify-start w-full px-5 py-3 text-xs md:text-sm font-medium text-left text-blue-500 bg-white border border-blue-200 rounded-lg sm:w-auto hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                <FaCarRear className="mr-2" />
                                Đặt xe ngay
                            </a>
                            </div>

                            <div className='flex  justify-center'>
                            <a
                                href="tel:0819462462"
                                className="flex items-center justify-start w-full ml-2 px-5 py-3 text-xs md:text-sm font-medium text-left text-blue-500 bg-white border border-blue-200 rounded-lg sm:w-auto hover:bg-blue-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            >
                                <FaPhone className="mr-2" />
                                Liên hệ đặt xe
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={Hero} alt="Hero Image" />
                    </div>
                </div>
            </section>
        </div>
    );
}
