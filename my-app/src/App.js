import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login';
import SignupPage from './components/Register';
import ChatbotPage from './components/ChatBot';
import ChatHistoryPage from './components/ChatHistory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/chat-history" element={<ChatHistoryPage />} />
        <Route path="/chat/:id" element={<ChatbotPage />} />
      </Routes>
    </Router>
  );
}

export default App;
