import PropTypes from "prop-types";
import { motion, AnimatePresence } from "motion/react";

// Components
import { PopUpContent } from "./ui/PopUpContent";

// Icons
import { RemovePopUp } from "../../../../shared/assets/icons/RemovePopUp.icon";
import { Notification } from "../../../../shared/assets/icons/Notification.icon";
import { Successful } from "../../../../shared/assets/icons/Successful.icon";
import { ErrorNotification } from "../../../../shared/assets/icons/ErrorNotification.icon";

function PopUp({ handleTogglePopUp, data={}, type='add_note', handleChange, handleDeleteNote, handleSubmit, errorMessage }) {
    const { status } = data;
    return (
        <AnimatePresence>
            <div className="absolute bottom-0 left-0 z-50 flex items-center justify-center h-full w-full py-[30px] min-[560px]:py-[40px] px-[30px] min-[560px]:px-[40px] md:px-[60px] lg:px-[80px] bg-[var(--transparent)]">
                <motion.div
                    key="modal" exit={{ opacity: 0 }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative z-10 w-full h-full md:h-[560px] bg-[var(--white2black)] rounded-[20px] p-[20px] sm:p-[30px] min-[810px]:p-[40px] duration-[0.15s] ease-linear"
                >
                    <motion.div
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.75 }}
                        onClick={() => handleTogglePopUp()}
                        className="absolute top-0 right-0 flex justify-end w-[42px] h-[42px] sm:w-[52px] sm:h-[52px] md:w-[62px] md:h-[62px] bg-[var(--red)] rounded-tr-[20px] rounded-bl-[50px] pr-[10px] pt-[10px] sm:pr-[12px] sm:pt-[12px] md:pr-[16px] md:pt-[16px] cursor-pointer"
                    >
                        <RemovePopUp width={window.innerWidth > 640 ? window.innerWidth > 768 ? 24 : 20 : 16} />
                    </motion.div>

                    <PopUpContent
                        data={data}
                        type={type}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        handleDeleteNote={handleDeleteNote}
                        errorMessage={errorMessage}
                    />

                    {status === "incomplete" && (
                        <div className="absolute bottom-0 left-0 flex items-end w-[42px] h-[42px] sm:w-[52px] sm:h-[52px] md:w-[62px] md:h-[62px] bg-[var(--blue)] rounded-bl-[20px] rounded-tr-[50px] pl-[10px] pb-[10px] sm:pl-[12px] sm:pb-[12px] md:pl-[16px] md:pb-[16px]">
                            <Notification width={window.innerWidth > 640 ? 24 : 20} color={"var(--white)"} />
                        </div>
                    )}
                    {status === "completed" && (
                        <div className="absolute bottom-0 left-0 flex items-end w-[42px] h-[42px] sm:w-[52px] sm:h-[52px] md:w-[62px] md:h-[62px] bg-[var(--yellow)] rounded-bl-[20px] rounded-tr-[50px] pl-[10px] pb-[10px] sm:pl-[12px] sm:pb-[12px] md:pl-[16px] md:pb-[16px]">
                            <Successful width={window.innerWidth > 640 ? 24 : 20} color={"var(--black)"} />
                        </div>
                    )}
                    {status === "overdue" && (
                        <div className="absolute bottom-0 left-0 flex items-end w-[42px] h-[42px] sm:w-[52px] sm:h-[52px] md:w-[62px] md:h-[62px] bg-[var(--red)] rounded-bl-[20px] rounded-tr-[50px] pl-[10px] pb-[10px] sm:pl-[12px] sm:pb-[12px] md:pl-[16px] md:pb-[16px]">
                            <ErrorNotification width={window.innerWidth > 640 ? 24 : 20} color={"var(--white)"} />
                        </div>
                    )}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    className="absolute top-0 right-0 -z-1 h-full w-full bg-[var(--black2white)] opacity-40 cursor-pointer duration-[0.15s]"
                    onClick={() => handleTogglePopUp()}
                ></motion.div>
            </div>
        </AnimatePresence>
    );
}

PopUp.propTypes = {
    handleTogglePopUp: PropTypes.func.isRequired,
    data: PropTypes.object,
    type: PropTypes.string,
    handleChange: PropTypes.func,
    handleDeleteNote: PropTypes.func,
    handleSubmit: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
};

export { PopUp };