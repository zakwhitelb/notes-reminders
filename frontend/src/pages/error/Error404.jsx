// Picture: https
import { Page404White } from "../../shared/assets/pics/Page404White.pic";
import { Page404Black } from "../../shared/assets/pics/Page404Black.pic";
import { useSelector } from "react-redux";

function Error404() {
    // Access the theme value from Redux store
    const theme = useSelector((state) => state.theme.value);

    return (
        <div className="flex justify-center items-center w-full h-full">
            {theme === "light" ? <Page404White /> : <Page404Black />}
        </div>
    );
}

export { Error404 };