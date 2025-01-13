import PropTypes from "prop-types";
import { motion, AnimatePresence } from "motion/react";

// Components
import { PopUpContent } from "./ui/PopUpContent";

// Icons
import { RemovePopUp } from "../../../../shared/assets/icons/RemovePopUp.icon";
import { Notification } from "../../../../shared/assets/icons/Notification.icon";
import { Successful } from "../../../../shared/assets/icons/Successful.icon";
import { ErrorNotification } from "../../../../shared/assets/icons/ErrorNotification.icon";

function PopUp({ handleToggelPopUp, data={}, type='add_note', handleChange, handleDeleteNote, handleSubmit, errorMessage }) {
    const { status } = data;
    return (
        <AnimatePresence>
            <div className="absolute bottom-0 left-0 z-50 flex items-center justify-center h-full w-full bg-[var(--transparent)]">
                <motion.div
                    key="modal" exit={{ opacity: 0 }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative z-10 w-[1040px] h-[560px] bg-[var(--white2black)] rounded-[20px] p-[40px] duration-[0.15s] ease-linear"
                >
                    <motion.div
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.75 }}
                        onClick={() => handleToggelPopUp()}
                        className="absolute top-0 right-0 flex justify-end w-[62px] h-[62px] bg-[var(--red)] rounded-tr-[20px] rounded-bl-[50px] pr-[16px] pt-[16px] cursor-pointer"
                    >
                        <RemovePopUp />
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
                        <div className="absolute bottom-0 left-0 flex items-end w-[62px] h-[62px] bg-[var(--blue)] rounded-bl-[20px] rounded-tr-[50px] pl-[16px] pb-[16px]">
                            <Notification width={24} height={24} color={"var(--white)"} />
                        </div>
                    )}
                    {status === "completed" && (
                        <div className="absolute bottom-0 left-0 flex items-end w-[62px] h-[62px] bg-[var(--yellow)] rounded-bl-[20px] rounded-tr-[50px] pl-[16px] pb-[16px]">
                            <Successful width={24} height={24} color={"var(--black)"} />
                        </div>
                    )}
                    {status === "overdue" && (
                        <div className="absolute bottom-0 left-0 flex items-end w-[62px] h-[62px] bg-[var(--red)] rounded-bl-[20px] rounded-tr-[50px] pl-[16px] pb-[16px]">
                            <ErrorNotification width={24} height={24} color={"var(--white)"} />
                        </div>
                    )}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    className="absolute top-0 right-0 -z-1 h-full w-full bg-[var(--black2white)] opacity-40 cursor-pointer duration-[0.15s]"
                    onClick={() => handleToggelPopUp()}
                ></motion.div>
            </div>
        </AnimatePresence>
    );
}

PopUp.propTypes = {
    handleToggelPopUp: PropTypes.func.isRequired,
    data: PropTypes.object,
    type: PropTypes.string,
    handleChange: PropTypes.func,
    handleDeleteNote: PropTypes.func,
    handleSubmit: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
};

export { PopUp };