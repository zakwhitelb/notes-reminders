import axios from "axios";

async function deleteUser(setErrorMessage, data) {
    try {
        const token = JSON.parse(localStorage.getItem("token"));
        
        if (!token) {
            throw new Error("Token is missing");
        }
        // Send `email` and `password` as query parameters
        const response = await axios.delete(
            `http://localhost:4000/users/${token}`, {
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
