

const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['conference', 'workshop', 'seminar'],
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  registrationDeadline: {
    type: Date
  },
  specialRequirements: {
    type: String
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Event', EventSchema);
