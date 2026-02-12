const jwt = require('jsonwebtoken'); // Giả sử dùng JWT

// Mock secret key cho đơn giản
const SECRET_KEY = 'your_secret_key';

const authMiddleware = (req, res, next) => {
  // Lấy token từ header Authorization: "Bearer <token>"
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    // Nếu không có token, trả về 401 Unauthorized
    // Trong môi trường dev đơn giản, có thể mock user ở đây nếu cần:
    // req.user = { id: 1, role: 'user' }; 
    // return next();
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = authMiddleware;
