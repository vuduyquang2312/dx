import React from 'react';
import ImageHeader1 from '../../assets/imageheader1.webp';
import ImageHeader2 from '../../assets/ImageHeader2.webp';

export default function HeaderHome2() {
    return (
        <div>
            <div className="border-t bg-white  dark:bg-gray-800">
                <div className="max-w-screen-xl  px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6 motion-preset-focus ">
                    {/* Row 1 */}
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                                Đặt xe dễ dàng với công cụ tiện lợi
                            </h2>
                            <p className="mb-8 font-light text-sm lg:text-xl text-left">
                                Trải nghiệm dịch vụ đặt xe nhanh chóng và an toàn. Chúng tôi giúp bạn tìm kiếm và đặt xe chỉ với vài thao tác đơn giản, mang lại sự tiện lợi tối đa cho hành trình của bạn.
                            </p>

                            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-sm md:text-lg font-medium leading-tight text-gray-900 dark:text-white">Đặt xe nhanh và an toàn</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-sm md:text-lg font-medium leading-tight text-gray-900 dark:text-white">Hỗ trợ hành trình toàn diện</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-sm md:text-lg font-medium leading-tight text-gray-900 dark:text-white">Quản lý thông tin chuyến đi dễ dàng</span>
                                </li>
                            </ul>
                            <p className="mb-8 font-light text-sm md:text-base lg:text-xl">
                                Đặt xe chỉ trong vài giây, giúp bạn tiết kiệm thời gian và tập trung vào chuyến đi của mình.
                            </p>
                        </div>
                        <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={ImageHeader1} alt="dashboard feature image" />
                    </div>

                    {/* Row 2 */}
                    <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                        <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={ImageHeader2} alt="feature image 2" />
                        <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                                Đầu tư vào trải nghiệm hành khách
                            </h2>
                            <p className="mb-8 font-light text-left text-sm lg:text-xl">
                                Chúng tôi cam kết mang đến dịch vụ chất lượng cao, tạo nên sự tin tưởng tuyệt đối cho hành khách trên mọi chuyến đi.
                            </p>
                            <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-sm md:text-lg font-medium leading-tight text-gray-900 dark:text-white">Báo cáo chuyến đi chi tiết</span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="text-sm md:text-lg font-medium leading-tight text-gray-900 dark:text-white">Đa dạng lựa chọn xe</span>
                                </li>
                            </ul>
                            <p className="font-light text-sm lg:text-xl">
                                Hãy để chúng tôi đồng hành cùng bạn trên mọi chuyến đi, mang đến trải nghiệm tuyệt vời nhất.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
