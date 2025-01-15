// Picture: https
import { Page404White } from "../../shared/assets/pics/Page404White.pic";
import { Page404Black } from "../../shared/assets/pics/Page404Black.pic";
import { useSelector } from "react-redux";

function Error404() {
    // Access the theme value from Redux store
    const theme = useSelector((state) => state.theme.value);

    return (
        <div className="flex justify-center items-center w-full h-full">
            {theme === "light" ? 
                <Page404White width={window.innerWidth < 300 ? 180 : window.innerWidth < 400 ? 230 : window.innerWidth < 560? 310 : window.innerWidth < 768 ? 370 : window.innerWidth < 1024 ? 390 : 420} height={window.innerWidth < 300 ? 190 : window.innerWidth < 400 ? 240 : window.innerWidth < 560 ? 320 : window.innerWidth < 768 ? 380 : window.innerWidth < 1024 ? 400 : 430} />
            : 
                <Page404Black width={window.innerWidth < 300 ? 180 : window.innerWidth < 400 ? 230 : window.innerWidth < 560? 310 : window.innerWidth < 768 ? 370 : window.innerWidth < 1024 ? 390 : 420} height={window.innerWidth < 300 ? 190 : window.innerWidth < 400 ? 240 : window.innerWidth < 560 ? 320 : window.innerWidth < 768 ? 380 : window.innerWidth < 1024 ? 400 : 430} />
            }
        </div>
    );
}

export { Error404 };