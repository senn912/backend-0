
const express = require('express');
const { getHomepage, getABC, getABCD, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, getDeletePage } = require('../controllers/homecontroller');
const router = express.Router();

//khai báo route
router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/abcd', getABCD);
router.post('/create-user', postCreateUser);
router.get('/create', getCreatePage);

router.get('/update/:id', getUpdatePage);
router.post('/update-user', postUpdateUser);

router.get('/delete/:id', getDeletePage);
router.post('/delete-user', postDeleteUser);


module.exports = router; 