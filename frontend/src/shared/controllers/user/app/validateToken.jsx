// frontend/utils/validateToken.js
import axios from "axios";

async function validateToken(setErrorMessage) {
    try {
        const token = JSON.parse(localStorage.getItem("token"));
        if (!token) {
            throw new Error("Token is missing");
        }

        // Make a GET request to validate the token
        const response = await axios.get(`http://localhost:4000/users/validateToken`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response;
    } 
    catch (err) {
        setErrorMessage(err.response?.data?.message || "An error occurred");
        throw err;
    }
}

export { validateToken };
