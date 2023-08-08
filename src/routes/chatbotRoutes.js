```javascript
const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbotController');
const auth = require('../middleware/auth');

// Route to interact with chatbot
router.post('/interact', auth, chatbotController.interactChatbot);

module.exports = router;
```