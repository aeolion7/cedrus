const router = require('express').Router();
const { User } = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.json(allUsers);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { email, password, rating, location, radiusInMiles } = req.body;

    const newUser = {
      email,
      password,
      rating,
      location,
      radiusInMiles,
    };

    const createdUser = await User.create(newUser);
    res.json(createdUser);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
