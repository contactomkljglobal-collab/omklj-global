const Worker = require("../models/Worker");
const Business = require("../models/Business");
const PersonalEmployer = require("../models/PersonalEmployer");
const Job = require("../models/Job");
const Application = require("../models/Application");

/*
WORKER DASHBOARD
GET /api/dashboard/worker/:workerId
*/

exports.getWorkerDashboard = async (req, res) => {

  try {

    const worker =
      await Worker.findById(
        req.params.workerId
      );

    if (!worker) {

      return res.status(404).json({

        success: false,

        message: "Worker not found"

      });

    }

    const applications =
      await Application.countDocuments({

        workerId: worker._id

      });

    return res.status(200).json({

      success: true,

      worker,

      stats: {

        trustScore:
          worker.trustScore || 0,

        applications

      }

    });

  } catch (error) {

    return res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

/*
BUSINESS DASHBOARD
GET /api/dashboard/business/:businessId
*/

exports.getBusinessDashboard =
async (req, res) => {

  try {

    const business =
      await Business.findById(
        req.params.businessId
      );

    if (!business) {

      return res.status(404).json({

        success: false,

        message: "Business not found"

      });

    }

    const jobs =
      await Job.countDocuments({

        employerId:
          business._id

      });

    return res.status(200).json({

      success: true,

      business,

      stats: {

        totalJobs: jobs

      }

    });

  } catch (error) {

    return res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

/*
PERSONAL DASHBOARD
GET /api/dashboard/personal/:personalId
*/

exports.getPersonalDashboard =
async (req, res) => {

  try {

    const personal =
      await PersonalEmployer.findById(
        req.params.personalId
      );

    if (!personal) {

      return res.status(404).json({

        success: false,

        message: "Personal Employer not found"

      });

    }

    const jobs =
      await Job.countDocuments({

        employerId:
          personal._id

      });

    return res.status(200).json({

      success: true,

      personal,

      stats: {

        totalJobs: jobs

      }

    });

  } catch (error) {

    return res.status(500).json({

      success: false,

      message: error.message

    });

  }

};
