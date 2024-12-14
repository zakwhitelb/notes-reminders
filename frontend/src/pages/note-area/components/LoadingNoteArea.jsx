// Icons
import { Loding as LodingIcon } from "../../../shared/assets/icons/Loding.icon";

function LoadingNoteArea() {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="w-fit h-fit animate-spin">
                <LodingIcon />
            </div>
        </div>
    )
}

export { LoadingNoteArea };