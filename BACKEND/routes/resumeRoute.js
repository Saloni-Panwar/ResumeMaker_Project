const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');

// POST route to handle resume submission
router.post('/submit', async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        phone,
        website,
        github,
        linkedin,
        facebook,
        twitter,
        instagram
    } = req.body;

    try {
        const newResume = new Resume({
            firstName,
            lastName,
            email,
            phone,
            website,
            github,
            linkedin,
            facebook,
            twitter,
            instagram
        });

        await newResume.save();
        res.status(201).json({ message: 'Resume submitted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error saving resume to database.' });
    }
});

module.exports = router;
