const express = require('express'); // Import the Express framework
const router = express.Router();    // Create a new router instance
const controller = require('./controller'); // Import the controller file

router.post('/', controller.addUser); // Define a POST route at '/' that calls the addUser function from the controller

module.exports = router; // Export the router to use in other parts of the application
