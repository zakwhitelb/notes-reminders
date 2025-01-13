// System
import PropTypes from "prop-types";
import { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

// Components
import { ButtonMenu } from "./ButtonMenu";
import { SearchNote } from "./SearchNote";
import { ShowFilter } from "./ui/ShowFilter";

// Redux actions
import { ChangeMenuClickedButton } from "../../../shared/redux/slices/MenuClickedButtonSlice";

function Menu({ noteNbr=0, incompleteNbr=0, completedNbr=0, overdueNbr=0, setResponse=0 }) {
    const dispatch = useDispatch();
    const clickedButton = useSelector((state) => state.menu_clicked_button.value);
    const searchValue = useSelector((state) => state.search_note.value);

    // Memoize button configurations to avoid recalculating on every render
    const buttonConfigs = useMemo(() => [
        { type: "all_notes", nbr: noteNbr },
        { type: "incomplete", nbr: incompleteNbr, clickedColor: "bg-[var(--blue)]", color: "bg-[var(--skyBlue)]" },
        { type: "completed", nbr: completedNbr, clickedColor: "bg-[var(--yellow)]", color: "bg-[var(--skyYellow)]" },
        { type: "overdue", nbr: overdueNbr, clickedColor: "bg-[var(--red)]", color: "bg-[var(--skyRed)]" },
    ], [noteNbr, incompleteNbr, completedNbr, overdueNbr]);

    // Memoize the handler function to prevent re-creation
    const handleButtonClick = useCallback((buttonType) => {
        dispatch(ChangeMenuClickedButton(buttonType));
    }, [dispatch]);

    // Memoize the calculation for the number of notes
    const getNbrNotes = useMemo(() => {
        const activeConfig = buttonConfigs.find((config) => config.type === clickedButton);
        return activeConfig ? activeConfig.nbr : 0;
    }, [buttonConfigs, clickedButton]);

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="grid grid-flow-row h-fit"
        >
            <motion.div
                className="flex justify-between w-full duration-[0.5s] ease-in-out"
                animate={{ gap: searchValue ? "20px" : "100px" }}
                transition={{ duration: 0.5, ease: "linear" }}
            >
                {/* Button Menu */}
                <div className="flex justify-between gap-[20px]">
                    {buttonConfigs.map(({ type, nbr, clickedColor, color }) => (
                        <ButtonMenu
                            key={type}
                            type={type}
                            clickedButton={clickedButton}
                            handleButtonClick={handleButtonClick}
                            nbrNotes={nbr}
                            clickedColor={clickedColor}
                            color={color}
                        />
                    ))}
                </div>

                {/* Search Note */}
                <motion.div
                    className="w-full"
                    animate={{ width: searchValue ? "100%" : "fit-content" }}
                    transition={{ duration: 0.5, ease: "linear" }}
                >
                    <SearchNote />
                </motion.div>
            </motion.div>

            <div className="h-[2px] w-full bg-[var(--black2white)] rounded-full mt-[8px] mb-[4px]"></div>

            <div className="flex justify-between items-center">
                <p className="text-[18px] text-[var(--black2white)] font-[heebo-medium]">
                    {getNbrNotes} Notes
                </p>

                < ShowFilter setResponse={setResponse} />
            </div>

        </motion.div>
    );
}

// Prop-Types Validation
Menu.propTypes = {
    noteNbr: PropTypes.number,
    incompleteNbr: PropTypes.number,
    completedNbr: PropTypes.number,
    overdueNbr: PropTypes.number,
    setResponse: PropTypes.func.isRequired,
};

export { Menu };
