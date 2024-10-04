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
      <div className="fixed bottom-10 right-10">
        <button 
          onClick={toggleChatbot} 
          className="bg-neutral-500 text-white px-4 py-2 rounded-full hover:bg-neutral-600"
        >
          {isOpen ? 'Close' : 'Chat'}
        </button>
      </div>

      {/* Chatbot Box */}
      {isOpen && (
        <div className="fixed bottom-28 right-14 w-80 h-96 bg-neutral-100 text-neutral-800 p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Chatbot</h2>
            <button onClick={toggleChatbot} className="text-white font-bold">
              &#x2715;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
