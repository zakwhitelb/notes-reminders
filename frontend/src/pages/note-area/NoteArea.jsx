// System
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

// Controllers
import { NoteController } from "../../shared/controllers/note/NoteController";

// Components
import { Error404 } from "../error/Error404";
import { Menu } from "./components/Menu";
import { NotesView } from "./components/NotesView";

function NoteArea() {
    const isLoggedIn = useSelector((state) => state.authentification_status.value);
    const menuClickedButton = useSelector((state) => state.menu_clicked_button.value);

    const { response, setResponse, GetAllNotes } = NoteController();

    useEffect(() => {
        const fetchNotes = async () => {
            if (!response?.notes?.length) {
                try {
                    await GetAllNotes();
                } 
                catch (err) {
                    console.error("Error while fetching notes:", err);
                }
            }
        };
        fetchNotes();
    }, [GetAllNotes, response?.notes?.length, setResponse]);

    // Filter notes based on the selected menu option
    const filteredNotes = useMemo(() => {
        if (!response?.notes) return [];
        return response.notes.filter((note) => {
            if (menuClickedButton === "incomplete") return note.status === "incomplete";
            if (menuClickedButton === "completed") return note.status === "completed";
            if (menuClickedButton === "overdue") return note.status === "overdue";
            return true; // Default case: show all notes
        });
    }, [response?.notes, menuClickedButton]);

    // Compute note counts for different statuses
    const noteCounts = useMemo(() => {
        const allNotes = response?.notes || [];
        const counts = {
            all: allNotes.length,
            incomplete: allNotes.filter((note) => note.status === "incomplete").length,
            completed: allNotes.filter((note) => note.status === "completed").length,
            overdue: allNotes.filter((note) => note.status === "overdue").length,
        };
        return counts;
    }, [response?.notes]);

    if (!isLoggedIn) {
        return <Error404 />;
    }

    return (
        <div
            id="note_area"
            className="relative grid grid-rows-[auto_1fr] w-full h-full pt-[14px] px-[80px] gap-[14px] min-h-0"
        >
            <Menu
                noteNbr={noteCounts.all}
                incompleteNbr={noteCounts.incomplete}
                completedNbr={noteCounts.completed}
                overdueNbr={noteCounts.overdue}
            />
            <NotesView notes={filteredNotes} setResponseNotes={setResponse} />
        </div>
    );
}

export { NoteArea };
