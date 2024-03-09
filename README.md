# trackMyTransit
Overview

trackMyTransit is a web application built to help users track their transit shipments, including their status and details of each container. It allows users to log in securely and access information about their shipments conveniently.
Features

    User Authentication: Users can securely log in to their accounts to access their transit information.
    Transit Tracking: Users can track the status of their transit shipments.
    Container Details: Detailed information about each container in transit is available.
    MERN Stack with TypeScript: The application is built using MongoDB, Express.js, React.js, Node.js, and TypeScript, providing a robust and scalable development environment.

Installation

To install and run trackMyTransit on your local machine, follow these steps:

    Clone the repository:

bash

git clone https://github.com/divyanshu1810/trackMyTransit.git

    Navigate to the project directory:

bash

cd trackMyTransit

    Install dependencies for both the server and client:

bash

cd server
npm install
cd ../client
npm install

    Set up environment variables:

        Create a .env file in the server directory.

        Define the following environment variables:

        makefile

        PORT=5000
        MONGODB_URI=your_mongodb_connection_string
        SECRET_KEY=your_secret_key

    Run the server:

bash

cd ../server
npm start

    Run the client:

bash

cd ../client
npm start

    Access the application in your browser at http://localhost:3000.

Usage

    Sign up for a new account if you're a new user, or log in if you already have an account.
    Once logged in, you'll be directed to the dashboard where you can see the status of your transit shipments.
    Click on a shipment to view detailed information about each container.

Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or submit a pull request.
License

This project is licensed under the MIT License.
Contact

For any inquiries or support, please contact us.
