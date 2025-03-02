// System
import PropTypes from "prop-types";
import { motion } from "framer-motion";

// Icons
import { AllNotes } from "../../../shared/assets/icons/AllNotes.icon";
import { Notification } from "../../../shared/assets/icons/Notification.icon";
import { Successful } from "../../../shared/assets/icons/Successful.icon";
import { ErrorNotification } from "../../../shared/assets/icons/ErrorNotification.icon";

function ButtonMenu({ type="all_notes", nbrNotes=0, clickedButton="all_notes", handleButtonClick, clickedColor="bg-[var(--black2white)]", color="bg-[var(--skyWhite2skyBlack)]" }) {
    const SM_SIZE_CHECK = window.innerWidth > 639;
    const MD_SIZE_CHECK = window.innerWidth > 1024;
    return (
        <motion.div
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.85 }}
            onClick={() => handleButtonClick(type)}
            className={`flex justify-between items-center w-fit h-[36px] sm:h-[40px] rounded-[10px] px-[10px] gap-x-[10px] sm:gap-x-[10px] md:gap-x-[20px] cursor-pointer whitespace-nowrap ${
                clickedButton === type ? clickedColor : color
            }`}
        >
            {type === "all_notes" && (
                <>
                    <div className="flex items-center justify-center w-full gap-[5px]">
                        <AllNotes
                            width={SM_SIZE_CHECK ? 20 : 16}
                            height={SM_SIZE_CHECK ? 20 : 16}
                            color={clickedButton === type ? "var(--white2black)" : "var(--black2white)"}
                        />
                        {MD_SIZE_CHECK&&(
                            <p
                                className={`w-full text-[14px] md:text-[16px] font-[heebo-medium] ${
                                    clickedButton === type ? "text-[var(--white2black)]" : "text-[var(--black2white)]"
                                }`}
                            >
                                All Notes
                            </p>
                        )}
                    </div>
                    <p
                        className={`text-[14px] md:text-[16px] font-[heebo-medium] ${
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
                            width={SM_SIZE_CHECK ? 20 : 16}
                            height={SM_SIZE_CHECK ? 20 : 16}
                            color={clickedButton === type ? "var(--white)" : "var(--black2white)"}
                        />
                        {MD_SIZE_CHECK && (
                            <p
                                className={`text-[14px] md:text-[16px] font-[heebo-medium] ${
                                    clickedButton === type ? "text-[var(--white)]" : "text-[var(--black2white)]"
                                }`}
                            >
                                Incomplete
                            </p>
                        )}
                    </div>
                    <p
                        className={`text-[14px] md:text-[16px] font-[heebo-medium] ${
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
                            width={SM_SIZE_CHECK ? 20 : 16}
                            height={SM_SIZE_CHECK ? 20 : 16}
                            color={clickedButton === type ? "var(--black)" : "var(--black2white)"}
                        />
                        {MD_SIZE_CHECK && (
                            <p
                                className={`text-[14px] md:text-[16px] font-[heebo-medium] ${
                                    clickedButton === type ? "text-[var(--black)]" : "text-[var(--black2white)]"
                                }`}
                            >
                                Completed
                            </p>
                        )}
                    </div>
                    <p
                        className={`text-[14px] md:text-[16px] font-[heebo-medium] ${
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
                            width={SM_SIZE_CHECK ? 20 : 16}
                            height={SM_SIZE_CHECK ? 20 : 16}
                            color={clickedButton === type ? "var(--white)" : "var(--black2white)"}
                        />
                        {MD_SIZE_CHECK && (
                            <p
                                className={`text-[14px] md:text-[16px] font-[heebo-medium] ${
                                    clickedButton === type ? "text-[var(--white)]" : "text-[var(--black2white)]"
                                }`}
                            >
                                Overdue
                            </p>
                        )}
                    </div>
                    <p
                        className={`text-[14px] md:text-[16px] font-[heebo-medium] ${
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

export { ButtonMenu };
