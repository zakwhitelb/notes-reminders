const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers); // Route to get users
router.post('/', userController.createUser); // Route to create a user

module.exports = router;
