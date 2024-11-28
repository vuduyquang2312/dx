import React from 'react';
import { FaCopy } from 'react-icons/fa'; // Chỉ import FaCopy

export default function HuongDanThanhToan() {
  const handleCopy = () => {
    const text = '19031242261015'; // Số tài khoản
    navigator.clipboard.writeText(text).then(() => {
      alert('Số tài khoản đã được sao chép!');
    });
  };

  return (
    <div className="border-t bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl mt-14 px-4 py-8 mx-auto space-y-8 lg:py-24 lg:px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">HƯỚNG DẪN THANH TOÁN</h2>

        <div className="space-y-6">
          {/* Giới thiệu */}
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Khi sử dụng dịch vụ Taxi Nội Bài của công ty chúng tôi, khách hàng sẽ được trải nghiệm một quy trình thanh toán tiện lợi, linh hoạt và minh bạch. Trước mỗi chuyến đi, khách hàng sẽ được báo trước giá cước dự kiến, đảm bảo tính minh bạch và không phát sinh thêm chi phí. Dưới đây là các hình thức và chính sách thanh toán cước phí taxi nội bài mà chúng tôi áp dụng:
          </p>

          {/* Thanh toán bằng tiền mặt */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Thanh toán bằng tiền mặt</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Khách hàng có thể thanh toán trực tiếp bằng tiền mặt cho tài xế sau khi hoàn thành chuyến đi.
            </p>
          </div>

          {/* Thanh toán bằng chuyển khoản */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Thanh toán bằng hình thức chuyển khoản</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Taxi Nội Bài hỗ trợ nhiều chính sách thanh toán khác nhau như: thẻ tín dụng và thẻ ghi nợ phổ biến.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Quý Khách có thể gửi theo số tài khoản theo hướng dẫn sau:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Nội Dung: SĐT người đi – giờ đi – lộ trình</li>
              <li>Ngân Hàng: Techcombank</li>
              <li>Chủ TK: TRAN VAN DAI</li>
              <li>STK: 19031242261015</li>
            </ul>

            {/* Nút Copy */}
            <div className="mt-4 flex items-center space-x-4">
              <button
                className="flex items-center text-gray-700 dark:text-gray-300 bg-gray-100 p-2 rounded-md hover:bg-gray-200"
                onClick={handleCopy}
              >
                <FaCopy className="mr-2" /> Copy STK
              </button>
            </div>
          </div>

          {/* Thanh toán qua ví điện tử Momo */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Thanh toán qua ví điện tử Momo</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Hiện chúng tôi đang triển khai hình thức thanh toán Momo trong thời gian tới để giúp khách hàng linh hoạt hơn trong việc thanh toán cước phí.
            </p>
          </div>

          {/* Chính sách hỗ trợ */}
          <div>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Mọi thắc mắc hoặc vấn đề liên quan đến khiếu nại thanh toán sẽ được đội ngũ hỗ trợ của chúng tôi giải quyết nhanh chóng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
