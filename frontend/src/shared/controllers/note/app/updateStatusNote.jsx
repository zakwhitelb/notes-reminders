// System
import axios from "axios";
import { jwtDecode } from "jwt-decode";

async function updateStatusNote(setErrorMessage, id, status) {
    try {
        const token = JSON.parse(localStorage.getItem("token"));
        
        if (!token) {
            throw new Error("Token is missing");
        }

        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId; // Ensure this is correct in your token payload

        // Make request to backend
        const response = await axios.patch(`http://localhost:4000/notes/${userId}/${id}/status`,
        {
            status: status
        });

        return response;
    } 
    catch (err) {
        setErrorMessage(err.response?.message || "An error occurred");
        throw err;
    }
}

export { updateStatusNote };