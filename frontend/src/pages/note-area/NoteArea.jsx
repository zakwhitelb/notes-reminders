// System

// Components
import { Menu } from "./components/Menu";
import { Notes } from "./components/Notes";

function NoteArea() {
    return (
        <div 
            id="note_area"
            className="relative grid grid-rows-[auto_1fr] w-full h-full pt-[14px] px-[80px] gap-[14px] min-h-0"
        >
            <Menu />
            <Notes />
        </div>
    );
}


export { NoteArea };
