const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

/* =========================
   ROUTES
========================= */

const authRoutes = require("./routes/authRoutes");

const workerRoutes = require("./routes/workerRoutes");

const businessRoutes = require("./routes/businessRoutes");

const personalRoutes = require("./routes/personalRoutes");

const jobRoutes = require("./routes/jobRoutes");

const applicationRoutes =
require("./routes/applicationRoutes");

const dashboardRoutes =
require("./routes/dashboardRoutes");

/* =========================
   APP
========================= */

const app = express();

/* =========================
   DATABASE
========================= */

connectDB();

/* =========================
   MIDDLEWARE
========================= */

app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
);

/* =========================
   API ROUTES
========================= */

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/workers",
  workerRoutes
);

app.use(
  "/api/business",
  businessRoutes
);

app.use(
  "/api/personal",
  personalRoutes
);

app.use(
  "/api/jobs",
  jobRoutes
);

app.use(
  "/api/applications",
  applicationRoutes
);

app.use(
  "/api/dashboard",
  dashboardRoutes
);

/* =========================
   ROOT ROUTE
========================= */

app.get("/", (req, res) => {

  res.send(
    "OMKLJ Backend Running 🚀"
  );

});

/* =========================
   HEALTH CHECK
========================= */

app.get("/health", (req, res) => {

  res.status(200).json({

    success: true,

    message:
      "OMKLJ Server Active"

  });

});

/* =========================
   EXPORT
========================= */

module.exports = app;
