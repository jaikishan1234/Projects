
const express = require('express');
const connectDB = require('./db');

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
