const express = require("express");

const {
  registerWorker
} = require(
  "../controllers/workerController"
);

const router = express.Router();

/*
POST
/api/workers/register
*/

router.post(
  "/register",
  registerWorker
);

module.exports = router;
