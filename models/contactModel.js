const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please add the contact nmae"],
    },
    email: {
      type: String,
      required: [true, "please add the contact email"],
    },
    phone: {
      type: String,
      required: [true, "please add the contact phone"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
