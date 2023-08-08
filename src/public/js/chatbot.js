```javascript
const chatbotInterface = document.getElementById('chatbot-interface');

function interactChatbot(message) {
    fetch('/api/chatbot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    })
    .then(response => response.json())
    .then(data => {
        displayChatbotResponse(data.chatbotResponse);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function displayChatbotResponse(response) {
    const responseElement = document.createElement('p');
    responseElement.textContent = response;
    chatbotInterface.appendChild(responseElement);
}

chatbotInterface.addEventListener('submit', (event) => {
    event.preventDefault();
    const userMessage = event.target.elements.message.value;
    interactChatbot(userMessage);
});
```