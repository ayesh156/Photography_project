const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider
    auth: {
        user: 'nebulainfinitex@gmail.com', // Your email address
        pass: 'inkdlycpnwbmdcdd'    // Your email password or app-specific password
    }
});

module.exports = transporter;  // Export the emailConfig to use in other parts of the application
