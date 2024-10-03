const mongoose = require('mongoose');

const ExtraDetailsSchema = new mongoose.Schema({
  skills: [String],  // Array of skills
  interests: [String] // Array of interests
});

const ExtraDetails = mongoose.model('ExtraDetails', ExtraDetailsSchema);

module.exports = ExtraDetails;
