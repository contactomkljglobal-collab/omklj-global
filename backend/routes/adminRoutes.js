const express = require("express");

const router = express.Router();

const {
  getDashboardStats,
  getAllWorkers,
  approveWorker,
  rejectWorker
} = require("../controllers/adminController");

router.get(
  "/dashboard",
  getDashboardStats
);

router.get(
  "/workers",
  getAllWorkers
);
router.put(
  "/workers/:id/approve",
  approveWorker
);

router.put(
  "/workers/:id/reject",
  rejectWorker
);
module.exports = router;
