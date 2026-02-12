const express = require('express');
const router = express.Router();
const profileController = require('./profile.controller');
const authMiddleware = require('../../middleware/auth');

// Route định nghĩa đường dẫn và middleware
router.post('/', authMiddleware, profileController.updateProfile);

module.exports = router;
