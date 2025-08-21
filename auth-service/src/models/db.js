const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      // Options are no longer needed in Mongoose 6+, but you can still keep them if using older versions
    });
    console.log("✅ MongoDB connected successfully...");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
