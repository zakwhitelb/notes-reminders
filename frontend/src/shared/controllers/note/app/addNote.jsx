import axios from "axios";
import { getToken } from "../../helpers/token";
import { formatDateToISO } from "../../helpers/formatters";

export async function addNote(setErrorMessage, data) {
    try {
        const token = getToken();
        const noteData = {
            title: data.title || "",
            description: data.description || "",
            day: formatDateToISO(data.day || ""),
            hour: parseInt(data.hour, 10) || 0,
            min: parseInt(data.min, 10) || 0,
            status: data.status || "incomplete",
        };

        const response = await axios.post(`http://localhost:4000/notes`, noteData, {
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