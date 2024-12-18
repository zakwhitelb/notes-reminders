const NOTE = require('../models/noteModel');

// Middleware to fetch a note by ID
async function getNoteById(req, res, next) {
    let note;
    try {
        note = await NOTE.findById(req.params.id); // Fetch the note by ID
        if (note == null) {
            return res.status(404).json({ message: "Cannot find note" });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.note = note; // Attach the note to the response object
    next(); // Proceed to the next middleware/controller
}

module.exports = getNoteById;
