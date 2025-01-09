import { useState } from "react";
import { createUser } from "./app/createUser";
import { loginUser } from "./app/loginUser";
import { googleLoginUser } from "./app/googleLoginUser"
import { getOne } from "./app/getOne";
import { updateUser } from "./app/updateUser";
import { updateUserPassword } from "./app/updateUserPassword";
import { deleteUser } from "./app/deleteUser";

function UserController() {
    const [response, setResponse] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    async function CreateAccount(data) {
        try {
            // Call createUser and get the API response
            const apiResponse = await createUser(setErrorMessage, data);

            if (apiResponse) {
                // Set response state with token and user data
                const { data: { token } } = apiResponse;

                setResponse({ token });
                localStorage.setItem("token", JSON.stringify(token));
            }
        } 
        catch (error) {
            setErrorMessage( error.response?.data?.message || "An error occurred");
            throw error;
        }
    }

    async function LoginAccount(data) {
        try {
            // Call createUser and get the API response
            const apiResponse = await loginUser(setErrorMessage, data);

            if (apiResponse) {
                // Set response state with token and user data
                const { data: { token } } = apiResponse;

                setResponse({ token });
                localStorage.setItem("token", JSON.stringify(token));
            }
        } 
        catch (error) {
            setErrorMessage( error.response?.data?.message || "An error occurred");
            throw error; 
        }
    }

    async function GoogleLoginAccount(data) {
        try {
            // Call createUser and get the API response
            const apiResponse = await googleLoginUser(setErrorMessage, data);

            if (apiResponse) {
                // Set response state with token and user data
                const { data: { token } } = apiResponse;

                setResponse({ token });
                localStorage.setItem("token", JSON.stringify(token));
            }
        } 
        catch (error) {
            setErrorMessage( error.response?.data?.message || "An error occurred");
            throw error; 
        }
    }

    async function Profile() {
        try {
            const apiResponse = await getOne(setErrorMessage);
            if (apiResponse?.data) {
                const { name, email, googleLogin } = apiResponse.data;
                
                setResponse({ name, email, googleLogin });
            }
        } 
        catch (error) {
            setErrorMessage( error.response?.data?.message || "An error occurred");
            throw error; 
        }
    }   
    
    async function UpdateAccount(data) {
        try {
            const apiResponse = await updateUser(setErrorMessage, data);
    
            if (apiResponse) {
                const { data: { name, email } } = apiResponse;
                
                setResponse({ name, email });
            }
        } 
        catch (error) {
            setErrorMessage(error.response?.data?.message || "An error occurred");
            throw error;
        }
    }

    async function UpdatePassword(data) {
        try {
            const apiResponse = await updateUserPassword(setErrorMessage, data); // Call updateUserPassword
            console.log(apiResponse); // Debugging line
            if (apiResponse) {
                const { data: { message } } = apiResponse;

                setResponse({ message });
            }
        } 
        catch (error) {
            setErrorMessage(error.response?.data?.message || "An error occurred");
            throw error; // Throw error to propagate to the calling code
        }
    }    
    
    async function DeleteAccount(data) {
        try {
            const apiResponse = await deleteUser(setErrorMessage, data);
    
            if (apiResponse) {
                const { data: { message } } = apiResponse;
    
                setResponse({ message });
            }
        } 
        catch (error) {
            setErrorMessage(error.response?.data.message || "An error occurred");
            throw error;
        }
    }    

    return {
        response,
        setResponse,
        errorMessage,
        setErrorMessage,
        CreateAccount,
        LoginAccount,
        GoogleLoginAccount,
        Profile,
        UpdateAccount,
        UpdatePassword,
        DeleteAccount,
    };
}

export { UserController };
