import React from 'react';

export default function HuongDanDatXe() {
  return (
    <div className="border-t bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl mt-14 px-4 py-8 mx-auto space-y-8 lg:py-24 lg:px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">HƯỚNG DẪN ĐẶT XE</h2>

        <div className="space-y-6">
          {/* Giới thiệu */}
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Đặt xe Taxi Nội Bài chưa bao giờ dễ dàng hơn thế! Để giúp khách hàng tiếp cận dịch vụ của chúng tôi một cách nhanh chóng và thuận tiện, xin vui lòng tham khảo hướng đặt xe dẫn sau:
          </p>

          {/* Cách 1: Đặt qua tổng đài */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cách 1: Đặt Qua Tổng Đài</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>
                <strong>Bước 1:</strong> Liên hệ gọi tới số điện thoại tổng đài <strong>0819.462.262</strong> để đặt xe.
              </li>
              <li>
                <strong>Bước 2:</strong> Cung cấp cho nhân viên tổng đài thông tin như địa chỉ đón và điểm đến, để nhân viên đặt xe có thể phục vụ một cách nhanh chóng và chính xác.
              </li>
            </ul>
          </div>

          {/* Cách 2: Đặt qua website */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cách 2: Đặt Qua Website Của Taxi Nội Bài</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>
                <strong>Bước 1:</strong> Truy cập website <a href="https://datxenngay.com" className="text-blue-500 underline">https://datxenngay.com</a>.
              </li>
              <li>
                <strong>Bước 2:</strong> Nhập điểm đón và điểm đến.
              </li>
              <li>
                <strong>Bước 3:</strong> Lựa chọn loại xe, kiểm tra giá cước.
              </li>
              <li>
                <strong>Bước 4:</strong> Nhập thông tin liên hệ bao gồm: tên và số điện thoại.
              </li>
              <li>
                <strong>Bước 5:</strong> Xác nhận đặt xe.
              </li>
            </ul>
          </div>

          {/* Những lưu ý */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Những lưu ý khi đặt xe:</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>
                Khách hàng cần cung cấp và điền đầy đủ thông tin: điểm đón, điểm đến, thời gian đặt xe, loại xe.
              </li>
              <li>
                Đặt xe sớm để đảm bảo có xe.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
