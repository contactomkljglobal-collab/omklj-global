const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

/* CONNECT DATABASE */
connectDB();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* HOME ROUTE */
app.get("/", (req, res) => {
  res.send("OMKLJ Backend Running 🚀");
});

/* AUTH ROUTES */
app.use("/api/auth", authRoutes);

/* START SERVER */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
