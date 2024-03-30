// src/components/auth/Login.js
import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // Add logic to login user
    console.log(formData);
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField type="email" label="Email Address" name="email" value={email} onChange={onChange} fullWidth />
      <TextField type="password" label="Password" name="password" value={password} onChange={onChange} fullWidth />
      <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
    </form>
  );
};

export default Login;
