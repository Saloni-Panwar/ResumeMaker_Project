// config/db.js
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
<<<<<<< HEAD
    console.log("MongoDB URI:", process.env.MONGO_URI);  // Log URI for debugging

=======
>>>>>>> 1113386be42bfedb75295a0870a8704fdb56faf8
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
