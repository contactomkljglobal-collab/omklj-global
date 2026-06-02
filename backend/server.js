const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

/* ROUTES */
const authRoutes = require("./routes/authRoutes");
const workerRoutes = require("./routes/workerRoutes");

/* APP */
const app = express();

/* CONNECT DATABASE */
connectDB();

/* MIDDLEWARE */
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* API ROUTES */

app.use("/api/auth", authRoutes);

app.use("/api/workers", workerRoutes);

/* TEST ROUTE */

app.get("/", (req, res) => {
  res.send("OMKLJ Backend Running 🚀");
});

/* HEALTH CHECK */

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "OMKLJ Server Active"
  });
});

/* EXPORT APP */

module.exports = app;
