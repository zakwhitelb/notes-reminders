// System
import { useState, useCallback } from "react";
import { motion } from "motion/react";

// Components
import { Picture } from "../../shared/components/ui/Picture";
import { Input } from "../../shared/components/ui/Input";
import { SubHeader } from "../../shared/components/ui/SubHeader";

// Icons
import { Logo } from "../../shared/assets/icons/Logo.icon";
import { DeleteNote } from "../../shared/assets/icons/DeleteNote.icon";
import { Logout as LogoutIcon } from "../../shared/assets/icons/Logout.icon";

function Profile() {
    const [data, setData] = useState({
        user_name: "",
        email: "",
        password: "",
    });

    const handleChange = useCallback((name, value) => {
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }, []);

    const handleDelete = () => {
        // Delete user from database
        console.log("Deleting user", data.email);
    };

    const handleLogout = () => {
        // Logout user
        console.log("Logging out", data.email);
    };

    const handleSubmit = () => {
        // Update user data in database
        console.log("Updating user", data.email);
    }
    
    return (
        <div className="grid grid-flow-col auto-cols-[auto_1fr] w-full h-full pl-[20px] py-[20px]">
            <motion.div 
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                className="h-full w-fit max-w-[300px] z-10"
            >
                <Picture />
            </motion.div>
            <motion.div 
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                className="relative flex flex-col content-center justify-center w-full h-full px-[200px] gap-y-[20px]"
            >
                <SubHeader location={"note-area"} />
                <div className="grid justify-center w-full cursor-default">
                    <div className="flex justify-center w-full">
                        <Logo width={50} height={50} />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-[34px] text-center font-[merriweather-sans-bold] w-full"> 
                            Get started
                        </h1>
                    </div>
                </div>
                <Input
                    name="user_name" 
                    placeholder="User name" 
                    value={data.user_name || ""} 
                    handleChange={handleChange} 
                />
                <Input
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={data.email || ""} 
                    handleChange={handleChange} 
                />
                <div className="grid gap-[14px]">
                    <Input
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={data.password || ""} 
                        handleChange={handleChange}
                    />
                    <div className="flex items-center">
                        <p 
                            className="w-fit text-[14px] text-[var(--red)] font-[khula-regular] cursor-pointer"
                            onClick={() => {}}
                        >
                            Change password
                        </p>
                    </div>
                </div>
                <div className="flex justify-end items-center gap-x-[14px]">
                    <motion.div 
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.75 }}
                        className="bg-[var(--red)] rounded-[8px] px-[14px] py-[10px]"
                        onClick={() => {handleDelete()}}
                    >
                        <DeleteNote width={18} height={20} />
                    </motion.div>
                    <motion.div 
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.75 }}
                        className="bg-[var(--yellow)] rounded-[8px] px-[14px] py-[10px]"
                        onClick={() => {handleLogout()}}
                    >
                        <LogoutIcon />
                    </motion.div>
                    <motion.div 
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.75 }}
                        className="flex items-center justify-center h-[40px] bg-[var(--black2white)] rounded-[8px] px-[14px] py-[10px]"
                        onClick={() => {handleSubmit()}}
                    >
                        <p className="w-fit text-[var(--white2black)] font-[heebo-medium]">Modifie</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export { Profile };