// System
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import PropTypes from "prop-types";

// Context
import { UserController } from "../../../shared/controllers/user/UserController";

// Functions
import { getPasswordStrengthColor, isValidPasswordColor, isValidUserName, isValidEmail } from "../../../shared/func/Athentification.func";

// Components
import { Input } from "../../../shared/components/ui/Input";

// Redux
import { useDispatch } from 'react-redux';
import { Login } from '../../../redux/slices/AuthentificationSlice'; 

function CreateAccountForm({ setButtonClicked, data, handleChange, clearData, setSuccessfulAuthentication }) {
    const { response, errorMessage, setErrorMessage, CreateAccount } = UserController();
    const [passwordStrengthColor, setPasswordStrengthColor] = useState("bg-[var(--red)]");
    
    const navigate = useNavigate();
    const dispatch = useDispatch();  

    // Navigate to the note area upon successful account creation
    useEffect(() => {
        const handleResponse = async () => {
            if (response) {
                dispatch(Login());
                setSuccessfulAuthentication(true);
                await new Promise((resolve) => setTimeout(resolve, 2000));
                clearData();
                navigate("/note-area");
            }
        };
    
        handleResponse();
    }, [response, dispatch, navigate, setSuccessfulAuthentication, clearData]);
    

    // Determine password strength and corresponding color
    useEffect(() => {
        setPasswordStrengthColor(getPasswordStrengthColor(data.password || ""));
    }, [data.password]);

    // Handle input field changes
    const handleInputChange = useCallback((name, value) => {
        setErrorMessage(""); // Clear any previous error messages
        handleChange(name, value);
    }, [setErrorMessage, handleChange]);

    // Submit the form
    const handleSubmit = () => {
        if (!isValidUserName(data.name) || !isValidEmail(data.email) || !isValidPasswordColor(passwordStrengthColor)) {
            setErrorMessage("Name, email or password is not valid!");
            return;
        }

        CreateAccount(data);
    };

    return (
        <>
            
            <div className="flex flex-col gap-[20px]">
                <Input
                    name="name"
                    placeholder="User name"
                    value={data.name || ""}
                    handleChange={handleInputChange}
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={data.email || ""}
                    handleChange={handleInputChange}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={data.password || ""}
                    handleChange={handleInputChange}
                    colorPassword={passwordStrengthColor}
                    create_account
                />

                <div className="grid gap-[10px]">
                    <div className="w-full mt-[-5px]">
                        <p className="text-[16px] font-[khula-regular] text-[var(--red)] cursor-default">
                            {errorMessage}
                        </p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-[4px]">
                            <p className="text-[14px] font-[khula-regular] cursor-default">
                                Already have an account?
                            </p>
                            <h3
                                className="text-[15px] font-[khula-semi-bold] cursor-pointer"
                                onClick={() => {
                                    setButtonClicked("login");
                                    clearData();
                                }}
                            >
                                Log in
                            </h3>
                        </div>

                        <motion.input
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.85 }}
                            type="submit"
                            value="Create account"
                            onClick={handleSubmit}
                            className="w-fit bg-[var(--black2white)] text-[18px] text-[var(--white2black)] font-[heebo-medium] rounded-[8px] px-[16px] py-[10px] cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

CreateAccountForm.propTypes = {
    setButtonClicked: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    clearData: PropTypes.func.isRequired,
    setSuccessfulAuthentication: PropTypes.func.isRequired,
};

export { CreateAccountForm };
