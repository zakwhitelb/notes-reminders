// System
import { useState } from "react";

// Functions
import { validateToken } from "./app/validateToken";
import { createUser } from "./app/createUser";
import { loginUser } from "./app/loginUser";
import { googleLoginUser } from "./app/googleLoginUser"
import { getOne } from "./app/getOne";
import { updateUser } from "./app/updateUser";
import { setUserPassword } from "./app/setUserPassword";
import { updateUserPassword } from "./app/updateUserPassword";
import { deleteUser } from "./app/deleteUser";

function UserController() {
    const [response, setResponse] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    async function ValidateUserToken() {
        try {
            // Call createUser and get the API response
            const apiResponse = await validateToken(setErrorMessage);

            if (apiResponse) {
                // Set response state with token and user data
                const { data: { message } } = apiResponse;
                
                setResponse({ message });
            }
        } 
        catch (error) {
            setErrorMessage( error.response?.data?.message || "An error occurred ValidateUserToken");
            console.log(error.response?.data?.message || "An error occurred ValidateUserToken")
            throw error;
        }
    }

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
            setErrorMessage( error.response?.data?.message || "An error occurred CreateAccount");
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
            setErrorMessage( error.response?.data?.message || "An error occurred LoginAccount");
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
            setErrorMessage( error.response?.data?.message || "An error occurred GoogleLoginAccount");
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
            setErrorMessage( error.response?.data?.message || "An error occurred Profile");
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
            setErrorMessage(error.response?.data?.message || "An error occurred UpdateAccount");
            throw error;
        }
    }

    async function SetPassword(data) {
        try {
            const apiResponse = await setUserPassword(setErrorMessage, data); // Call updateUserPassword
            console.log(apiResponse); // Debugging line
            if (apiResponse) {
                const { data: { message } } = apiResponse;

                setResponse({ message });
            }
        } 
        catch (error) {
            setErrorMessage(error.response?.data?.message || "An error occurred SetPassword");
            throw error; // Throw error to propagate to the calling code
        }
    }  

    async function UpdatePassword(data) {
        try {
            const apiResponse = await updateUserPassword(setErrorMessage, data); // Call updateUserPassword
            if (apiResponse) {
                const { data: { message } } = apiResponse;

                setResponse({ message });
            }
        } 
        catch (error) {
            setErrorMessage(error.response?.data?.message || "An error occurred UpdatePassword");
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
            setErrorMessage(error.response?.data.message || "An error occurred DeleteAccount");
            throw error;
        }
    }    

    return {
        response,
        setResponse,
        errorMessage,
        setErrorMessage,
        ValidateUserToken,
        CreateAccount,
        LoginAccount,
        GoogleLoginAccount,
        Profile,
        UpdateAccount,
        SetPassword,
        UpdatePassword,
        DeleteAccount,
    };
}

export { UserController };
