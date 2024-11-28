const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Schema Admin
const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  timeAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware: Hash mật khẩu trước khi lưu
adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Method: So sánh mật khẩu
adminSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Tạo model
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
