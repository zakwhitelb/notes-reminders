import PropTypes from 'prop-types';

function Logo({ width, height, color }) {
    return (
        <div>
            <svg width={width} height={height} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill={color}
                    d="M10.2447 36.0021V13.9634C10.2447 12.8639 10.6445 11.9311 11.4441 11.1648C12.2437 10.3985 13.1932 10.0154 14.2927 10.0154H36.0035C37.103 10.0154 38.0445 10.4065 38.8281 11.1888C39.6117 11.9711 40.0028 12.9126 40.0015 14.0133V28.356C40.0015 28.889 39.9015 29.3974 39.7016 29.8812C39.5017 30.3649 39.2185 30.7894 38.8521 31.1545L31.156 38.8506C30.7895 39.2171 30.3644 39.5003 29.8807 39.7002C29.3969 39.9001 28.8892 40 28.3574 40H14.2427C13.1433 40 12.2024 39.6089 11.4201 38.8266C10.6379 38.0443 10.2461 37.1028 10.2447 36.0021ZM0.0719631 8.51616C-0.127934 7.41672 0.0886208 6.4259 0.721629 5.54369C1.35464 4.66147 2.22086 4.11975 3.3203 3.91852L25.0092 0.0704968C26.0753 -0.129401 27.0415 0.0958168 27.9077 0.74615C28.7739 1.39648 29.3403 2.25404 29.6068 3.31883L29.9566 4.86803C30.1232 5.53436 30.0233 6.06742 29.6568 6.46721C29.2903 6.86701 28.8572 7.10022 28.3574 7.16685C27.8577 7.23349 27.3833 7.1422 26.9342 6.89299C26.4851 6.64379 26.1766 6.18536 26.0087 5.5177L25.6588 4.01847L4.01994 7.86649L7.0184 25.0577C7.11835 25.624 7.0184 26.1318 6.71855 26.5809C6.41871 27.03 5.98559 27.3052 5.41922 27.4065C4.85284 27.5077 4.3531 27.3998 3.91999 27.0826C3.48688 26.7655 3.22035 26.3237 3.1204 25.7573L0.0719631 8.51616ZM14.2427 14.0133V36.0021H28.0076L36.0035 28.0062V14.0133H14.2427Z"
                />
                <path
                    fill={color}
                    d="M17.7341 32.8C17.4697 32.8 17.2482 32.6762 17.0696 32.4286C16.891 32.1811 16.8014 31.8751 16.8008 31.5107C16.8002 31.1462 16.8898 30.8403 17.0696 30.5927C17.2494 30.3452 17.4709 30.2214 17.7341 30.2214H27.0674C27.3319 30.2214 27.5537 30.3452 27.7329 30.5927C27.9121 30.8403 28.0014 31.1462 28.0008 31.5107C28.0002 31.8751 27.9106 32.1815 27.732 32.4299C27.5534 32.6783 27.3319 32.8017 27.0674 32.8H17.7341ZM17.7341 26.5571C17.4697 26.5571 17.2482 26.4333 17.0696 26.1858C16.891 25.9383 16.8014 25.6323 16.8008 25.2678C16.8002 24.9034 16.8898 24.5974 17.0696 24.3499C17.2494 24.1023 17.4709 23.9785 17.7341 23.9785H32.6674C32.9319 23.9785 33.1537 24.1023 33.3329 24.3499C33.5121 24.5974 33.6014 24.9034 33.6008 25.2678C33.6002 25.6323 33.5106 25.9387 33.332 26.1871C33.1534 26.4355 32.9319 26.5588 32.6674 26.5571H17.7341ZM17.7341 20.1785C17.4697 20.1785 17.2482 20.0548 17.0696 19.8072C16.891 19.5597 16.8014 19.2537 16.8008 18.8893C16.8002 18.5248 16.8898 18.2188 17.0696 17.9713C17.2494 17.7237 17.4709 17.6 17.7341 17.6H32.6674C32.9319 17.6 33.1537 17.7237 33.3329 17.9713C33.5121 18.2188 33.6014 18.5248 33.6008 18.8893C33.6002 19.2537 33.5106 19.5601 33.332 19.8085C33.1534 20.0569 32.9319 20.1803 32.6674 20.1785H17.7341Z"
                />
            </svg>
        </div>
    );
}

// Define prop types
Logo.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
};

// Set default props
Logo.defaultProps = {
    width: "40",
    height: "40",
    color: "var(--black2white)",
};

export { Logo };
