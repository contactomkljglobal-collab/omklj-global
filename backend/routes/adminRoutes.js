const express = require("express");

const {
  getAllWorkers,
  getPendingWorkers,
  approveWorker,
  rejectWorker
} = require("../controllers/adminController");

const router = express.Router();

/*
GET ALL WORKERS
GET /api/admin/workers
*/

router.get(
  "/workers",
  getAllWorkers
);

/*
GET PENDING WORKERS
GET /api/admin/pending-workers
*/

router.get(
  "/pending-workers",
  getPendingWorkers
);

/*
APPROVE WORKER
PUT /api/admin/approve/:id
*/

router.put(
  "/approve/:id",
  approveWorker
);

/*
REJECT WORKER
PUT /api/admin/reject/:id
*/

router.put(
  "/reject/:id",
  rejectWorker
);

module.exports = router;
