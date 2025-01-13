// System
import axios from "axios";
import { getToken } from "../../helpers/token";

export async function getNotes(setErrorMessage, show_by) {
    
    try {
        const token = getToken();
        const response = await axios.get(
            `http://localhost:4000/notes`,
            {
                headers: { Authorization: `Bearer ${token}`, showBy: show_by }
            }
        );

        return response; // Return the response data directly
    } 
    catch (err) {
        const errorMessage = err.response?.data?.message || "An unexpected error occurred.";
        setErrorMessage(errorMessage);
        throw err;
    }
}