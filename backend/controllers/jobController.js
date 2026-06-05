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

    /* ===================================
   OMKLJ LOCATION SYSTEM V2
   PART 1 - NEARBY JOBS API
=================================== */

exports.getNearbyJobs = async (req, res) => {

try {

const {
latitude,
longitude
} = req.query;

if(
!latitude ||
!longitude
){
return res.status(400).json({
success:false,
message:"Location required"
});
}

const jobs =
await Job.find({
status:"active"
});

const nearbyJobs = [];

jobs.forEach(job => {

if(
job.latitude &&
job.longitude
){

const distance =
calculateDistance(

Number(latitude),
Number(longitude),

job.latitude,
job.longitude

);

nearbyJobs.push({

...job.toObject(),

distance:
distance.toFixed(1)

});

}

});

nearbyJobs.sort(
(a,b)=>
a.distance-b.distance
);

return res.status(200).json({

success:true,

count:
nearbyJobs.length,

jobs:
nearbyJobs

});

}

catch(error){

console.error(error);

return res.status(500).json({

success:false,
message:error.message

});

}

};

    /* ===================================
   DISTANCE CALCULATOR
=================================== */

function calculateDistance(
lat1,
lon1,
lat2,
lon2
){

const R = 6371;

const dLat =
(lat2-lat1) *
(Math.PI/180);

const dLon =
(lon2-lon1) *
(Math.PI/180);

const a =

Math.sin(dLat/2) *
Math.sin(dLat/2)

+

Math.cos(
lat1*(Math.PI/180)
)

*

Math.cos(
lat2*(Math.PI/180)
)

*

Math.sin(dLon/2) *
Math.sin(dLon/2);

const c =
2 *
Math.atan2(
Math.sqrt(a),
Math.sqrt(1-a)
);

return R*c;

}

  } catch (error) {

    return res.status(500).json({

      success: false,

      message: error.message

    });

  }

};
