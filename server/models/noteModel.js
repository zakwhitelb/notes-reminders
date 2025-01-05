const mongoose = require('mongoose');

// Helper function to format a date as DD/MM/YYYY
const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
};

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        default: ""        
    },
    day: {
        type: Date,
        required: true,
        default: new Date(),
        get: formatDate // Apply the format on retrieval
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
}, {
    toJSON: { getters: true }, // Enable getters for JSON serialization
    toObject: { getters: true } // Enable getters for object serialization
});

module.exports = mongoose.model('NOTE', noteSchema);
