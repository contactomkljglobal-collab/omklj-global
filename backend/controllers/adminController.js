const Worker = require("../models/Worker");
const Business = require("../models/Business");
const Job = require("../models/Job");

const getDashboardStats = async (req, res) => {
  try {

    const totalWorkers =
      await Worker.countDocuments();

    const totalBusinesses =
      await Business.countDocuments();

    const totalJobs =
      await Job.countDocuments();

    const pendingWorkers =
      await Worker.countDocuments({
        verificationStatus: "pending"
      });

    res.status(200).json({
      success: true,
      stats: {
        totalWorkers,
        totalBusinesses,
        totalJobs,
        pendingWorkers
      }
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed To Load Dashboard"
    });

  }
};

const getAllWorkers = async (req, res) => {

  try {

    const workers =
      await Worker.find();

    res.status(200).json({
      success: true,
      count: workers.length,
      workers
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Failed To Fetch Workers"
    });

  }
};

module.exports = {
  getDashboardStats,
  getAllWorkers
};
