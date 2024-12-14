// System
import PropTypes from "prop-types";
import { motion } from "motion/react";

// Icons
import { DeleteNote as DeleteNoteIcon } from "../../../../../shared/assets/icons/DeleteNote.icon";

function PopUpContent({ type }) {
    return (
        <div className="grid auto-rows-[auto_auto_1fr_auto] h-full gap-[30px] text-[18px] text-[var(--black2white)] font-[merriweather-sans-regular]">
            <div>
                <input 
                    placeholder="Title"
                    onChange={() => {}}
                    className="h-[56px] w-full bg-transparent outline-none text-[54px] text-[var(--black2white)] px-[10px] placeholder:text-[var(--placeholder)]"
                />
            </div>
            <div className="flex justify-start w-fit gap-x-[20px]">
                <div className="flex items-center gap-x-[14px]">
                    <label 
                        htmlFor="date_note"
                    >Dead lines :</label>
                    <input 
                        type="date" 
                        name="date_note"
                        className="h-[40px] w-[200px] bg-[var(--skyWhite2skyBlack)] text-center rounded-[8px] px-[14px] outline-none placeholder:text-[var(--placeholder)] cursor-pointer"
                    />
                </div>

                <div className="flex items-center w-fit gap-x-[14px]">
                    <label 
                        htmlFor="hour_note"
                    >Hour :</label>
                    <input 
                        type="number" 
                        name="hour_note" 
                        min={0}
                        max={23}
                        placeholder="00"
                        className="h-[40px] w-[80px] bg-[var(--skyWhite2skyBlack)] text-center rounded-[8px] px-[14px] outline-none placeholder:text-[var(--placeholder)] cursor-pointer"
                    />
                </div>

                <div className="flex items-center w-fit gap-x-[14px]">
                    <label 
                        htmlFor="min_note"
                    >Min :</label>
                    <input 
                        type="number" 
                        name="min_note" 
                        min={0}
                        max={59}
                        placeholder="00"
                        className="h-[40px] w-[80px] bg-[var(--skyWhite2skyBlack)] text-center rounded-[8px] px-[14px] outline-none placeholder:text-[var(--placeholder)] cursor-pointer"
                    />
                </div>
            </div>

            <div className="h-full w-full">
                <textarea 
                    name="descrption"
                    placeholder="Descrption"
                    className="min-h-full h-full max-h-full w-full bg-[var(--skyWhite2skyBlack)] text-start rounded-[10px] px-[20px] py-[14px] font-[khula-regular] resize-none outline-none placeholder:text-[var(--placeholder)] cursor-text"
                ></textarea>
            </div>
            <div className="flex justify-end items-center gap-[14px]">
                {type === "edit" &&
                    <motion.div
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.75 }}
                        className="cursor-pointer"
                    >
                        <button 
                            onClick={() => {}}
                            className="flex justify-center items-center h-[34px] w-[34px] bg-[var(--red)] rounded-full cursor-pointer"
                        >
                            <DeleteNoteIcon />
                        </button>
                    </motion.div>
                }
                <motion.div
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.75 }}
                    className="w-fit h-fit"
                >
                    <input 
                        type="submit" 
                        value={type === "add_note" ? "Add" : "Edit" } 
                        className="h-[40px] bg-[var(--black2white)] rounded-[8px] text-[var(--white2black)] px-[14px] cursor-pointer"
                    />
                </motion.div>
            </div>
        </div>
    )
}

PopUpContent.propTypes = {
    type: PropTypes.string,
};

PopUpContent.defaultProps = {
    type: "add_note",
};

export { PopUpContent };