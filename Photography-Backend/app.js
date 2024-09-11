const express = require('express');
const app = express(); // Initialize an Express app
const cors = require('cors'); // Import CORS for cross-origin requests
const controller = require('./controller'); // Import the controller

app.use(cors()); // Enable CORS for all routes

// Middleware to parse URL-encoded data from form submissions
app.use(
    express.urlencoded({
        extended:true,
    })
);

// Middleware to parse incoming JSON requests
app.use(express.json());

// Handle POST requests to the root URL
app.post('/', (req, res) => {
    // Call the addUser function from the controller, passing request body and callback
    controller.addUser(req.body, (callback) => {
        res.send();// Send response after callback is executed
    });
});

module.exports = app; // Export the Express app