```javascript
const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');
const auth = require('../middleware/auth');

router.post('/transcribe', auth, videoController.transcribeVideo);
router.post('/summarize', auth, videoController.summarizeTranscript);
router.post('/generate-note', auth, videoController.generateNote);
router.post('/web-research', auth, videoController.webResearch);

module.exports = router;
```