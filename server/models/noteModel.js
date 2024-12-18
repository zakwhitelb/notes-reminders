const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    day: {
        type: Date,
        required: true,
        default: new Date()
    },
    hour: {
        type: Number,
        required: false,
        default: 0
    },
    min: {
        type: Number,
        required: false,
        default: 0
    },
    status: {
        type: String,
        required: false,
        enum: ["incomplete", "completed", "overdue"], // Enum for valid status values
        default: "incomplete" // Default value
    },
    userId: {
        type: String, // Changed to `String` to match MongoDB ObjectId type for users
        required: true
    }
});

module.exports = mongoose.model('NOTE', noteSchema);
