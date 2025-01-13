// System
import axios from "axios";

async function setUserPassword(setErrorMessage, data) {
    try {
        const token = JSON.parse(localStorage.getItem("token"));

        if (!token) {
            throw new Error("Token is missing");
        }

        // Make the API request with Authorization header
        const response = await axios.patch(
            `http://localhost:4000/users/set_password/${token}`,
            {
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

export { setUserPassword };