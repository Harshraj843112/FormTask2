const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
  },
  dob: {
    type: Date,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  qualification: {
    type: String,
    enum: ["12th", "undergraduate"],
  },
  stream: {
    type: String,
    enum: ["arts", "science", "commerce"],
  },
  subject: {
    type: String,
    enum: ["math", "biology"],
    required: function () {
      return this.stream === "science";
    },
  },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
