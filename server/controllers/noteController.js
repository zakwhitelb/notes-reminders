const NOTE = require('../models/noteModel');

// Getting all notes for a specific user
exports.getNotes = async (req, res) => {
    try {
        const notes = await NOTE.find({ userId: req.params.userId }); // Filter notes by userId
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Getting notes by status for a specific user
exports.getNotesByStatus = async (req, res) => {
    const { status } = req.params; // Extract the status value from the URL

    // Validate the status value
    if (!["incomplete", "completed", "overdue"].includes(status)) {
        return res.status(400).json({ message: "Invalid status value. Valid values are 'incomplete', 'completed', and 'overdue'." });
    }

    try {
        const notes = await NOTE.find({ userId: req.params.userId, status: status }); // Filter notes by userId and status
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Getting a specific note
exports.getNoteById = (req, res) => {
    res.json(res.note); // Use the note fetched by the middleware
};

// Creating a new note
exports.createNote = async (req, res) => {
    const newNote = new NOTE({
        title: req.body.title,
        description: req.body.description,
        day: req.body.day,
        hour: req.body.hour,
        min: req.body.min,
        status: req.body.status,
        userId: req.params.userId // Associate the note with a specific user
    });

    try {
        const note = await newNote.save();
        res.status(201).json(note);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Updating a specific note
exports.updateNote = async (req, res) => {
    if (req.body.title != null) {
        res.note.title = req.body.title;
    }
    if (req.body.description != null) {
        res.note.description = req.body.description;
    }
    if (req.body.day != null) {
        res.note.day = req.body.day;
    }
    if (req.body.hour != null) {
        res.note.hour = req.body.hour;
    }
    if (req.body.min != null) {
        res.note.min = req.body.min;
    }
    if (req.body.status != null) {
        // Validate the status based on enum values
        if (!["incomplete", "completed", "overdue"].includes(req.body.status)) {
            return res.status(400).json({ message: "Invalid status value. Valid values are 'incomplete', 'completed', and 'overdue'." });
        }
        res.note.status = req.body.status;
    }

    try {
        const updatedNote = await res.note.save(); // Save updated note
        res.json(updatedNote);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Deleting a specific note
exports.deleteNote = async (req, res) => {
    try {
        await res.note.deleteOne(); // Delete the note fetched by middleware
        res.json({ message: "Note deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
