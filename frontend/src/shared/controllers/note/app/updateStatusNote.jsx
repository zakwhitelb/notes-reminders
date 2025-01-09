import axios from "axios";
import { getToken } from "../../helpers/token";

export async function updateStatusNote(setErrorMessage, id, status) {
    try {
        const token = getToken();
        const response = await axios.patch(`http://localhost:4000/notes/${id}/status`, { status }, {
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
