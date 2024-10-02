const express = require('express');
const router = express.Router();
const ExtraDetails = require('../models/ExtraDetails');

// POST: Add new extra details
router.post('/', async (req, res) => {
  const { skills, interests } = req.body;

  try {
    const newExtraDetails = new ExtraDetails({ skills, interests });
    await newExtraDetails.save();
    res.status(201).json({ message: 'Extra details added successfully', extraDetails: newExtraDetails });
  } catch (error) {
    res.status(500).json({ message: 'Error adding extra details', error });
  }
});

// GET: Retrieve all extra details
router.get('/', async (req, res) => {
  try {
    const extraDetails = await ExtraDetails.find();
    res.status(200).json(extraDetails);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching extra details', error });
  }
});

module.exports = router;
