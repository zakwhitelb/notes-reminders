const NOTE = require('../models/noteModel');

exports.getNotes = async (req, res) => {
    try {
        const showBy = req.headers['showby'];
        let notes;

        if(!showBy) {}

        if (showBy === "end_time") {
            // Default sort by day, hour, and min
            notes = await NOTE.find({ userId: req.userId }).sort({ day: 1, hour: 1, min: 1 });
        } 
        else {
            // Sort by createTime if showBy is specified
            notes = await NOTE.find({ userId: req.userId }).sort({ createTime: 1 });
        }

        res.json({ notes });
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getNotesByStatus = async (req, res) => {
    const { status } = req.params;
    if (!["incomplete", "completed", "overdue"].includes(status)) {
        return res.status(400).json({ message: "Invalid status value." });
    }
    try {
        const notes = await NOTE.find({ userId: req.userId, status });
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getNoteById = (req, res) => {
    res.json(res.note);
};

exports.createNote = async (req, res) => {
    const { title, description, day, hour, min, status } = req.body;

    if (!title || isNaN(Date.parse(day)) || !["incomplete", "completed", "overdue"].includes(status)) {
        return res.status(401).json({ message: "Invalid input data." });
    }
    try {
        const newNote = new NOTE({
            title,
            description: description || "",
            day,
            hour,
            min,
            status,
            userId: req.userId,
        });
        const savedNote = await newNote.save();
        res.status(201).json({ note: savedNote });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateNote = async (req, res) => {
    const updates = ["title", "description", "day", "hour", "min", "status"];
    
    updates.forEach((key) => {
        if (req.body[key] !== undefined && req.body[key] !== res.note[key]) {
            res.note[key] = req.body[key];
        }
    });

    try {
        const updatedNote = await res.note.save();
        res.json({ note: updatedNote });
    } 
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateStatusNote = async (req, res) => {
    const { status } = req.body;
    if (!["incomplete", "completed", "overdue"].includes(status)) {
        return res.status(400).json({ message: "Invalid status value." });
    }
    try {
        res.note.status = status;
        const updatedNote = await res.note.save();
        
        res.json({ note: updatedNote });
    } 
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.deleteNote = async (req, res) => {
    try {
        await res.note.deleteOne();
        res.json({ message: "Note deleted successfully." });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
