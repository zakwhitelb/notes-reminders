import axios from "axios";

async function updateUser(setErrorMessage, data) {
    try {
        const token = JSON.parse(localStorage.getItem("token"));
        if (!token) {
            throw new Error("Token is missing");
        }

        // Make the API request with Authorization header
        const response = await axios.patch(
            `http://localhost:4000/users/${token}`,
            {
                name: data.name,
                email: data.email,
                password: data.password,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`, // Include the token
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

export { updateUser };
