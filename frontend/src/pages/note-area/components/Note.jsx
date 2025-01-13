// System 
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // Corrected import from `motion/react` to `framer-motion`

import { NoteController } from "../../../shared/controllers/note/NoteController";

// Functions
import { truncateText, validateNoteData, overdueDate, isNowDate } from "../../../shared/func/NoteArea.func";

// Components
import { PopUp } from "./pop-up/PopUp";
import { NoteRoundedButton } from "./ui/NoteRoundedButton";
import { IconNote } from "./ui/IconNote";

const STATUS_COLORS = {
    incomplete: { noteColor: "var(--skyBlue)", status: "var(--blue)", bgColor: "var(--blue)", iconColor: "var(--white)", textColor: "var(--white)" },
    completed: { noteColor: "var(--skyYellow)", status: "var(--yellow)", bgColor: "var(--yellow)", iconColor: "var(--white)", textColor: "var(--black)" },
    overdue: { noteColor: "var(--skyRed)", status: "var(--red)", bgColor: "var(--white)", iconColor: "var(--blue)", textColor: "var(--white)" },
};

function Note({ note={ title: "", description: "", status: "incomplete", day: "", hour: "00", min: "00" }, setResponseNotes }) {
    const { response, errorMessage, setErrorMessage, UpdateOneNote, UpdateStatusOneNote, DeleteOneNote } = NoteController();
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const action = useRef({type: ""});
    const [statusColor, setStatusColor] = useState({});
    const [isChangingStatus, setIsChangingStatus] = useState(false);
    const [shouldRender, setShouldRender] = useState(false); // State to trigger re-render
    const [data, setData] = useState({
        id: note._id || "",
        title: note.title || "",
        description: note.description || "",
        day: note.day || "",
        hour: note.hour === 0 ? "00" : note.hour,
        min: note.min === 0 ? "00" : note.min,
        status: note.status || "",
    });

    // Update the status color based on the note status
    useEffect(() => {
        setStatusColor(STATUS_COLORS[note.status] || {});
    }, [note.status]);

    const handleChange = useCallback((event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    }, []);

    const handleTogglePopUp = useCallback(() => {
        setIsPopupVisible((prev) => !prev);
    }, []);

    const handleDeleteNote = useCallback(async () => {
        try {
            await DeleteOneNote(data.id);
            action.current = {type: "handleDeleteNote", noteId: data.id};
        }
        catch (err) {
            console.error("Error during submission:", err);
        }
    }, [DeleteOneNote, data.id]);

    const handleEditNote = useCallback(async () => {
        if (!validateNoteData(setErrorMessage, data)) return;

        try {
            await UpdateOneNote(data);
            
            action.current = {type: "handleEditNote"};
        } 
        catch (err) {
            console.error("Error during submission:", err);
        }
    }, [setErrorMessage, data, UpdateOneNote]);

    const handleChangeStatusNote = useCallback(async ({ overdue }) => {
        let newStatus;

        if (overdue) {
            newStatus = "overdue";
        } 
        else if (overdueDate(data.day, data.hour, data.min)) {
            newStatus = data.status === "completed" ? "overdue" : "completed";
        } 
        else {
            newStatus = data.status === "incomplete" || data.status === "overdue" ? "completed" : "incomplete";
        }

        setData((prevData) => ({ ...prevData, status: newStatus }));

        try {
            await UpdateStatusOneNote(data.id, newStatus);
            
            setIsChangingStatus({ status: newStatus });
            action.current = {type: "handleChangeStatusNote", newStatus: newStatus};
        } 
        catch (err) {
            console.error("Error during submission:", err);
        }
    }, [data, UpdateStatusOneNote]);

    useEffect(() => {
        if (action.current.type === "handleEditNote" && response) {
            setResponseNotes("");
        }
        if (action.current.type === "handleChangeStatusNote" && response) {
            setTimeout(() => {
                setResponseNotes("");
                setIsChangingStatus(false);
            }, 1000);
            
        }
        if (action.current.type === "handleDeleteNote" && response) {
            setResponseNotes("");
        }
    }, [data, action, response, setResponseNotes]);

    // Re-render note when the current date matches the note date
    useEffect(() => {
        const interval = setInterval(() => {
            if (isNowDate(data.day, data.hour, data.min) && data.status === "incomplete" && !shouldRender) {
                setShouldRender((prev) => !prev);
                handleChangeStatusNote({ overdue: true });
            }
            if (overdueDate(data.day, data.hour, data.min) && data.status === "incomplete" && !shouldRender) {
                setShouldRender((prev) => !prev);
                handleChangeStatusNote({ overdue: true });
            }
        }, 1000); // Check every second

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [data, shouldRender, handleChangeStatusNote]);

    // Helper to format YYYY-MM-DD to DD-MM-YYYY
    const formatISOToDate = (isoDate) => {
        const [day, month, year] = isoDate.split("-");
        return `${day}-${month}-${year}`; // Convert to DD-MM-YYYY
    };

    return (
        <>
            <div
                className="relative flex flex-col justify-between w-[248px] h-[240px] p-[16px] gap-[14px] rounded-[10px] overflow-hidden cursor-default"
                style={{ backgroundColor: statusColor.noteColor }}
            >
                {isChangingStatus && (
                    <motion.div
                        initial={{ top: "-100%", left: "-100%" }} // Start off-screen (top)
                        animate={{ top: 0, left: 0 }} // Animate to fully shown position
                        transition={{ duration: 0.5, type: "spring" }} // Smooth spring animation
                        className="absolute top-0 left-0 z-20 flex justify-center items-center w-full h-full rounded-[10px] rounded-br-[60px]"
                        style={{ backgroundColor: STATUS_COLORS[data.status].status }}
                    >
                        <IconNote type={isChangingStatus.status} soBig />
                    </motion.div>
                )}
                <div
                    className="absolute top-0 left-0 w-[42px] h-[42px] pt-[10px] pl-[10px] rounded-tl-[10px] rounded-br-[30px]"
                    style={{ backgroundColor: statusColor.status }}
                >
                    <IconNote type={note.status} />
                </div>

                {/* Note Content */}
                <div className="flex flex-col gap-[14px]">
                    <div className="flex justify-end items-center w-full gap-[10px]">
                        <NoteRoundedButton onClick={handleDeleteNote} />
                        <NoteRoundedButton
                            type="edit"
                            onClick={handleTogglePopUp}
                            bgColor="var(--black2white)"
                            iconColor="var(--white2black)"
                        />
                        <NoteRoundedButton
                            type={note.status}
                            onClick={handleChangeStatusNote}
                            bgColor={statusColor.bgColor}
                            iconColor={statusColor.iconColor}
                        />
                    </div>
                    <h1 className="text-center text-[20px] text-[var(--black2white)] font-[merriweather-sans-extra-bold] px-[4px]">
                        {truncateText(note.title, 16)}
                    </h1>
                </div>

                {/* Note Description */}
                <p className="text-center text-[11px] text-[var(--black2white)] font-[khula-regular] px-[6px]">
                    {truncateText(note.description, 230)}
                </p>

                {/* Footer with Date and Time */}
                <div
                    className="flex justify-between items-center w-full h-[30px] rounded-[5px] px-[14px]"
                    style={{ backgroundColor: statusColor.status }}
                >
                    <IconNote type={note.status} small />
                    <div className="w-full">
                        <p
                            className="text-center text-[14px] font-[heebo-regular]"
                            style={{ color: statusColor.textColor }}
                        >
                            {formatISOToDate(note.day)} | {note.hour >= 10 ? note.hour : "0" + note.hour}:{note.min >= 10 ? note.min : "0" + note.min}
                        </p>
                    </div>
                </div>
            </div>

            {/* Conditionally Render PopUp */}
            {isPopupVisible &&
                ReactDOM.createPortal(
                    <PopUp
                        data={data}
                        type="edit"
                        handleChange={handleChange}
                        handleToggelPopUp={handleTogglePopUp}
                        handleDeleteNote={handleDeleteNote}
                        handleSubmit={handleEditNote}
                        errorMessage={errorMessage}
                    />,
                    document.getElementById("note_area")
                )}
        </>
    );
}

Note.propTypes = {
    note: PropTypes.shape({
        _id: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        status: PropTypes.oneOf(["incomplete", "completed", "overdue"]).isRequired,
        day: PropTypes.string.isRequired,
        hour: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired]),
        min: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired]),
    }).isRequired,
    setResponseNotes: PropTypes.func.isRequired,
};

export { Note };
