const express = require("express");
const router = express.Router();

const {
  registerUser
} = require("../controllers/authController");

// Test route
router.get("/", (req, res) => {
  res.send("Auth Route Working");
});

// Test register route
router.get("/register", (req, res) => {
  res.send("Register Route Working");
});

// Actual register route
router.post("/register", registerUser);

module.exports = router;
