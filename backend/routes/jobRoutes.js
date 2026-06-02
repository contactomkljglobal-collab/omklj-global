const express = require("express");

const {
  createJob,
  getJobs
} = require("../controllers/jobController");

const router = express.Router();

/*
POST JOB
POST /api/jobs/create
*/

router.post(
  "/create",
  createJob
);

/*
GET ALL JOBS
GET /api/jobs
*/

router.get(
  "/",
  getJobs
);

module.exports = router;
