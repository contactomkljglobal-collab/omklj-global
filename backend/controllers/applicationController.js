const Application = require("../models/Application");
const Job = require("../models/Job");

/*
APPLY FOR JOB
POST /api/applications/apply
*/

exports.applyForJob = async (req, res) => {

  try {

    const {
      workerId,
      jobId
    } = req.body;

    if (!workerId || !jobId) {

      return res.status(400).json({

        success: false,
        message: "Worker ID and Job ID are required"

      });

    }

    const job = await Job.findById(jobId);

    if (!job) {

      return res.status(404).json({

        success: false,
        message: "Job not found"

      });

    }

    const existingApplication =
      await Application.findOne({

        workerId,
        jobId

      });

    if (existingApplication) {

      return res.status(400).json({

        success: false,
        message: "Already applied for this job"

      });

    }

    const application =
      await Application.create({

        workerId,
        jobId,

        status: "pending",

        appliedAt: new Date()

      });

    await Job.findByIdAndUpdate(

      jobId,

      {
        $inc: {
          totalApplications: 1
        }
      }

    );

    return res.status(201).json({

      success: true,

      message: "Application submitted successfully",

      application

    });

  } catch (error) {

    console.error(
      "APPLY JOB ERROR:",
      error
    );

    return res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

/*
GET APPLICATIONS FOR A JOB
GET /api/applications/job/:jobId
*/

exports.getJobApplications = async (req, res) => {

  try {

    const applications =
      await Application.find({

        jobId: req.params.jobId

      });

    return res.status(200).json({

      success: true,

      count: applications.length,

      applications

    });

  } catch (error) {

    return res.status(500).json({

      success: false,

      message: error.message

    });

  }

};
