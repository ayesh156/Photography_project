# Photography Landing Page

This repository contains a Photography Landing Page project with a React frontend and a Node.js backend.


## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ayesh156/Photography_project.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Photography_project
    ```

3. **Install dependencies:**

    - **For the frontend (React):**

      Navigate to the `Photography-Landing-Page` directory and install dependencies:

        ```bash
        cd Photography-Landing-Page
        npm install
        ```

    - **For the backend (Node.js):**

      Navigate to the `Photography-Backend` directory and install dependencies:

        ```bash
        cd ../Photography-Backend
        npm install
        ```

### Running the Project

1. **Start the React frontend:**

   Navigate to the `Photography-Landing-Page` directory and run:

    ```bash
    cd ../Photography-Landing-Page
    npm run dev
    ```

   This will start the React development server.

2. **Start the Node.js backend:**

   Navigate to the `Photography-Backend` directory and run:

    ```bash
    cd ../Photography-Backend
    nodemon
    ```

   This will start the Node.js server using Nodemon for auto-reloading.

### Configuration

- **Sending Email Address:**

  To change the sending email address, update the `transporter` object in the `emailConfig.js` file located in the `Photography-Backend` directory.

- **Receiving Email Address:**

  To change the receiving email address, modify the `mailOptions` object in the `controller.js` file located in the `Photography-Backend` directory.

### Contributing

Feel free to open issues or submit pull requests. For significant changes, please open an issue first to discuss what you would like to change.


Happy coding!
