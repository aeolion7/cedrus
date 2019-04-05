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

router.post('/', async (req, res, next) => {
  try {
    const {
      name,
      status,
      pictureUrl,
      description,
      features,
      loanDuration,
    } = req.body;

    const newTool = {
      name,
      status,
      pictureUrl,
      description,
      features,
      loanDuration,
      borrowQueue: [],
    };

    const createdTool = Tool.create(newTool);
    res.json(createdTool);
  } catch (error) {
    next(error);
  }
});

// stretch goal: request to be added to tool's borrow queue
// router.put('/:id', async (req, res, next) => {
//   try {
//     const thisTool = await Tool.findByPk(req.params.id);
//     const { borrowerId } = req.body;
//     const toolQueue = thisTool.borrowQueue;

//     // add borrowerId to tool borrow queue
//     toolQueue.push(borrowerId);

//     if (toolQueue.length) {
//       const newTool = await thisTool.update({
//         borrowQueue: toolQueue,
//       });
//       res.json(newTool);
//     } else {

//     }
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = router;
