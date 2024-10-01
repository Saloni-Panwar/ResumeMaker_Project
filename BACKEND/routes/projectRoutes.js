const express = require('express');
const router = express.Router();
const Project = require('../models/project');

// @route POST /api/projects
// @desc Add new project
router.post('/', async (req, res) => {
    const { title, link, description } = req.body;

    if (!title || !link || !description) {
        return res.status(400).json({ msg: 'Please fill all fields' });
    }

    try {
        const newProject = new Project({
            title,
            link,
            description
        });
        
        const savedProject = await newProject.save();
        res.json(savedProject);
    } catch (err) {
        res.status(500).json({ msg: 'Server Error' });
    }
});

// @route GET /api/projects
// @desc Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ msg: 'Server Error' });
    }
});

module.exports = router;
