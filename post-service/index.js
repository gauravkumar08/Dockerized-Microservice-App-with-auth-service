const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://mongo:27017/postsdb"; // "mongo" is the service name from docker-compose

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected to Post Service"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit if DB connection fails
  });

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Post Service is running and connected to MongoDB" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("🔥 Server error:", err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
const PORT = process.env.PORT || 5001; // Matches docker-compose.yml
app.listen(PORT, () => {
  console.log(`🚀 Post Service running on port ${PORT}`);
});
