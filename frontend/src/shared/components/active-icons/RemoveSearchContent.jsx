// System
import { motion } from "motion/react";
import { useDispatch } from "react-redux";

// Redux
import { ClearSearch } from "../../../shared/redux/slices/SearchNoteSlice";

// Icons
import { X as XIcon } from "../../assets/icons/X.icon"

function RemoveSearchContent() {
    const dispatch = useDispatch()

    return (
        <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.85 }}
            onClick={() => {dispatch(ClearSearch())}}
            className="cursor-pointer"
        >
            <XIcon width={14} height={14} />
        </motion.div>
    )
}

export { RemoveSearchContent };