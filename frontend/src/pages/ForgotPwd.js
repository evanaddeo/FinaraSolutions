import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotPwd = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          console.log({email})
          await axios.post('http://localhost:5000/api/forgot-password', { email });
          navigate('/Confirm-Password', { state: { email } });
      } catch (error) {
          console.error('Error sending reset code:', error);
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit">Send Reset Code</button>
    </form>
  );
};

export default ForgotPwd;