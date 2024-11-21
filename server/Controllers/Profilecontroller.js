const UserProfile = require("../models/UserProfile");

const createProfile = async (req, res) => {
  try {
    const profile = new UserProfile(req.body);
    await profile.save();
    res.status(201).send(profile);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { createProfile };
