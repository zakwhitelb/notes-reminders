// System
import PropTypes from "prop-types";
import { motion } from "motion/react";
import { useDispatch } from "react-redux";

// Redux
import { ClearSearch } from "../../../shared/redux/slices/SearchNoteSlice";

// Icons
import { X as XIcon } from "../../assets/icons/X.icon"

function RemoveSearchContent({ width=14, height=14 }) {
    const dispatch = useDispatch()

    return (
        <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.85 }}
            onClick={() => {dispatch(ClearSearch())}}
            className="cursor-pointer"
        >
            <XIcon width={width} height={height} />
        </motion.div>
    )
}


// Define prop types
RemoveSearchContent.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export { RemoveSearchContent };