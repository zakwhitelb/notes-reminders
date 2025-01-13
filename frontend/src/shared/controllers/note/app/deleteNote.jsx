import axios from "axios";
import { getToken } from "../../helpers/token";

export async function deleteNote(setErrorMessage, noteId) {
    try {
        const token = getToken();
        const response = await axios.delete(`http://localhost:4000/notes/${noteId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        return response;
    } 
    catch (err) {
        const errorMessage = err.response?.data?.message || "An unexpected error occurred.";
        setErrorMessage(errorMessage);
        throw err;
    }
}
