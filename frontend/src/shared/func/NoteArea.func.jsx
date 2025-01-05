function truncateText (text = "", maxLength = 50) {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}

function validateNoteData(setErrorMessage, data) {
    const errors = [];
    // Check for title
    if (!data.title || data.title.trim() === "") errors.push("No title");
    // Check for day
    if (!data.day || data.day.trim() === "") errors.push("No day");
    // Check for hour
    if (!data.hour || data.hour === "00" || data.hour === 0) {
        if(data.min === "00" && data.min === 0) errors.push("No hour");
    }
    if(overdueDate(data.day, data.hour, data.min)) errors.push("Date out of bounds!");
    // If there are errors, set the error message and return false
    if (errors.length > 0) {
        setErrorMessage(errors.join(" - ")); // Combine all errors into a single string
        return false;
    }

    return true; // Data is valid
}

function isNowDate(day, hour, min) {
    const now = new Date();
    // Get current day, month, year, hour, and minute as strings with leading zeros
    const nowDay = String(now.getDate()).padStart(2, "0");
    const nowMonth = String(now.getMonth() + 1).padStart(2, "0");
    const nowYear = String(now.getFullYear());
    const nowHour = String(now.getHours()).padStart(2, "0");
    const nowMin = String(now.getMinutes()).padStart(2, "0");
    // Parse the input day string (day = "DD-MM-YYYY") into its components
    const noteDate = day.split("-");
    const noteDay = noteDate[1];
    const noteMonth = noteDate[0];
    const noteYear = noteDate[2];

    // Compare year, month, day, hour, and minute
    if (nowYear != noteYear) return false;
    if (nowMonth != noteMonth) return false;
    if (nowDay != noteDay) return false;
    if (nowHour != hour) return false;
    if (nowMin != min) return false;
    if(now.getSeconds() !== 0) return false;

    return true; // Dates and times match
}

function overdueDate(day, hour, min) {
    const now = new Date(); // Get current date and time

    // Parse the input day (formatted as "DD-MM-YYYY") into components
    const [noteDay, noteMonth, noteYear] = day.split("-").map(Number);

    // Create a Date object for the provided input
    const inputDate = new Date(noteYear, noteMonth - 1, noteDay, hour, min);

    // Compare inputDate with the current date and time
    return inputDate <= now; // Return true if inputDate is <= now
}

export { truncateText, validateNoteData, isNowDate, overdueDate };