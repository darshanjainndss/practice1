/*
====================================================
Express Production Server (Fully Explained)
====================================================

Run commands:
1. npm init -y
2. npm install express cors dotenv morgan
3. Add "type": "module" in package.json
4. node server.js

Server URL:
http://localhost:7000
====================================================
*/

// ===============================
// Import Required Libraries
// ===============================

// Express → Main web framework to create server
import express from "express";
import userRoutes from "./routes/user.js";
import connectDB from '../practice-revision/constants/connection .js';


// CORS → Allows frontend/mobile apps to call this server
// import cors from 'cors';

// dotenv → Loads environment variables from .env file
import dotenv from "dotenv";

// morgan → Logs API requests in terminal
// Why Morgan is used?

// When your server runs, many requests come from:
// Mobile app
// Browser
// Postman

import morgan from 'morgan';

// ===============================
// Load Environment Variables
// ===============================
dotenv.config();
connectDB();
// ===============================
// Create Express Application
// ===============================
// app = main server object
const app = express();

// ===============================
// Port Configuration
// ===============================
// Reads PORT from .env file
// If not available, default = 7000
const PORT = process.env.PORT || 7000;

// ===============================
// Global Middlewares
// ===============================

// Enable CORS so mobile/web apps can access API
// app.use(cors());

// Parse incoming JSON data
// Without this, req.body will be undefined
app.use(express.json());

// Parse URL encoded data (form data)
app.use(express.urlencoded({ extended: true }));

// Log every API request in terminal
app.use(morgan('dev'));    //GET /.well-known/appspecific/com.chrome.devtools.json 404 0.519 ms - 45

// ==================================================
// What is req and res?
// ==================================================
//
// req (Request)
// → Data coming from client to server
// Examples:
// req.body     → POST data
// req.params   → URL params
// req.query    → Query string
//
// res (Response)
// → Data sent back from server to client
// Examples:
// res.send()
// res.json()
// res.status()
//

// ===============================
// Test Route (Health Check)
// ===============================
// URL: GET http://localhost:7000/
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running successfully",
    port: PORT,
  });
});

// ===============================
// Example GET API
// ===============================
// URL: GET /api/status ----it can be tested on the browser by going to http://localhost:7000/api/status
app.get("/api/status", (req, res) => {
  res.json({
    status: "OK",
    serverTime: new Date(),
  });
});

// ===============================
// Example POST API
// ===============================
// URL: POST /api/user   ----it is not seen on the browser because it is a POST request, we can test it using Postman or curl
// Body:
// {
//   "name": "Darshan",
//   "email": "test@gmail.com"
// }
app.post("/api/user", (req, res) => {
  // Getting data sent by client
  const { name, email } = req.body;

  // Basic validation
  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Name and email are required",
    });
  }

  // Sending response back to client
  res.status(201).json({
    success: true,
    message: "User data received successfully",
    data: {
      name,
      email,
    },
  });
});

// ===============================
// Mount User Routes
// ===============================
app.use("/api/users", userRoutes);

// ===============================
// 404 Route Handler
// ===============================
// This runs if no route matches
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// ===============================
// Global Error Handler
// ===============================
// Handles unexpected server errors
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// ===============================
// Start the Server
// ===============================
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
