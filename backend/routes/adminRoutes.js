const express = require("express");

const router = express.Router();

const {
  getDashboardStats,
  getAllWorkers
} = require("../controllers/adminController");

router.get(
  "/dashboard",
  getDashboardStats
);

router.get(
  "/workers",
  getAllWorkers
);

module.exports = router;
