// System
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Icons
import { RollBack as RollBackIcon } from "../../assets/icons/RollBack.icon";

function RollBack({ width=30, height=24 }) {
    const navigate = useNavigate();

    const handleRollBack = () => {
        navigate(-1); // Navigates back to the last location in history
    };

    return (
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.75 }}
            className="cursor-pointer"
            onClick={handleRollBack} // Attach the rollback logic
        >
            <RollBackIcon width={width} height={height} />
        </motion.div>
    );
}

// Define prop types
RollBack.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
};

export { RollBack };
