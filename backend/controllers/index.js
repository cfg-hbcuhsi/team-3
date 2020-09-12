const express = require('express');
const router = express.Router();
const testing = require('./testing');
const translate = require('./translate');
const resources = require('./resources');

router.use('/testing', testing);
router.use('/translate', translate);
router.use('/resources', resources);

module.exports = router;