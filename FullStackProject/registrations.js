// routes/registrations.js

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Event = require('../models/Event');
const User = require('../models/User');

// @route   POST /api/registrations/:eventId
// @desc    Register for an event
// @access  Private
router.post('/:eventId', auth, async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);

    // Check if event exists
    if (!event) {
      return res.status(404).json({ msg: 'Event not found' });
    }

    // Check if event capacity is reached
    if (event.capacity <= event.participants.length) {
      return res.status(400).json({ msg: 'Event capacity reached' });
    }

    // Check if user is already registered for the event
    if (event.participants.includes(req.user.id)) {
      return res.status(400).json({ msg: 'Already registered for this event' });
    }

    // Register user for the event
    event.participants.push(req.user.id);
    await event.save();

    // Add event to user's registrations
    const user = await User.findById(req.user.id);
    user.registrations.push(event._id);
    await user.save();

    res.json({ msg: 'Registration successful' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// Add routes for managing user registrations, such as getting upcoming events, canceling registrations, etc.

module.exports = router;
