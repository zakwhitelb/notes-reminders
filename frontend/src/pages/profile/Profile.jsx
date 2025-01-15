// System
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { useSelector } from 'react-redux';

// Controllers
import { UserController } from "../../shared/controllers/user/UserController";

// Components
import { Input } from "../../shared/components/ui/Input";
import { SubHeader } from "../../shared/components/ui/SubHeader";
import { ChangePasswordButton } from "./components/ChangePasswordButton";
import { Error404 } from "../error/Error404"; // Import Error404 component

// Redux
import { useDispatch } from "react-redux";
import { Logout, DeleteAccount as deleteRedux } from "../../shared/redux/slices/AuthentificationSlice";

// Icons
import { Logo } from "../../shared/assets/icons/Logo.icon";
import { DeleteNote } from "../../shared/assets/icons/DeleteNote.icon";
import { Logout as LogoutIcon } from "../../shared/assets/icons/Logout.icon";
import { SuccessfulPopUp } from "../../shared/components/ui/SuccessfulPopUp";
import { Warning as WarningIcon } from "../../shared/assets/icons/Warning.icon";

// Pictures
import { Picture } from "../../shared/components/ui/Picture";

function Profile() {
    const { response, setResponse, errorMessage, setErrorMessage, Profile, UpdateAccount, DeleteAccount } = UserController();
    const isLoggedIn = useSelector((state) => state.authentification_status.value);
    const [data, setData] = useState({ name: "", email: "", password: "" });
    const [showSuccessfulWork, setSuccessfulWork] = useState(false);
    const action = useRef({type: ""});
    const dispatch = useDispatch();
    
    // Fetch profile data on mount if not already present
    useEffect(() => {
        const handleGetProfileContent = async () => {
            if (!response) {
                try {
                    await Profile()
                    action.current = {type: "handleGetProfileContent"}
                }
                catch (err) {
                    console.error("Error while fetching notes:", err);
                }
            }
        }

        handleGetProfileContent();
    }, [Profile, response]);

    // Update local state when response changes
    useEffect(() => {
        if (response) {
            const { name = "", email = "" } = response;
            setData((prevData) => ({ ...prevData, name, email }));
        }
    }, [response]);

    const handleChange = useCallback(
        (name, value) => {
            setData((prevData) => ({ ...prevData, [name]: value }));
            if (errorMessage) setErrorMessage(""); // Reset error on change
        },
        [errorMessage, setErrorMessage]
    );

    const handleUpdateAccount = useCallback(async () => {
        try {
            setResponse("");
            await UpdateAccount(data);
            setSuccessfulWork(true);
            action.current = {type: "handleUpdateAccount"}
        } 
        catch (err) {
            console.error("Error during submission:", err);
        }
    }, [data, UpdateAccount, setResponse]);

    const handleLogout = useCallback(() => {
        localStorage.removeItem("token");
        dispatch(Logout());
        window.location.href = "/";
    }, [dispatch]);

    const handleDelete = useCallback(async () => {
        try {
            await DeleteAccount(data);
            action.current = {type: "handleDelete"}
        } 
        catch (err) {
            console.error("Error during deletion:", err);
        }
    }, [data, DeleteAccount]);

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

    // Update local state when response changes
    useEffect(() => {
        if(!response) return;

        if (action.current.type === "handleGetProfileContent") {
            const { name = "", email = "" } = response;
            setData((prevData) => ({ ...prevData, name, email }));
        }
        if (action.current.type === "handleUpdateAccount") {
            setTimeout(() => setSuccessfulWork(false), 2000);
        }
        if (action.current.type === "handleLogout") {
            const { name = "", email = "" } = response;
            setData((prevData) => ({ ...prevData, name, email }));
        }
        if (action.current.type === "handleDelete") {
            dispatch(deleteRedux());
            localStorage.removeItem("token");
            window.location.href = "/";
        }
    }, [response, dispatch]);

    // Check if user is unauthenticated or there's an error fetching profile
    if (!isLoggedIn) {
        return <Error404 />;
    }

    return (
        <div
            id="profile_container"
            className=" relative flex flex-col sm:flex-row w-full h-full px-[30px] sm:pl-[20px] sm:pr-[0px] gap-y-[16px] sm:gap-y-0 py-[20px]"
        >
            <motion.div
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                className="max-sm:max-h-[140px] sm:h-full w-full sm:max-w-[180px] md:max-w-[200px] lg:max-w-[240px]"
            >
                <Picture />
            </motion.div>
            <motion.div
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                id="profile"
                className="relative flex justify-center items-center w-full h-full"
            >
                <div className="relative flex flex-col content-center justify-items-center justify-center w-full h-full sm:px-[80px] md:px-[120px] lg:px-[160px] xl:px-[200px] gap-y-[14px] sm:gap-y-[20px]">
                    {renderSuccessfulPopUp}
                    <SubHeader />
                    <div className="grid justify-center w-full cursor-default">
                        <div className="flex justify-center w-full">
                            <Logo width={window.innerWidth < 440 ? 34 : window.innerWidth < 640 ? 44 : 50} height={window.innerWidth < 440 ? 34 : window.innerWidth < 640 ? 44 : 50} />
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-[24px] max-[440px]:text-[28px] sm:text-[34px] text-[var(--black2white)] text-center font-[merriweather-sans-bold] w-full">
                                Profile
                            </h1>
                        </div>
                    </div>
                    <Input
                        name="name"
                        placeholder="Name"
                        value={data.name}
                        handleChange={handleChange}
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        handleChange={handleChange}
                    />
                    <div className="grid gap-[14px]">
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={data.password}
                            handleChange={handleChange}
                        />
                        <ChangePasswordButton googleLogin={response ? response.googleLogin : false} />
                    </div>
                    {errorMessage && (
                        <div className="w-full mt-[-5px]">
                                <div className="flex justify-center items-center w-full gap-x-[10px]">
                                    <WarningIcon />
                                    <p
                                        id="error-message"
                                        className="flex items-center justify-center h-fit text-[16px] text-center font-[khula-regular] text-[var(--red)] cursor-default"
                                    >
                                        {errorMessage}
                                    </p>
                                </div>
                            
                        </div>
                    )}
                    <div className="flex justify-end items-center gap-x-[14px]">
                        <motion.div
                            whileHover={{ scale: 1.07 }}
                            whileTap={{ scale: 0.75 }}
                            className="bg-[var(--red)] rounded-[8px] px-[14px] py-[10px] cursor-pointer"
                            onClick={handleDelete}
                        >
                            <DeleteNote width={18} height={20} />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.07 }}
                            whileTap={{ scale: 0.75 }}
                            className="bg-[var(--yellow)] rounded-[8px] px-[14px] py-[10px] cursor-pointer"
                            onClick={handleLogout}
                        >
                            <LogoutIcon />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.07 }}
                            whileTap={{ scale: 0.75 }}
                            className="flex items-center justify-center h-[40px] bg-[var(--black2white)] rounded-[8px] px-[14px] py-[10px] cursor-pointer"
                            onClick={handleUpdateAccount}
                        >
                            <p className="w-fit text-[var(--white2black)] font-[heebo-medium]">
                                Modifie
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export { Profile };
