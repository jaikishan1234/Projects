
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('/api/events');
        setEvents(res.data);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Typography variant="h4">Upcoming Events</Typography>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            <Typography variant="h6">{event.title}</Typography>
            <Typography>{event.description}</Typography>
            {/* Display other event details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
