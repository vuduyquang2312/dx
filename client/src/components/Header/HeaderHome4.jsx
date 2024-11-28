import React from 'react';
import { FaCheckCircle, FaUsers, FaGlobe, FaCreditCard } from 'react-icons/fa';

export default function HeaderHome4() {
    return (
        <div>
            <section className="bg-white border-t dark:bg-gray-900">
                <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
                    <div className="col-span-2 mb-8">
                        <p className="text-2xl font-medium text-blue-600 dark:text-blue-500">Dịch vụ vận chuyển uy tín</p>
                        <h2 className="mt-3 mb-4 text-base text-left font-light tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Được tin tưởng bởi hơn 10 triệu người dùng và hàng nghìn tài xế trên Hà Nội
                        </h2>
                        <p className="font-light text-gray-500 text-sm text-left sm:text-xl dark:text-gray-400">
                            Nền tảng của chúng tôi đảm bảo một trải nghiệm đặt xe dễ dàng và an toàn cho tất cả người dùng. Đặt xe ngay mọi lúc, mọi nơi.
                        </p>
                        
                    </div>
                    <div className="col-span-2 p-4 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                        {/* Adjusting the flex layout for icons and text */}
                        <div className="flex items-center space-x-4">
                            <FaCheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-500 md:w-16 md:h-16" />
                            <div>
                                <h3 className="mb-2 text-left text-sm md:text-2xl font-bold dark:text-white">Đảm bảo hoạt động 99.99%</h3>
                                <p className="font-light text-left text-sm md:text-xl text-gray-500 dark:text-gray-400">Chúng tôi đảm bảo rằng yêu cầu đặt xe của bạn sẽ không bị gián đoạn.</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <FaUsers className="w-6 h-6 text-blue-600 dark:text-blue-500 md:w-16 md:h-16" />
                            <div>
                                <h3 className="mb-2 text-left text-sm md:text-2xl font-bold dark:text-white">Hơn 600 triệu người dùng</h3>
                                <p className="font-light text-left text-sm md:text-xl text-gray-500 dark:text-gray-400">Gia nhập hàng triệu người dùng tin tưởng chúng tôi cho chuyến đi hàng ngày của họ.</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <FaGlobe className="w-6 h-6 text-blue-600 dark:text-blue-500 md:w-16 md:h-16" />
                            <div>
                                <h3 className="mb-2 text-left text-sm md:text-2xl font-bold dark:text-white">Có mặt ở hơn 100 quốc gia</h3>
                                <p className="font-light text-left text-sm md:text-xl text-gray-500 dark:text-gray-400">Dịch vụ của chúng tôi có sẵn cho người dùng toàn cầu, bất cứ nơi đâu bạn ở.</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <FaCreditCard className="w-6 h-6 text-blue-600 dark:text-blue-500 md:w-16 md:h-16" />
                            <div>
                                <h3 className="mb-2 text-left text-sm md:text-2xl font-bold dark:text-white">Nhiều phương thức thanh toán</h3>
                                <p className="font-light text-left text-sm md:text-xl text-gray-500 dark:text-gray-400">Thanh toán cho chuyến đi của bạn bằng thẻ tín dụng, PayPal hoặc các phương thức yêu thích khác.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
