import React, { useState } from 'react';

export default function HeaderHome5() {
  const [activeIndex, setActiveIndex] = useState(null); // Lưu index của câu hỏi đang mở

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Nếu câu hỏi đã mở thì đóng, nếu chưa mở thì mở
  };

  return (
    <div>
      <section className="bg-white border-t dark:bg-gray-900">
        <div className="max-w-screen-xl mt-4 px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
          <h2 className="mb-6 text-xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
            Câu hỏi thường gặp
          </h2>
          <div className="max-w-screen-md mx-auto">
            <div
              id="accordion-flush"
              data-accordion="collapse"
              data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              data-inactive-classes="text-gray-500 dark:text-gray-400"
            >
              {[
                {
                  question: 'Đặt xe qua datxenngay.com có mất phí không?',
                  answer: 'Đặt xe qua datxenngay.com hoàn toàn miễn phí. Bạn sẽ phải trả chi phí chuyến xe cho tài xế. datxenngay.com không thu thêm bất cứ khoản nào từ hành khách.',
                },
                {
                  question: 'Làm sao để biết chuyến đi đã được xác nhận?',
                  answer: `- Hãy chọn cho mình một chuyến đi còn chỗ trống
                  - Gửi yêu cầu đặt chuyến sớm nhất có thể
                  - Chờ đợi tài xế xác nhận
                  - Sau khi xác nhận, hành trình của bạn sẽ hiện lên trên app và bạn sẽ nhận được thông báo
                  - Nếu tài xế không xác nhận, bạn có thể hủy yêu cầu và tìm chuyến khác`,
                },
                {
                  question: 'Hủy chuyến có mất phí không?',
                  answer: 'Không, hủy chuyến trên datxenngay là hoàn toàn không mất phí. Bạn sẽ không hủy được chuyến sau khi chuyến đi bắt đầu.',
                },
                {
                  question: 'Có thể thanh toán trực tiếp qua datxenngay không?',
                  answer: 'Datxenngay sẽ cho phép thanh toán trực tiếp trên nền tảng trong tương lai gần. Hiện tại datxenngay vẫn chưa hỗ trợ việc thanh toán trực tuyến, bạn hãy chủ động trao đổi và thống nhất hình thức thanh toán với tài xế nhé.',
                },
              ].map((item, index) => (
                <div key={index}>
                  <h3 id={`accordion-flush-heading-${index}`}>
                    <button
                      type="button"
                      className={`flex items-center justify-between w-full py-5 font-medium text-left ${
                        activeIndex === index
                          ? 'text-gray-900 bg-white dark:bg-gray-900 dark:text-white'
                          : 'text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400'
                      }`}
                      onClick={() => handleAccordionClick(index)}
                    >
                      <span className='text-sm md:text-lg'>{item.question}</span>
                      <svg
                        data-accordion-icon=""
                        className={`w-6 h-6 ${activeIndex === index ? 'rotate-180' : ''} shrink-0`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h3>
                  <div
                    id={`accordion-flush-body-${index}`}
                    className={activeIndex === index ? '' : 'hidden'}
                    aria-labelledby={`accordion-flush-heading-${index}`}
                  >
                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p className="mb-2 text-gray-500 text-sm text-left dark:text-gray-400">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
