import axios from "axios";

async function getOne(setErrorMessage, setResponse) {
    try {
        // Retrieve token from localStorage
        const token = localStorage.getItem("token");
        if (!token) {
            throw new Error("Token is missing");
        }

        // Make request to the endpoint with token in Authorization header
        const response = await axios.get("http://localhost:5000/user", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // Set response
        setResponse(response.data.user);
    } catch (err) {
        console.error(err);
        setErrorMessage(err.response?.data?.error || "An error occurred");
    }
}

export { getOne };