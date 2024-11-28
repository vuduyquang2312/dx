const bcrypt = require('bcrypt'); // Thư viện mã hóa mật khẩu
const mongoose = require('mongoose');
// Định nghĩa schema và model cho User
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  timeAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

// Route đăng ký người dùng (tùy chọn, nếu bạn muốn thêm người dùng mới)
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Vui lòng nhập đầy đủ thông tin.' });
  }

  try {
    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'Đăng ký thành công!' });
  } catch (error) {
    console.error('Lỗi khi đăng ký:', error);
    res.status(500).json({ message: 'Đã xảy ra lỗi khi đăng ký.' });
  }
});

// Route đăng nhập người dùng
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Vui lòng nhập đầy đủ thông tin.' });
  }

  try {
    // Tìm người dùng theo username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Tên người dùng hoặc mật khẩu không chính xác.' });
    }

    // Kiểm tra mật khẩu
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Tên người dùng hoặc mật khẩu không chính xác.' });
    }

    // Cập nhật thời gian đăng nhập gần nhất
    user.timeAt = Date.now();
    await user.save();

    res.status(200).json({ message: 'Đăng nhập thành công!', username: user.username, timeAt: user.timeAt });
  } catch (error) {
    console.error('Lỗi khi đăng nhập:', error);
    res.status(500).json({ message: 'Đã xảy ra lỗi khi đăng nhập.' });
  }
});
