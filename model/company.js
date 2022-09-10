const mongoose = require("mongoose");

const CompanySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = Company = mongoose.model("Company", CompanySchema);
