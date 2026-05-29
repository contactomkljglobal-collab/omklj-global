const express = require("express");
const router = express.Router();

const { registerUser } = require("../controllers/authController");

// Test Route
router.get("/", (req, res) => {
  res.send("Auth Route Working ✅");
});

// Test Register Route
router.get("/register", (req, res) => {
  res.send("Register API Working ✅");
});

// Actual Register API
router.post("/register", registerUser);

module.exports = router;
