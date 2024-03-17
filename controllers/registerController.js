const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const {
      username,
      email,

      address,
      phone,
      gender,
      dob,
      qualification,
      stream,
      subject,
    } = req.body;

    const newUser = new User({
      username,
      email,

      address,
      phone,
      gender,
      dob,
      qualification,
      stream,
      subject,
    });

    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(422).json({ message: "Failed to register user", error });
  }
};
