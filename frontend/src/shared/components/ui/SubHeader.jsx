// Icons
import { RollBack } from "../active-icons/RollBack";
import { Theme } from "../active-icons/Theme";

function SubHeader() {
    return (
        <>
            <div className="absolute z-11 top-[20px] left-0 sm:left-[40px] lg:left-[60px] xl:left-[80px]">
                <RollBack width={window.innerWidth < 560 ? 24 : 30} height={window.innerWidth < 560 ? 18 : 24} />
            </div>
            <div className="absolute z-11 top-[20px] right-0 sm:right-[40px] lg:right-[60px] xl:right-[80px]">
                <Theme width={window.innerWidth < 560 ? 24 : 30} height={window.innerWidth < 560 ? 24 : 30} />
            </div>
        </>
    )
}

export { SubHeader };
