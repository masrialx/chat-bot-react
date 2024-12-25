import React, { useState } from 'react';
import './chat.css';
import ChatHistoryPage from './ChatHistory';

function ChatbotPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');

      // Simulate bot response with typing animation
      setIsBotTyping(true);

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'bot', text: 'This is a response from the bot.' },
        ]);
        setIsBotTyping(false);
      }, 2000); // 2 seconds delay for typing animation
    }
  };

  return (
    <div className="container-fluid d-flex flex-column" style={{ height: '100vh' }}>
      <div className="row justify-content-center flex-grow-1">
        {/* Chat History Sidebar on the left (20%) */}
        <div className="col-md-2 d-none d-md-block">
          <ChatHistoryPage />
        </div>

        {/* Chatbot on the right (80%) */}
        <div className="col-md-10 col-12">
          <div className="card shadow-lg h-100 d-flex flex-column" style={{ position: 'relative' }}>
            <div className="card-header bg-primary text-white text-center">
              <h4>Chatbot</h4>
            </div>
            <div
              className="card-body p-4 d-flex flex-column"
              style={{
                overflowY: 'auto',
                flexGrow: 1,
                paddingBottom: '56px', // Space for footer
              }}
            >
              <div className="chatbox">
                {messages.map((msg, index) => (
                  <div key={index} className={`message ${msg.sender === 'user' ? 'text-end' : ''} mb-3`}>
                    <div
                      className={`d-inline-block p-2 rounded ${msg.sender === 'user' ? 'bg-primary text-white' : 'bg-light'}`}
                      style={{ maxWidth: '75%' }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isBotTyping && (
                  <div className="message text-start mb-3">
                    <div className="d-inline-block p-2 rounded bg-light" style={{ maxWidth: '75%' }}>
                      <span className="typing-animation"></span> {/* Typing animation */}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Card Footer (Input Section) */}
            <div
              className="card-footer p-3 bg-light"
              style={{
                backgroundColor: '#f8f9fa',
                borderTop: '1px solid #e4e4e4', // Optional: Visual separation
                position: 'absolute', // Keep footer at the bottom
                bottom: '0',
                left: '0',
                right: '0',
                width: '100%', // Ensure it's the same width as the card body
                paddingBottom: '10px', // Space adjustment
                zIndex: 1000, // Keep it above chatbox
              }}
            >
              <div className="input-group" style={{ width: '100%' }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  style={{
                    flex: '1', // Ensure the input takes up most of the space
                    borderRight: 'none',
                  }}
                />
                <button
                  onClick={handleSendMessage}
                  className="btn btn-primary ms-2"
                  disabled={!input.trim()}
                  style={{
                    flexShrink: 0,
                    borderLeft: 'none', // To remove the border between input and button
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatbotPage;
