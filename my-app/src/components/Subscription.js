import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function Subscription({ user }) {
  const [message, setMessage] = useState('');

  const handleSubscribe = async (months) => {
    try {
      const response = await axios.post('http://localhost:5000/api/subscribe', { plan: '1', months });
      setMessage(response.data.approval_url);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };

  return (
    <div>
      {message && <Alert variant="info">{message}</Alert>}
      <h3>Choose Subscription Plan</h3>
      <Button variant="primary" onClick={() => handleSubscribe(1)}>1 Month</Button>
      <Button variant="primary" className="ml-2" onClick={() => handleSubscribe(6)}>6 Months</Button>
      <Button variant="primary" className="ml-2" onClick={() => handleSubscribe(12)}>12 Months</Button>
    </div>
  );
}

export default Subscription;
