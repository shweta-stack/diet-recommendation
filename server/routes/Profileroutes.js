const express = require('express');
const UserProfile = require('../models/UserProfile');

const router = express.Router();

// Create a new profile
router.post('/profile', async (req, res) => {
  try {
    const newProfile = new UserProfile(req.body);
    const savedProfile = await newProfile.save();
    res.status(201).json(savedProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all profiles
router.get('/profile', async (req, res) => {
  try {
    const profiles = await UserProfile.find();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a profile
router.put('/profile/:id', async (req, res) => {
  try {
    const updatedProfile = await UserProfile.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a profile
router.delete('/profile/:id', async (req, res) => {
  try {
    await UserProfile.findByIdAndDelete(req.params.id);
    res.json({ message: 'Profile deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
