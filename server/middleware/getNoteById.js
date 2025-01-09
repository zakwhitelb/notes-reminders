const NOTE = require('../models/noteModel');

async function getNoteById(req, res, next) {
    try {
        const note = await NOTE.findOne({ _id: req.params.id, userId: req.userId });
        if (!note) {
            return res.status(404).json({ message: "Note not found." });
        }
        res.note = note;
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = getNoteById;
