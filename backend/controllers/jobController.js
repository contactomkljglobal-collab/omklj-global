const Job = require("../models/Job");

/*
POST JOB
POST /api/jobs/create
*/

exports.createJob = async (req, res) => {

  try {

    const {
title,
description,
category,
location,
hourlyRate,
workingHours,
workersRequired,

latitude,
longitude,
gpsCity,
gpsState,

postedBy,
postedByType
} = req.body;

    if(
!title ||
!description ||
!category ||
!location ||
!hourlyRate ||
!postedBy
) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields"
      });
    }

    const job = await Job.create({

title,
description,
category,
location,

hourlyRate,

workingHours,

workersRequired,

postedBy,

postedByType,

status:"active",

totalApplications:0

});

    return res.status(201).json({

      success: true,

      message: "Job posted successfully",

      job

    });

  } catch (error) {

    console.error(
      "CREATE JOB ERROR:",
      error
    );

    return res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

/*
GET ALL JOBS
GET /api/jobs
*/

exports.getJobs = async (req, res) => {

  try {

    const jobs = await Job.find({
      status: "active"
    }).sort({
      createdAt: -1
    });

    return res.status(200).json({

      success: true,

      count: jobs.length,

      jobs

    });

  } catch (error) {

    return res.status(500).json({

      success: false,

      message: error.message

    });

  }

};
