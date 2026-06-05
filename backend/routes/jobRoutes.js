const express = require("express");

const {
    createJob,
    getJobs,
    getNearbyJobs
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

/*
GET NEARBY JOBS
GET /api/jobs/nearby
*/

router.get(
    "/nearby",
    getNearbyJobs
);

module.exports = router;
