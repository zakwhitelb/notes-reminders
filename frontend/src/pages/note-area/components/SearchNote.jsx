// System
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

// Redux
import { SearchNoteName, ClearSearch } from "../../../shared/redux/slices/SearchNoteSlice";

// Icons
import { SearchNote as SearchNoteIcon } from "../../../shared/assets/icons/SearchNote.icon";

// CComponents
import { RemoveSearchContent } from "../../../shared/components/active-icons/RemoveSearchContent";

function SearchNote() {
    const dispatch = useDispatch();
    const searchValue = useSelector((state) => state.search_note.value);

    const handleInputChange = (e) => {
        const value = e.target.value;
        // Dispatch the appropriate action based on input
        if (!value.trim()) {
            dispatch(ClearSearch());
        } else {
            dispatch(SearchNoteName(value));
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="flex items-center justify-center w-full bg-[var(--skyWhite2skyBlack)] rounded-[8px] px-[14px] cursor-pointer"
        >
            <SearchNoteIcon />
            <motion.input
                name="search_note"
                id="search_note"
                placeholder="Search note"
                value={searchValue} // Bind the input value to Redux state
                onChange={handleInputChange}
                className="flex items-center h-[40px] w-full bg-[var(--skyWhite2skyBlack)] text-[16px] text-center text-[var(--black2white)] font-[heebo-regular] outline-none placeholder:text-[var(--placeholder)] placeholder:font-[heebo-regular] rounded-r-[8px] px-[14px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            />
            <RemoveSearchContent />
        </motion.div>
    );
}

export { SearchNote };
