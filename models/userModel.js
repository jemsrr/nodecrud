const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "please add the userNmae"],
    },
    email: {
      type: String,
      required: [true, "please add the useremail"],
      unique: [true, "Email address already taken"]
    },
    password: {
      type: String,
      required: [true, "please add the userpassword"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
