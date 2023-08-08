```javascript
const axios = require('axios');

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';

const getVideoTranscript = async (videoId) => {
  try {
    const response = await axios.get(`${YOUTUBE_API_URL}/captions/${videoId}?key=${YOUTUBE_API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch transcript: ${error}`);
    return null;
  }
};

module.exports = {
  getVideoTranscript,
};
```