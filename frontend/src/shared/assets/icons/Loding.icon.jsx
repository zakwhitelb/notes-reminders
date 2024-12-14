// System
import PropTypes from "prop-types";

function Loding({ width, height, color }) {
    return (
        <div>
            <svg width={width} height={height} viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <path fill={color} d="M79.5012 17.8201C77.4012 17.8201 75.6252 17.091 74.1731 15.6328C72.7211 14.1746 71.9971 12.393 72.0011 10.2881C72.0051 8.18313 72.7311 6.39955 74.1791 4.93735C75.6272 3.47514 77.4012 2.74805 79.5012 2.75608C81.6013 2.76412 83.3773 3.49321 84.8293 4.94337C86.2813 6.39353 87.0053 8.1751 87.0013 10.2881C86.9973 12.401 86.2713 14.1846 84.8233 15.6388C83.3753 17.093 81.6013 17.8201 79.5012 17.8201ZM79.5012 117.242C77.4012 117.242 75.6252 116.513 74.1731 115.055C72.7211 113.597 71.9971 111.815 72.0011 109.71C72.0051 107.605 72.7311 105.822 74.1791 104.36C75.6272 102.897 77.4012 102.17 79.5012 102.178C81.6013 102.186 83.3773 102.915 84.8293 104.366C86.2813 105.816 87.0053 107.597 87.0013 109.71C86.9973 111.823 86.2713 113.607 84.8233 115.061C83.3753 116.515 81.6013 117.242 79.5012 117.242ZM103.502 38.9096C101.402 38.9096 99.6255 38.1805 98.1735 36.7223C96.7215 35.2641 95.9975 33.4826 96.0015 31.3776C96.0055 29.2727 96.7315 27.4891 98.1795 26.0269C99.6275 24.5647 101.402 23.8376 103.502 23.8456C105.602 23.8537 107.378 24.5828 108.83 26.0329C110.282 27.4831 111.006 29.2647 111.002 31.3776C110.998 33.4906 110.272 35.2742 108.824 36.7283C107.376 38.1825 105.602 38.9096 103.502 38.9096ZM103.502 96.1527C101.402 96.1527 99.6255 95.4236 98.1735 93.9654C96.7215 92.5072 95.9975 90.7257 96.0015 88.6207C96.0055 86.5158 96.7315 84.7322 98.1795 83.27C99.6275 81.8078 101.402 81.0807 103.502 81.0887C105.602 81.0968 107.378 81.8259 108.83 83.276C110.282 84.7262 111.006 86.5077 111.002 88.6207C110.998 90.7337 110.272 92.5173 108.824 93.9714C107.376 95.4256 105.602 96.1527 103.502 96.1527ZM112.502 67.5312C110.402 67.5312 108.626 66.8021 107.174 65.3439C105.722 63.8857 104.998 62.1041 105.002 59.9992C105.006 57.8942 105.732 56.1107 107.18 54.6484C108.628 53.1862 110.402 52.4591 112.502 52.4672C114.602 52.4752 116.378 53.2043 117.83 54.6545C119.282 56.1046 120.006 57.8862 120.002 59.9992C119.998 62.1121 119.272 63.8957 117.824 65.3499C116.376 66.8041 114.602 67.5312 112.502 67.5312ZM0 59.9992C0 44.2322 5.22608 30.6746 15.6782 19.3265C26.1304 7.97826 38.9546 1.55096 54.1508 0.0445679C55.7509 -0.156285 57.1269 0.321746 58.2789 1.47866C59.4309 2.63557 60.0049 4.06564 60.0009 5.76888C60.0009 7.3757 59.4769 8.78167 58.4289 9.98679C57.3809 11.1919 56.0549 11.8949 54.4508 12.0957C42.3507 13.5017 32.2505 18.7239 24.1504 27.7623C16.0502 36.8007 12.0002 47.5463 12.0002 59.9992C12.0002 72.5525 16.0502 83.3242 24.1504 92.3144C32.2505 101.305 42.3507 106.501 54.4508 107.903C56.0509 108.103 57.3769 108.806 58.4289 110.012C59.4809 111.217 60.0049 112.623 60.0009 114.229C60.0009 115.937 59.4249 117.369 58.2729 118.526C57.1209 119.683 55.7469 120.159 54.1508 119.954C38.8506 118.447 26.0004 112.02 15.6002 100.672C5.20008 89.3237 0 75.7661 0 59.9992Z"/>
            </svg>
        </div>
    )
}

// Define prop types
Loding.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
};

// Set default props
Loding.defaultProps = {
    width: "120",
    height: "120",
    color: "var(--black2white)",
};

export { Loding };
