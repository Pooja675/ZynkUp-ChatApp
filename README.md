# ZynkUp - Realtime Chat App with Group Chats

<div align="center">
  <img width="800" alt="zynkup" src="https://github.com/user-attachments/assets/e8c33d1a-1f96-4783-9bd3-cb309fba8d1f" />

  <p><em>Full stack responsive chat app using sockets for realtime communication.</em></p>
  
  [![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC)](https://tailwindcss.com/)
  [![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
</div>

## 🚀 Overview

ZynkUp Chat App – A real-time messaging platform with secure authentication, personal and group chats, file and image sharing, easy downloads, emoji support, and a fully responsive design for seamless communication across devices.

## ✨ Key Features

- **Secure Authentication**: Protects user accounts with reliable login and session management.
- **Real-Time Messaging**: Instant communication with personal and group chat support.
- **File & Image Sharing**: Easily upload, share, and download files or images.
- **Emoji Support**: Make conversations fun and expressive with emoji reactions.
- **Profile Customization**: Update profile details and personalize your experience.
- **Seamless State Management**: Ensures smooth navigation and consistent app behavior.
- **Scalable Architecture**: Structured backend and database design for efficient data handling.

## 🛠️ Tech Stack

### Frontend

- **React 18**: Component-based UI development
- **TailwindCSS**: Utility-first CSS framework for styling
- **React Router**: Client-side routing
- **Socket.io**: Integrated real-time messaging
- **Zustand**: State management
- **JWT Authentication**: Secure user authentication

### Backend

- **Node.js**: JavaScript runtime
- **Express**: Web application framework
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Tokens for authentication

### Tools

- **Vite**: Next-generation frontend tooling
- **ESLint**: Code quality and style checking
- **Render**: Frontend deployment and hosting
- **Git & GitHub**: Version control and collaboration

## 📸 Screenshots

<div align="center">
 
   <img  height="400" alt="LoginPage" src="https://github.com/user-attachments/assets/a8092eb4-fb2b-4d9a-b3f3-ad0bbfddc051" />
   <img  height="400" alt="profile" src="https://github.com/user-attachments/assets/a0822a37-c608-499d-8a84-a7a05b72dc76" />
   <img  height="400" alt="directMessage" src="https://github.com/user-attachments/assets/42ae7521-681a-408a-a853-a2b7f1860df3" />
   <img  height="400" alt="groupMessages" src="https://github.com/user-attachments/assets/d890523a-0cd1-4e18-86c4-dc6ce646bef1" />

</div>

## 🌐 Live Demo

Experience ZynkUp Chat App in action: [https://zynkup-chatapp.onrender.com/auth](https://zynkup-chatapp.onrender.com/auth)

### Demo Accounts

- **Sender User**:
  - Email: pooja123@gmail.com
  - Password: Pooja@123
- **Receiver User**:
  - Email: aarti123@gmail.com 
  - Password: Aarti@123

## 📥 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Frontend Setup

1. Clone the repository
   ```bash
   git clone https://github.com/Pooja675/ZynkUp-ChatApp.git
   ```
2. Navigate to the client directory
   ```bash
   cd zynkup/zynkup
   ```
3. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```
4. Create a `.env` file in the client directory with the following variables:
   ```
   VITE_SERVER_URL=http://localhost:5555
   ```
5. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```
6. Open your browser and navigate to `http://localhost:5173`

### Backend Setup

1. Clone the backend repository
   ```bash
   git clone https://github.com/Pooja675/ZynkUp-ChatApp.git
   ```
2. Navigate to the server directory
   ```bash
   cd zynkup/server
   ```
3. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```
4. Create a `.env` file with the following variables:
   ```
   DATABASE_URL=your_mongodb_connection_string/or ask the repo owner for the URI
   PORT=5555
   JWT_SECRET=your_jwt_secret
   ORIGIN=http://localhost:5173
   NODE_ENV = production
   ```
5. Start the server
   ```bash
   npm start
   # or
   yarn start
   ```


## Note:

You might need to run both the client and server simultaneously for fetching data in your local machine.

## 📁 Project Structure

```
client/
├── public/             # Static files
├── src/
│   ├── components/     # Reusable UI components
│   ├── context/        # React Context providers
│   ├── lib/            # Api-clients
│   ├── pages/          # Main application pages
│   ├── store/          # State management
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── index.html          # HTML template
└── vite.config.js      # Vite configuration

server/
├── controllers/        # Request handlers
├── middleware/         # Custom middleware
├── models/             # Database models
├── routes/             # API routes
├── uploads/            # Uploaded files
|—— index.js            # Server entry point
└── socket.js           # Integrated real-time messages

```
### 🎯 Result and Conclusion

 ZynkUp Chat App delivers a seamless real-time communication experience with secure authentication, responsive design, and engaging features like file sharing, group chats, and emoji support. It provides a reliable, user-friendly platform for smooth and interactive conversations across devices.




