
// System
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { useState, useCallback } from "react";
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
    const { errorMessage, setErrorMessage, AddOneNote } = NoteController();
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [ data, setData ] = useState({
        title: "",
        description: "",
        day: "",
        hour: "00",
        min: "00",
        status: "",
    });

    const handleChange = useCallback((event) => {
        setErrorMessage("");
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }, [setErrorMessage, data]);

    const handleToggelPopUp = useCallback(() => {
        setErrorMessage("");
        setData({
            title: "",
            description: "",
            day: "",
            hour: "00",
            min: "00",
            status: "",
        });
        setIsPopupVisible((prev) => !prev);
    }, [setErrorMessage, setData]);

    const handleAddNote = useCallback(async () => {
        console.log(data)
        // Validate data
        if (!validateNoteData(setErrorMessage, data)) return;
        
        
        try{
            await AddOneNote(data);
            setResponseNotes({ notes: [] })
            setData({});
            setErrorMessage("");
            setIsPopupVisible(false);
        }
        catch(err){
            console.error("Error during adding note (AddNoteButton.jsx):", err);
            setErrorMessage(err.message);
        }
    }, [AddOneNote, data, setResponseNotes, setErrorMessage]);

    return (
        <>
            <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.85 }}
                onClick={handleToggelPopUp}  // Add click handler
                className="flex items-center justify-center bg-[var(--skyWhite2skyBlack)] w-[248px] h-[240px] rounded-[10px] cursor-pointer"
            >
                <AddNoteIcon />
            </motion.div>

            {/* Conditionally render PopUp into #root using createPortal */}
            {isPopupVisible && 
                ReactDOM.createPortal(
                    <PopUp
                        data={data}
                        handleToggelPopUp={handleToggelPopUp} 
                        handleChange={handleChange}
                        handleSubmit={handleAddNote} 
                        errorMessage={errorMessage} />,  // PopUp to render
                    document.getElementById("note_area")  // Specify the target element
                )
            }
        </>
    );
}

// Define prop types
AddNoteButton.propTypes = {
    notes: PropTypes.array.isRequired,
    setResponseNotes: PropTypes.func.isRequired,
};

export { AddNoteButton };