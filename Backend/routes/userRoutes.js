const express = require('express');
const router = express.Router();
const auth = require('../Middleware/auth')
const { registerUser ,loginUser,getUserData } = require('../controllers/userController');
const { body } = require('express-validator');
;
  

// Register route with validation
router.post(
    '/register',
    [
      body('name', 'Name is required').not().isEmpty(),
      body('email', 'Please include a valid email').isEmail(),
      body('password', 'Password must be at least 6 characters').isLength({ min: 6 }),
    ],
    registerUser
  );
  

  // Login route with validation
  router.post(
    '/login',
    [
      body('email', 'Please include a valid email').isEmail(),
      body('password', 'Password is required').exists(),
    ],
    loginUser
  );
  
  router.get('/user', auth, getUserData);


module.exports = router;
