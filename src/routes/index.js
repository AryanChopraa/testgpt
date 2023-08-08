```javascript
const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const videoRoutes = require('./videoRoutes');
const chatbotRoutes = require('./chatbotRoutes');

router.use('/users', userRoutes);
router.use('/videos', videoRoutes);
router.use('/chatbot', chatbotRoutes);

module.exports = router;
```