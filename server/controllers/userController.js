const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const USER = require('../models/userModel');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

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
exports.getUserById = async (req, res) => {
    try {
        // Extract token from Authorization header
        const token = req.headers.authorization?.split(" ")[1]; // "Bearer <token>"
        if (!token) {
            return res.status(401).json({ error: "Token missing" });
        }

        // Verify token and extract userId
        const decoded = jwt.verify(token, JWT_SECRET);
        const userId = decoded.userId;

        // Fetch user by userId
        const user = await USER.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Return user info
        return res.status(200).json({
            user: {
                id: user._id,
                email: user.email,
                name: user.name, // Adjust fields as needed
            },
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
    }
};

// Creating one user
exports.createUser = async (req, res) => {
    try {
        const isExist = await USER.findOne({ email: req.body.email }); 
        console.log(req.body.email)
        if (isExist) return res.status(400).json({ message: "User with this email already exists" });

        const HASHEDPASSWORD = await bcrypt.hash(req.body.password, 10);
        console.log("Hashed password:", HASHEDPASSWORD);

        const newUser = new USER({
            name: req.body.name,
            email: req.body.email,
            password: HASHEDPASSWORD
        });

        const user = await newUser.save();
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
        res.status(201).json({
            user : user,
            token : token
        });
    } 
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.loginUser = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await USER.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid password" });
        }

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({
            user : user,
            token : token
        });
    }
    catch(err){
        res.status(500).json({ 
            message: err.message 
        });
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
