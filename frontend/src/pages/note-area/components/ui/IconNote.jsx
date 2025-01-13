// System
import PropTypes from "prop-types"

// Icons
import { Notification } from "../../../../shared/assets/icons/Notification.icon";
import { Successful } from "../../../../shared/assets/icons/Successful.icon";
import { ErrorNotification } from "../../../../shared/assets/icons/ErrorNotification.icon";

function IconNote({ type="incomplete", small=false, soBig=false }) {
    return (
        <>
            {type === "incomplete" && <Notification width={small ? 14 : soBig ? 50 : 20} height={small ? 14 : soBig ? 50 : 20} color={"var(--white)"} />}
            {type === "completed" && <Successful width={small ? 14 : soBig ? 50 : 20} height={small ? 14 : soBig ? 50 : 20} color={"var(--black)"} />}
            {type === "overdue" && <ErrorNotification width={small ? 14 : soBig ? 50 : 20} height={small ? 14 : soBig ? 50 : 20} color={"var(--white)"} />}
        </>
    )
}

// Define prop types
IconNote.propTypes = {
    type: PropTypes.string.isRequired,
    small: PropTypes.bool,
    soBig: PropTypes.bool,
};

export { IconNote };
