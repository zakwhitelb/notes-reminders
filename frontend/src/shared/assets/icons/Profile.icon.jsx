// System
import PropTypes from "prop-types"

function Profile({ width=30, height=30, color="var(--black2white)" }) {
    return (
        <div>
            <svg width={width} height={height} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                <path 
                    fill={color}
                    d="M15 15C12.9167 15 11.1458 14.2708 9.6875 12.8125C8.22917 11.3542 7.5 9.58333 7.5 7.5C7.5 5.41667 8.22917 3.64583 9.6875 2.1875C11.1458 0.729167 12.9167 0 15 0C17.0833 0 18.8542 0.729167 20.3125 2.1875C21.7708 3.64583 22.5 5.41667 22.5 7.5C22.5 9.58333 21.7708 11.3542 20.3125 12.8125C18.8542 14.2708 17.0833 15 15 15ZM0 27.5V25.25C0 24.375 0.208333 23.5417 0.625 22.75C1.04167 21.9583 1.625 21.3333 2.375 20.875C4.25 19.75 6.24 18.9067 8.345 18.345C10.45 17.7833 12.6683 17.5017 15 17.5C17.3317 17.4983 19.5508 17.78 21.6575 18.345C23.7642 18.91 25.7533 19.7533 27.625 20.875C28.375 21.3333 28.9583 21.9583 29.375 22.75C29.7917 23.5417 30 24.375 30 25.25V27.5C30 28.2083 29.76 28.8025 29.28 29.2825C28.8 29.7625 28.2067 30.0017 27.5 30H2.5C1.79167 30 1.19833 29.76 0.72 29.28C0.241667 28.8 0.00166667 28.2067 0 27.5Z" 
                />
            </svg>
        </div>
    )
}

// Define prop types
Profile.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
};

export { Profile };
