// System
import PropTypes from "prop-types"

function RemovePopUp({ width, height, color }) {
    return (
        <div>
            <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill={color} d="M12 16.6993L5.62238 23.0769C5.00699 23.6923 4.22377 24 3.27273 24C2.32168 24 1.53846 23.6923 0.923077 23.0769C0.307693 22.4615 0 21.6783 0 20.7273C0 19.7762 0.307693 18.993 0.923077 18.3776L7.3007 12L0.923077 5.62238C0.307693 5.00699 0 4.22377 0 3.27273C0 2.32168 0.307693 1.53846 0.923077 0.923077C1.53846 0.307693 2.32168 0 3.27273 0C4.22377 0 5.00699 0.307693 5.62238 0.923077L12 7.3007L18.3776 0.923077C18.993 0.307693 19.7762 0 20.7273 0C21.6783 0 22.4615 0.307693 23.0769 0.923077C23.6923 1.53846 24 2.32168 24 3.27273C24 4.22377 23.6923 5.00699 23.0769 5.62238L16.6993 12L23.0769 18.3776C23.6923 18.993 24 19.7762 24 20.7273C24 21.6783 23.6923 22.4615 23.0769 23.0769C22.4615 23.6923 21.6783 24 20.7273 24C19.7762 24 18.993 23.6923 18.3776 23.0769L12 16.6993Z" />
            </svg>
        </div>
    )
}

// Define prop types
RemovePopUp.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
};

// Set default props
RemovePopUp.defaultProps = {
    width: "24",
    height: "24",
    color: "var(--white)",
};

export { RemovePopUp };
