const express = require('express');
const router = express.Router();
const testing = require('./testing');
const translate = require('./translate');

router.use('/testing', testing);
router.use('/translate', translate);

module.exports = router;