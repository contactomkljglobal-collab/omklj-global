const Worker = require("../models/Worker");

const registerWorker = async (req, res) => {
    try {

        const existingWorker = await Worker.findOne({
            $or: [
                { phone: req.body.phone },
                { aadhaarNumber: req.body.aadhaarNumber }
            ]
        });

        if (existingWorker) {
            return res.status(400).json({
                success: false,
                message: "Worker already exists"
            });
        }

        const worker = await Worker.create(req.body);

        res.status(201).json({
            success: true,
            message: "Worker Registered Successfully",
            worker
        });

    } catch (error) {

        console.error(error);

        if (error.name === "ValidationError") {

            const firstError =
                Object.values(error.errors)[0].message;

            return res.status(400).json({
                success: false,
                message: firstError
            });
        }

        if (error.code === 11000) {

            return res.status(400).json({
                success: false,
                message: "Duplicate Phone or Aadhaar Number"
            });
        }

        res.status(500).json({
            success: false,
            message: "Worker Registration Failed"
        });
    }
};

module.exports = {
    registerWorker
};
