const USER = require('../models/userModel');

// Getting all users
exports.getUsers = async (req, res) => {
    try {
        const users = await USER.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Getting one user by ID
exports.getUserById = (req, res) => {
    res.json(res.user);  // Assuming res.user is set by some middleware
};

// Creating one user
exports.createUser = async (req, res) => {
    try {
        const isExist = await USER.findOne({ email: req.body.email }); 
        if (isExist) return res.status(400).json({ message: "User with this email already exists" });

        const newUser = new USER({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Updating one user
exports.updateUser = async (req, res) => {
    try {
        // Check if the email is being updated, and if so, check if another user has the same email
        if (req.body.email && req.body.email !== res.user.email) {
            const isExist = await USER.findOne({ email: req.body.email });
            if (isExist) {
                return res.status(400).json({ message: "User with this email already exists" });
            }
            res.user.email = req.body.email;  // If email is valid, update it
        }

        // Update other fields if provided
        if (req.body.name != null) {
            res.user.name = req.body.name;
        }

        // Save the updated user
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Deleting one user
exports.deleteUser = async (req, res) => {
    try {
        await res.user.deleteOne(); // deleteOne is the modern way to delete a Mongoose document
        res.json({ message: "User deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
