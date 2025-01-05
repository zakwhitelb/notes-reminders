import axios from "axios";
import { jwtDecode } from "jwt-decode"; 

async function updateUserPassword(setErrorMessage, data) {
    try {
        const token = JSON.parse(localStorage.getItem("token"));
        if (!token) {
            throw new Error("Token is missing");
        }

        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId; // Ensure the token contains the correct userId

        // Make the API request with Authorization header
        const response = await axios.patch(
            `http://localhost:4000/users/password/${userId}`,
            {
                password: data.password,
                newPassword: data.newPassword,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Include the token
                },
            }
        );

        console.log(response)

        return response;
    } 
    catch (err) {
        setErrorMessage(err.response?.data?.message || "An error occurred");
        throw err;
    }
}

export { updateUserPassword };
