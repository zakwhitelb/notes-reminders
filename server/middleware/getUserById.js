const USER = require('../models/userModel');

// Middleware to fetch a user by ID
async function getUserById(req, res, next) {
    let user;
    try {
        user = await USER.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.user = user; // Attach the user to the response object
    next(); // Move to the next middleware/controller
}

module.exports = getUserById;
