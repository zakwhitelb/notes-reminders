const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');
const getUserIdByToken = require('../middleware/getUserIdByToken');
const getNoteById = require('../middleware/getNoteById');

// Routes
router.get('/', getUserIdByToken, noteController.getNotes); // Get all notes for a user
router.get('/status/:status', getUserIdByToken, noteController.getNotesByStatus); // Get notes by status
router.get('/:id', getUserIdByToken, getNoteById, noteController.getNoteById); // Get a specific note
router.post('/', getUserIdByToken, noteController.createNote); // Create a new note
router.patch('/:id', getUserIdByToken, getNoteById, noteController.updateNote); // Update a specific note
router.patch('/:id/status', getUserIdByToken, getNoteById, noteController.updateStatusNote); // Update note status
router.delete('/:id', getUserIdByToken, getNoteById, noteController.deleteNote); // Delete a specific note

module.exports = router;
