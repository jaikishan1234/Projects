
import React from 'react';
import { Button } from '@material-ui/core';

const RegisterEvent = ({ eventId }) => {
  const registerForEvent = async () => {
    
    console.log('Registered for event:', eventId);
  };

  return (
    <Button onClick={registerForEvent} variant="contained" color="primary">Register for Event</Button>
  );
};

export default RegisterEvent;
