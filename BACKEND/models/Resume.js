const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    website: String,
    github: String,
    linkedin: String,
    facebook: String,
    twitter: String,
    instagram: String
});

const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;
