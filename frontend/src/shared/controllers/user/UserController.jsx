// System
import { useState } from "react";
import { createUser } from "./app/createUser";
import { loginUser } from "./app/loginUser";
import { getOne } from "./app/getOne";

function UserController() {
    const [response, setResponse] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    async function CreateAccount(data) {
        await setResponse(createUser(setErrorMessage, setResponse, data));
        localStorage.setItem("token", JSON.stringify(response.token));
        console.log(response)
    }

    function LoginAccount(data) {
        loginUser(setErrorMessage, setResponse, data);
        localStorage.setItem("token", JSON.stringify(response.token));
    }

    function Profile() {
        getOne();
    }

    return {
        response,
        errorMessage,
        CreateAccount,
        LoginAccount,
        Profile,
    }
}

export { UserController }
