// routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Sample users data (replace with MongoDB integration)
const users = [];

// Login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Find user by email
  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }
  // Check password
  bcrypt.compare(password, user.password, (err, result) => {
    if (err || !result) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });
    res.json({ token });
  });
});

// Register route
router.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  // Check if user already exists
  if (users.find(user => user.email === email)) {
    return res.status(400).json({ message: 'User already exists' });
  }
  // Hash password
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ message: 'Internal server error' });
    }
    const newUser = { id: Date.now(), name, email, password: hash };
    users.push(newUser);
    res.status(201).json({ message: 'User registered successfully' });
  });
});

module.exports = router;
