// System
import PropTypes from "prop-types"

function Successful({ width=20, height=20, color="var(--black2white)" }) {
    return (
        <div className="w-fit h-fit">
            <svg width={width} height={height} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill={color} d="M2.59325 17.2681L9.42989 14.7136L5.01759 10.0645L2.59325 17.2681ZM19.7818 5.3388C19.6363 5.49206 19.4666 5.5687 19.2727 5.5687C19.0788 5.5687 18.909 5.49206 18.7636 5.3388L18.6909 5.26216C18.4646 5.02375 18.1817 4.90454 17.8423 4.90454C17.5029 4.90454 17.2201 5.02375 16.9938 5.26216L12.0724 10.4477C11.927 10.601 11.7572 10.6776 11.5633 10.6776C11.3694 10.6776 11.1997 10.601 11.0542 10.4477C10.9087 10.2944 10.836 10.1156 10.836 9.91126C10.836 9.7069 10.9087 9.52809 11.0542 9.37482L15.9756 4.18929C16.4928 3.64435 17.115 3.37187 17.8423 3.37187C18.5696 3.37187 19.1919 3.64435 19.7091 4.18929L19.7818 4.26593C19.9273 4.4192 20 4.59801 20 4.80236C20 5.00672 19.9273 5.18553 19.7818 5.3388ZM7.12677 2.27346C7.27223 2.12019 7.44193 2.04356 7.63588 2.04356C7.82982 2.04356 7.99953 2.12019 8.14499 2.27346L8.2662 2.40118C8.78339 2.94613 9.04199 3.59326 9.04199 4.34256C9.04199 5.09187 8.78339 5.73899 8.2662 6.28394L8.19347 6.36057C8.04801 6.51384 7.87831 6.59048 7.68436 6.59048C7.49042 6.59048 7.32071 6.51384 7.17525 6.36057C7.02979 6.20731 6.95706 6.0285 6.95706 5.82414C6.95706 5.61979 7.02979 5.44097 7.17525 5.28771L7.24798 5.21107C7.47425 4.97266 7.58739 4.68315 7.58739 4.34256C7.58739 4.00197 7.47425 3.71246 7.24798 3.47405L7.12677 3.34633C6.98131 3.19306 6.90857 3.01425 6.90857 2.80989C6.90857 2.60554 6.98131 2.42673 7.12677 2.27346ZM11.0542 0.2299C11.1997 0.0766336 11.3694 0 11.5633 0C11.7572 0 11.927 0.0766336 12.0724 0.2299L13.1149 1.32831C13.6321 1.87326 13.8907 2.5289 13.8907 3.29524C13.8907 4.06157 13.6321 4.71721 13.1149 5.26216L10.1329 8.40413C9.98748 8.5574 9.81778 8.63403 9.62383 8.63403C9.42989 8.63403 9.26018 8.5574 9.11472 8.40413C8.96926 8.25087 8.89653 8.07205 8.89653 7.8677C8.89653 7.66334 8.96926 7.48453 9.11472 7.33127L12.0967 4.18929C12.3229 3.95088 12.4361 3.65286 12.4361 3.29524C12.4361 2.93762 12.3229 2.6396 12.0967 2.40118L11.0542 1.30277C10.9087 1.1495 10.836 0.97069 10.836 0.766334C10.836 0.561979 10.9087 0.383167 11.0542 0.2299ZM18.8121 12.4913C18.6666 12.6445 18.4969 12.7212 18.303 12.7212C18.109 12.7212 17.9393 12.6445 17.7939 12.4913L16.7514 11.3928C16.5251 11.1544 16.2423 11.0352 15.9029 11.0352C15.5635 11.0352 15.2806 11.1544 15.0543 11.3928L14.0119 12.4913C13.8664 12.6445 13.6967 12.7212 13.5028 12.7212C13.3088 12.7212 13.1391 12.6445 12.9937 12.4913C12.8482 12.338 12.7755 12.1592 12.7755 11.9548C12.7755 11.7505 12.8482 11.5716 12.9937 11.4184L14.0361 10.32C14.5533 9.77502 15.1756 9.50255 15.9029 9.50255C16.6302 9.50255 17.2524 9.77502 17.7696 10.32L18.8121 11.4184C18.9575 11.5716 19.0303 11.7505 19.0303 11.9548C19.0303 12.1592 18.9575 12.338 18.8121 12.4913ZM0.0719417 18.5964L3.73269 7.8677C3.8135 7.64631 3.93892 7.47602 4.10895 7.35681C4.27898 7.2376 4.46064 7.178 4.65394 7.178C4.78324 7.178 4.90446 7.20354 5.01759 7.25463C5.13073 7.30572 5.23578 7.38235 5.33276 7.48453L11.8785 14.3815C11.9754 14.4837 12.0482 14.5944 12.0967 14.7136C12.1451 14.8328 12.1694 14.9606 12.1694 15.0968C12.1694 15.3011 12.1128 15.4929 11.9997 15.672C11.8865 15.8512 11.7249 15.983 11.5148 16.0675L1.3326 19.9247C1.13865 20.0098 0.952784 20.0228 0.775 19.9635C0.597215 19.9043 0.443674 19.8062 0.314376 19.6692C0.185077 19.5323 0.0919828 19.3706 0.0350917 19.1839C-0.0217994 18.9973 -0.00951603 18.8014 0.0719417 18.5964Z"/>
            </svg>
        </div>
    )
}

// Define prop types
Successful.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
};

export { Successful };
