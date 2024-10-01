// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const resumeRoutes = require('./routes/resumeRoute');
require('dotenv').config();
const mongoose = require('mongoose');
const educationRoutes = require('./routes/educationRoute');
const ProjectRoutes = require('./routes/projectRoutes');

// Load environment variables
require('dotenv').config();

// Connect to MongoDB
connectDB();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use('/api/resume', resumeRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/projects', ProjectRoutes);



// Port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
