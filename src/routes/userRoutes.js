```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

// User registration route
router.post('/register', userController.registerUser);

// User login route
router.post('/login', userController.loginUser);

// User profile route, protected by authentication middleware
router.get('/profile', auth, userController.updateProfile);

module.exports = router;
```