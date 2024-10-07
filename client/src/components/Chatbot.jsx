import React, { useState } from 'react'; 

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
      <div className="fixed bottom-20 right-36">
        <button 
          onClick={toggleChatbot} 
          className="bg-neutral-500 text-white px-5 py-4 rounded-full hover:bg-neutral-600"
        >
          {isOpen ? 'Close' : 'Chat'}
        </button>
      </div>
      {/* Chatbot Box */}
      {isOpen && (
        <div className="fixed bottom-36 right-36 w-80 h-96 bg-neutral-100 text-neutral-800 p-4 rounded-lg shadow-lg border-1 z-50">
          
          {/* Header with Close Button */}
          <div className="flex justify-between items-center mb-2 bg-neutral-100">
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
          <div className="flex items-center bg-neutral-100 p-2 rounded-lg shadow-inner">
            <input
              className="border-none flex-1 p-2 rounded-lg focus:outline-none"
              type="text"
              placeholder="Type a message..."
            />
            <button className="ml-2 bg-neutral-600 text-white px-4 py-2 rounded-lg shadow hover:bg-neutral-700">
              Send
            </button>
          </div>
        </div>

      )}
    </>
  );
}

export default Chatbot;
