require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const noteRoute = require("./routes/noteRoute")

const app = express();
const PORT = process.env.PORT || 4000; // Use dynamic port from env if available

// Middleware
app.use(express.json());

// Database Connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Added to avoid deprecation warnings
});

const DB = mongoose.connection;
DB.on("error", (error) => console.error("Database Connection Error:", error));
DB.once("open", () => console.log("Database Connected Successfully"));

// Default Route
app.get("/", (req, res) => {
    res.send("Welcome to the API!");
});

// Routes
app.use("/users", userRoute);
app.use("/notes", noteRoute);

// Server Listener
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

// Error Handling for Uncaught Exceptions & Rejections
process.on("uncaughtException", (err) => {
    console.error("There was an uncaught error:", err);
    process.exit(1); // Exit with failure
});

process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
});