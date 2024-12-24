const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const getUserById = require('../middleware/getUserById'); // Moving this function to a middleware file for better structure

// Routes
router.get('/', userController.getUsers);
router.get('/:id', getUserById, userController.getUserById);
router.post('/', userController.createUser);
router.post('/login/', userController.loginUser);
router.patch('/:id', getUserById, userController.updateUser);
router.delete('/:id', getUserById, userController.deleteUser);

module.exports = router;
