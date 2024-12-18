// System
import { motion } from "motion/react";

// Components
import { AddNoteButton } from "./AddNoteButton"

function Notes() {
    return (
        <motion.div 
            initial={{ scale: 0, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }}
            className="grid grid-cols-[auto_auto_auto_auto] auto-rows-min justify-between pb-[20px] gap-y-[30px] overflow-y-scroll no-scrollbar"
        >
            <AddNoteButton />
        </motion.div>
    )
}

export { Notes };
