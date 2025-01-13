// System
import PropTypes from "prop-types"

function X({ width=26, height=26, color="var(--placeholder)" }) {
    return (
        <div>
            <svg width={width} height={height} viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                <path stroke={color} d="M2.21777 2L23.9984 24" strokeWidth={"4"} strokeLinecap="round" />
                <path stroke={color} d="M23.7817 2L2.00113 24" strokeWidth={"4"} strokeLinecap="round" />
            </svg>
        </div>
    )
}

// Define prop types
X.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
};

export { X };
