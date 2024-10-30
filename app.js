const express = require('express');
const path = require('path');
require('dotenv').config();  // Loads environment variables from .env file

const app = express();
const PORT = process.env.PORT || 10000;

// Tells the server to serve static files, like CSS and JavaScript, from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Defines the main route to show your homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Starts the server on the specified port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
