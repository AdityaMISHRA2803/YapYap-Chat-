# 💬 YapYap-Chat

A real-time messaging platform built with the **MERN stack** and **Socket.IO** for seamless, interactive, and secure communication.

---

## ✨ Overview

**YapYap-Chat** is a modern full-stack chat application designed for real-time messaging with smooth performance and secure authentication. Powered by **MongoDB**, **Express.js**, **React**, **Node.js**, and **Socket.IO**, the app offers persistent chat history, online status indicators, and a responsive user interface.

---

## 🚀 Features

- 🔄 **Real-Time Messaging** – Fast bidirectional message exchange using WebSockets.
- 🔐 **Authentication** – Secure sign-up, login, and session management with JWT & bcrypt.
- 🧑‍💼 **User Profiles** – Basic user profile handling and state management.
- 💬 **Message Persistence** – All chats stored in MongoDB for durability and retrieval.
- 🟢 **Online User Status** – See who is online in real-time.
- 📱 **Responsive Design** – Built with Tailwind CSS and daisyUI for all devices.

---

## 🛠️ Tech Stack

### 🔧 Backend (`/Backend`)

- **Node.js** – JavaScript runtime environment
- **Express.js** – Web framework for APIs and routing
- **MongoDB** – NoSQL document database
- **Mongoose** – ODM for schema management
- **Socket.IO** – Real-time WebSocket communication
- **bcrypt.js** – Secure password hashing
- **JWT (jsonwebtoken)** – Token-based authentication
- **dotenv** – Manage environment variables
- **cookie-parser** – Parse cookies from client
- **CORS** – Cross-Origin Resource Sharing config

📁 Backend Structure:
Backend/
├── src/
│ ├── controllers/ # Route logic
│ ├── lib/ # Utility modules
│ ├── middleware/ # Auth & error handlers
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API route definitions
│ ├── seeds/ # DB seed scripts (if used)
│ └── index.js # Entry point for server
├── .env
├── package.json


---

### 🎨 Frontend (`/Frontend`)

- **React.js** – Component-based UI library
- **Vite** – Lightning-fast build tool
- **Tailwind CSS** – Utility-first CSS framework
- **daisyUI** – Beautiful Tailwind-based components
- **Socket.IO Client** – Real-time client communication
- **Redux Toolkit (store/)** – Centralized state management (assumed based on `store/` folder)

📁 Frontend Structure:
Frontend/
├── public/
│ └── index.html # HTML entry file
├── src/
│ ├── components/ # Reusable UI components
│ ├── constants/ # Static values (e.g. URLs, config)
│ ├── lib/ # Utility functions
│ ├── pages/ # Page-level components/views
│ ├── store/ # Redux or context store logic
│ ├── App.jsx # Main app layout
│ ├── main.jsx # React entry point
│ └── index.css # Global styles
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json


---

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AdityaMISHRA2803/YapYap-Chat.git
cd YapYap-Chat
cd Backend
npm install
npm start

cd ../Frontend
npm install
npm run dev
