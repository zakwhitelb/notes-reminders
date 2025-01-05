// System
import axios from "axios";
import { jwtDecode } from "jwt-decode";

async function updateNote(setErrorMessage, data) {
    try {
        const token = JSON.parse(localStorage.getItem("token"));
        
        if (!token) {
            throw new Error("Token is missing");
        }

        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId; // Ensure this is correct in your token payload

        // Make request to backend
        const response = await axios.patch(`http://localhost:4000/notes/${userId}/${data.id}`, {
            title: data.title || '',
            description: data.description || '',
            day: data.day || '00-00-0000',
            hour: parseInt(data.hour, 10) || 0,
            min: parseInt(data.min, 10)  || 0,
            status: data.status || 'incomplete',
        });

        return response;
    } 
    catch (err) {
        setErrorMessage(err.response?.message || "An error occurred");
        throw err;
    }
}

export { updateNote };