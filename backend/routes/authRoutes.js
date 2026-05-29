const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser
} = require("../controllers/authController");

// Register User
router.post("/register", registerUser);

// Login User
router.post("/login", loginUser);

// Test Route
router.get("/", (req, res) => {
  res.send("Auth API Running");
});

module.exports = router;
