const USER = require('../models/userModel');

// Middleware to fetch a user by ID
async function getUserById(req, res, next) {
    try {
        const user = await USER.findById(req.params.id); // Fetch user by ID from the database
        if (!user) {
            return res.status(404).json({ message: "Cannot find user" });
        }

        res.user = user; // Attach the user object to the response for downstream usage
        next(); // Move to the next middleware/controller
    } catch (err) {
        console.error("Error in getUserById middleware:", err);
        return res.status(500).json({ message: "Server error while fetching user" });
    }
}

module.exports = getUserById;
