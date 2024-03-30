
import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    
  });

  const { title, description } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField type="text" label="Title" name="title" value={title} onChange={onChange} fullWidth />
      <TextField type="text" label="Description" name="description" value={description} onChange={onChange} fullWidth />
      {/* Add other input fields */}
      <Button type="submit" variant="contained" color="primary" fullWidth>Create Event</Button>
    </form>
  );
};

export default CreateEvent;
