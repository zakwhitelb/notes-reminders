// System
import { motion } from "motion/react"
import { Link } from "react-router-dom";

// Icons
import { Logo as LogoIcon } from "../../assets/icons/Logo.icon";

function Logo() {
    return (
        <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.75 }}
        >
            <Link 
                to="/"
                className='w-fit cursor-pointer'
            >
                <LogoIcon />
            </Link>
        </motion.div>
    )
}

export { Logo };
