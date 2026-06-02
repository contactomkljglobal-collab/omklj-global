const express = require("express");
const {
  registerPersonal
} = require("../controllers/personalController");

const router = express.Router();

/*
REGISTER PERSONAL EMPLOYER
POST /api/personal/register
*/

router.post(
  "/register",
  registerPersonal
);

module.exports = router;
