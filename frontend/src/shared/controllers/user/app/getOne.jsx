import axios from "axios";

async function getOne(setErrorMessage) {
    try {
        const token = JSON.parse(localStorage.getItem("token"));
        
        if (!token) {
            throw new Error("Token is missing");
        }
        
        // Make request to backend
        const response = await axios.get(`http://localhost:4000/users/${token}`);

        return response;
    } 
    catch (err) {
        setErrorMessage(err.response?.data?.message || "An error occurred");
        throw err;
    }
}

export { getOne };
