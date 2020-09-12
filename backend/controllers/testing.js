const express = require('express');
const router = express.Router();

//route: PORT/api/testing/test
router.get('/test', (req, res) => {
//    res.send('testing route!');
    res.json({hello: "hi"})
})

module.exports = router;