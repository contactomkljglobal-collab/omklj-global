const express = require("express");

const {
  getWorkerDashboard,
  getBusinessDashboard,
  getPersonalDashboard
} = require("../controllers/dashboardController");

const router = express.Router();

/*
WORKER DASHBOARD
GET /api/dashboard/worker/:workerId
*/

router.get(
  "/worker/:workerId",
  getWorkerDashboard
);

/*
BUSINESS DASHBOARD
GET /api/dashboard/business/:businessId
*/

router.get(
  "/business/:businessId",
  getBusinessDashboard
);

/*
PERSONAL DASHBOARD
GET /api/dashboard/personal/:personalId
*/

router.get(
  "/personal/:personalId",
  getPersonalDashboard
);

module.exports = router;
