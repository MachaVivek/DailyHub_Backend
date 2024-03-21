const express = require('express');
const router = express.Router();
const checkAuth = require("./check_auth");
const user = require('../models/usermodel');

router.get('/dashboard', checkAuth, (req, res) => {
  // Access user data through req.userData
  res.json({ message: 'You are authenticated', userData: req.userData });
});

router.get('/users', async (req, res) => {
  try {
    // Query the database to find all users
    const users = await user.find();

    // Return the users as JSON response
    res.status(200).json(users);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
});

module.exports = router;