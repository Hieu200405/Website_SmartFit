const db = require('../../config/db');

// Repository chịu trách nhiệm gọi database
// Input: ID người dùng, dữ liệu cần cập nhật
// Output: kết quả query
const updateProfile = async (userId, profileData) => {
  const { height, weight, goal, activity_level } = profileData;
  const result = await db.query(
    `UPDATE user_profiles 
     SET height=$1, weight=$2, goal=$3, activity_level=$4, profile_complete=true
     WHERE id=$5
     RETURNING *`, // Có thể trả về dữ liệu mới sau khi update
    [height, weight, goal, activity_level, userId]
  );
  return result.rows[0];
};

module.exports = {
  updateProfile,
};
