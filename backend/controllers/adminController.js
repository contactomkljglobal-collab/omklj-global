const Worker = require("../models/Worker");

/*
GET ALL WORKERS
GET /api/admin/workers
*/

exports.getAllWorkers = async (
  req,
  res
) => {

  try {

    const workers =
      await Worker.find()
      .sort({
        createdAt: -1
      });

    res.status(200).json({

      success: true,

      count: workers.length,

      workers

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

/*
GET PENDING WORKERS
GET /api/admin/pending-workers
*/

exports.getPendingWorkers =
async (req, res) => {

  try {

    const workers =
      await Worker.find({

        verificationStatus:
          "pending"

      });

    res.status(200).json({

      success: true,

      count: workers.length,

      workers

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

/*
APPROVE WORKER
PUT /api/admin/approve/:id
*/

exports.approveWorker =
async (req, res) => {

  try {

    const worker =
      await Worker.findByIdAndUpdate(

        req.params.id,

        {
          verificationStatus:
            "approved",

          isVerified: true
        },

        {
          new: true
        }

      );

    if (!worker) {

      return res.status(404).json({

        success: false,

        message:
          "Worker not found"

      });

    }

    res.status(200).json({

      success: true,

      message:
        "Worker approved",

      worker

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

/*
REJECT WORKER
PUT /api/admin/reject/:id
*/

exports.rejectWorker =
async (req, res) => {

  try {

    const worker =
      await Worker.findByIdAndUpdate(

        req.params.id,

        {
          verificationStatus:
            "rejected",

          isVerified: false
        },

        {
          new: true
        }

      );

    if (!worker) {

      return res.status(404).json({

        success: false,

        message:
          "Worker not found"

      });

    }

    res.status(200).json({

      success: true,

      message:
        "Worker rejected",

      worker

    });

  } catch (error) {

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};
