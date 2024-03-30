// src/components/auth/Logout.js
import React from 'react';
import { Button } from '@material-ui/core';

const Logout = () => {
  const handleLogout = () => {
    // Add logic to logout user
    console.log('Logged out');
  };

  return (
    <Button onClick={handleLogout} variant="contained" color="secondary">Logout</Button>
  );
};

export default Logout;
