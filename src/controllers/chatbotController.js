```javascript
const Chatbot = require('../models/chatbotModel');
const nlp = require('../utils/nlp');

exports.interactChatbot = async (req, res) => {
    try {
        const { message } = req.body;
        const chatbot = new Chatbot();

        // Process the user's message with the NLP model
        const response = await nlp.processMessage(chatbot, message);

        // Save the chatbot's response in the database
        chatbot.messages.push({ from: 'Chatbot', message: response });
        await chatbot.save();

        res.status(200).json({ message: 'Chatbot response generated', data: response });
    } catch (error) {
        res.status(500).json({ message: 'Error interacting with chatbot', error: error.message });
    }
};
```