// System
import PropTypes from "prop-types";
import { motion } from "motion/react";

// Icons
import { DeleteNote } from "../../../../shared/assets/icons/DeleteNote.icon";
import { EditNote } from "../../../../shared/assets/icons/EditNote.icon";
import { Done as DoneIcon } from "../../../../shared/assets/icons/Done.icon";
import { NoteDone } from "../../../../shared/assets/icons/NoteDone.icon";

function NoteRoundedButton({ type="delete", bgColor="var(--red)", iconColor="var(--white)", onClick=() => console.log("Button clicked") }) {
    return (
        <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.85 }}
            onClick={onClick}
            style={{ backgroundColor: bgColor }}
            className="flex justify-center items-center w-[24px] h-[24px] rounded-full cursor-pointer"
        >
            {type === "delete" && <DeleteNote width={12} height={14} color={iconColor} />}
            {type === "edit" && <EditNote color={iconColor} />}
            {type === "completed" && <DoneIcon color={iconColor} />}
            {(type === "incomplete" || type === "overdue") && <NoteDone color={iconColor} />}
        </motion.div>
    );
}

// Prop types validation
NoteRoundedButton.propTypes = {
    type: PropTypes.oneOf(["delete", "edit", "incomplete", "completed", "overdue"]),
    bgColor: PropTypes.string,
    iconColor: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

export { NoteRoundedButton };
