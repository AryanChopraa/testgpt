```javascript
const assert = require('assert');
const { transcribeVideo, summarizeTranscript } = require('../controllers/videoController');

describe('Video Controller', function() {
  describe('#transcribeVideo()', function() {
    it('should return transcript of the video when a valid YouTube URL is passed', async function() {
      const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      const transcript = await transcribeVideo(url);
      assert.strictEqual(typeof transcript, 'string');
    });

    it('should throw an error when an invalid YouTube URL is passed', async function() {
      const url = 'invalid_url';
      try {
        await transcribeVideo(url);
      } catch (error) {
        assert.strictEqual(error.message, 'Invalid YouTube URL');
      }
    });
  });

  describe('#summarizeTranscript()', function() {
    it('should return a summary of the transcript', async function() {
      const transcript = 'This is a long transcript of a video. It contains a lot of information.';
      const summary = await summarizeTranscript(transcript);
      assert.strictEqual(typeof summary, 'string');
      assert(summary.length < transcript.length);
    });

    it('should throw an error when an empty transcript is passed', async function() {
      const transcript = '';
      try {
        await summarizeTranscript(transcript);
      } catch (error) {
        assert.strictEqual(error.message, 'Empty transcript');
      }
    });
  });
});
```