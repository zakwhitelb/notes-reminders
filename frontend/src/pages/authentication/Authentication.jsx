// System
import { useState, useCallback } from "react";
import { motion } from "framer-motion";

// Controllers
import { UserController } from "../../shared/controllers/user/UserController";

// Components
import { Picture } from "../../shared/components/ui/Picture";
import { GoogleAthentification } from "./components/GoogleAthentification";
import { SuccessfulPopUp } from "../../shared/components/ui/SuccessfulPopUp";
import { CreateAccountForm } from "./components/CreateAccountForm";
import { LoginForm } from "./components/LoginForm";
import { SubHeader } from "../../shared/components/ui/SubHeader";

// Icons
import { Logo } from "../../shared/assets/icons/Logo.icon";

function Authentication() {
    const { setErrorMessage } = UserController();
    const [buttonClicked, setButtonClicked] = useState("create_account");
    const [showSuccessfulAuthentication, setSuccessfulAuthentication] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = useCallback((name, value) => {
        setErrorMessage("");
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }, [setErrorMessage]);

    const clearData = useCallback(() => {
        setData({});
    }, []);

    return (
        <div 
            className={`grid items-center w-screen h-full py-[20px] max-sm:px-[30px] max-sm:grid-rows-[auto_1fr] ${
                buttonClicked === "create_account" ? "sm:grid-cols-[1fr_auto] sm:pr-[20px]" : "sm:grid-cols-[auto_1fr] sm:pl-[20px]"
            }`}
        >
            <motion.div
                layout
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
                className={`relative h-[140px] sm:h-full w-full sm:max-w-[220px] md:max-w-[280px] lg:max-w-[320px] z-10 ${
                    buttonClicked === "create_account" ? "sm:order-2" : "sm:order-1"
                }`}
                style={{
                    zIndex: 10,
                }}
            >
                <Picture />
            </motion.div>

            <motion.div
                layout
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
                className={`relative flex flex-col items-center justify-center h-full flex-[2] sm:min-w-[480px] text-center text-[var(--black2white)] sm:px-[40px] md:px-[60px] lg:px-[80px] xl:px-[100px] ${
                    buttonClicked === "create_account" ? "order-1" : "order-2"
                }`}
            >
                <SubHeader location={"/"} />
                
                <div className="flex flex-col items-center justify-center w-full h-full gap-[10px] sm:gap-y-[20px] md:gap-y-[30px]">
                    {showSuccessfulAuthentication &&
                        <motion.div 
                            layout
                            initial={{ x: buttonClicked === "create_account" ?  -1000 : 1000  }}
                            animate={{ x: 0 }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
                            className="absolute z-10 flex justify-center items-center w-[calc(100%-200px)] h-full rounded-[30px]">
                            <SuccessfulPopUp />
                        </motion.div>
                    }
                    <div className="grid justify-center w-full cursor-default">
                        <div className="flex justify-center w-full">
                            <Logo width={window.innerWidth < 640 ? 30 : 38} height={window.innerWidth < 640 ? 30 : 38} />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-[24px] sm:text-[34px] font-[merriweather-sans-bold] w-full"> 
                                
                                {buttonClicked === "create_account" ? 
                                    "Get started" 
                                : 
                                    "Welcome back"
                                }
                            </h1>
                            <p className="text-[10px] sm:text-[12px] font-[khula-regular] w-full">
                                {buttonClicked === "create_account" ? 
                                    "Welcome to Note Reminder - let’s create your account" 
                                : 
                                    "Please enter your details"
                                }
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-[5px] sm:gap-[20px] w-full">
                        <GoogleAthentification clearData={clearData} setSuccessfulAuthentication={setSuccessfulAuthentication} />
                        <p className="w-full h-fit text-[10px] sm:text-[12px] text-center cursor-default">
                            or
                        </p>
                        <div className="relative z-8">
                            {buttonClicked === "create_account" ? (
                                <CreateAccountForm setButtonClicked={setButtonClicked} data={data} handleChange={handleChange} clearData={clearData} setSuccessfulAuthentication={setSuccessfulAuthentication} />
                            ) : (
                                <LoginForm setButtonClicked={setButtonClicked} data={data} handleChange={handleChange} clearData={clearData} setSuccessfulAuthentication={setSuccessfulAuthentication} />
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export { Authentication };
