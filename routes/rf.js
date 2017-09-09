const express = require('express');
const router = express.Router();

const index = require('./index');
const blue = require('./blue');

router.use('/blue', blue);
router.use('/', index);

module.exports = router;
