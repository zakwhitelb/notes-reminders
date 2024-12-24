// System
import { useState, useLayoutEffect } from "react";
import { motion } from "motion/react";
import validator from "validator";
import PropTypes from "prop-types"; 

// COntext
import { UserController } from "../../../shared/controllers/user/UserController";

// Components
import { Input } from "../../../shared/components/ui/Input";

function CreateAccountForm({ setButtonClicked, data, handleChange, validateData, clearData }) {
    const { responce, errorMessage, CreateAccount } = UserController();
    console.log(responce)
    const [colorPassword, setColorPassword] = useState("var(--red)")

    useLayoutEffect(() => {
        console.log("Response : " + responce)
        const password = data.password ? data.password : ""
        if(validator.isStrongPassword(password, {minLength: 8, minLowercase: 0, minUppercase: 1, minNumbers: 1, minSymbols: 1})) {
            setColorPassword("bg-[var(--green)]");
            console.log("minLength: 8, minUppercase: 1, minNumbers: 1, minSymbols: 1");
        }
        else if(validator.isStrongPassword(password, {minLength: 8, minLowercase: 0, minUppercase: 1, minNumbers: 0, minSymbols: 0})) {
            setColorPassword("bg-[var(--intermediate6)]");
            console.log("minLength: 8, minUppercase: 1, minNumbers: 0, minSymbols: 1");
        }
        else if(validator.isStrongPassword(password, {minLength: 8, minLowercase: 0, minUppercase: 0, minNumbers: 1, minSymbols: 0})) {
            setColorPassword("bg-[var(--intermediate5)]");
            console.log("minLength: 8, minUppercase: 0, minNumbers: 1, minSymbols: 1");
        }
        else if(validator.isStrongPassword(password, {minLength: 8, minLowercase: 0, minUppercase: 0, minNumbers: 0, minSymbols: 1})) {
            setColorPassword("bg-[var(--intermediate4)]");
            console.log("minLength: 8, minUppercase: 1, minNumbers: 1, minSymbols: 0");
        }
        else if(validator.isStrongPassword(password, {minLength: 8, minLowercase: 0, minUppercase: 0, minNumbers: 0, minSymbols: 0})) {
            setColorPassword("bg-[var(--yellow)]");
            console.log("minLength: 8, minUppercase: 0, minNumbers: 0, minSymbols: 0");
        }
        else if(validator.isStrongPassword(password, {minLength: 0, minLowercase: 0, minUppercase: 0, minNumbers: 0, minSymbols: 1})) {
            setColorPassword("bg-[var(--intermediate3)]");
            console.log("minLength: 0, minUppercase: 0, minNumbers: 0, minSymbols: 1");
        }
        else if(validator.isStrongPassword(password, {minLength: 0, minLowercase: 0, minUppercase: 0, minNumbers: 1, minSymbols: 0})) {
            setColorPassword("bg-[var(--intermediate2)]");
            console.log("minLength: 0, minUppercase: 0, minNumbers: 1, minSymbols: 0");
        }
        else if(validator.isStrongPassword(password, {minLength: 0, minLowercase: 0, minUppercase: 1, minNumbers: 0, minSymbols: 0})) {
            setColorPassword("bg-[var(--intermediate1)]");
            console.log("minLength: 0, minUppercase: 1, minNumbers: 0, minSymbols: 0");
        }
        else {
            setColorPassword("bg-[var(--red)]");
            console.log("nothing is good in password");
        }
        console.log(data.password)
    }, [setColorPassword, data, responce]);

    const handleSubmit = () => {

        validateData(data)

        console.log(data);

        CreateAccount(data);

        clearData();
    }

    return (
        <div className="flex flex-col gap-[20px]">
            <Input 
                name="name" 
                placeholder="User name" 
                value={data.name || ""} 
                handleChange={handleChange} 
            />
            <Input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={data.email || ""} 
                handleChange={handleChange} 
            />
            <Input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={data.password || ""} 
                handleChange={handleChange} 
                colorPassword={colorPassword}
                create_account
            />
            
            <div>
                <div className="w-full">
                    <p className="text-[16px] font-[khula-regular] text-[var(--red)] cursor-default">{errorMessage}</p> 
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-[4px]">
                        <p className="text-[14px] font-[khula-regular] cursor-default">
                            Already have an account?
                        </p>
                        <h3 
                            className="text-[15px] font-[khula-semi-bold] cursor-pointer"
                            onClick={() => {setButtonClicked("login"), clearData()}}
                        >
                            Log in
                        </h3>
                    </div>
                    
                    <motion.input 
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.75 }}
                        type="submit" 
                        value="Create account" 
                        onClick={() => {handleSubmit()}}
                        className="w-fit bg-[var(--black2white)] text-[18px] text-[var(--white2black)] font-[heebo-medium] rounded-[8px] px-[16px] py-[10px] cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
}

CreateAccountForm.propTypes = {
    setButtonClicked: PropTypes.func.isRequired,
    data: PropTypes.array,
    handleChange: PropTypes.func.isRequired,
    validateData: PropTypes.func.isRequired,
    clearData: PropTypes.func.isRequired,
};

export { CreateAccountForm };
