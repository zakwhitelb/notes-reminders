// System
import { useEffect, useState, useMemo } from "react";
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
    const [notes, setNotes] = useState([]);

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
    }, [response, GetAllNotes, setResponse]);

    const filteredNotes = useMemo(() => {
        if (!response?.notes) return [];
        switch (menuClickedButton) {
            case "incomplete":
                return response.notes.filter((note) => note.status === "incomplete");
            case "completed":
                return response.notes.filter((note) => note.status === "completed");
            case "overdue":
                return response.notes.filter((note) => note.status === "overdue");
            default:
                return response.notes;
        }
    }, [response?.notes, menuClickedButton]);

    useEffect(() => {
        setNotes(filteredNotes);
    }, [filteredNotes, notes]);

    const noteCounts = useMemo(() => ({
        all: response?.notes?.length || 0,
        incomplete: response?.notes?.filter((note) => note.status === "incomplete").length || 0,
        completed: response?.notes?.filter((note) => note.status === "completed").length || 0,
        overdue: response?.notes?.filter((note) => note.status === "overdue").length || 0,
    }), [response?.notes]);

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
            <NotesView notes={notes} setResponseNotes={setResponse} />
        </div>
    );
}

export { NoteArea };
