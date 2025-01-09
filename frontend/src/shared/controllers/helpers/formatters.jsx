export const formatDateToISO = (date) => {
    if (!date) return ""; // Return empty string for empty or invalid dates
    const [day, month, year] = date.split("-");
    return `${year}-${month}-${day}`;
};
