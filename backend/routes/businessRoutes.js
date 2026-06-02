const express = require("express");
const { registerBusiness } = require("../controllers/businessController");

const router = express.Router();

router.post("/register", registerBusiness);

module.exports = router;
