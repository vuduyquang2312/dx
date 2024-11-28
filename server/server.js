const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const TelegramBot = require('node-telegram-bot-api');
const Booking = require('./models/booking');
const Admin = require('./models/admin');

const bcrypt = require('bcrypt');
// Cấu hình MongoDB URI và Telegram Bot Token
const MONGO_URI = 'mongodb+srv://quangdeptraino1:4hbQKQwcBrgDBlZ2@cluster0.q951owo.mongodb.net/datxeonline';
const TELEGRAM_BOT_TOKEN = '7727878888:AAFIqxTrpgCAnqZrYlpef-hTT4D9_6VCMp4'; // Thay bằng token thực tế của bạn

// Khởi tạo express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Kết nối MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Đã kết nối thành công đến MongoDB');
})
.catch((err) => {
  console.log('Lỗi kết nối MongoDB:', err);
});

// Định nghĩa schema cho yêu cầu hỗ trợ
const supportSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now }
});

// Tạo model từ schema
const SupportRequest = mongoose.model('SupportRequest', supportSchema);

// Route chính
app.get('/api', (req, res) => {
  res.send('Hello, Welcome to Support Server!');
});

// Route để gửi yêu cầu hỗ trợ
app.post('/api/support', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin.' });
  }

  try {
    const newRequest = new SupportRequest({
      name,
      email,
      message
    });

    await newRequest.save();

    // Gửi thông báo qua Telegram
    const messageToSend = `🆘 *Yêu cầu hỗ trợ mới*\n\n` +
                          `👤 Khách hàng: ${escapeMarkdown(newRequest.name)}\n` +
                          `📧 Email: ${escapeMarkdown(newRequest.email)}\n` +
                          `💬 Tin nhắn: ${escapeMarkdown(newRequest.message)}\n`;

    // Giả sử chúng ta gửi đến một chatId cố định (có thể thay đổi theo nhu cầu)
    const chatId = 8149349512; // Thay YOUR_TELEGRAM_CHAT_ID bằng ID người nhận

    // Gửi thông báo đến Telegram với định dạng Markdown
    await bot.sendMessage(chatId, messageToSend, { parse_mode: 'Markdown' });

    // Cập nhật isSend = true sau khi gửi thông báo thành công
    await SupportRequest.findByIdAndUpdate(newRequest._id, { isSend: true });

    res.status(200).json({ message: 'Yêu cầu hỗ trợ đã được gửi thành công!' });
  } catch (error) {
    console.error('Lỗi khi lưu yêu cầu hỗ trợ:', error);
    res.status(500).json({ message: 'Đã xảy ra lỗi khi gửi yêu cầu hỗ trợ.' });
  }
});


app.post('/api/bookings', async (req, res) => {
    const { fullName, contactNumber, pickupLocation, dropoffLocation, bookingDate, bookingTime, carType, passengerCount, time } = req.body;

    try {
        const newBooking = new Booking({
            fullName,
            contactNumber,
            pickupLocation,
            dropoffLocation,
            bookingDate,
            bookingTime,
            carType,
            passengerCount,
            time,
            isSend: false
        });

        await newBooking.save();

        res.status(200).json({ message: 'Booking saved successfully!' });
    } catch (error) {
        console.error('Error saving booking:', error);
        res.status(500).json({ message: 'Error saving booking', error });
    }
});
// Route để lấy các booking có isSend là false
app.get('/api/booking', async (req, res) => {
  try {
    const bookings = await Booking.find();  // Truy vấn các booking có isSend = false
    

    res.status(200).json(bookings);  // Trả về dữ liệu dưới dạng JSON
  } catch (error) {
    console.error('Lỗi khi lấy danh sách booking:', error);
    res.status(500).json({ message: 'Đã xảy ra lỗi khi lấy danh sách booking.' });
  }
});
app.get('/api/support', async (req, res) => {
  try{
    const supports = await SupportRequest.find();

    res.status(200).json(supports);

  }
  catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error', error });
}
})
// Route để cập nhật booking
app.put('/api/booking/:id', async (req, res) => {
  const { id } = req.params;
  const { isSend } = req.body;

  try {
    const updatedBooking = await Booking.findByIdAndUpdate(id, { isSend }, { new: true });
    if (!updatedBooking) {
      return res.status(404).json({ message: 'Booking không tìm thấy.' });
    }
    res.status(200).json(updatedBooking);
  } catch (error) {
    console.error('Lỗi khi cập nhật booking:', error);
    res.status(500).json({ message: 'Đã xảy ra lỗi khi cập nhật booking.' });
  }
});

