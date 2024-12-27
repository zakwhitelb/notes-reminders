import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Fix named import

async function deleteUser(setErrorMessage, data) {
    try {
        const token = JSON.parse(localStorage.getItem("token"));
        
        if (!token) {
            throw new Error("Token is missing");
        }

        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;

        // Send `email` and `password` as query parameters
        const response = await axios.delete(
            `http://localhost:4000/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`, // Include the token
                },
                params: { // Pass email and password as query params
                    email: data.email,
                    password: data.password,
                },
            }
        );

        return response;
    } 
    catch (err) {
        setErrorMessage(err.response?.data?.message || "An error occurred");
        throw err; 
    }
}


export { deleteUser };
