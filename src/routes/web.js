
const express = require('express');
const { getHomepage, getABC, getABCD } = require('../controllers/homecontroller');
const router = express.Router();

//khai báo route
router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/abcd',getABCD);

module.exports = router; 