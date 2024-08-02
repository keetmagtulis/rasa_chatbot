const apiUrl = 'http://localhost:5005/webhooks/rest/webhook';
const chatboxContainer = document.getElementById('chatboxContainer');
const chatboxToggle = document.getElementById('chatboxToggle');
const chatboxClose = document.getElementById('chatboxClose');
const sendMessageButton = document.getElementById('sendMessage');
const userInput = document.getElementById('userInput');

chatboxToggle.addEventListener('click', () => {
    chatboxContainer.style.display = chatboxContainer.style.display === 'none' ? 'flex' : 'none';
});

chatboxClose.addEventListener('click', () => {
    chatboxContainer.style.display = 'none';
});

sendMessageButton.addEventListener('click', () => {
    const userInputValue = userInput.value;
    if (userInputValue.trim() === '') return;

    addMessage('user', userInputValue);
    userInput.value = '';

    fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "message": userInputValue })
    })
    .then(response => response.json())
    .then(data => {
        data.forEach(message => {
            addMessage('bot', message.text);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

function addMessage(sender, text) {
    const messageContainer = document.createElement('div');
    messageContainer.className = `message ${sender}`;
    messageContainer.innerText = text;
    document.getElementById('chatboxMessages').appendChild(messageContainer);
    document.getElementById('chatboxMessages').scrollTop = document.getElementById('chatboxMessages').scrollHeight;
}