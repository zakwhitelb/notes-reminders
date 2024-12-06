const express = require('express');
const app = express();
const PORT = 4000;

const userRoutes = require('./routes/userRoutes'); // Import routes

app.use(express.json()); // Middleware for parsing JSON
app.use('/api/users', userRoutes); // Use routes for /api/users

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
