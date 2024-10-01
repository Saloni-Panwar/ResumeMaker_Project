// models/Education.js
const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
    college: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    school: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model('Education', EducationSchema);
