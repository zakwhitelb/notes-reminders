const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const getUserIdByToken = require("../middleware/getUserIdByToken");
const getUserById = require("../middleware/getUserById");

// Routes
router.get("/", userController.getUsers); // Fetch all users
router.get("/validateToken", getUserIdByToken, userController.validateToken); // Fetch all users
router.get("/:token", getUserIdByToken, getUserById, userController.getUser); // Fetch user by token
router.post("/", userController.createUser); // Create a new user
router.post("/login", userController.loginUser); // Log in a user
router.post("/google", userController.googleLoginUser); // Log in a user via Google
router.patch("/:token", getUserIdByToken, getUserById, userController.updateUser); // Update user by token
router.delete("/:token", getUserIdByToken, getUserById, userController.deleteUser); // Delete user by token
router.patch("/set_password/:token", getUserIdByToken, getUserById, userController.setUserPassword); // Update password by token
router.patch("/password/:token", getUserIdByToken, getUserById, userController.updateUserPassword); // Update password by token

module.exports = router;
