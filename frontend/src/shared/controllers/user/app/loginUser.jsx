// System
import axios from "axios";

async function loginUser (setErrorMessage, setResponce, data) {
    try {
        const response = await axios.post("http://localhost:5000/login", { 
            email: data.email, 
            password: data.password
        });
        setResponce(response.data.token);
    } 
    catch (err) {
        setErrorMessage(err.response.data.error);
    }
};

export { loginUser };