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
            className={`grid items-center w-screen h-full py-[20px] ${
                buttonClicked === "create_account" ? "grid-cols-[1fr_auto] pr-[20px]" : "grid-cols-[auto_1fr] pl-[20px]"
            }`}
        >
            <motion.div
                layout
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
                className={`h-full w-fit max-w-[500px] z-10 ${
                    buttonClicked === "create_account" ? "order-2" : "order-1"
                }`}
                style={{
                    zIndex: 10,
                    position: "relative",
                }}
            >
                <Picture />
            </motion.div>

            <motion.div
                layout
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
                className={`relative flex flex-col items-center justify-center h-full flex-[2] min-w-[480px] text-center text-[var(--black2white)] px-[100px] ${
                    buttonClicked === "create_account" ? "order-1" : "order-2"
                }`}
            >
                <SubHeader location={"/"} />
                
                <div className="flex flex-col items-center justify-center w-full h-full gap-y-[30px]">
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
                            <Logo width={50} height={50} />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-[34px] font-[merriweather-sans-bold] w-full"> 
                                Get started
                            </h1>
                            <p className="text-[12px] font-[khula-regular] w-full">
                                Welcome to Note Reminder - let’s create your account
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-[20px] w-full">
                        <GoogleAthentification clearData={clearData} setSuccessfulAuthentication={setSuccessfulAuthentication} />
                        
                        <p className="w-full text-center cursor-default">
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
