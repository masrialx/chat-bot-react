import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ChatHistoryPage() {
  const [history] = useState([
    { id: 1, title: 'Chat with AI - January' },
    { id: 2, title: 'Chat with AI - February' },
    { id: 3, title: 'Chat with AI - March' },
  ]);

  return (
    <div className="container">
      <h3>Chat History</h3>
      <ul className="list-group">
        {history.map((chat) => (
          <li key={chat.id} className="list-group-item">
            <Link to={`/chat/${chat.id}`}>{chat.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatHistoryPage;
