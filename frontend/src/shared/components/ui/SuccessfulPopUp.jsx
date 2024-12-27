// Icons
import { Successful as SuccessfulIcon } from "../../assets/icons/Successful.icon";

function SuccessfulPopUp() {
    return (
        <div className="flex justify-center items-center w-[400px] h-[400px] bg-[var(--yellow)] shadow-xl rounded-[30px]">
                <div 
                    className="grid justify-center items-center content-center w-full h-full gap-y-[20px]"
                    style={{justifyItems: 'center'}}
                >
                    <SuccessfulIcon width={120} height={120} color={"var(--white)"} />
                    <p className="text-[28px] text-[var(--white)] font-[merriweather-sans-bold]">Successful log in</p>
                </div>
        </div>
    )
}

export { SuccessfulPopUp };
