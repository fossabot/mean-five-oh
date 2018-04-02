const express = require('express');
const router = express.Router();

// Register
router.get('/register', (req, res) => {
  res.send('register');
});

// Authenticate
router.get('/authenticate', (req, res) => {
  res.send('auth');
});

// Profile
router.get('/profile', (req, res) => {
  res.send('profile');
});

// Validate
router.get('/validate', (req, res) => {
  res.send('validate');
});

module.exports = router;
