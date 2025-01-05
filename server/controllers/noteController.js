const NOTE = require('../models/noteModel');

// Getting all notes for a specific user
exports.getNotes = async (req, res) => {
    try {
        const notes = await NOTE.find({ userId: req.params.userId })
            .sort({
                day: 1, // Sort by day (ascending: closest first)
                hour: 1, // Then by hour (ascending: closest first)
                min: 1 // Finally by minute (ascending: closest first)
            }); 

        res.json({ notes });
    } 
    catch (err) {
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
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Getting a specific note
exports.getNoteById = (req, res) => {
    res.json(res.note); // Use the note fetched by the middleware
};

// Creating a new note
exports.createNote = async (req, res) => {

    const { day } = req.body;

    // Validate the `day` field
    if (isNaN(Date.parse(day))) {
        return res.status(401).json({ message: "Invalid date format. Use YYYY-MM-DD." });
    }

    const newNote = new NOTE({
        title: req.body.title,
        description: req.body.description || "",
        day: day, // Ensure it’s a valid Date object
        hour: req.body.hour,
        min: req.body.min,
        status: req.body.status,
        userId: req.params.userId
    });

    try {
        const note = await newNote.save();
        res.status(201).json({ note: note });
    } 
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Updating a specific note
exports.updateNote = async (req, res) => {
    const note = res.note;

    if (req.body.title != null && req.body.title !== note.title) {
        res.note.title = req.body.title;
    }
    if (req.body.description != null && req.body.description !== note.description) {
        res.note.description = req.body.description;
    }
    if (req.body.day != null && req.body.day !== note.day) {
        res.note.day = req.body.day;
    }
    if (req.body.hour != null && req.body.hour !== note.hour) {
        res.note.hour = req.body.hour;
    }
    if (req.body.min != null && req.body.min !== note.min) {
        res.note.min = req.body.min;
    }
    if (req.body.status != null && req.body.status !== note.status) {
        // Validate the status based on enum values
        if (!["incomplete", "completed", "overdue"].includes(req.body.status)) {
            return res.status(400).json({ message: "Invalid status value. Valid values are 'incomplete', 'completed', and 'overdue'." });
        }
        res.note.status = req.body.status;
    }

    try {
        const updatedNote = await res.note.save(); // Save updated note
        res.json(updatedNote);
    } 
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Updating the status of a specific note
exports.updateStatusNote = async (req, res) => {
    try {
        const note = res.note; // Retrieved via middleware
        const { status } = req.body;
        // Update status if it is different
        note.status = status;
        const updatedNote = await note.save(); // Save updated note
        res.json(updatedNote);
    }
    catch (err) {
        res.status(500).json({ err });
    }
};

// Deleting a specific note
exports.deleteNote = async (req, res) => {
    try {
        const note = res.note;
        await note.deleteOne(); // Delete the note fetched by middleware
        res.json({ message: "Note deleted successfully" });
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
