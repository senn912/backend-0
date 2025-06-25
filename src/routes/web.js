
const express = require('express');
const { getHomepage, getABC, getABCD, postCreateUser, getCreatePage } = require('../controllers/homecontroller');
const router = express.Router();

//khai báo route
router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/abcd', getABCD);
router.post('/create-user', postCreateUser);
router.get('/create', getCreatePage);

module.exports = router; 