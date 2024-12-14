// System
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

// Components
import { ButtonMenu } from "./ButtonMenu";
import { SearchNote } from "./SearchNote";

// Redux actions
import { ChangeMenuClickedButton } from "../../../redux/slices/MenuClickedButtonSlice";

function Menu() {
    // Get the current clicked button value from Redux store
    const clickedButton = useSelector((state) => state.menu_clicked_button.value);

    // Initialize dispatch to update Redux store
    const dispatch = useDispatch();

    // Function to handle button click and update Redux state
    const handleButtonClick = (buttonType) => {
        dispatch(ChangeMenuClickedButton(buttonType));
        console.log(clickedButton)
    };

    // Get search value from Redux store
    const searchValue = useSelector((state) => state.search_note.value);

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="grid grid-flow-row h-fit"
        >
            <motion.div
                className="flex justify-between w-full duration-[0.5s] ease-in-out"
                animate={{
                    gap: searchValue !== "" ? "20px" : "100px",
                }}
                transition={{ duration: 0.5, ease: "linear" }}
            >
                <div className="flex justify-between gap-[20px]">
                    <ButtonMenu
                        type="all_notes"
                        clickedButton={clickedButton}
                        handleButtonClick={handleButtonClick}
                    />
                    <ButtonMenu
                        type="incomplete"
                        clickedButton={clickedButton}
                        handleButtonClick={handleButtonClick}
                        clickedColor="bg-[var(--blue)]"
                        color="bg-[var(--skyBlue)]"
                    />
                    <ButtonMenu
                        type="completed"
                        clickedButton={clickedButton}
                        handleButtonClick={handleButtonClick}
                        clickedColor="bg-[var(--yellow)]"
                        color="bg-[var(--skyYellow)]"
                    />
                    <ButtonMenu
                        type="overdue"
                        clickedButton={clickedButton}
                        handleButtonClick={handleButtonClick}
                        clickedColor="bg-[var(--red)]"
                        color="bg-[var(--skyRed)]"
                    />
                </div>
                <motion.div
                    className="w-full"
                    animate={{
                        width: searchValue !== "" ? "100%" : "fit-content",
                    }}
                    transition={{ duration: 0.5, ease: "linear" }}
                >
                    <SearchNote />
                </motion.div>
            </motion.div>
            <div className="h-[2px] w-full bg-[var(--black2white)] mt-[8px] mb-[4px]"></div>
            <div>
                <p className="text-[18px] font-[heebo-medium]">0 Note</p>
            </div>
        </motion.div>
    );
}

export { Menu };
