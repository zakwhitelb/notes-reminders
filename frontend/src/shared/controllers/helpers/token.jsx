export const getToken = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
        throw new Error("Authentication token is missing. Please log in.");
    }
    return token;
};