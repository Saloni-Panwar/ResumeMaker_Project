const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

// POST: Add new experience
router.post('/', async (req, res) => {
  const { organization, position, duration, description } = req.body;

  try {
    const newExperience = new Experience({ organization, position, duration, description });
    await newExperience.save();
    res.status(201).json({ message: 'Experience added successfully', experience: newExperience });
  } catch (error) {
    res.status(500).json({ message: 'Error adding experience', error });
  }
});

// GET: Retrieve all experiences
router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching experiences', error });
  }
});

module.exports = router;
