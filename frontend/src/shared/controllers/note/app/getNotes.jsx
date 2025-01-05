import axios from "axios";
import { jwtDecode } from "jwt-decode"; 

async function getNotes(setErrorMessage) {
    try {
        const token = JSON.parse(localStorage.getItem("token"));
        
        if (!token) {
            throw new Error("Token is missing");
        }

        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId; // Ensure this is correct in your token payload

        // Make request to backend
        const response = await axios.get(`http://localhost:4000/notes/${userId}`);
        
        return response;
    } 
    catch (err) {
        setErrorMessage(err.response?.data?.message || "An error occurred");
        throw err;
    }
}

export { getNotes };
