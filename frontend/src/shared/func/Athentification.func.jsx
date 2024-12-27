import validator from "validator";

/**
 * Determines the background color based on the strength of the password.
 *
 * @param {string} password - The password to evaluate.
 * @returns {string} - The background color for the password strength.
 */
function getPasswordStrengthColor(password) {
    if (validator.isStrongPassword(password, { minLength: 8, minLowercase: 0, minUppercase: 1, minNumbers: 1, minSymbols: 1 })) {
        return "bg-[var(--green)]"; // Strong password
    }
    if (validator.isStrongPassword(password, { minLength: 8, minLowercase: 0, minUppercase: 1, minNumbers: 0, minSymbols: 0 })) {
        return "bg-[var(--intermediate6)]"; // Uppercase only
    }
    if (validator.isStrongPassword(password, { minLength: 8, minLowercase: 0, minUppercase: 0, minNumbers: 1, minSymbols: 0 })) {
        return "bg-[var(--intermediate5)]"; // Numbers only
    }
    if (validator.isStrongPassword(password, { minLength: 8, minLowercase: 0, minUppercase: 0, minNumbers: 0, minSymbols: 1 })) {
        return "bg-[var(--intermediate4)]"; // Symbols only
    }
    if (validator.isStrongPassword(password, { minLength: 8, minLowercase: 0, minUppercase: 0, minNumbers: 0, minSymbols: 0 })) {
        return "bg-[var(--yellow)]"; // Minimum length
    }
    if (validator.isStrongPassword(password, { minLength: 0, minLowercase: 0, minUppercase: 0, minNumbers: 0, minSymbols: 1 })) {
        return "bg-[var(--intermediate3)]"; // Only symbols
    }
    if (validator.isStrongPassword(password, { minLength: 0, minLowercase: 0, minUppercase: 0, minNumbers: 1, minSymbols: 0 })) {
        return "bg-[var(--intermediate2)]"; // Only numbers
    }
    if (validator.isStrongPassword(password, { minLength: 0, minLowercase: 0, minUppercase: 1, minNumbers: 0, minSymbols: 0 })) {
        return "bg-[var(--intermediate1)]"; // Only uppercase
    }
    return "bg-[var(--red)]"; // Weak password
}

/**
 * Checks if the given password strength color is valid.
 *
 * @param {string} color - The background color representing the password strength.
 * @returns {boolean} - Returns true if the color represents a valid password strength.
 */
function isValidPasswordColor(color) {
    const validColors = [
        "bg-[var(--yellow)]",
        "bg-[var(--intermediate4)]",
        "bg-[var(--intermediate5)]",
        "bg-[var(--intermediate6)]",
        "bg-[var(--green)]",
    ];
    return validColors.includes(color);
}

/**
 * Checks if the given username is valid.
 *
 * @param {string} name - The username to validate.
 * @returns {boolean} - Returns true if the username is valid (not empty).
 */
function isValidUserName(name) {
    if(name === undefined) return false;
    return name.length > 0;
}

/**
 * Checks if the given email is valid.
 *
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns true if the email is valid.
 */
function isValidEmail(email) {
    if(email === undefined) return false;
    return validator.isEmail(email);
}

export { getPasswordStrengthColor, isValidPasswordColor, isValidUserName, isValidEmail };
