// src/components/NotesView.jsx
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { AddNoteButton } from "./AddNoteButton";
import { Note } from "./Note";

function NotesView({ notes = [], setResponseNotes }) {
  const searchQuery = useSelector((state) => state.search_note.value);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(248px,1fr))] gap-x-[16px] gap-y-[30px] w-full pb-5 overflow-y-scroll no-scrollbar"
    >
      <AddNoteButton setResponseNotes={setResponseNotes} />
      {filteredNotes.map((note, index) => (
        <Note key={index} note={note} setResponseNotes={setResponseNotes} />
      ))}
    </motion.div>
  );
}

NotesView.propTypes = {
  notes: PropTypes.array,
  setResponseNotes: PropTypes.func.isRequired,
};

export { NotesView };
