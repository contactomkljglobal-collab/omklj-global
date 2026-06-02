const Worker = require("../models/Worker");

const registerWorker = async (req, res) => {
  try {
    const worker = await Worker.create(req.body);

    res.status(201).json({
      success: true,
      message: "Worker Registered Successfully",
      worker
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Worker Registration Failed"
    });
  }
};

module.exports = {
  registerWorker
};
