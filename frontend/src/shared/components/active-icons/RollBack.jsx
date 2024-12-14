// System
import PropTypes from "prop-types"
import { motion } from "motion/react"
import { Link } from "react-router-dom"

// Icons
import { RollBack as RollBackIcon } from "../../assets/icons/RollBack.icon"

function RollBack({ location }) {
    return (
        <motion.div
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.75 }}
            className="cursor-pointer"
        >
            <Link
                to={location}
                className='w-fit cursor-pointer'
            >
                <RollBackIcon />
            </Link>
        </motion.div>
    )
}

RollBack.propTypes = {
    location: PropTypes.object.isRequired,
};

export { RollBack };
