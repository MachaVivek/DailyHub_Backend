// middleware/check-auth.js

const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET_KEY;

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; 
    const decodedToken = jwt.verify(token, secretKey); 
    console.log(decodedToken)
    req.userData = { userId: decodedToken.userId, email: decodedToken.email }; 
    console.log(req.userData)
    next(); 
  } catch (error) {
    return res.status(401).json({ error: 'Authentication failed' }); // Return an error if authentication fails
  }
};
