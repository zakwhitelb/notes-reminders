// System
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { motion } from "motion/react"

// Redux Actions
import { ToggleTheme } from '../../../shared/redux/slices/ThemeSlice';

// Icons
import { Theme as ThemeIcon } from "../../assets/icons/Theme.icon";

function Theme({ width=30, height=30 }) {
    const dispatch = useDispatch();

    return (
        <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.75 }}
            className="cursor-pointer"
            onClick={() => dispatch(ToggleTheme())} // Dispatch action on click
        >
            <ThemeIcon width={width} height={height} />
        </motion.div>
    );
}

// Define prop types
Theme.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export { Theme };
