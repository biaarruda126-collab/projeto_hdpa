const express = require('express');
const router = express.Router();
const selectVestControllers = require('../controllers/selectVestControllers');

router.get('/', selectVestControllers.selectView);

module.exports = router