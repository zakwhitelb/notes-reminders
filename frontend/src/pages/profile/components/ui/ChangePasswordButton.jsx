// System
import ReactDOM from "react-dom";
import { useState } from "react";
import { motion } from "motion/react";

// Components
import { PopUp } from "../PopUp";

function ChangePasswordButton() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleClickChangePassword = () => {
        console.log("changePassword")
        setIsPopupVisible((prev) => !prev);
    };

    return (
        <div className="flex justify-start items-center">
            <motion.p 
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.75 }}
                className="w-fit text-[16px] text-[var(--red)] font-[khula-regular] cursor-pointer"
                onClick={() => {handleClickChangePassword()}}
            >
                Change password
            </motion.p>
            {isPopupVisible && 
                ReactDOM.createPortal(
                    <PopUp handleClickChangePassword={handleClickChangePassword} />,  // PopUp to render
                    document.getElementById("profile")  // Specify the target element
                )
            }
            {isPopupVisible && 
                ReactDOM.createPortal(
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 0.4 }}
                        className="absolute top-0 right-0 -z-1 h-full w-full bg-[var(--black2white)] opacity-40 cursor-pointer duration-[0.15s]"
                        onClick={() => {handleClickChangePassword()}}
                    ></motion.div>,  // PopUp to render
                    document.getElementById("profile_container")  // Specify the target element
                )
            }
            
        </div>
    )
}

export { ChangePasswordButton };
