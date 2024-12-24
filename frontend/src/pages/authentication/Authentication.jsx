// System
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import validator from "validator";

// Controller
import { UserController } from "../../shared/controllers/user/UserController";

// Components
import { Picture } from "../../shared/components/ui/Picture";
import { CreateAccountForm } from "./components/CreateAccountForm";
import { LoginForm } from "./components/LoginForm";
import { SubHeader } from "../../shared/components/ui/SubHeader";

// Icons
import { Logo } from "../../shared/assets/icons/Logo.icon";

function Authentication() {
    const { responce} = UserController();
    console.log(responce)
    const [buttonClicked, setButtonClicked] = useState("create_account");
    const [data, setData] = useState({});

    const handleChange = useCallback((name, value) => {
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }, []);

    const validateData = useCallback((data) => {
        if (validator.isEmail(data.email)) {
            return true;
        }
        return false;
    }, []);

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
                style={{
                    zIndex: 1,
                }}
            >   
                <SubHeader location={"/"} />
                <div className="flex flex-col items-center justify-center w-full h-full gap-y-[30px]">
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
                        <motion.div
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.90 }}
                            className="w-full bg-[var(--black2white)] rounded-[10px] py-[10px] text-center cursor-pointer"
                        >
                            <p className="w-full text-[18px] text-[var(--white2black)] font-[heebo-regular] text-center">
                                Log in with Google
                            </p>
                        </motion.div>
                        <p className="w-full text-center cursor-default">
                            or
                        </p>

                        <div>
                            {buttonClicked === "create_account" ? (
                                <CreateAccountForm setButtonClicked={setButtonClicked} data={data} handleChange={handleChange} validateData={validateData} clearData={clearData} />
                            ) : (
                                <LoginForm setButtonClicked={setButtonClicked} data={data} handleChange={handleChange} validateData={validateData} clearData={clearData} />
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export { Authentication };