// Khởi tạo và cấu hình Telegram Bot
const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

const escapeMarkdown = (text) => {
  return text.replace(/([_*[\]()~`>#+\-=|{}.!])/, '\\$1');
};

const formatBookingMessage = (booking) => {
  return `🔔 *Thông Báo Đặt Xe Mới*\n\n` +
         `👤 Khách hàng: ${escapeMarkdown(booking.fullName)}\n\n` +
         `📞 Số điện thoại: ${escapeMarkdown(booking.contactNumber)}\n\n` +
         `🚗 Loại xe: ${escapeMarkdown(booking.carType)}\n\n` +
         `📍 Điểm đón: ${escapeMarkdown(booking.pickupLocation)}\n\n` +
         `🏁 Điểm đến: ${escapeMarkdown(booking.dropoffLocation)}\n\n` +
         `📅 Ngày đón: ${escapeMarkdown(booking.bookingDate)}\n\n` +
         `⏰ Giờ đón: ${escapeMarkdown(booking.bookingTime)}\n\n` +
         `🕒 Thời gian đặt: ${escapeMarkdown(booking.bookingTime)}`;
};

const fetchAndSendBookings = async () => {
  try {
    // Lấy danh sách booking từ API
    const response = await fetch('http://localhost:5000/api/booking');
    const bookings = await response.json();

    // Lọc các booking có isSend = false
    const bookingsToSend = bookings.filter(booking => !booking.isSend);

    if (bookingsToSend.length > 0) {
      // Lặp qua từng booking và gửi thông báo cho người dùng Telegram
      for (const booking of bookingsToSend) {
        // Tạo thông báo cho booking
        const message = formatBookingMessage(booking);

        // Giả sử chúng ta gửi đến một chatId cố định (có thể thay đổi theo nhu cầu)
        const chatId = 8149349512; // Thay YOUR_TELEGRAM_CHAT_ID bằng ID người nhận

        // Gửi thông báo đến Telegram với định dạng Markdown
        await bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });

        // Cập nhật isSend = true sau khi gửi thành công
        await fetch(`http://localhost:5000/api/booking/${booking._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ isSend: true }),
        });
      }
    } else {
      
    }
  } catch (error) {
    console.error('Lỗi khi fetch dữ liệu hoặc gửi booking:', error);
  }
};
//auth 


app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Vui lòng nhập đầy đủ thông tin.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({ // Sử dụng Admin model
      username,
      password: hashedPassword,
    });

    await newAdmin.save();
    res.status(201).json({ message: 'Đăng ký thành công!' });
  } catch (error) {
    console.error('Lỗi khi đăng ký:', error);
    res.status(500).json({ message: 'Đã xảy ra lỗi khi đăng ký.' });
  }
});


app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Vui lòng nhập đầy đủ thông tin.' });
  }

  try {
    const admin = await Admin.findOne({ username }); // Sử dụng Admin model
    if (!admin) {
      return res.status(401).json({ message: 'Tên người dùng hoặc mật khẩu không chính xác.' });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Tên người dùng hoặc mật khẩu không chính xác.' });
    }

    admin.timeAt = Date.now();
    await admin.save();

    res.status(200).json({ message: 'Đăng nhập thành công!', username: admin.username, timeAt: admin.timeAt });
  } catch (error) {
    console.error('Lỗi khi đăng nhập:', error);
    res.status(500).json({ message: 'Đã xảy ra lỗi khi đăng nhập.' });
  }
});

// Set interval để gọi fetchAndSendBookings mỗi 3 giây (3000ms)
setInterval(fetchAndSendBookings, 3000);

// Lắng nghe server tại port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
