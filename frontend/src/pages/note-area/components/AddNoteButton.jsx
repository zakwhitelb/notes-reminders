
// System
import ReactDOM from "react-dom";
import { useState, useCallback } from "react";
import { motion } from "framer-motion"; 

// Icons
import { AddNote as AddNoteIcon } from "../../../shared/assets/icons/AddNote.icon";

// Components
import { PopUp } from "./pop-up/PopUp"; 

function AddNoteButton() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);  // Track popup visibility

    const handleClickAddNote = useCallback(() => {
        setIsPopupVisible((prev) => !prev);
    }, []);

    return (
        <>
            <motion.div 
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.75 }}
                onClick={handleClickAddNote}  // Add click handler
                className="flex items-center justify-center bg-[var(--skyWhite2skyBlack)] w-[248px] h-[240px] rounded-[10px] cursor-pointer"
            >
                <AddNoteIcon />
            </motion.div>

            {/* Conditionally render PopUp into #root using createPortal */}
            {isPopupVisible && 
                ReactDOM.createPortal(
                    <PopUp handleClickAddNote={handleClickAddNote} />,  // PopUp to render
                    document.getElementById("note_area")  // Specify the target element
                )
            }
        </>
    );
}

export { AddNoteButton };
