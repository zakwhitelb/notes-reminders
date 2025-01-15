// System
import PropTypes from "prop-types";
import { motion } from "motion/react"
import { Link } from "react-router-dom";

// Icons
import { Profile as ProfileIcon } from "../../assets/icons/Profile.icon"

function Profile({ width=30, height=30 }) {
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
                <ProfileIcon width={width} height={height} />
            </Link>
        </motion.div>
    )
}

// Define prop types
Profile.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
};

export { Profile };
