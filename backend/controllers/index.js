const express = require('express');
const router  = express.Router();
const testing = require('./testing');
const mentor  = require('./mentors');

router.use('/testing', testing);
router.use('/mentor', mentor);

module.exports = router;