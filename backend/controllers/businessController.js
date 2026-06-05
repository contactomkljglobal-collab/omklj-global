const User = require("../models/User");
const Business = require("../models/Business");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/*
REGISTER BUSINESS
POST /api/business/register
*/

exports.registerBusiness = async (req, res) => {

  try {

    const {
    businessName,
    ownerName,
    email,
    phone,
    password,
    gstNumber,
    businessType,
    address,
    city,
    state,
    pincode,
    latitude,
    longitude,
    gpsCity,
    gpsState
} = req.body;

    if (
      !businessName ||
      !ownerName ||
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

    const existingBusiness =
      await Business.findOne({ phone });

    if (existingBusiness) {
      return res.status(400).json({
        success: false,
        message: "Phone already registered"
      });
    }

    const salt =
      await bcrypt.genSalt(10);

    const hashedPassword =
      await bcrypt.hash(password, salt);

    const user =
      await User.create({

        name: ownerName,

        email,

        password: hashedPassword,

        role: "business"

      });

    const business =
      await Business.create({

        userId: user._id,

        businessName,

        ownerName,

        email,

        phone,

        gstNumber,

        businessType,

        address,

        city,

state,

pincode,

latitude,

longitude,

gpsCity,

gpsState,

verificationStatus:
"pending"

      });

    const token = jwt.sign(
      {
        id: user._id,
        role: "business"
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d"
      }
    );

    return res.status(201).json({
      success: true,
      message:
        "Business registration successful",

      token,

      business
    });

  } catch (error) {

    console.error(
      "BUSINESS REGISTER ERROR:",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message
    });

  }

};
