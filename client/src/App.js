import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from './components/Header';
import Hero from './components/Hero';
import Booking from './components/Page/Booking';
import History from './components/Page/History';
import Support from './components/Page/Support';
import SuCoVaKhieuNai from './components/Page/ChinhSach/SuCoVaKhieuNai';
import ChinhSachQuyenRiengTu from './components/Page/ChinhSach/ChinhSachQuyenRiengTu';
import DieuKhoanPhapLy from './components/Page/ChinhSach/DieuKhoanPhapLy';
import VanChuyenHanhKhach from './components/Page/ChinhSach/VanChuyenHanhKhach';
import HuongDanDatXe from "./components/Page/About/HuongDanDatXe";
import HuongDanThanhToan from "./components/Page/About/HuongDanThanhToan";
import CauHoiThuongGap from "./components/Page/About/CauHoiThuongGap";
import Footer from "./components/Footer/Footer";
import './App.css';
import './output.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Check and clear localStorage after 48 hours
    const storedTime = localStorage.getItem('bookingHistory');
    const currentTime = new Date().getTime();

    if (storedTime) {
      const timeElapsed = currentTime - parseInt(storedTime);
      const hoursElapsed = timeElapsed / (1000 * 3600); // Convert milliseconds to hours

      if (hoursElapsed >= 48) {
        localStorage.clear(); // Clear all data if 48 hours have passed
      }
    } else {
      // If no time is stored, store the current time
      localStorage.setItem('firstVisitTime', currentTime.toString());
    }

    // Handle changing document title based on the path
    switch (location.pathname) {
      case "/":
        document.title = "Trang chủ | Datxenngay";
        break;
      case "/dat-xe":
        document.title = "Đặt xe | Datxenngay";
        break;
      case "/chinh-sach/giai-quyet-su-co-va-khieu-nai":
        document.title = "Giải quyết sự cố và khiếu nại | Datxenngay";
        break;
      case "/chinh-sach/dieu-khoan-phap-ly":
        document.title = "Điều khoản pháp lý | Datxenngay";
        break;
      case "/chinh-sach/bao-ve-quyen-rieng-tu":
        document.title = "Chính sách bảo vệ quyền riêng tư | Datxenngay";
        break;
      case "/chinh-sach/van-chuyen-hanh-khach":
        document.title = "Vận chuyển hành khách | Datxenngay";
        break;
      case "/history":
        document.title = "Lịch sử đặt xe | Datxenngay";
        break;
      case "/ho-tro":
        document.title = "Hỗ trợ | Datxenngay";
        break;
      case "/khuyen-mai":
        document.title = "Khuyễn mãi | Datxenngay";
        break;
      case "/ve-chung-toi/huong-dan-dat-xe":
        document.title = "Hưỡng dẫn đặt xe | Datxenngay";
        break;
      case "/ve-chung-toi/huong-dan-thanh-toan":
        document.title = "Hưỡng dẫn thanh toán | Datxenngay";
        break;
      case "/ve-chung-toi/cau-hoi-thuong-gap":
        document.title = "Câu hỏi thường gặp | Datxenngay";
        break;
      default:
        document.title = "Datxenngay";
        break;
    }
  }, [location]);

  return (
    <div className="App flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path='/dat-xe' element={<Booking />} />
          <Route path='/chinh-sach/giai-quyet-su-co-va-khieu-nai' element={<SuCoVaKhieuNai />} />
          <Route path='/chinh-sach/dieu-khoan-phap-ly' element={<DieuKhoanPhapLy />} />
          <Route path='/chinh-sach/bao-ve-quyen-rieng-tu' element={<ChinhSachQuyenRiengTu />} />
          <Route path='/chinh-sach/van-chuyen-hanh-khach' element={<VanChuyenHanhKhach />} />
          <Route path="/ve-chung-toi/cau-hoi-thuong-gap" element={<CauHoiThuongGap /> } />
          <Route path="/ve-chung-toi/huong-dan-dat-xe" element={<HuongDanDatXe/> } />
          <Route path="/ve-chung-toi/huong-dan-thanh-toan" element={<HuongDanThanhToan/> } />
          <Route path='/history' element={<History />} />
          <Route path='/ho-tro' element={<Support />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
