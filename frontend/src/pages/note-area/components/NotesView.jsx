// System
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

// Components
import { AddNoteButton } from "./AddNoteButton";
import { Note } from "./Note";

function NotesView({ notes, setResponseNotes }) {
    // Get the search query from Redux store
    const searchQuery = useSelector((state) => state.search_note.value);
    // Filter notes based on the search query
    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().startsWith(searchQuery.toLowerCase())
    );    

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="grid grid-cols-[auto_auto_auto_auto] auto-rows-min justify-between pb-[20px] gap-y-[30px] overflow-y-scroll no-scrollbar"
        >
            <AddNoteButton setResponseNotes={setResponseNotes} />

            {filteredNotes.map((note, index) => (
                <div key={index}>
                    <Note note={note} setResponseNotes={setResponseNotes} />
                </div>
            ))}
        </motion.div>
    );
}

// Define prop types
NotesView.propTypes = {
    notes: PropTypes.array,
    setResponseNotes: PropTypes.func.isRequired,
};

// Set default props
NotesView.defaultProps = {
    notes: [],
};

export { NotesView };
