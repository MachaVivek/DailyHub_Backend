const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;
const bcrypt = require('bcrypt');
const express = require('express');
const User = require('../models/usermodel');
const router = express.Router();

router.post("/abc", (req, res) => {
    res.send(req.body);
});

// Register endpoint
router.post('/register', async (req, res) => {
    try {
      const { username, email, password } = req.body;
      // checking the duplicate user
      const existingUser = await User.findOne({ email });
      
      if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
      }
      // Hash the password before saving it
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, email, password: hashedPassword });
      await user.save();
      res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
      res.status(500).json({ error: 'Registration failed' });
    }
  });

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Enter correct password' });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id, email: user.email }, secretKey, {
      // expires in 3 days
      expiresIn: '3d',
    });

    res.status(200).json({ token, userId: user._id });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;