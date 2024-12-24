import axios from "axios";

async function createUser(setErrorMessage, setResponse, data) {

    try {
        const response = await axios.post("http://localhost:4000/users", {
            name: data.name,
            email: data.email,
            password: data.password
        });

        console.log("API Response: ", response);

        return response;
    } 
    catch (err) {
        // Handle errors
        setErrorMessage(err.response?.data?.error || "An error occurred");
    }
}

export { createUser };