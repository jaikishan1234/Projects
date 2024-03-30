
import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // Add logic to register user
    console.log(formData);
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField type="text" label="Name" name="name" value={name} onChange={onChange} fullWidth />
      <TextField type="email" label="Email Address" name="email" value={email} onChange={onChange} fullWidth />
      <TextField type="password" label="Password" name="password" value={password} onChange={onChange} fullWidth />
      <Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
    </form>
  );
};

export default Register;
