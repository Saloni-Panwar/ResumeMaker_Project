// routes/education.js
const express = require('express');
const router = express.Router();
const Education = require('../models/Education');

// @route   POST /api/education
// @desc    Save education details
router.post('/', async (req, res) => {
    const { college, qualification, school, startDate, endDate, description } = req.body;

    try {
        const newEducation = new Education({
            college,
            qualification,
            school,
            startDate,
            endDate,
            description,
        });

        const savedEducation = await newEducation.save();
        res.status(201).json(savedEducation);
    } catch (err) {
        res.status(500).json({ error: 'Failed to save education details', details: err.message });
    }
});

module.exports = router;
