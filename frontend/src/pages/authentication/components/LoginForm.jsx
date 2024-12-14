// System
import { motion } from "framer-motion";
import PropTypes from "prop-types";

// Components
import { Input } from "../../../shared/components/ui/Input";

function LoginForm({ setButtonClicked, data, handleChange, validateData, clearData }) {

    const handleSubmit = () => {
        validateData(data);
    };

    return (
        <div className="flex flex-col gap-[20px]">
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
            />
            <div className="flex justify-end items-center">
                <p 
                    className="w-fit text-[14px] text-end text-[var(--red)] font-[khula-regular] cursor-pointer"
                    onClick={() => {}}
                >
                    Forgot password?
                </p>
            </div>
            <div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-[4px]">
                        <p className="text-[14px] font-[khula-regular] cursor-default">
                            Already have an account?
                        </p>
                        <h3 
                            className="text-[15px] font-[khula-semi-bold] cursor-pointer"
                            onClick={() => { setButtonClicked("create_account"); clearData(); }}
                        >
                            Create account
                        </h3>
                    </div>
                    
                    <motion.input 
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.75 }}
                        type="submit" 
                        value="Log in" 
                        onClick={handleSubmit}
                        className="w-fit bg-[var(--black2white)] text-[18px] text-[var(--white2black)] font-[heebo-medium] rounded-[8px] px-[16px] py-[10px] cursor-pointer"
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
    validateData: PropTypes.func.isRequired,
    clearData: PropTypes.func.isRequired,
};

export { LoginForm };
