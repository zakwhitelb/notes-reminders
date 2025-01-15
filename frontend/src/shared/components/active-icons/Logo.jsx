// System
import PropTypes from "prop-types";
import { motion } from "motion/react"
import { Link } from "react-router-dom";

// Icons
import { Logo as LogoIcon } from "../../assets/icons/Logo.icon";

function Logo({ width=40, height=40 }) {
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
                <LogoIcon width={width} height={height} />
            </Link>
        </motion.div>
    )
}

// Define prop types
Logo.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export { Logo };
