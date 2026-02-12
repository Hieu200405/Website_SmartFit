const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const SECRET_KEY = process.env.JWT_SECRET;
  
  if (!SECRET_KEY) {
    console.error('FATAL: JWT_SECRET environment variable is not defined.');
    return res.status(500).json({ message: 'Internal Server Error (Misconfiguration)' });
  }

  // Lấy token từ header Authorization: "Bearer <token>"
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
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
