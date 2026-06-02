const express = require("express");

const {
  applyForJob,
  getJobApplications
} = require("../controllers/applicationController");

const router = express.Router();

/*
APPLY FOR JOB
POST /api/applications/apply
*/

router.post(
  "/apply",
  applyForJob
);

/*
GET APPLICATIONS FOR JOB
GET /api/applications/job/:jobId
*/

router.get(
  "/job/:jobId",
  getJobApplications
);

module.exports = router;
