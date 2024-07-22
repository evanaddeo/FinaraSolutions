import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const PwdConfirmation = () => {
  const [code, setCode] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/confirm-reset-code', { email, code });
      navigate('/Update-Password', { state: { email } });
    } catch (error) {
      console.error('Error confirming reset code:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter reset code"
        required
      />
      <button type="submit">Confirm Code</button>
    </form>
  );
};

export default PwdConfirmation;
