# Transaction Dashboard

 It is a full-stack application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to view, search, and analyze product transactions.

## Features

- **Transaction Table**: Displays a list of transactions with search functionality.
- **Statistics**: Shows total sales, number of sold items, and unsold items for a selected month.
- **Bar Chart**: Visualizes the distribution of transaction prices.
- **Pie Chart**: Displays the count of transactions per category.
- **Responsive Design**: The application is designed to be responsive and user-friendly.

## Technologies Used

- **Frontend**: React, Chart.js, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (using Mongoose)
- **Styling**: CSS for styling the components

  ## Getting Started

  To run this project locally, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed locally or access to MongoDB Atlas.

### Installation

1. **Clone the repository**:
   git clone https://github.com/Vaishnavi-456/Transaction_Dashboard.git
   
2. **Navigate to the project directory**:
   cd Transaction_Dashboard

3. **Install server dependencies**:
   cd backend
   npm install

4. **Set up your environment variables**:
   **Create a .env file in the backend directory and include your database URL**:
   PORT=3000
   DB_URL=your_mongodb_connection_string

5. **Run the backend server**:
   npm start

6. **Install frontend dependencies**:
   cd frontend
   npm install

7. **Run the frontend application**:
  npm start

  Open your browser and navigate to http://localhost:3001 to view the application.
