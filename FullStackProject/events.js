

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Event = require('../models/Event');


router.post('/', auth, async (req, res) => {
  const {
    title,
    description,
    date,
    time,
    location,
    category,
    capacity,
    registrationDeadline,
    specialRequirements
  } = req.body;

  try {
    const newEvent = new Event({
      title,
      description,
      date,
      time,
      location,
      category,
      capacity,
      registrationDeadline,
      specialRequirements,
      creator: req.user.id
    });

    const event = await newEvent.save();
    res.json(event);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});



module.exports = router;
