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
const approveWorker = async (req, res) => {

  try {

    const worker =
      await Worker.findByIdAndUpdate(
        req.params.id,
        {
          isVerified: true,
          verificationStatus: "approved"
        },
        { new: true }
      );

    res.status(200).json({
      success: true,
      message: "Worker Approved",
      worker
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Approval Failed"
    });

  }
};

const rejectWorker = async (req, res) => {

  try {

    const worker =
      await Worker.findByIdAndUpdate(
        req.params.id,
        {
          isVerified: false,
          verificationStatus: "rejected"
        },
        { new: true }
      );

    res.status(200).json({
      success: true,
      message: "Worker Rejected",
      worker
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Rejection Failed"
    });

  }
};
module.exports = {
  getDashboardStats,
  getAllWorkers,
  approveWorker,
  rejectWorker
};
