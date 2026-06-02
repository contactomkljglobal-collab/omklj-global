const User = require("../models/User");
const PersonalEmployer = require("../models/PersonalEmployer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/*
REGISTER PERSONAL EMPLOYER
POST /api/personal/register
*/

exports.registerPersonal = async (req, res) => {

  try {

    const {
      fullName,
      email,
      phone,
      password,
      address,
      city,
      state,
      pincode
    } = req.body;

    if (
      !fullName ||
      !email ||
      !phone ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields"
      });
    }

    const existingUser =
      await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered"
      });
    }

    const salt =
      await bcrypt.genSalt(10);

    const hashedPassword =
      await bcrypt.hash(password, salt);

    const user =
      await User.create({

        name: fullName,

        email,

        password: hashedPassword,

        role: "personal"

      });

    const personalEmployer =
      await PersonalEmployer.create({

        userId: user._id,

        fullName,

        email,

        phone,

        address,

        city,

        state,

        pincode,

        verificationStatus:
          "pending"

      });

    const token = jwt.sign(
      {
        id: user._id,
        role: "personal"
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d"
      }
    );

    return res.status(201).json({

      success: true,

      message:
        "Personal registration successful",

      token,

      personalEmployer

    });

  } catch (error) {

    console.error(
      "PERSONAL REGISTER ERROR:",
      error
    );

    return res.status(500).json({

      success: false,

      message: error.message

    });

  }

};
