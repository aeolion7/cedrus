// Central API route handler.

const router = require('express').Router();

// Further API route handling can be done here, for example:
// router.use('/users', require('./users'));
router.use('/tools', require('./tools'));
router.use('/users', require('./users'));

// Handler for requests that do not match
router.use((req, res, next) => {
  const err = new Error('404 Not Found.');
  err.status = 404;
  next(err);
});

module.exports = router;
