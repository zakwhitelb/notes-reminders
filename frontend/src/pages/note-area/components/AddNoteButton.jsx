// System
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

// Controllers
import { NoteController } from "../../../shared/controllers/note/NoteController";

// Functions
import { validateNoteData } from "../../../shared/func/NoteArea.func";

// Components
import { PopUp } from "./pop-up/PopUp";

// Icons
import { AddNote as AddNoteIcon } from "../../../shared/assets/icons/AddNote.icon";

function AddNoteButton({ setResponseNotes }) {
    const { response, errorMessage, setErrorMessage, AddOneNote } = NoteController();
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [data, setData] = useState({
        title: "",
        description: "",
        day: "",
        hour: "00",
        min: "00",
        status: "",
    });

    const handleChange = useCallback(
        (event) => {
            setErrorMessage(""); // Clear previous error messages
            const { name, value } = event.target;
            setData((prev) => ({ ...prev, [name]: value }));
        },
        [setErrorMessage]
    );

    const handleTogglePopUp = useCallback(() => {
        setErrorMessage("");
        setData({
            title: "",
            description: "",
            day: "",
            hour: "00",
            min: "00",
            status: "",
        });
        setIsPopupVisible((prev) => !prev); // Toggle popup visibility
    }, [setErrorMessage]);

    const handleAddNote = useCallback(async () => {
        // Validate data
        if (!validateNoteData(setErrorMessage, data)) return;

        try {
            await AddOneNote(data); // Add the note
        } catch (err) {
            console.error("Error during adding note (AddNoteButton.jsx):", err);
            setErrorMessage(err.response?.data?.message || "An unexpected error occurred.");
        }
    }, [AddOneNote, data, setErrorMessage]);

    useEffect(() => {
        if (response) {
            setResponseNotes("");

            handleTogglePopUp(); // Close the popup
        }
    }, [response, setResponseNotes, handleTogglePopUp]);

    return (
        <>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.85 }}
                onClick={handleTogglePopUp} // Add click handler
                className="flex items-center justify-center bg-[var(--skyWhite2skyBlack)] w-[248px] h-[240px] rounded-[10px] cursor-pointer"
            >
                <AddNoteIcon />
            </motion.div>

            {/* Conditionally render PopUp into #root using createPortal */}
            {isPopupVisible &&
                ReactDOM.createPortal(
                    <PopUp
                        data={data}
                        handleTogglePopUp={handleTogglePopUp}
                        handleChange={handleChange}
                        handleSubmit={handleAddNote}
                        errorMessage={errorMessage}
                    />,
                    document.getElementById("note_area")
                )}
        </>
    );
}

// Define prop types
AddNoteButton.propTypes = {
    setResponseNotes: PropTypes.func.isRequired,
};

export { AddNoteButton };
