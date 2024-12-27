import axios from "axios";

async function createUser(setErrorMessage, data) {
    try {
        // Make the API request
        const response = await axios.post("http://localhost:4000/users", {
            name: data.name,
            email: data.email,
            password: data.password,
        });

        return response;
    } 
    catch (err) {
        setErrorMessage(err.response?.data?.message || "An error occurred");
        throw err;
    }
}

export { createUser };
