import React, { useState } from 'react';
import { IoChatbubbleEllipses } from "react-icons/io5";
import '../index.css'

const apiUrl = 'http://localhost:5005/webhooks/rest/webhook';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInputValue, setUserInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const toggleChatbot = () => {
    if (!isOpen) {
      setIsOpen(true);
      addInitialMessage();
    } else {
      setIsOpen(false);
    }
  };

  const handleSendMessage = () => {
    if (userInputValue.trim() === '') return;

    addMessage('user', userInputValue);

    setIsTyping(true); 

    // Bot's response. Set timeout is for the typing indicator effect

    setTimeout(() => { 
      fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "message": userInputValue })
      })
        .then(response => response.json())
        .then(data => {
          data.forEach(message => {
            if (message.text) {
              addMessage('bot', message.text);
            }
            if (message.buttons) {
              addButtons('bot', message.buttons);
            }
            if (message.image) {
              addImages('bot', message.image);
            }
          });
          // Will hide the response after send.  
          setIsTyping(false); 
        })
        .catch(error => {
          console.error('Error:', error);
          setIsTyping(false);
        });
    }, 1000); 

    // Reset the input
    setUserInputValue(''); 
  };

  function addMessage(sender, text) {
    const messageContainer = document.createElement('div');
    messageContainer.className = `message ${sender}`;
    
    const messageText = document.createElement('span');
    messageText.innerText = text;
    
    const timestamp = document.createElement('div');
    timestamp.className = 'timestamp';
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    timestamp.innerText = currentTime;
     
    
    messageContainer.appendChild(messageText);
    messageContainer.appendChild(timestamp);
    
    document.getElementById('chatboxMessages').appendChild(messageContainer);
    document.getElementById('chatboxMessages').scrollTop = document.getElementById('chatboxMessages').scrollHeight;
  }

  //Messages for buttons without timestamp

  function addButtonMessage(sender, text) {
    const messageContainer = document.createElement('div');
    messageContainer.className = `message ${sender}`;

    const messageText = document.createElement('span');
    messageText.innerText = text;

    messageContainer.appendChild(messageText);

    document.getElementById('chatboxMessages').appendChild(messageContainer);
    document.getElementById('chatboxMessages').scrollTop = document.getElementById('chatboxMessages').scrollHeight;

  }


  function addInitialMessage() {
    fetch(apiUrl, {
      method: "POST",
      header: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "message": "/initial_message" })
    })
      .then(response => response.json())
      .then(data => {
        data.forEach(message => {
          if (message.text) {
            addButtonMessage('bot', message.text);
          }
          if (message.buttons) {
            addButtons('bot', message.buttons);
          }
          if (message.image) {
            addImages('bot', message.image);
          }
        });
      });
  }

  const addButtons = (sender, buttons) => {
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    buttons.forEach(button => {
      const btn = document.createElement('button');
      btn.className = 'response-button';
      btn.innerText = button.title;
      
      if (button.payload.startsWith('http')) {
          btn.onclick = function () {
            window.open(button.payload, '_blank');
          };
      } 
      
      else {
        btn.onclick = function () {
          sendButtonPayload(button.payload);
          this.style.backgroundColor = "rgb(0, 0, 0)";
          this.style.color = "#fff";
          this.disabled = true;
        };
      }
      

      buttonContainer.appendChild(btn);
    });

    document.getElementById('chatboxMessages').appendChild(buttonContainer);
    document.getElementById('chatboxMessages').scrollTop = document.getElementById('chatboxMessages').scrollHeight;
  };


  function sendButtonPayload(payload) {
    fetch(apiUrl, {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({"message": payload}) 
    })
    .then(response => response.json())
    .then(data => {
        data.forEach(message => {
          if(message.text) {
              addButtonMessage('bot', message.text);
          }
          if(message.buttons) {
              addButtons('bot', message.buttons);
          }
          if(message.image) {
              addImages('bot', message.image);
          }
        });
    });
  }

  function addImages(sender, imageUrl) {
    const imageContainer = document.createElement('div');
    imageContainer.className = `message ${sender}`;
    
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = '404';
    img.className = 'chatbot-image';
  
    imageContainer.appendChild(img);
    document.getElementById('chatboxMessages').appendChild(imageContainer);
    document.getElementById('chatboxMessages').scrollTop = document.getElementById('chatboxMessages').scrollHeight;
  }

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed bottom-10 right-24">
        <button
          onClick={toggleChatbot}
          className="bg-neutral-500 text-white px-5 py-4 w-18 rounded-full hover:bg-neutral-600"
        >
          <IoChatbubbleEllipses className="w-8 h-8" />
        </button>
      </div>

      {/* Chatbot Box */}
      {isOpen && (
        <div className="fixed bottom-28 right-28 w-96 h-3/4 bg-neutral-100 text-neutral-800 p-1 rounded-lg shadow-lg border-1 z-50 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-2 bg-neutral-100 px-2">
            <h2 className="text-lg font-bold">AI Bot</h2>
            <button onClick={toggleChatbot} className="text-neutral-800 font-bold">
              &#x2715;
            </button>
          </div>

          {/* Chat Messages Container */}
          <div
            id="chatboxMessages"
            className="chat-container"
          ></div>

          {/* Typing Indicator */}
          {isTyping && (
            <div className="typing-indicator">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          )}

          {/* Input Section */}
          <div className="flex items-center bg-neutral-100 p-4 border-t-2">
            <input
              id="userInput"
              className="border-none flex-1 p-2 rounded-lg focus:outline-none"
              type="text"
              placeholder="Type a message..."
              value={userInputValue}
              onChange={(e) => setUserInputValue(e.target.value)}
            />
            <button
              id="sendMessageBtn"
              className="ml-2 bg-neutral-800 text-white px-4 py-2 rounded-lg shadow hover:bg-neutral-900"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
