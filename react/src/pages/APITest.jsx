import React, { useState, useEffect } from 'react';

const APITest = () => {
  // State to store users data and loading/error state
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users from the Flask API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users');
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          throw new Error('Failed to fetch users');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Display loading or error messages
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div>
      <h2>User Data</h2>
      <div
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          width: '300px',
          maxHeight: '200px',
          overflowY: 'scroll',
          backgroundColor: '#f9f9f9',
        }}
      >
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </div>
    </div>
  );
};

export default APITest;
