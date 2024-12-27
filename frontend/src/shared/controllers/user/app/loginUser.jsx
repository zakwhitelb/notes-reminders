// System
import axios from "axios";

async function loginUser (setErrorMessage, data) {
    try {
        const response = await axios.post("http://localhost:4000/users/login", { 
            email: data.email, 
            password: data.password
        });

        return response;
    } 
    catch (err) {
        setErrorMessage(err.response?.data?.message || "An error occurred");
        throw err;
    }
};

export { loginUser };