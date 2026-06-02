const User = require("../models/User");
const Worker = require("../models/Worker");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/*
REGISTER WORKER
POST /api/workers/register
*/

exports.registerWorker = async (req, res) => {
  try {

    const {
      fullName,
      email,
      phone,
      password,
      aadhaarNumber,
      state,
      district,
      address,
      workCategory,
      employmentType
    } = req.body;

    if (
      !fullName ||
      !email ||
      !phone ||
      !password ||
      !aadhaarNumber
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields"
      });
    }

    const existingEmail =
      await User.findOne({ email });

    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already registered"
      });
    }

    const existingPhone =
      await Worker.findOne({ phone });

    if (existingPhone) {
      return res.status(400).json({
        success: false,
        message: "Phone already registered"
      });
    }

    const salt =
      await bcrypt.genSalt(10);

    const hashedPassword =
      await bcrypt.hash(password, salt);

    const user = await User.create({
      name: fullName,
      email,
      password: hashedPassword,
      role: "worker"
    });

    const worker =
      await Worker.create({

        userId: user._id,

        fullName,

        phone,

        aadhaarNumber,

        state,

        district,

        address,

        workCategory,

        employmentType,

        trustScore: 0,

        verificationStatus:
          "pending"

      });

    const token = jwt.sign(
      {
        id: user._id,
        role: "worker"
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d"
      }
    );

    return res.status(201).json({
      success: true,
      message:
        "Worker registration successful",

      token,

      worker
    });

  } catch (error) {

    console.error(
      "WORKER REGISTER ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }
};
