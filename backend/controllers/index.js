const express = require('express');
const router  = express.Router();
const testing = require('./testing');
const translate = require('./translate');
const mentor  = require('./mentors');

router.use('/testing', testing);
router.use('/mentor', mentor);
router.use('/translate', translate);

module.exports = router;