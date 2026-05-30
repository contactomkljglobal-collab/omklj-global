const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* REGISTER USER */
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please fill all fields"
      });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d"
      }
    );

    res.status(201).json({
      success: true,
      _id: user._id,
      name: user.name,
      email: user.email,
      token
    });

  } catch (error) {
    console.error("REGISTER ERROR:", error);

    res.status(500).json({
      success: false,
      error: error.message,
      stack: error.stack
    });
  }
};

/* LOGIN USER */
exports.loginUser = async (req, res) => {
try {
const { email, password } = req.body;

if (!email || !password) {
  return res.status(400).json({
    message: "Please fill all fields"
  });
}

const user = await User.findOne({ email });

if (!user) {
  return res.status(400).json({
    message: "Invalid email or password"
  });
}

const isMatch = await bcrypt.compare(password, user.password);

if (!isMatch) {
  return res.status(400).json({
    message: "Invalid email or password"
  });
}

const token = jwt.sign(
  { id: user._id },
  process.env.JWT_SECRET,
  {
    expiresIn: "30d"
  }
);

res.status(200).json({
  success: true,
  _id: user._id,
  name: user.name,
  email: user.email,
  token
});

} catch (error) {
console.error("LOGIN ERROR:", error);

res.status(500).json({
  success: false,
  error: error.message,
  stack: error.stack
});

}
};
