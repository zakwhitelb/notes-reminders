// System
import PropTypes from "prop-types";
import { motion } from "framer-motion";

// Icons
import { AllNotes } from "../../../shared/assets/icons/AllNotes.icon";
import { Notification } from "../../../shared/assets/icons/Notification.icon";
import { Successful } from "../../../shared/assets/icons/Successful.icon";
import { ErrorNotification } from "../../../shared/assets/icons/ErrorNotification.icon";

function ButtonMenu({ type, nbrNotes, clickedButton, handleButtonClick, clickedColor, color }) {
    return (
        <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.75 }}
            onClick={() => handleButtonClick(type)}
            className={`flex justify-between items-center w-fit h-[40px] rounded-[10px] px-[10px] gap-[24px] cursor-pointer whitespace-nowrap ${
                clickedButton === type ? clickedColor : color
            }`}
        >
            {type === "all_notes" && (
                <>
                    <div className="flex items-center justify-center w-full gap-[5px]">
                        <AllNotes
                            width={20}
                            height={20}
                            color={clickedButton === type ? "var(--white2black)" : "var(--black2white)"}
                        />
                        <p
                            className={`w-full text-[18px] font-[heebo-medium] ${
                                clickedButton === type ? "text-[var(--white2black)]" : "text-[var(--black2white)]"
                            }`}
                        >
                            All Notes
                        </p>
                    </div>
                    <p
                        className={`text-[18px] font-[heebo-medium] ${
                            clickedButton === type ? "text-[var(--white2black)]" : "text-[var(--black2white)]"
                        }`}
                    >
                        {nbrNotes}
                    </p>
                </>
            )}
            {type === "incomplete" && (
                <>
                    <div className="flex items-center justify-center gap-[5px]">
                        <Notification
                            width={20}
                            height={20}
                            color={clickedButton === type ? "var(--white)" : "var(--black2white)"}
                        />
                        <p
                            className={`text-[18px] font-[heebo-medium] ${
                                clickedButton === type ? "text-[var(--white)]" : "text-[var(--black2white)]"
                            }`}
                        >
                            Incomplete
                        </p>
                    </div>
                    <p
                        className={`text-[18px] font-[heebo-medium] ${
                            clickedButton === type ? "text-[var(--white)]" : "text-[var(--black2white)]"
                        }`}
                    >
                        {nbrNotes}
                    </p>
                </>
            )}
            {type === "completed" && (
                <>
                    <div className="flex items-center justify-center gap-[5px]">
                        <Successful
                            width={20}
                            height={20}
                            color={clickedButton === type ? "var(--black)" : "var(--black2white)"}
                        />
                        <p
                            className={`text-[18px] font-[heebo-medium] ${
                                clickedButton === type ? "text-[var(--black)]" : "text-[var(--black2white)]"
                            }`}
                        >
                            Completed
                        </p>
                    </div>
                    <p
                        className={`text-[18px] font-[heebo-medium] ${
                            clickedButton === type ? "text-[var(--black)]" : "text-[var(--black2white)]"
                        }`}
                    >
                        {nbrNotes}
                    </p>
                </>
            )}
            {type === "overdue" && (
                <>
                    <div className="flex items-center justify-center gap-[5px]">
                        <ErrorNotification
                            width={20}
                            height={20}
                            color={clickedButton === type ? "var(--white)" : "var(--black2white)"}
                        />
                        <p
                            className={`text-[18px] font-[heebo-medium] ${
                                clickedButton === type ? "text-[var(--white)]" : "text-[var(--black2white)]"
                            }`}
                        >
                            Overdue
                        </p>
                    </div>
                    <p
                        className={`text-[18px] font-[heebo-medium] ${
                            clickedButton === type ? "text-[var(--white)]" : "text-[var(--black2white)]"
                        }`}
                    >
                        {nbrNotes}
                    </p>
                </>
            )}
        </motion.div>
    );
}

// Define prop types
ButtonMenu.propTypes = {
    type: PropTypes.string,
    nbrNotes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    clickedButton: PropTypes.string,
    handleButtonClick: PropTypes.func.isRequired,
    clickedColor: PropTypes.string,
    color: PropTypes.string,
};

// Set default props
ButtonMenu.defaultProps = {
    type: "all_notes",
    nbrNotes: 0,
    clickedButton: "all_notes",
    clickedColor: "bg-[var(--black2white)]",
    color: "bg-[var(--skyWhite2skyBlack)]",
};

export { ButtonMenu };
