// System
import { useState, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

// Redux
import { SearchNoteName, ClearSearch } from "../../../shared/redux/slices/SearchNoteSlice";

// Icons
import { SearchNote as SearchNoteIcon } from "../../../shared/assets/icons/SearchNote.icon";

// Components
import { RemoveSearchContent } from "../../../shared/components/active-icons/RemoveSearchContent";

function SearchNoteMobile() {
    const dispatch = useDispatch();
    const searchValue = useSelector((state) => state.search_note.value);
    const [inputWidth, setInputWidth] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    useLayoutEffect(() => {
        const width = window.innerWidth;
        var inputWidth = 0;
        if (width <= 980) {
            setInputWidth("100%"); 
            return
        }
        if (width >= 980 && width <= 1023) inputWidth = 141 + (width - 980);
        if (width >= 1024) inputWidth = 161 + (width - 1024);

        if(inputWidth > 300 && !searchValue) {
            setInputWidth("300px");
        }
        else {
            setInputWidth(inputWidth+"px");
        }
    }, [searchValue])

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (!value.trim()) {
            dispatch(ClearSearch());
        } else {
            dispatch(SearchNoteName(value));
        }
    };

    return (
        <div className={`absolute ${isClicked ? "left-[30px] w-[calc(100%-60px)]" : "right-[30px]"}  flex `}>
            {isClicked &&
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "linear" }}
                    className="flex items-center justify-center w-full bg-[var(--skyWhite2skyBlack)] px-2 sm:px-4 rounded-l-lg cursor-pointer"
                >
                    {/* Search Input */}
                    <div className="flex justify-center items-center h-9 w-full">
                        <motion.input
                            name="search_note"
                            id="search_note"
                            placeholder="Search note"
                            value={searchValue}
                            onChange={handleInputChange}
                            style={{ width: `${inputWidth}` }}
                            className="flex items-center h-9 sm:h-10 bg-[var(--skyWhite2skyBlack)] text-sm md:text-base text-center text-[var(--black2white)] font-[heebo-regular] outline-none placeholder:text-sm sm:placeholder:text-base placeholder:text-[var(--placeholder)] placeholder:font-[heebo-regular] rounded-r-lg px-2 sm:px-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <div onClick={() => setIsClicked((prev) => !prev)}>
                            <RemoveSearchContent
                                width={window.innerWidth > 639 ? 14 : window.innerWidth > 500 ? 12 : 10}
                                height={window.innerWidth > 639 ? 14 : window.innerWidth > 500 ? 12 : 10}
                            />
                        </div>
                    </div>
                </motion.div>
            }
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "linear" }}
                onClick={() => setIsClicked((prev) => !prev)}
                className={`flex items-center justify-center h-9 w-9 bg-[var(--skyWhite2skyBlack)] px-2 sm:px-4 ${isClicked ? "rounded-r-lg" : "rounded-lg"} cursor-pointer`}
            >
                {/* Search Icon */}
                <div className="cursor-pointer">
                    <SearchNoteIcon
                        width={window.innerWidth > 639 ? 24 : window.innerWidth > 500 ? 20 : 16}
                        height={window.innerWidth > 639 ? 24 : window.innerWidth > 500 ? 20 : 16}
                    />
                </div>
            </motion.div>
        </div>
    );
}

export { SearchNoteMobile };
