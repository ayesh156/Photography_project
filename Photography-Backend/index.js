const express = require('express'); // Import the Express framework
const app = express();              // Create an Express application
const cors = require('cors');       // Import CORS to enable cross-origin resource sharing
const port = 3001;                  // Set the port number for the server
const host = 'localhost';           // Define the host address
const router = require('./router'); // Import the router module

app.use(cors());                    // Allow cross-origin requests
app.use(express.json());            // Enable JSON parsing for incoming requests

// Start the server and listen on the specified port and host
const server = app.listen(port, host, () => {
    console.log(`Node server is listening to ${server.address().port}`);
});

app.use('/api', router);            // Mount the router under the '/api' path
