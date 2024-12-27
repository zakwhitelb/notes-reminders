const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const USER = require("../models/userModel");

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Getting all users
exports.getUsers = async (req, res) => {
    try {
        const users = await USER.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Creating a user
exports.createUser = async (req, res) => {
    try {
        const isExist = await USER.findOne({ email: req.body.email });

        if (isExist) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        const HASHEDPASSWORD = await bcrypt.hash(req.body.password, 10);
        const user = await newUser.save();
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
        const newUser = new USER({
            name: req.body.name,
            email: req.body.email,
            password: HASHEDPASSWORD,
        });

        res.status(201).json({ token });
    } 
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Logging in a user
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await USER.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ user, token });
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Updating a user
exports.updateUser = async (req, res) => {
    try {
        const user = res.user;
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }

        if (req.body.email && req.body.email !== user.email) {
            const isExist = await USER.findOne({ email: req.body.email });
            if (isExist) {
                return res.status(402).json({ message: "User with this email already exists" });
            }
            user.email = req.body.email;
        }

        // Update other fields if provided
        if (req.body.name != null) {
            user.name = req.body.name;
        }

        const updatedUser = await user.save();
        const { name, email } = updatedUser;

        res.status(200).json({ name, email });
    } 
    catch (err) {
        res.status(401).json({ message: "Error updating user:" + err.message });
    }
};

exports.updateUserPassword = async (req, res) => {
    try {
        const user = res.user; // Retrieved from the `getUserById` middleware

        // Validate old password
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid current password" });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(req.body.newPassword, 10);

        // Update user's password
        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ message: "Password updated successfully" });
    } catch (err) {
        console.error("Error updating password:", err);
        res.status(500).json({ message: "An error occurred while updating the password" });
    }
};

// Deleting a user
exports.deleteUser = async (req, res) => {
    try {
        const { email, password } = req.query; 
        const user = res.user;
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }

        if (!email || email !== user.email) {
            return res.status(402).json({ message: "Email not valid!" });
        }

        // Delete the user
        await user.deleteOne();

        res.status(200).json({ message: "User deleted successfully" });
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};