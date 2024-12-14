// System
import PropTypes from "prop-types";

// Icons
import { RollBack } from "../active-icons/RollBack";
import { Theme } from "../active-icons/Theme";

function SubHeader({ location }) {
    return (
        <>
            <div className="absolute top-[20px] left-[40px]">
                <RollBack location={location} />
            </div>
            <div className="absolute top-[20px] right-[40px]">
                <Theme />
            </div>
        </>
    )
}

SubHeader.propTypes = {
    location: PropTypes.object.isRequired,
};

SubHeader.defaultProps = {
    location: "/",
}

export { SubHeader };
