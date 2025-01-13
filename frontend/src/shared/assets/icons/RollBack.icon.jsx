// System
import PropTypes from "prop-types";

function RollBack({ width=30, height=24, color="var(--black2white)" }) {
    return (
        <div>
            <svg width={width} height={height} viewBox="0 0 30 24" xmlns="http://www.w3.org/2000/svg">
                <path fill={color} d="M27.4138 14.6297H8.85776L13.6422 19.4943C14.1147 19.9782 14.3621 20.5812 14.3845 21.3035C14.4069 22.0257 14.181 22.6498 13.7069 23.1757C13.1879 23.7034 12.5733 23.9777 11.8629 23.9988C11.1526 24.0198 10.5388 23.7674 10.0215 23.2415L0.775864 13.8408C0.258621 13.3149 0 12.7013 0 12.0001C0 11.2989 0.258621 10.6853 0.775864 10.1594L10.0215 0.758729C10.5388 0.231063 11.1638 -0.0213742 11.8965 0.00141527C12.6293 0.0242048 13.2328 0.298555 13.7069 0.824467C14.181 1.35038 14.4181 1.96394 14.4181 2.66516C14.4181 3.36638 14.181 3.95803 13.7069 4.44011L8.85776 9.37054H27.4138C28.1431 9.37054 28.7569 9.62298 29.2552 10.1279C29.7534 10.6327 30.0017 11.2568 30 12.0001C29.9983 12.7434 29.75 13.3675 29.2552 13.8723C28.7603 14.3772 28.1465 14.6297 27.4138 14.6297Z" />
            </svg>
        </div>
    )
}

// Define prop types
RollBack.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string
};

export { RollBack };