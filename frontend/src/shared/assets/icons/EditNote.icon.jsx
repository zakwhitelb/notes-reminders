// System
import PropTypes from "prop-types";

function EditNote({ width, height, color }) {
    return (
        <div>
            <svg width={width} height={height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill={color} d="M1.33333 10.6667H2.28333L8.8 4.15L7.85 3.2L1.33333 9.71667V10.6667ZM0.666667 12C0.477778 12 0.319556 11.936 0.192 11.808C0.0644445 11.68 0.000444444 11.5218 0 11.3333V9.71667C0 9.53889 0.0333334 9.36933 0.1 9.208C0.166667 9.04667 0.261111 8.90511 0.383333 8.78333L8.8 0.383333C8.93333 0.261111 9.08067 0.166667 9.242 0.1C9.40333 0.0333334 9.57267 0 9.75 0C9.92733 0 10.0996 0.0333334 10.2667 0.1C10.4338 0.166667 10.5782 0.266667 10.7 0.4L11.6167 1.33333C11.75 1.45556 11.8471 1.6 11.908 1.76667C11.9689 1.93333 11.9996 2.1 12 2.26667C12 2.44444 11.9693 2.614 11.908 2.77533C11.8467 2.93667 11.7496 3.08378 11.6167 3.21667L3.21667 11.6167C3.09444 11.7389 2.95267 11.8333 2.79133 11.9C2.63 11.9667 2.46067 12 2.28333 12H0.666667ZM8.31667 3.68333L7.85 3.2L8.8 4.15L8.31667 3.68333Z" />
            </svg>
        </div>
    )
}

EditNote.propTypes = {
    width: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
    height: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
    color: PropTypes.string,
}

EditNote.defaultProps = {
    width: "12px",
    height: "12px",
    color: "var(--white)",
}

export { EditNote };
