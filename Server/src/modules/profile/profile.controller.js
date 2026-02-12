const profileService = require('./profile.service');

// Controller nhận request, extract data, gọi service và trả về response
const updateProfile = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const profileData = req.body;
    
    await profileService.updateProfile(userId, profileData);
    
    res.sendStatus(200);
  } catch (error) {
    if (error.message === 'Height and weight must be positive numbers') {
      return res.status(400).json({ message: error.message });
    }
    next(error); // Chuyển lỗi cho middleware xử lý lỗi chung (error handler)
  }
};

module.exports = {
  updateProfile,
};
