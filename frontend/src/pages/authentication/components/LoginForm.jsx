// System
import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

// Controllers
import { UserController } from "../../../shared/controllers/user/UserController";

// Components
import { Input } from "../../../shared/components/ui/Input";

// Functions
import { getPasswordStrengthColor, isValidPasswordColor, isValidEmail } from "../../../shared/func/Athentification.func";

// Redux
import { useDispatch } from 'react-redux';
import { Login } from '../../../shared/redux/slices/AuthentificationSlice'; 

function LoginForm({ setButtonClicked, data, handleChange, clearData, setSuccessfulAuthentication }) {
    const { response, errorMessage, setErrorMessage, LoginAccount } = UserController();
    const navigate = useNavigate();
    const dispatch = useDispatch();

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

    // Handle input field changes
        const handleInputChange = useCallback((name, value) => {
            setErrorMessage(""); // Clear any previous error messages
            handleChange(name, value);
        }, [setErrorMessage, handleChange]);

    const handleSubmit = () => {
        const passwordStrengthColor = getPasswordStrengthColor(data.password || "");
        if (!isValidEmail(data.email) || !isValidPasswordColor(passwordStrengthColor)) {
            setErrorMessage("Email or password is not valid!");
            return;
        }

        LoginAccount(data);
    };

    return (
        <div className="flex flex-col gap-y-[14px] sm:gap-y-[20px]">
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
            />
            <div className="grid">
                {errorMessage && 
                    <div className="w-full mt-[-5px]">
                        <p className="text-[16px] font-[khula-regular] text-[var(--red)] cursor-default">{errorMessage}</p> 
                    </div>
                }
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-[4px]">
                        <p className="text-[12px] sm:text-[14px] font-[khula-regular] cursor-default">
                            Already have an account?
                        </p>
                        <h3 
                            className="text-[13px] sm:text-[15px] font-[khula-semi-bold] cursor-pointer"
                            onClick={() => { setButtonClicked("create_account"); clearData(); }}
                        >
                            Sing in
                        </h3>
                    </div>
                    
                    <motion.input 
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.75 }}
                        type="submit" 
                        value="Log in" 
                        onClick={handleSubmit}
                        className="w-fit bg-[var(--black2white)] text-[18px] text-[var(--white2black)] font-[heebo-medium] rounded-[8px] px-[14px] sm:px-[16px] py-[8px] sm:py-[10px] cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
}

LoginForm.propTypes = {
    setButtonClicked: PropTypes.func.isRequired,
    data: PropTypes.object,
    handleChange: PropTypes.func.isRequired,
    validateEmmail: PropTypes.func.isRequired,
    clearData: PropTypes.func.isRequired,
    setSuccessfulAuthentication: PropTypes.func.isRequired,
};

export { LoginForm };
