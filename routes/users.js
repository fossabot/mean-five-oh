const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');


// Register
router.post('/register', (req, res, next) => {
  let newUser = new User ({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });

  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({ success: false, msg: 'failed to register user' });
    } else {
      res.json({ success: true, msg: 'user registered' });
    }
  })
});

// Authenticate
router.post('/authenticate', (req, res) => {
  res.send('auth');
});

// Profile
router.get('/profile', (req, res) => {
  res.send('profile');
});

module.exports = router;
