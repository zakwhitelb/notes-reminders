// System
import PropTypes from "prop-types";
import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "motion/react";

// Controllers
import { UserController } from "../../../shared/controllers/user/UserController";

// Components
import { Input } from "../../../shared/components/ui/Input";
import { SuccessfulPopUp } from "../../../shared/components/ui/SuccessfulPopUp";

// Functions
import { getPasswordStrengthColor, isValidPasswordColor } from "../../../shared/func/Athentification.func";

// Icons    
import { RemovePopUp } from "../../../shared/assets/icons/RemovePopUp.icon";

function PopUp({ googleLogin, handleClickChangePassword }) {
    const { errorMessage, setErrorMessage, UpdatePassword } = UserController();
    const [newPasswordStrengthColor, setNewPasswordStrengthColor] = useState("bg-[var(--red)]");
    const [confPasswordStrengthColor, setConfPasswordStrengthColor] = useState("bg-[var(--red)]");
    const [showSuccessfulWork, setSuccessfulWork] = useState(false);
    const [ data, setData ] = useState({
        password: "", 
        newPassword: "",
        confirmPassword: "",
    });

    useEffect(() => {
        setNewPasswordStrengthColor(getPasswordStrengthColor(data.newPassword || ""));
    }, [data.newPassword]);

    useEffect(() => {
        setConfPasswordStrengthColor(getPasswordStrengthColor(data.confirmPassword || ""));
    }, [data.confirmPassword]);

    const handleChange = useCallback((name, value) => {
        setErrorMessage("");
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }, [setErrorMessage]);

    const handleSubmit = async () => {
        if(!isValidPasswordColor(newPasswordStrengthColor) || !isValidPasswordColor(confPasswordStrengthColor)){
            if(!isValidPasswordColor(newPasswordStrengthColor) && !isValidPasswordColor(confPasswordStrengthColor)){
                setErrorMessage("New password and confirm password are not valid!");
                return;
            } 
            setErrorMessage(!isValidPasswordColor(newPasswordStrengthColor)? "New password is not valid!" : "Confirm password is not valid!");
            return;
        }

        if(data.newPassword !== data.confirmPassword) {
            setErrorMessage("new password not equal the confirm Password!");
            return;
        }

        try {
            await UpdatePassword(data);
            
            setSuccessfulWork(true);
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setSuccessfulWork(false)
            handleClickChangePassword();
        } 
        catch (err) {
            console.error("Error during submission:", err);
        }
        
    };

    const renderSuccessfulPopUp = useMemo(() => {
        if (!showSuccessfulWork) return null;
        return (
            <motion.div
                layout
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
                className="absolute z-10 flex justify-center items-center w-[calc(100%-400px)] h-full rounded-[30px]"
            >
                <SuccessfulPopUp />
            </motion.div>
        );
    }, [showSuccessfulWork]);

    return (
        <div
            className="absolute z-10 top-1/2 transform -translate-y-1/2 flex items-center justify-center h-fit w-fit mx-[100px] bg-[var(--transparent)]"
        >
            <motion.div 
                initial={{ scale: 0, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }}
                className="relative grid w-[680px] h-fit bg-[var(--white2black)] rounded-[20px] px-[100px] py-[30px] gap-[40px] duration-[0.15s] ease-linear"
            >
                {renderSuccessfulPopUp}
                <motion.div 
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.75 }}
                    onClick={() => {handleClickChangePassword()}}
                    className="absolute top-0 right-0 flex justify-end w-[62px] h-[62px] bg-[var(--red)] rounded-tr-[20px] rounded-bl-[50px] pr-[16px] pt-[16px] cursor-pointer"
                >
                    <RemovePopUp />
                </motion.div>

                <div className="flex flex-col">
                    <h1 className="text-[34px] text-[var(--black2white)] text-center font-[merriweather-sans-bold] w-full">Profile</h1>
                </div>
                <div className="flex flex-col gap-[20px]">
                    {!googleLogin &&
                        <Input
                            type="password"
                            name="password"
                            placeholder="Current password"
                            value={data.password || ""}
                            handleChange={handleChange}
                        />
                    }
                    <Input
                        type="password"
                        name="newPassword"
                        placeholder="New password"
                        value={data.newPassword || ""}
                        handleChange={handleChange}
                        colorPassword={newPasswordStrengthColor}
                        create_account
                    />
                    <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="New password"
                        value={data.confirmPassword || ""}
                        handleChange={handleChange}
                        colorPassword={confPasswordStrengthColor}
                        create_account
                    />
                    <div className="grid gap-[10px]">
                        <div className="w-full mt-[-5px]">
                            <p className="text-[16px] text-center font-[khula-regular] text-[var(--red)] cursor-default">
                                {errorMessage}
                            </p>
                        </div>
                        <div className="flex justify-end items-center">
                            <motion.input
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.85 }}
                                type="submit"
                                value="Change password"
                                onClick={handleSubmit}
                                className="w-fit bg-[var(--black2white)] text-[18px] text-[var(--white2black)] font-[heebo-medium] rounded-[8px] px-[16px] py-[10px] cursor-pointer"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

PopUp.propTypes = {
    googleLogin: PropTypes.bool.isRequired,
    handleClickChangePassword: PropTypes.func.isRequired,
};

PopUp.defaultProps = {
    googleLogin: false,
};

export { PopUp };
