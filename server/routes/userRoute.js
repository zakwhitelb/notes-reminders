const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const getUserById = require("../middleware/getUserById");

// Routes
router.get("/", userController.getUsers); // Fetch all users
router.get("/:id", getUserById, (req, res) => {
    const { name, email } = res.user;
    res.status(200).json({ name, email });
});
router.post("/", userController.createUser); // Create a new user
router.post("/login", userController.loginUser); // Log in a user
router.post("/google", userController.googleLoginUser); // Log in a user
router.patch("/:id", getUserById, userController.updateUser); // Update a user by ID
router.delete("/:id", getUserById, userController.deleteUser); // Delete a user by ID
router.patch("/password/:id", getUserById, userController.updateUserPassword);

module.exports = router;
