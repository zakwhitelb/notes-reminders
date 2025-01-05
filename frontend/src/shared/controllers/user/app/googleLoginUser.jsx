// System
import axios from "axios";

async function googleLoginUser (setErrorMessage, data) {
    console.log(data);
    try {
        const response = await axios.post("http://localhost:4000/users/google", { 
            name: data.name,
            email: data.email,
        });

        return response;
    } 
    catch (err) {
        setErrorMessage(err.response?.data?.message || "An error occurred");
        throw err;
    }
};

export { googleLoginUser };