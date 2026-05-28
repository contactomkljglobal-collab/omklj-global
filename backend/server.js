const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

const app = express();

/* CONNECT DATABASE */
connectDB();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* ROUTES */
app.use("/api/auth", require("./routes/authRoutes"));

/* TEST ROUTE */
app.get("/", (req, res) => {
  res.send("OMKLJ Backend Running 🚀");
});

/* EXPORT APP */
module.exports = app;
