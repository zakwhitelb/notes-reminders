const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const getNoteById = require('../middleware/getNoteById'); // Correct middleware import

// Routes
router.get('/:userId', noteController.getNotes); // Get all notes for a user
router.get('/:userId/:status', noteController.getNotesByStatus);
router.get('/:userId/:id', getNoteById, noteController.getNoteById); // Get a specific note
router.post('/:userId', noteController.createNote); // Create a new note
router.patch('/:userId/:id', getNoteById, noteController.updateNote); // Update a specific note
router.patch('/:userId/:id/status', getNoteById, noteController.updateStatusNote);
router.delete('/:userId/:id', getNoteById, noteController.deleteNote); // Delete a specific note

module.exports = router;