const mongoose = require("mongoose");

const empschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unquie: true,
    },
    code: {
      type: Number,
      required: true,
    },
    joiningDate: {
      type: Date,
      require: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const emp = mongoose.model("emp", empschema);

module.exports = {
  emp,
};
