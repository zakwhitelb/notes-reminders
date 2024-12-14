// System
import { motion } from "motion/react"
import { Link } from "react-router-dom";

// Icons
import { Profile as ProfileIcon } from "../../assets/icons/Profile.icon"

function Profile() {
    return (
        <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.75 }}
            className="cursor-pointer"
        >
            <Link 
                to="/profile"
                className='w-fit'
            >
                <ProfileIcon />
            </Link>
        </motion.div>
    )
}

export { Profile };
