import React, { useState } from 'react';
import { IoChatbubbleEllipses } from "react-icons/io5";

function Chatbot() {
  // State to toggle the chatbot visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the chatbot open/close
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed bottom-10 right-24">
        <button 
          onClick={toggleChatbot} 
          className="bg-neutral-500 text-white px-5 py-4 w-18 rounded-full hover:bg-neutral-600"
        >
          <IoChatbubbleEllipses className='w-8 h-8' />
        </button>
      </div>
      {/* Chatbot Box */}
      {isOpen && (
        <div className="fixed bottom-28 right-28 w-96 h-3/4 bg-neutral-100 text-neutral-800 p-1 rounded-lg shadow-lg border-1 z-50">
          
          {/* Header with Close Button */}
          <div className="flex justify-between items-center mb-2 bg-neutral-100 px-2">
            <h2 className="text-lg font-bold">AI Bot</h2>
            <button onClick={toggleChatbot} className="text-neutral-800 font-bold">
              &#x2715;
            </button>
          </div>

          {/* Chat Messages Container (can be scrollable) */}
          <div className="flex-1 mb-1 bg-neutral-100 p-1 overflow-y-auto h-64">
            {/* Example chat messages */}
            <p className="text-sm mb-2">User: Hello!</p>
            <p className="text-sm mb-2">Bot: Hi! How can I help you today?</p>
          </div>

          {/* Input Section */}
          <div className="flex items-center bg-neutral-100 p-4 border-t-2 mt-36 rounded-b-lg">
            <input
              className="border-none flex-1 p-2 rounded-lg focus:outline-none px-2 "
              type="text"
              placeholder="Type a message..."
            />
            <button className="ml-2 bg-neutral-800 text-white px-4 py-2 rounded-lg shadow hover:bg-neutral-900">
              Send
            </button>
          </div>
        </div>

      )}
    </>
  );
}

export default Chatbot;
