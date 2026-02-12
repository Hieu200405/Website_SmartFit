const profileRepo = require('./profile.repository');

// Service chịu trách nhiệm xử lý logic, tính toán, và gọi repository
const updateProfile = async (userId, data) => {
  // Logic validate dữ liệu (ví dụ: height phải > 0) có thể đặt ở đây
  if (data.height <= 0 || data.weight <= 0) {
    throw new Error('Height and weight must be positive numbers');
  }

  // Gọi repository để cập nhật database
  return await profileRepo.updateProfile(userId, data);
};

module.exports = {
  updateProfile,
};
