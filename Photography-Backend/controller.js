const transporter = require('./emailConfig'); // Import your email configuration


// Function to add a new user
const addUser = (req, res, next) => {
    const { name, email, phone, comment } = req.body;

    // Basic validation
    if (!name || !email || !phone || !comment) {
        return res.status(200).json({
            status: 2,
            message: 'All fields are required' , // Return error if fields are missing
        });
    }
    // Create a new user object
    const newUser = {
        name,
        email,
        phone,
        comment
    };

    // Set up email options
    const mailOptions = {
        from: 'nebulainfinitex@gmail.com', // Sender address
        to: 'ayeshchathuranga531@gmail.com', // List of recipients
        subject: 'New User Added', // Subject line
        text: `A new user has been added:\n\nName: ${newUser.name}\nEmail: ${newUser.email}\nPhone: ${newUser.phone}\nComment: ${newUser.comment}`, // Plain text body
        html: `<div style="background-color: #ecf0f1; font-size: 16px; padding: 15px 20px; font-weight: 600; font-family: 'Arial',sans-serif;">
    <p>A new user has been added:</p>
    <ul style="list-style-type: none; padding-left: 15px;">
        <li>Name: ${newUser.name}</li>
        <li>Email: ${newUser.email}</li>
        <li>Phone: ${newUser.phone}</li>
        <li>Comment: ${newUser.comment}</li>
    </ul>
</div>` // HTML body content
    };

    // Send email using transporter
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return (
                // Send the new user data as a JSON response
                res.status(200).json({
                    status: 2,
                    message: error,
                })
            );
        }
        // Respond with success message if email is sent
        res.status(201).json({
            status: 1,
            message: "Email Send Successfully!",
        });
    });
};

module.exports = {
    addUser, // Export the addUser function for use in other parts of the application
};
