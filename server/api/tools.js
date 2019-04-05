const router = require('express').Router();
const { Tool } = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const allTools = await Tool.findAll();
    res.json(allTools);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const thisTool = await Tool.findByPk(req.params.id);
    res.json(thisTool);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
