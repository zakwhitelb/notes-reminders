// System
import PropTypes from "prop-types";
import { motion } from "motion/react";

// Icons
import { DeleteNote as DeleteNoteIcon } from "../../../../../shared/assets/icons/DeleteNote.icon";

function PopUpContent({ data, type, handleDeleteNote, handleSubmit, handleChange, errorMessage }) {
    const { title, description, day, hour, min } = data;
    // Helper to format DD-MM-YYYY to YYYY-MM-DD
    const formatDateToISO = (date) => {
        const [day, month, year] = date.split("-");
        return `${year}-${month}-${day}`; // Convert to YYYY-MM-DD
    };
    // Helper to format YYYY-MM-DD to DD-MM-YYYY
    const formatISOToDate = (isoDate) => {
        const [year, month, day] = isoDate.split("-");
        return `${day}-${month}-${year}`; // Convert to DD-MM-YYYY
    };
    // Handle change to convert date format back to DD-MM-YYYY for state
    const handleDateChange = (event) => {
        const { name, value } = event.target;
        if (name === "day") {
            console.log(value)
            const formattedDate = formatISOToDate(value); // Convert YYYY-MM-DD to DD-MM-YYYY
            handleChange({ target: { name, value: formattedDate } });
        }
        else {
            handleChange(event); // For other inputs, use the original handleChange
        }
    };

    return (
        <div className="grid auto-rows-[auto_auto_1fr_auto] h-full gap-[30px] text-[18px] text-[var(--black2white)] font-[merriweather-sans-regular]">
            {/* Title Input */}
            <div>
                <input
                    name="title"
                    placeholder="Title"
                    value={title || ""}
                    onChange={handleChange}
                    className="h-[56px] w-full bg-transparent outline-none text-[54px] text-[var(--black2white)] px-[10px] placeholder:text-[var(--placeholder)]"
                />
            </div>

            {/* Deadline Inputs */}
            <div className="flex justify-start w-fit gap-x-[20px]">
                <div className="flex items-center gap-x-[14px]">
                    <label htmlFor="date_note">Deadlines:</label>
                    <input
                        type="date"
                        name="day"
                        value={day ? formatDateToISO(day) : ""} // Convert DD-MM-YYYY to YYYY-MM-DD
                        onChange={handleDateChange} // Handle date change with conversion
                        className="h-[40px] w-[200px] bg-[var(--skyWhite2skyBlack)] text-center rounded-[8px] px-[14px] outline-none placeholder:text-[var(--placeholder)] cursor-pointer"
                    />
                </div>
                <div className="flex items-center w-fit gap-x-[14px]">
                    <label htmlFor="hour_note">Hour:</label>
                    <input
                        type="number"
                        name="hour"
                        min={0}
                        max={23}
                        placeholder="00"
                        value={hour !== "0" || hour !== 0 || hour !== "" ? hour : "00"}
                        onChange={handleChange}
                        className="h-[40px] w-[80px] bg-[var(--skyWhite2skyBlack)] text-center rounded-[8px] px-[14px] outline-none placeholder:text-[var(--placeholder)] cursor-pointer"
                    />
                </div>
                <div className="flex items-center w-fit gap-x-[14px]">
                    <label htmlFor="min_note">Min:</label>
                    <input
                        type="number"
                        name="min"
                        min={0}
                        max={59}
                        placeholder="00"
                        value={min || "0"}
                        onChange={handleChange}
                        className="h-[40px] w-[80px] bg-[var(--skyWhite2skyBlack)] text-center rounded-[8px] px-[14px] outline-none placeholder:text-[var(--placeholder)] cursor-pointer"
                    />
                </div>
            </div>

            {/* Description Input */}
            <div className="h-full w-full">
                <textarea
                    name="description"
                    placeholder="Description"
                    value={description || ""}
                    onChange={handleChange}
                    className="min-h-full h-full max-h-full w-full bg-[var(--skyWhite2skyBlack)] text-start rounded-[10px] px-[20px] py-[14px] font-[khula-regular] resize-none outline-none placeholder:text-[var(--placeholder)] cursor-text"
                ></textarea>
            </div>

            {/* Buttons and Error Message */}
            <div className="flex justify-end items-center w-full gap-[14px]">
                {errorMessage && <div className="w-full text-start text-[var(--red)] pl-[14px]">{errorMessage}</div>}
                {type === "edit" && (
                    <motion.div whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.75 }} className="cursor-pointer">
                        <button
                            onClick={handleDeleteNote}
                            className="flex justify-center items-center h-[34px] w-[34px] bg-[var(--red)] rounded-full cursor-pointer"
                        >
                            <DeleteNoteIcon />
                        </button>
                    </motion.div>
                )}
                <motion.div
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.75 }}
                    className="flex justify-between items-center w-fit h-fit"
                >
                    <input
                        type="submit"
                        value={type === "add_note" ? "Add" : "Edit"}
                        onClick={handleSubmit}
                        className="h-[40px] bg-[var(--black2white)] rounded-[8px] text-[var(--white2black)] px-[14px] cursor-pointer"
                    />
                </motion.div>
            </div>
        </div>
    );
}

PopUpContent.propTypes = {
    data: PropTypes.object.isRequired,
    type: PropTypes.string,
    handleDeleteNote: PropTypes.func,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
};

export { PopUpContent };

PopUpContent.defaultProps = {
    data: {},
    type: "add_note",
};
