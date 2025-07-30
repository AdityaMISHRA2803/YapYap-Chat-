import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { app, server } from "./lib/socket.js";

// ✅ Load environment variables from .env
dotenv.config();

// ✅ Fix __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// ✅ CORS Configuration
app.use(cors({
  origin: "http://localhost:5173", // frontend origin
  credentials: true               // allow cookies
}));

// ✅ Optional Request Logger (for debugging)
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// ✅ API Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// ✅ Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Frontend", "dist", "index.html"));
  });
}

// ✅ Start Server
const PORT = process.env.PORT || 5001;

server.listen(PORT, () => {
  console.log(`✅ Server is running on port: ${PORT}`);
  connectDB();
});
