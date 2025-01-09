const USER = require('../models/userModel');

// Middleware to fetch a user by userId (retrieved from the token)
async function getUserById(req, res, next) {
    try {
        // Fetch the user from the database using the userId decoded from the token
        const user = await USER.findById(req.userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.user = user; // Attach the user object to the response for downstream usage
        next(); // Move to the next middleware/controller
    } 
    catch (err) {
        console.error("Error in getUserById middleware:", err);
        return res.status(500).json({ message: "Server error while fetching user" });
    }
}

module.exports = getUserById;
