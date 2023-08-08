```javascript
const mongoose = require('mongoose');

const ChatbotSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    chatHistory: [
        {
            message: {
                type: String,
                required: true
            },
            timestamp: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

const Chatbot = mongoose.model('Chatbot', ChatbotSchema);

module.exports = Chatbot;
```