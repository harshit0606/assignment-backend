const mongoose = require("mongoose");

const CompanySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    contactNo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = Company = mongoose.model("Company", CompanySchema);
