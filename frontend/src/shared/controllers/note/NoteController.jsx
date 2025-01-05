import { useState } from "react";
import { getNotes } from "./app/getNotes";
import { addNote } from "./app/addNote";
import { updateNote } from "./app/updateNote";
import { updateStatusNote } from "./app/updateStatusNote";
import { deleteNote } from "./app/deleteNote";

function NoteController() {
    const [response, setResponse] = useState({ notes: [] }); // Initialize with empty notes array
    const [errorMessage, setErrorMessage] = useState("");

    async function GetAllNotes() {
        try {
            // Call createUser and get the API response
            const apiResponse = await getNotes(setErrorMessage);

            if (apiResponse) {
                // Set response state with token and user data
                const { data: { notes } } = apiResponse;
                setResponse({ notes });
            }
        }
        catch (error) {
            setErrorMessage(error.response?.data?.message || "An error occurred");
            throw error;
        }
    }

    async function AddOneNote(data) {
        try {
            // Call createUser and get the API response
            const apiResponse = await addNote(setErrorMessage, data);

            if (apiResponse) {
                // Set response state with token and user data
                const { data: { note } } = apiResponse;
                setResponse({ note });
            }
        } 
        catch (error) {
            setErrorMessage(error.response?.message || "An error occurred");
            throw error;
        }
    }

    async function UpdateOneNote(data) {
        try {
            // Call createUser and get the API response
            const apiResponse = await updateNote(setErrorMessage, data);

            if (apiResponse) {
                // Set response state with token and user data
                const { data: { note } } = apiResponse;
                setResponse({ note });
            }
        }
        catch (error) {
            setErrorMessage(error.response?.message || "An error occurred");
            throw error;
        }
    }

    async function UpdateStatusOneNote(id, status) {
        try {
            // Call createUser and get the API response
            const apiResponse = await updateStatusNote(setErrorMessage, id, status);

            if (apiResponse) {
                // Set response state with token and user data
                const { data: { note } } = apiResponse;
                setResponse({ note });
            }
        }
        catch (error) {
            setErrorMessage(error.response?.message || "An error occurred");
            throw error;
        }
    }

    async function DeleteOneNote(noteId) {
        try {
            // Call createUser and get the API response
            const apiResponse = await deleteNote(setErrorMessage, noteId);

            if (apiResponse) {
                // Set response state with token and user data
                const { data: { message } } = apiResponse;
                setResponse({ message });
            }
        }
        catch (error) {
            setErrorMessage(error.response?.message || "An error occurred");
            throw error;
        }
    }

    return {
        response,
        setResponse,
        errorMessage,
        setErrorMessage,
        GetAllNotes,
        AddOneNote,
        UpdateOneNote,
        UpdateStatusOneNote,
        DeleteOneNote,
    };
}

export { NoteController };
