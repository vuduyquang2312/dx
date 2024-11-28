import React from 'react';

export default function CauHoiThuongGap() {
  return (
    <div className="border-t bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl mt-14 px-4 py-8 mx-auto space-y-8 lg:py-24 lg:px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Câu Hỏi Thường Gặp (FAQ)</h2>

        <div className="space-y-6">
          {/* Câu Hỏi 1 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Câu hỏi 1: Làm thế nào để đặt Taxi Nội Bài?</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Để đặt Taxi Nội Bài bạn có thể sử dụng một trong các phương thức sau:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Gọi điện thoại trực tiếp đến tổng đài theo số hotline: <span className="font-medium text-blue-600">0819.462.262</span>.</li>
              <li>
                Đặt xe qua website chính thức của hãng tại địa chỉ: {' '}
                <a href="https://datxenngay.com" className="text-blue-600 underline">https://datxenngay.com</a>
              </li>
              <li>
                Sử dụng ứng dụng di động (nếu có) để đặt chuyến nhanh chóng và tiện lợi. Quy trình đặt xe đơn giản, nhanh chóng, phù hợp với mọi nhu cầu của khách hàng.
              </li>
            </ul>
          </div>

          {/* Câu Hỏi 2 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Câu Hỏi 2: Cước Phí Dịch Vụ Taxi Nội Bài Là Bao Nhiêu?</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Cước phí cho dịch vụ Taxi Nội Bài phụ thuộc vào quãng đường di chuyển và loại xe bạn chọn. Chúng tôi cung cấp một mức giá cạnh tranh và minh bạch, với các tùy chọn giá cố định hoặc theo km. Tất cả thông tin giá cả được cập nhật trên website và bảng giá của chúng tôi. Thông thường giá cước trong khoảng <span className="font-medium">200.000 VNĐ – 250.000 VNĐ</span>.
            </p>
          </div>

          {/* Câu Hỏi 3 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Câu Hỏi 3: Dịch Vụ Taxi Nội Bài Phục Vụ 24/7 Không?</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Có, dịch vụ Taxi Nội Bài của chúng tôi hoạt động 24/7 để phục vụ nhu cầu di chuyển không ngừng của khách hàng. Dù bạn cần di chuyển vào ban đêm hay sáng sớm, chúng tôi luôn sẵn lòng phục vụ.
            </p>
          </div>

          {/* Câu Hỏi 4 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Câu Hỏi 4: Có Dịch Vụ Đón Tiễn Tại Cửa Nhà Không?</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Có, hiện nay dịch vụ Taxi Nội Bài của chúng tôi cung cấp dịch vụ đón tiễn tận nơi, từ cửa nhà đến sân bay và ngược lại. Dịch vụ này giúp khách hàng tiết kiệm thời gian và sự thuận tiện trong mỗi chuyến đi.
            </p>
          </div>

          {/* Câu Hỏi 5 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Câu Hỏi 5: Làm Sao Để Liên Lạc Với Tài Xế Sau Khi Đặt Xe?</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Sau khi đặt xe thành công, bạn sẽ nhận được thông tin liên lạc của tài xế qua tin nhắn hoặc email. Ngoài ra, thông tin này cũng có thể được cung cấp trực tiếp trên ứng dụng hoặc website. Chúng tôi đảm bảo việc giao tiếp giữa khách hàng và tài xế diễn ra một cách suôn sẻ và hiệu quả.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}