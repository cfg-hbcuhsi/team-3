const express = require('express');
const router = express.Router();
const testing = require('./testing');

router.use('/testing', testing);

module.exports = router;