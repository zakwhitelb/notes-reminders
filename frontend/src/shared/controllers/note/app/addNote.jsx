// System
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Ensure this is the correct import path for jwt-decode

async function addNote(setErrorMessage, data) {
    try {
        // Retrieve the token from localStorage
        const token = JSON.parse(localStorage.getItem("token"));

        if (!token) {
            throw new Error("Authentication token is missing. Please log in.");
        }

        // Decode the token to extract user ID
        const decodedToken = jwtDecode(token);
        const userId = decodedToken?.userId;

        if (!userId) {
            throw new Error("Invalid token. Unable to retrieve user ID.");
        }

        // Format the `day` field to YYYY-MM-DD if it's provided
        const formatDateToISO = (date) => {
            if (!date) return ""; // Return empty string for empty or invalid dates
            const [day, month, year] = date.split("-");
            return `${year}-${month}-${day}`;
        };

        // Prepare the note data
        const noteData = {
            title: data.title || "",
            description: data.description || "",
            day: formatDateToISO(data.day || ""), // Convert to YYYY-MM-DD
            hour: parseInt(data.hour, 10) || 0, // Ensure hour is a valid integer
            min: parseInt(data.min, 10) || 0, // Ensure minute is a valid integer
            status: data.status || "incomplete",
        };

        // Make the POST request to the backend
        const response = await axios.post(`http://localhost:4000/notes/${userId}`, noteData, {
            headers: {
                Authorization: `Bearer ${token}`, // Include token in the Authorization header
            },
        });

        return response;
    } catch (err) {
        // Extract meaningful error messages from the response
        const errorMessage = err.response?.data?.message || "An unexpected error occurred.";
        setErrorMessage(errorMessage);
        throw err; // Re-throw the error to allow further handling if needed
    }
}

export { addNote };
