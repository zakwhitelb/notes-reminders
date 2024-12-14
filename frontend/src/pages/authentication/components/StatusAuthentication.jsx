// System
import PropTypes from "prop-types";

// Icons
import { Successful as SuccessfulIcon } from "../../../shared/assets/icons/Successful.icon";
import { RemovePopUp as RemoveIcon } from "../../../shared/assets/icons/RemovePopUp.icon";

function StatusAuthentication({ type }) {
    return (
        <div className={`flex justify-center items-center w-[400px] h-[400px] rounded-[30px] gap-y-[30px] ${
            type === "success" ? "bg-[var(--green)]" : "bg-[var(--red)]"
        }`}>
            {type === "success" ?
                <SuccessfulIcon width={120} height={120} color={"var(--white)"} />
            :
                <RemoveIcon />
            }
            <p className="text-[28px] text-[var(--white)] font-[merriweather-sans-bold]">{type === "success" ? "Successful log in" : "Error"}</p>
        </div>
    )
}

StatusAuthentication.propTypes = {
    type: PropTypes.string.isRequired,
}

StatusAuthentication.defaultProps = {
    type: "success"
};

export { StatusAuthentication };
