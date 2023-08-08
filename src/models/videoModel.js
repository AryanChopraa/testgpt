```javascript
const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    transcript: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    notes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Note'
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

const Video = mongoose.model('Video', VideoSchema);

module.exports = Video;
```